import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Kyiv",
    },
    {
      id: 2,
      title: "Kharkiv",
    },
    {
      id: 3,
      title: "Lviv",
    },
    {
      id: 4,
      title: "Odesa",
    },
    {
      id: 5,
      title: "Dnipro",
    },
  ];

  return (
    <div className="cities">
      {cities.map((city) => (
        <button
          key={city.id}
          className="cities__name"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
