import React from "react";
import HomeComponents from "./HomeComponents";
import Dicplay from "./Dicplay";



const Destinations = () => {
  return (
    <div>
      <div className="bg-gray-50 py-7 sm:py-8 lg:py-10">
  <div className="text-center flex flex-col px-4">

    <div>
      <p className="text-lg sm:text-xl lg:text-xl text-gray-500 font-bold pb-3 sm:pb-4 lg:pb-5">
        Your Destination, Your Story
      </p>

      <p className="text-sm sm:text-base lg:text-xl text-gray-500 font-semibold pb-5 sm:pb-6 lg:pb-7 leading-relaxed">
        Whether it’s mountains, beaches, or lush green landscapes—every
        <br className="hidden lg:block" />
        destination has a new story waiting to be discovered.
      </p>

      <p className="text-2xl sm:text-2xl lg:text-3xl text-gray-700 font-bold">
        Where will your story begin?
      </p>
    </div>

  </div>
</div>
      <div>
        <div>
          <Dicplay></Dicplay>
         
          <HomeComponents></HomeComponents>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
