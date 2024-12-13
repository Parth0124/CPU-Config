import React, { useEffect, useState } from "react";
import axios from "axios";

const GPUInfo = () => {
  const [gpuUsage, setGpuUsage] = useState("Loading...");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/gpu")
      .then((response) => setGpuUsage(response.data.gpu_usage))
      .catch(() => setGpuUsage("Error fetching GPU data"));
  }, []);

  return (
    <div>
      <h2>GPU Info</h2>
      <p>GPU Usage: {gpuUsage}%</p>
    </div>
  );
};

export default GPUInfo;
