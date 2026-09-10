import React from 'react';
import { FaCarSide, FaHouseUser } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { GoStarFill } from 'react-icons/go';
import { Link } from 'react-router';

const BlogCard = () => {
    return (
       <div className='py-8 bg-gray-200'>
     
       <div
  className="h-[45vh] sm:h-[50vh] lg:h-[70vh] w-full lg:w-360 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url("/Image/dicplay.jfif")` }}
>
  <div className="h-full flex flex-col justify-center items-center lg:items-start py-10 lg:py-0">
    
    <p className="text-lg sm:text-xl lg:text-2xl text-white font-bold text-center lg:text-left lg:pl-26">
      Pause Life. Find Yourself.
    </p>

    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200 py-3 lg:py-4 text-center lg:text-left lg:pl-26">
      Sometimes, all you need is a little time <br className="hidden lg:block" />
      away from the rush of life.
    </p>

    <div className="lg:pl-26">
      <Link to="/about">
        <button className="px-5 sm:px-6 py-2 flex gap-1 items-center text-white bg-pink-100 rounded-4xl">
          <p className="text-base sm:text-lg lg:text-xl font-semibold text-black">
            Explore Your Journey →
          </p>
        </button>
      </Link>
    </div>

  </div>
</div>
    <div className="container mx-auto px-4 py-16">
  <div className="flex flex-col lg:flex-row justify-center items-center gap-4">

    {/* Road Trip */}
    <div className="flex w-full lg:w-auto shadow-md justify-center px-4 rounded-md gap-2 items-center">
      <FaCarSide className="text-7xl text-gray-700" />

      <div className="w-70 h-25">
        <p className="text-sm pt-4 font-bold">Road Trip</p>
        <p className="text-sm py-1 text-gray-500">
          Enjoy the journey, discover new places.
        </p>

        <div className="flex text-xs text-orange-400">
          <p><GoStarFill /></p>
          <p><GoStarFill /></p>
          <p><GoStarFill /></p>
          <p><GoStarFill /></p>
        </div>
      </div>
    </div>

    {/* Shopping */}
    <div className="flex w-full lg:w-auto shadow-md rounded-md pl-2 gap-2 items-center">
      <FaCartShopping className="text-6xl text-gray-700" />

      <div className="w-70 py-4">
        <p className="text-sm pb-1 font-bold">Shopping</p>
        <p className="text-sm pb-1 text-gray-500">
          Shop for everything you need on your trip.
        </p>

        <div className="flex text-xs pb-2 text-orange-400">
          <p><GoStarFill /></p>
          <p><GoStarFill /></p>
          <p><GoStarFill /></p>
          <p><GoStarFill /></p>
        </div>
      </div>
    </div>

    {/* Where to Stay */}
    <div className="flex w-full lg:w-auto shadow-md pl-2 rounded-md gap-2 items-center">
      <FaHouseUser className="text-6xl text-gray-700" />

      <div className="w-70 h-25">
        <p className="text-sm py-1 pt-4 font-bold">Where to Stay</p>

        <p className="text-sm py-1 text-gray-500">
          Find cozy places to stay and relax.
        </p>

        <div className="flex text-xs text-orange-400">
          <p><GoStarFill /></p>
          <p><GoStarFill /></p>
          <p><GoStarFill /></p>
          <p><GoStarFill /></p>
        </div>
      </div>
    </div>

  </div>
</div>
       </div>
    );
};

export default BlogCard;