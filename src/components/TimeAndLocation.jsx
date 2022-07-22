import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="date">
        <p className="date__item">{formatToLocalTime(dt, timezone)}</p>
      </div>
      <div className="location">
        <p className="location__item-bold">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
