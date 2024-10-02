"use client";

import React from "react";

export default function Banner() {
  const handleOnClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="mb-12 grid lg:mb-24 lg:grid-cols-2">
      <div className="z-20 flex flex-col px-2 md:pt-12">
        <h1 className="pr-2 flex-wrap">
          <span className="text-white pr-2">Coffie</span>
          <span className="text-gray-900">Connoisseur</span>
        </h1>
        <p className="font-sans text-xl font-semibold text-gray-900 md:mt-5 lg:text-2xl">
          Discover your local coffee shops!
        </p>
        <div className="mt-12">
          <button onClick={handleOnClick}>View Stores nearby</button>
        </div>
      </div>
    </div>
  );
}
