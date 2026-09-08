import React from "react";
import dicplay from "../../../assets/dicplay.jfif";

const Dicplay = () => {
  return (
    <div
      className="h-[70vh] w-360  bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${dicplay})` }}
    >
      <div className="   py-45">
        <p className="text-2xl pl-26 text-white font-bold ">Pause Life. Find Yourself.</p>
      <p className="text-4xl pl-26 font-bold  text-black py-4 ">
        Sometimes, all you need is a little time <br /> away from the rush of life.
      </p>
      <p className="text-xl font-semibold pl-26 text-gray-200">Explore Your Journey →</p>
      </div>
    </div>
  );
};

export default Dicplay;
