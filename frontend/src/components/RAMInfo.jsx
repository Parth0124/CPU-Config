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
    <div>
      <h2>RAM Info</h2>
      <p>RAM Usage: {ramUsage}%</p>
    </div>
  );
};

export default RAMInfo;
