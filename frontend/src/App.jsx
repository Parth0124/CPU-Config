import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashbaord";
import GPUInfo from "./components/GPUInfo";
import CPUInfo from "./components/CPUInfo";
import RAMInfo from "./components/RAMInfo";
import LocationInfo from "./components/LocationInfo";
import SystemInfo from "./components/SystemIfo";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/system" element={<SystemInfo />} />
          <Route path="/gpu" element={<GPUInfo />} />
          <Route path="/cpu" element={<CPUInfo />} />
          <Route path="/ram" element={<RAMInfo />} />
          <Route path="/location" element={<LocationInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
