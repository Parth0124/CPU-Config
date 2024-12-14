import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SystemInfo = () => {
  const [systemInfo, setSystemInfo] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/system")
      .then((response) => {
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
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-800 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-semibold text-gray-700 mb-4 text-center">
          System Info
        </h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Time Block */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-xl font-medium text-gray-700 mb-2">Time</h3>
            <p className="text-lg text-gray-800">
              {systemInfo ? systemInfo.time : "Loading..."}
            </p>
          </div>

          {/* Battery Block */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-xl font-medium text-gray-700 mb-2">Battery</h3>
            <p className="text-lg text-gray-800">
              {systemInfo ? systemInfo.battery : "Loading..."}
            </p>
          </div>

          {/* CPU Temperature Block */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              CPU Temperature
            </h3>
            <p className="text-lg text-gray-800">
              {systemInfo
                ? systemInfo.cpuTemperature !== "N/A"
                  ? `${systemInfo.cpuTemperature}°C`
                  : "N/A"
                : "Loading..."}
            </p>
          </div>

          {/* Python Version Block */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              Python Version
            </h3>
            <p className="text-lg text-gray-800">
              {systemInfo ? systemInfo.pythonVersion : "Loading..."}
            </p>
          </div>
        </div>
        <Link
          to="/"
          className="inline-block bg-cyan-500 text-white py-2 pt-2 mt-10 px-4 rounded-lg shadow hover:bg-cyan-600 focus:outline-none flex justify-center align-middle transition-all ease-out duration-300"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default SystemInfo;
