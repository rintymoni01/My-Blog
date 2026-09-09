import React from 'react';
import useData from './Hooks/useData';
import { useParams } from 'react-router';

const SingleBlogs = () => {
    const { id } = useParams();
    const { blogs } = useData();

    const findBlogs = blogs.find(b => b.id == Number(id));

    return (
        <div className='items-center container mx-auto px-4 py-8'>
          <div className='flex gap-12'>
              <div>
                <img  className='w-70 h-70 rounded-t-md '
                    src={findBlogs?.image} 
                    alt={""} 
                />
            </div>

          <div className='w-145'>
               
            <p className='text-gray-800 font-semibold text-2xl'>{findBlogs?.location}</p>
            <p className='text-sm font-bold text-gray-500 pt-4 pb-1'>{findBlogs.longDescription}</p>
            <div className='flex gap-4  items-center py-1'>
              <p className='text-[#007d8e] font-bold '>duration: <span className='text-gray-600 font-semibold '>{findBlogs?.duration}</span></p>
            <p className='text-[#007d8e] font-bold '>difficulty: <span className='text-gray-600 font-semibold '>{findBlogs?.difficulty}</span></p>
            </div>
            <p className='text-[#007d8e] font-bold'>bestTime: <span className='text-gray-600 font-semibold '> {findBlogs?.bestTime}</span></p>
            <p className='py-1'>{findBlogs?.tags}</p>
           <div className='flex gap-4'>
             <p className='text-[#007d8e] font-bold'>{findBlogs?.transport}</p>
            <p className='text-gray-600 font-semibold  '> <u>{findBlogs?.budget}</u></p>
           </div>
          </div>
          </div>

        </div>
    );
};

export default SingleBlogs;