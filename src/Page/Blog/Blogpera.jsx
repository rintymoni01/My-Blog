import React from 'react';

const Blogpera = () => {
    return (
<div className="text-center py-6 sm:pt-5 lg:pt-10 px-3 flex flex-col">

  {/* Last → First */}
  <h1 className="order-1 lg:order-3 font-bold text-xl sm:text-2xl lg:text-2xl pb-2 sm:pb-4 lg:pb-12">
    Discover the Adventure Within
  </h1>

  {/* Middle → Middle */}
  <p className="order-2 lg:order-2 text-base sm:text-lg lg:text-xl font-semibold text-gray-700 py-1 sm:py-2">
    Explore new places, make unforgettable memories.
  </p>

  {/* First → Last */}
  <p className="order-3 lg:order-1 font-semibold text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
    Explore new destinations, create unforgettable memories, write your own adventure story.
  </p>

</div>

    );
};

export default Blogpera;