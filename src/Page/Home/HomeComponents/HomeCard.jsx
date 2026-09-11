import React from 'react';
import { FaCarSide, FaHouseUser } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { GoStarFill } from 'react-icons/go';

const HomeCard = () => {
    return (
        <div>
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
            
                  <div className="w-70 py-2">
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

export default HomeCard;