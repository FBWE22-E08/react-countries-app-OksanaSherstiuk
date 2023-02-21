import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CountryCard from "../CountryCard";

export default function AllCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  // fetch all countries on page load (what hook should you use for that?) then save the received array of countries in a local state (call it countries)

  return (
    <div className="cardsContainer">
      {countries.map((country, i) => (
        <CountryCard country={country} key={i} />
      ))}

      {/* show the countries you received from fetch and saved in the local state (use CountryCard component to display each individual one) */}
    </div>
  );
}
