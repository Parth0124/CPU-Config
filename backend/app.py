from fastapi import FastAPI
import psutil
import platform
import requests
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://cpu-config.netlify.app"],  # Replace with your frontend's URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# System Info Endpoint
@app.get("/system")
def get_system_info():
    battery = psutil.sensors_battery()
    return {
        "time": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "python_version": platform.python_version(),
        "cpu_usage": psutil.cpu_percent(interval=1),
        "ram_usage": psutil.virtual_memory().percent,
        "battery": f"{battery.percent}%" if battery else "N/A",
    }

# GPU Info Endpoint
@app.get("/gpu")
def get_gpu_info():
    try:
        import pynvml
        pynvml.nvmlInit()
        handle = pynvml.nvmlDeviceGetHandleByIndex(0)
        memory = pynvml.nvmlDeviceGetMemoryInfo(handle)
        gpu_usage = (memory.used / memory.total) * 100
        pynvml.nvmlShutdown()
        return {"gpu_usage": gpu_usage}
    except:
        return {"gpu_usage": "N/A"}

# Location Info Endpoint
@app.get("/location")
def get_location():
    try:
        response = requests.get("https://ipinfo.io", timeout=5)
        return response.json()
    except:
        return {"location": "Unable to fetch location data"}

@app.get("/system")
def get_system_info():
    # Get battery status
    battery = psutil.sensors_battery()
    battery_percent = f"{battery.percent}%" if battery else "N/A"

    # Get CPU temperature (if available)
    try:
        temp_sensors = psutil.sensors_temperatures()
        cpu_temp = temp_sensors['coretemp'][0].current if 'coretemp' in temp_sensors else "N/A"
    except AttributeError:
        cpu_temp = "N/A"

    # Return data
    return {
        "time": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "battery": battery_percent,
        "cpu_temperature": cpu_temp,
        "python_version": platform.python_version(),
    }
