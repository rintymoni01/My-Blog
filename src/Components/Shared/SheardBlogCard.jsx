import React from 'react';

const SheardBlogCard = ({blog}) => {
    return (
        <div className='border w-52 border-gray-200 rounded-md'>
            <div className='' >
                <img className='w-52 rounded-md h-42' src={blog.image} alt="" />
               <div className='px-2'>
                 <h3 className='font-semibold text-gray-500'>{blog.category}</h3>
                <h3 className=' font-semibold '>{blog.location}</h3>
                
                   <div className='flex py-1 gap-2 text-xs text-gray-400'>
                    <h3>Like:{blog.likes}</h3>
                   <p> Views:{blog.views}</p>
                   <p>Comments:{blog.comments}</p>
                   </div>
               </div>
            </div>
        </div>
    );
};

export default SheardBlogCard;