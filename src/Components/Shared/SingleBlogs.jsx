import React from "react";
import useData from "./Hooks/useData";
import { useParams } from "react-router";
import { FiHeart } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";

const SingleBlogs = () => {
  const { id } = useParams();
  const { blogs, categories } = useData();

  const findBlogs = blogs.find((b) => b.id == Number(id));

  return (
    <div className="items-center container mx-auto px-4 py-8 ">
      <div className="flex gap-12 justify-center">
        <div>
          <img
            className="w-111 h-70 rounded-t-md "
            src={findBlogs?.image}
            alt={""}
          />
       <div className="flex gap-3 pt-3 items-center justify-center ">
           {categories?.slice(0,3) .map((c) => (
        <div key={c.id}>
         <img className="h-28 w-35" src={c?.image} alt="" />
        </div>
      ))}
       </div>
        </div>

        <div className="w-145">
          <p className="text-gray-400 font-semibold">{findBlogs?.category}</p>
          <p className="text-gray-800 font-semibold py-4 text-2xl">
            {findBlogs?.location}
          </p>
          <p className="text-sm font-semibold text-gray-400  pb-2">
            {findBlogs?.longDescription}
          </p>
          

          <div className="flex gap-4  items-center py-1">
            <p className="text-[#007d8e] font-bold ">
              Duration:{" "}
              <span className="text-gray-600 font-semibold ">
                {findBlogs?.duration}
              </span>
            </p>
            <p className="text-[#007d8e] font-bold ">
              Difficulty:{" "}
              <span className="text-gray-600 font-semibold ">
                {findBlogs?.difficulty}
              </span>
            </p>
          </div>
          <p className="text-[#007d8e] font-bold">
            BestTime:{" "}
            <span className="text-gray-600 font-semibold ">
              {" "}
              {findBlogs?.bestTime}
            </span>
          </p>
          <div className="flex py-1 gap-4">
            <p className="text-[#007d8e] font-bold">{findBlogs?.transport}:</p>
            <p className="text-gray-600 font-semibold  ">
              {" "}
              <u>{findBlogs?.budget}</u>
            </p>
            
          </div>
          <div className="flex gap-1 pb-1 items-center">
            <p className="text-[#007d8e] font-bold">Reating:</p>
            <TiStarFullOutline className="text-orange-500" />
            <TiStarFullOutline className="text-orange-500" />
            <TiStarFullOutline className="text-orange-500" />
            <TiStarFullOutline className="text-orange-500" />
          </div>
          <div className="py-2 flex gap-2 flex-wrap">
            {findBlogs?.tags?.map((t, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="pt-2 gap-4 flex items-center">
            <div className="flex gap-2">
              <p className="w-6 h-6 rounded-full text-xl font-bold bg-gray-200 flex pb-1 items-center justify-center">
                +
              </p>
              <p>1</p>
              <p className="w-6 h-6 rounded-full text-xl font-bold bg-gray-200 flex pb-1 items-center justify-center">
                -
              </p>
            </div>
            <button className="py-2 rounded-md hover  hover:bg-gray-400 px-4 duration-700 bg-[#007d8e]">
              <p className="text-xs font-semibold text-white hover:text-black  ">
                Add To Cart
              </p>
            </button>

            <p className="text-2xl text-gray-700">
              <FiHeart />
            </p>
            <p className="text-2xl text-gray-700">
              <FaRegEyeSlash />
            </p>
          </div>
        </div>
      </div>
      <div>
        <p>jdfkydfdsf</p>
      </div>
      
    </div>
  );
};

export default SingleBlogs;
