import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-800 p-6">
      <div className="space-y-6 bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-700 text-center mb-6">
          System Resource Dashboard
        </h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/system"
                className="block text-center bg-gray-500 text-white py-2 px-4 rounded-md shadow hover:bg-gray-600 transition"
              >
                System Information
              </Link>
            </li>
            <li>
              <Link
                to="/gpu"
                className="block text-center bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 transition"
              >
                GPU Info
              </Link>
            </li>
            <li>
              <Link
                to="/cpu"
                className="block text-center bg-green-500 text-white py-2 px-4 rounded-md shadow hover:bg-green-600 transition"
              >
                CPU Info
              </Link>
            </li>
            <li>
              <Link
                to="/ram"
                className="block text-center bg-yellow-500 text-white py-2 px-4 rounded-md shadow hover:bg-yellow-600 transition"
              >
                RAM Info
              </Link>
            </li>
            <li>
              <Link
                to="/location"
                className="block text-center bg-red-500 text-white py-2 px-4 rounded-md shadow hover:bg-red-600 transition"
              >
                Location Info
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Dashboard;
