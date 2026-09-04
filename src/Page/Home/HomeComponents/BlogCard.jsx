import React from 'react';

const BlogCard = ({blog}) => {
    return (
        <div className=' py-2 rounded-md'>
            <div className="card card-side bg-base-100 shadow-sm">
  
    <img className='h-50 w-60 rounded-l-md'
      src={blog.image}
      alt="Movie" />
 
  <div className="card-body">
    <h2 className="card-title text-xl font-bold ">{blog.title}</h2>
    <p className='text-gray-700 font-semibold '>{blog.description}</p>
   <div className='' >
    <div className="card-actions justify-between pr-4 items-end">
    <button className="btn btn-primary mt-3 hover hover:bg-black hover:text-white">
        View more
    </button>

    <div className="flex gap-4">
        <p className="text-xs text-gray-500 mt-4">{blog.date}</p>
        <p className="text-xs text-gray-500 mt-4">{blog.readTime}</p>
    </div>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default BlogCard;