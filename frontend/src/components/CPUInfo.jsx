import React, { useEffect, useState } from "react";
import axios from "axios";

const CPUInfo = () => {
  const [cpuUsage, setCpuUsage] = useState("Loading...");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/system")
      .then((response) => setCpuUsage(response.data.cpu_usage))
      .catch(() => setCpuUsage("Error fetching CPU data"));
  }, []);

  return (
    <div>
      <h2>CPU Info</h2>
      <p>CPU Usage: {cpuUsage}%</p>
    </div>
  );
};

export default CPUInfo;
