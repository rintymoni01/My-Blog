import React from 'react';
import { FaCarSide, FaHouseUser } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { GoStarFill } from 'react-icons/go';
import { Link } from 'react-router';
import HomeCard from '../Home/HomeComponents/HomeCard';

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
   <HomeCard></HomeCard>
       </div>
    );
};

export default BlogCard;