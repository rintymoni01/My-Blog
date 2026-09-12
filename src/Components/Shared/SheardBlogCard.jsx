import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { RiArrowRightLongLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SheardBlogCard = ({ blog }) => {
return ( <div className="w-72 shadow-md rounded-md overflow-hidden">

  <img
    className="w-72 h-[232px] object-cover rounded-md"
    src={`${import.meta.env.BASE_URL}${blog.image}`}
    alt={blog.title}
  />

  <div className="px-2">

    <h3 className="font-semibold text-gray-500">
      {blog.category}
    </h3>

    <h3 className="font-bold py-2">
      {blog.location}
    </h3>

    <div className="flex items-center justify-between">

      {/* Rating */}
      <div className="text-orange-400 flex">
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
      </div>

      {/* See All */}
      <Link to={`/home/${blog.id}`}>
        <button className="flex gap-1 items-center px-3 rounded-md font-semibold bg-sky-800 text-white">
          <span>See all</span>
          <RiArrowRightLongLine />
        </button>
      </Link>

    </div>

    {/* Views / Likes / Comments */}
    <div className="flex py-1 justify-between gap-2 text-xs pb-2 text-gray-500">

      <p>
        Views: {blog.views}
      </p>

      <div className="flex gap-2">
        <p>
          Like: {blog.likes}
        </p>

        <p>
          Comments: {blog.comments}
        </p>
      </div>

    </div>

  </div>
</div>


);
};

export default SheardBlogCard;
