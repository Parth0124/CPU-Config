import React, { useState, useEffect } from "react";
import axios from "axios";

const SystemInfo = () => {
  const [systemInfo, setSystemInfo] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/system")
      .then((response) => {
        // Set the state with the response data
        setSystemInfo({
          time: response.data.time,
          battery: response.data.battery,
          cpuTemperature: response.data.cpu_temperature,
          pythonVersion: response.data.python_version,
        });
      })
      .catch((error) => {
        console.error("Error fetching system data:", error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 animate__animated animate__fadeIn">
      {systemInfo ? (
        <div className="space-y-6 bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-3xl font-semibold text-gray-700 mb-4">
            System Info
          </h1>
          <p className="text-xl text-gray-800">
            <strong>Time:</strong> {systemInfo.time}
          </p>
          <p className="text-xl text-gray-800">
            <strong>Python Version:</strong> {systemInfo.pythonVersion}
          </p>
          <p className="text-xl text-gray-800">
            <strong>Battery:</strong> {systemInfo.battery}
          </p>
          <p className="text-xl text-gray-800">
            <strong>CPU Temperature:</strong> {systemInfo.cpuTemperature}°C
          </p>
        </div>
      ) : (
        <p className="text-xl text-gray-700">Loading...</p>
      )}
    </div>
  );
};

export default SystemInfo;
