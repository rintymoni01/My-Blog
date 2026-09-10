import React from 'react';
import useData from '../../Components/Shared/Hooks/useData';
import { Link } from 'react-router';

import { FaCarSide, FaHouseUser } from 'react-icons/fa';

import { FaCartShopping } from 'react-icons/fa6';
import { GoStarFill } from 'react-icons/go';


const BlogComponents = () => {
    const {categories} = useData()
    return (
        
       <div>
         <div className='flex gap-8 pt-12 justify-center'>
            {categories?.slice(0,3).map(c=>(
<div className="card bg-base-100 w-90 shadow-sm">
  <figure>
    <img
      src={c?.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{c?.name}</h2>
    <p>{c?.description}</p>
    <div className="card-actions items-center  "> 
        <p className=' font-bold'>{c?.place}</p>

      <Link>
      <button className="btn btn-primary">View Now</button>
      </Link>
    </div>
  </div>

</div>
            ))}
        </div>
       
         <div className='flex justify-center container gap-4 mx-auto px-4  items-center'>
          <div className='flex border border-gray-500 px-4 rounded-md gap-2 items-center'>
            <FaCarSide className='text-7xl text-gray-700'/>
           <div  className='w-70 h-25 '>
             <p className='text-sm  font-bold'>Road Trip</p>
              <p className='text-sm  py-1 text-gray-500'>Enjoy the journey, discover new places.</p>
            <div className='flex text-xs text-orange-400 '>
              <p><GoStarFill /></p>
               <p><GoStarFill /></p>
                <p><GoStarFill /></p>
                 <p><GoStarFill /></p>
            </div>
           </div>
          </div>
          <div className='flex border border-gray-500 pl-2  gap-2 items-center'>
            <FaCartShopping className='text-6xl text-gray-700'/>
            
            <div className='w-70  h-25'>
             <p className='text-sm pb-1  font-bold'>Shopping</p>
               <p className='text-sm  pb-1 text-gray-500'>Shop for everything you need on your trip.</p>
            
            <div className='flex text-xs text-orange-400 '>
              <p><GoStarFill /></p>
               <p><GoStarFill /></p>
                <p><GoStarFill /></p>
                 <p><GoStarFill /></p>
            </div>
           </div>
          </div>
          <div className='flex border border-gray-500 pl-2  gap-2 items-center'>
            <FaHouseUser className='text-6xl text-gray-700'/>
            
             <div  className='w-70'>
             <p className='text-sm py-1  font-bold'>Where to Stay</p>
           
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
       </div>
     
    );
};

export default BlogComponents;