import React from "react";
import {
  UilTemperatureHalf,
  UilRaindropsAlt,
  UilWind,
  UilSunset,
  UilSun,
  UilTemperature,
  UilTemperatureQuarter,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function TempDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div className="wrapper-center">
      <div className="clouds">
        <p className="clouds__name">{details}</p>
      </div>
      <div className="temp-details">
        <img src={iconUrlFromCode(icon)} alt="" className="temp-details__img" />
        <p className="temp-details__temp">{`${temp.toFixed()}°`}</p>
        <div className="inner-wrapper">
          <div className="weather">
            <UilTemperatureHalf />
            <p className="weather__name">Feels like :</p>
            <span className="weather__value">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="weather">
            <UilRaindropsAlt />
            <p className="weather__name">Humidity :</p>
            <span className="weather__value">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="weather">
            <UilWind />
            <p className="weather__name">Wind speed :</p>
            <span className="weather__value">{`${speed.toFixed()}km/h`}</span>
          </div>
        </div>
      </div>
      <div className="sun">
        <UilSun />
        <p className="sun__rise">
          Sunrise:{" "}
          <span>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </p>
        <p>│</p>
        <UilSunset />
        <p className="sun__rise">
          Sunset: <span>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
        </p>
        <p>│</p>
        <UilTemperature />
        <p className="sun__rise">
          High: <span>{`${temp_max.toFixed()}°`}</span>
        </p>
        <p>│</p>
        <UilTemperatureQuarter />
        <p className="sun__rise">
          Low: <span>{`${temp_min.toFixed()}°`}</span>
        </p>
        <p>│</p>
      </div>
    </div>
  );
}

export default TempDetails;
