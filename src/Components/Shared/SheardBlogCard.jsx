import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { Link } from "react-router";
import { RiArrowRightLongLine } from "react-icons/ri";
const SheardBlogCard = ({ blog }) => {
  return (
    <div className=" w-72 shadow-md rounded-md">
      <div className="">
        <img className="w-72 rounded-md h-58" src={blog.image} alt="" />
        <div className="px-2">
          <h3 className="font-semibold text-gray-500">{blog.category}</h3>
          <h3 className=" font-bold  py-2 ">{blog.location}</h3>
          <div className="flex items-center gap-20">
            <div className="text-orange-400 flex ">
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
            </div>
            <div className="">
              <Link>
                <button className="flex gap-1 items-center px-3 rounded-md font-semibold bg-sky-800 text-white">
                  <p>See all</p>
                  <RiArrowRightLongLine />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex py-1 justify-between gap-2 text-xs pb-2 text-gray-500">
            <p> Views:{blog.views}</p>
            <div className="flex gap-2">
              <p>Like:{blog.likes}</p>

              <p>Comments:{blog.comments}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SheardBlogCard;
