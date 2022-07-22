import React from "react";
import { iconUrlFromCode } from "../services/weatherService";
import { UilAngleLeftB, UilAngleRightB } from "@iconscout/react-unicons";
import Carousel from "nuka-carousel";

function Forecast({ title, items }) {
  return (
    <div className="forecast">
      <div className="forecast__hour">
        <p className="forecast__hour-item">{title}</p>
      </div>
      <hr className="line" />
      <div className="forecast__items">
        <Carousel
          wrapAround={false}
          slidesToShow={5}
          slidesToScroll={3}
          enableKeyboardControls={false}
          defaultControlsConfig={{
            pagingDotsStyle: {
              display: "none",
            },
          }}
          renderCenterLeftControls={({ previousSlide }) => (
            <button className="slider-left" onClick={previousSlide}>
              <UilAngleLeftB className="slider-icon" />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button className="slider-right" onClick={nextSlide}>
              <UilAngleRightB className="slider-icon" />
            </button>
          )}
        >
          {items.map((item) => (
            <div className="forecast__item" key={item.title}>
              <p className="forecast__item-time">{item.title}</p>
              <img className="icon" src={iconUrlFromCode(item.icon)} />
              <p className="forecast__item-deg">{`${item.temp.toFixed()}°`}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Forecast;
