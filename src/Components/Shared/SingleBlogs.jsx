import React from "react";
import useData from "./Hooks/useData";
import { useParams } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";

const SingleBlogs = () => {
  const { id } = useParams();
  const { blogs = [], categories = [] } = useData();

  // Find selected blog
  const findBlogs = blogs?.find((b) => b.id == Number(id));

  return (
    <div className="items-center container mx-auto px-4 py-8">

      {/* ================= Main Section ================= */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center px-4">

        {/* ================= Images ================= */}
        <div className="w-full lg:w-auto">

          {/* Main Blog Image */}
          <img
            className="w-full sm:w-150 lg:w-111 h-70 rounded-md object-cover mx-auto"
            src={
              findBlogs?.image
                ? `${import.meta.env.BASE_URL}${findBlogs.image}`
                : ""
            }
            alt={findBlogs?.title || "Blog image"}
          />

          {/* Category Images */}
          <div className="flex gap-3 pt-5 lg:pt-8 items-center justify-center">

            {categories?.slice(0, 3).map((c) => (
              <div key={c.id}>
                <img
                  className="h-16 sm:h-18 w-24 sm:w-30 lg:w-35 object-cover rounded-md"
                  src={`${import.meta.env.BASE_URL}${c.image}`}
                  alt={c?.name || "Category"}
                />
              </div>
            ))}

          </div>
        </div>

        {/* ================= Text + Details ================= */}
        <div className="w-full lg:w-145">

          {/* Category */}
          <p className="text-gray-400 font-semibold">
            {findBlogs?.category}
          </p>

          {/* Location */}
          <p className="text-gray-800 font-semibold py-4 text-2xl">
            {findBlogs?.location}
          </p>

          {/* Description */}
          <p className="text-sm font-semibold text-gray-400 pb-2">
            {findBlogs?.longDescription}
          </p>

          {/* Duration + Difficulty */}
          <div className="flex gap-4 items-center py-1 flex-wrap">

            <p className="text-[#007d8e] font-bold">
              Duration:
              <span className="text-gray-600 font-semibold ml-1">
                {findBlogs?.duration}
              </span>
            </p>

            <p className="text-[#007d8e] font-bold">
              Difficulty:
              <span className="text-gray-600 font-semibold ml-1">
                {findBlogs?.difficulty}
              </span>
            </p>

          </div>

          {/* Best Time */}
          <p className="text-[#007d8e] font-bold">
            Best Time:
            <span className="text-gray-600 font-semibold ml-1">
              {findBlogs?.bestTime}
            </span>
          </p>

          {/* Transport + Budget */}
          <div className="flex py-1 gap-4">

            <p className="text-[#007d8e] font-bold">
              {findBlogs?.transport}:
            </p>

            <p className="text-gray-600 font-semibold">
              <u>{findBlogs?.budget}</u>
            </p>

          </div>

          {/* ================= Rating ================= */}
          <div className="flex pb-1 items-center">

            <p className="text-[#007d8e] font-bold mr-1">
              Rating:
            </p>

            <TiStarFullOutline className="text-orange-500 text-xl" />
            <TiStarFullOutline className="text-orange-500 text-xl" />
            <TiStarFullOutline className="text-orange-500 text-xl" />
            <TiStarFullOutline className="text-orange-500 text-xl" />

          </div>

          {/* ================= Stats ================= */}
          <div className="flex gap-4 pb-1 flex-wrap">

            <p className="text-[#007d8e] font-bold">
              Likes:
              <span className="text-gray-400 font-semibold ml-1">
                {findBlogs?.likes}
              </span>
            </p>

            <p className="text-[#007d8e] font-bold">
              Comments:
              <span className="text-gray-400 font-semibold ml-1">
                {findBlogs?.comments}
              </span>
            </p>

            <p className="text-[#007d8e] font-bold">
              Views:
              <span className="text-gray-400 font-semibold ml-1">
                {findBlogs?.views}
              </span>
            </p>

          </div>

          {/* ================= Tags ================= */}
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

          {/* ================= Cart + Icons ================= */}
          <div className="pt-2 gap-4 flex items-center flex-wrap">

            {/* Quantity */}
            <div className="flex gap-2 items-center">

              <button className="w-6 h-6 rounded-full text-xl font-bold bg-gray-200 flex items-center justify-center">
                +
              </button>

              <p>1</p>

              <button className="w-6 h-6 rounded-full text-xl font-bold bg-gray-200 flex items-center justify-center">
                -
              </button>

            </div>

            {/* Add To Cart */}
            <button className="py-2 rounded-md hover:bg-gray-400 px-4 duration-700 bg-[#007d8e]">
              <span className="text-xs font-semibold text-white hover:text-black">
                Add To Cart
              </span>
            </button>

            {/* Heart */}
            <button className="text-2xl text-gray-700">
              <FiHeart />
            </button>

            {/* Eye */}
            <button className="text-2xl text-gray-700">
              <FaRegEyeSlash />
            </button>

          </div>

        </div>
      </div>

      {/* ================= Bottom Category Cards ================= */}
      <div className="flex flex-col lg:flex-row gap-4 justify-center py-8">

        {categories?.slice(7, 10).map((c) => (
          <div
            key={c.id}
            className="flex gap-4 rounded-md shadow-2xl w-full sm:w-100 lg:w-auto mx-auto"
          >

            {/* Category Image */}
            <img
              className="h-18 rounded-l-md w-28 object-cover"
              src={`${import.meta.env.BASE_URL}${c.image}`}
              alt={c?.name || "Category"}
            />

            {/* Category Details */}
            <div className="w-55 py-1">

              <p className="text-sm font-bold">
                {c?.name}
              </p>

              <p className="text-xs text-gray-400">
                {c?.description}
              </p>

              {/* Rating */}
              <div className="flex pb-1 items-center">

                <p className="text-xs font-semibold text-gray-700">
                  Rating:
                </p>

                <TiStarFullOutline className="text-xs text-orange-500" />
                <TiStarFullOutline className="text-xs text-orange-500" />
                <TiStarFullOutline className="text-xs text-orange-500" />
                <TiStarFullOutline className="text-xs text-orange-500" />

              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default SingleBlogs;