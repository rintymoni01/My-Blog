import React from "react";
import dicplay from "../../../assets/dicplay.jfif";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";

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
      <Link to="/about">
      <button className="px-2 py-1 flex gap-1 items-center text-white bg-pink-400 rounded-md">
        <p className="font-semibold ">Explore Now</p>
        <FaArrowRightLong/>
      </button>
      </Link>
      </div>
    </div>
  );
};

export default Dicplay;
