import React from "react";
import useData from "../../Components/Shared/Hooks/useData";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const AboutComponents = () => {
  const { blogs, categories } = useData();
  return (
    <div>
      <div className="text-center py-5 sm:py-6 lg:py-8 px-3">
  <p className="font-bold text-sm sm:text-base lg:text-base text-gray-700">
    Come, let’s wander somewhere unknown—
  </p>

  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 py-1">
    where there are rivers, endless blue skies,
  </p>

  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-700">
    and beautiful moments that make the heart feel alive.
  </p>
</div>
      <div className="overflow-hidden w-full">
        <div className="flex gap-4 w-max animate-scroll">
          {/* First set */}
          {categories?.map((c) => (
            <div key={c.id} className="shrink-0">
              <img
                className="h-35 w-45 object-cover rounded-md"
                src={c?.image}
              />
            </div>
          ))}

          {/* Duplicate set for infinite loop */}
          {categories?.map((c) => (
            <div key={`duplicate-${c.id}`} className="shrink-0">
              <img
                className="h-35 w-45 object-cover rounded-md"
                src={c?.image}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 container mx-auto">
  <div className="flex flex-col lg:flex-row py-8 lg:py-12 gap-6 lg:gap-8">

    {/* Image */}
    <img
      className="w-full lg:w-150 h-[30vh] sm:h-[35vh] lg:h-[40vh] rounded-2xl object-cover"
      src="/Image/colourfull.jfif"
      alt=""
    />

    {/* Text */}
    <div className="text-center lg:text-left">
      <p className="text-2xl sm:text-3xl lg:text-3xl font-bold pt-2 lg:pt-24">
        Colorful flowers in a peaceful garden.
      </p>

      <p className="py-4 text-sm font-semibold text-gray-500">
        Let life be like nature—colorful, beautiful, and free. where there
        are rivers, endless blue skies, and beautiful moments that make
        the heart feel alive.
      </p>

      <div className="gap-2 flex pb-4 items-center justify-center lg:justify-start">
        <p className="font-bold">Rating:</p>

        <p className="flex text-orange-500 font-bold">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </p>
      </div>

      <Link>
        <div className="bg-blue-900 text-white font-semibold text-center duration-700 rounded-4xl hover:bg-pink-700 py-2 w-34 mx-auto lg:mx-0">
          <p>See Views</p>
        </div>
      </Link>
    </div>

  </div>
</div>



<div className="text-center">
        
        <p className="font-semibold text-gray-500">Explore new destinations, create unforgettable memories, and write your own adventure story.</p>
        <p className="text-xl font-semibold text-gray-700 py-1">Explore new places, make unforgettable memories.</p>
<h1 className="font-bold text-2xl pb-12 ">Discover the Adventure Within</h1>



 <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">

  {/* Main Image */}
  <img
    className="h-80 sm:h-100 lg:h-130 w-full sm:w-100 lg:w-120 rounded-2xl object-cover"
    src="/Image/addd.jpg"
    alt=""
  />

  {/* Two Images */}
  <div className="flex flex-row lg:flex-col gap-4 lg:gap-6 w-full sm:w-auto justify-center">
    <img
      className="h-40 sm:h-50 lg:h-62 w-[45%] sm:w-55 lg:w-80 rounded-2xl object-cover"
      src="/Image/add2.jfif"
      alt=""
    />

    <img
      className="h-40 sm:h-50 lg:h-62 w-[45%] sm:w-55 lg:w-80 rounded-2xl object-cover"
      src="/Image/aadd3.jpg"
      alt=""
    />
  </div>

</div>
</div>
      {/* <div>
        {blogs?.map((c) => (
        <div>

        </div>
         
        ))}
      </div> */}
    </div>
  );
};

export default AboutComponents;
