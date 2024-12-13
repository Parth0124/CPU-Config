import React, { useEffect, useState } from "react";
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
    <div>
      <h2>Location Info</h2>
      <p>Location: {location}</p>
    </div>
  );
};

export default LocationInfo;
