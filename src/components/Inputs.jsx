import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div className="search">
      <div className="search__input">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          className="search__input-text"
          placeholder="search of city..."
          onKeyDown={handleKeyPress}
        />
      </div>
      <UilSearch className="icon" onClick={handleSearchClick} />
      <UilLocationPoint className="icon" onClick={handleLocationClick} onTouchStart={handleLocationClick} />
      <div className="search__input-degrees">
        <button
          name="metric"
          className="search__input-deg"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="search__input-symbol">│</p>
        <button
          name="imperial"
          className="search__input-deg"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
