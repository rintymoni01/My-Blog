import React from 'react';

const CategoryBlogs = ({blogs}) => {
    return (
        <div>
           <div>
            {blogs.map(blog=>(
                <div>
                    <div>
                 <img src={blog.image} alt={blog.title} />
                        <div>
                    <p className="text-black text-xl font-semibold">{blog.title}</p>
                    <p className="text-gray-400 text-xs font-semibold">{blog.description}</p>
                </div>j
                    </div>
                </div>
            ))}
            </div> 
        </div>
    );
};

export default CategoryBlogs;