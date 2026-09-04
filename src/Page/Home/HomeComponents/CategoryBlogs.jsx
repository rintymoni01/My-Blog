import React from 'react';

const CategoryBlogs = ({blogs}) => {
    return (
        <div className='p-3'>
        {
            blogs.map(blog=>(
                <div className='items-centercontainer  mx-auto gap-4 py-1  '>
<div className='border  flex justify-between items-center border-gray-200 rounded-md gap-2 py-2 px-1'>
    <div>
    <img className='h-16 w-24 rounded-md' src={blog.image} alt={blog.title} />
</div>
               
               <div>
                 <p className=' test-black font-bold'> {blog.title}</p>
                <p className='text-xs test-gray-200 font-semibold'>{blog.description}</p>
               </div>
</div>
                </div>
            ))
        }
        </div>
    );
};

export default CategoryBlogs;