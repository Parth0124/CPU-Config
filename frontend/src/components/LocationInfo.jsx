import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";

const LocationInfo = () => {
  const [location, setLocation] = useState("Loading...");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/location")
      .then((response) => setLocation(response.data.city))
      .catch(() => setLocation("Error fetching location data"));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cyan-800 p-6 animate__animated animate__fadeIn">
      <div className="space-y-4 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Location Information
        </h2>
        <p className="text-xl text-gray-800">
          <strong>Location:</strong> {location}
        </p>
        <Link
          to="/"
          className="inline-block bg-cyan-500 text-white py-2 px-4 rounded-lg shadow hover:bg-cyan-600 focus:outline-none flex justify-center align-middle transition-all ease-out duration-300"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default LocationInfo;
