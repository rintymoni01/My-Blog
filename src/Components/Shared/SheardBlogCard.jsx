import React from 'react';
import { TiStarFullOutline } from "react-icons/ti";

const SheardBlogCard = ({blog}) => {
    return (
        <div className='border w-72 border-gray-200 rounded-md'>
            <div className='' >
                <img className='w-72 rounded-md h-58' src={blog.image} alt="" />
               <div className='px-2'>
                 <h3 className='font-semibold text-gray-500'>{blog.category}</h3>
                <h3 className=' font-semibold '>{blog.location}</h3>
                 <div>
                     <div className='text-orange-400 flex '>
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline /> 
                    </div>
                    <div>
                       
                    
                  </div>
                 </div>
                   <div className='flex py-1 justify-between gap-2 text-xs text-gray-500'>
                      <p> Views:{blog.views}</p>
                  <div className='flex gap-2'> 
                    <p>Like:{blog.likes}</p>
                  
                   <p>Comments:{blog.comments}</p>
                  </div>
                  
                   </div>
               </div>
            </div>
        </div>
    );
};

export default SheardBlogCard;