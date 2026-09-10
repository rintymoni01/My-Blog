import React from 'react';
import { FaCarSide, FaHouseUser } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { GoStarFill } from 'react-icons/go';

const BlogCard = () => {
    return (
        <div className='flex justify-center py-16 container gap-4 mx-auto px-4  items-center'>
          <div className='flex shadow-md justify-center px-4 rounded-md gap-2 items-center'>
            <FaCarSide className='text-7xl text-gray-700'/>
           <div  className='w-70 h-25  '>
             <p className='text-sm pt-4  font-bold'>Road Trip</p>
              <p className='text-sm  py-1 text-gray-500'>Enjoy the journey, discover new places.</p>
            <div className='flex text-xs text-orange-400 '>
              <p><GoStarFill /></p>
               <p><GoStarFill /></p>
                <p><GoStarFill /></p>
                 <p><GoStarFill /></p>
            </div>
           </div>
          </div>
          <div className='flex shadow-md rounded-md pl-2  gap-2 items-center'>
            <FaCartShopping className='text-6xl text-gray-700'/>
            
            <div className='w-70  py-4'>
             <p className='text-sm pb-1  font-bold'>Shopping</p>
               <p className='text-sm  pb-1 text-gray-500'>Shop for everything you need on your trip.</p>
            
            <div className='flex text-xs pb-2 text-orange-400 '>
              <p><GoStarFill /></p>
               <p><GoStarFill /></p>
                <p><GoStarFill /></p>
                 <p><GoStarFill /></p>
            </div>
           </div>
          </div>
          <div className='flex shadow-md pl-2 rounded-md  gap-2 items-center'>
            <FaHouseUser className='text-6xl text-gray-700'/>
            
             <div  className='w-70  h-25'>
             <p className='text-sm py-1 pt-4 font-bold'>Where to Stay</p>
           
             <p className='text-sm  py-1 text-gray-500'>Find cozy places to stay and relax.</p>
            <div className='flex text-xs text-orange-400 '>
              <p><GoStarFill /></p>
               <p><GoStarFill /></p>
                <p><GoStarFill /></p>
                 <p><GoStarFill /></p>
            </div>
           </div>
          </div>
        </div>
    );
};

export default BlogCard;