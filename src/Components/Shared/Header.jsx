import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import TopHeader from "../TopHeader";

const Header = () => {
  return (
    <div className="bg-black/25">
      <div className="flex justify-between container mx-auto px-4">
        <img className="h-12 w-30" src="src/assets/rrrrrr.png" alt="" />
        <div className="text-white flex gap-4">
          <p className=" text-xl ">Home</p>
          <p className="text-xl ">About </p>
          <p className="text-xl ">Blog</p>
          <p className="text-xl ">Success Story</p>
          <p className="text-xl "> Contact</p>
          


        </div>
      </div>
    </div>
  );
};

export default Header;
