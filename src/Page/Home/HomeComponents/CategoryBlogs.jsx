import React from 'react';

const CategoryBlogs = ({blogs}) => {
    return (
        <div className='p-3'>
        {
            blogs.map(blog=>(
                <div>
<div>
    <img src={blog.image} alt={blog.title} />
</div>
               
               <div>
                 <p className=' test-black font-bold'> {blog.title}</p>
                {/* <p className='text-xs test-gray-200 font-semibold'>{blog.description}</p> */}
               </div>
                </div>
            ))
        }
        </div>
    );
};

export default CategoryBlogs;