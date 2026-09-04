import React from 'react';

const BlogCard = ({blog}) => {
    return (
        <div className=''>
            <div className="card card-side bg-base-100 shadow-sm">
  
    <img className='h-60 w-60'
      src={blog.image}
      alt="Movie" />
 
  <div className="card-body">
    <h2 className="card-title">{blog.title}</h2>
    <p>{blog.description}</p>
    <div className="card-actions justify-between px-8">
        
      <button className="btn btn-primary">See Views</button>
      <div>
            <p>{blog.date}</p>
            <p>{blog.readTime}</p>
        </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default BlogCard;