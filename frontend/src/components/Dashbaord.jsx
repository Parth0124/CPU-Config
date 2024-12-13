import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>System Resource Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/gpu">GPU Info</Link>
          </li>
          <li>
            <Link to="/cpu">CPU Info</Link>
          </li>
          <li>
            <Link to="/ram">RAM Info</Link>
          </li>
          <li>
            <Link to="/location">Location Info</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
