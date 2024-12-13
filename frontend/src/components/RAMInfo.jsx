import React, { useEffect, useState } from "react";
import axios from "axios";

const RAMInfo = () => {
  const [ramUsage, setRamUsage] = useState("Loading...");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/system")
      .then((response) => setRamUsage(response.data.ram_usage))
      .catch(() => setRamUsage("Error fetching RAM data"));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 animate__animated animate__fadeIn">
      <div className="space-y-4 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          RAM Information
        </h2>
        <p className="text-xl text-gray-800">
          <strong>RAM Usage:</strong> {ramUsage}%
        </p>
      </div>
    </div>
  );
};

export default RAMInfo;
