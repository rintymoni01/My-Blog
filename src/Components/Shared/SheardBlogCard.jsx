import React from 'react';

const SheardBlogCard = ({blog}) => {
    return (
        <div>
            <div>
                <img className='w-52 h-42' src={blog.image} alt="" />
                <h3>{blog.category}</h3>
                <h3>{blog.location}</h3>
                 
                  <h3>{blog.category}</h3>
                   <h3>{blog.likes}</h3>
                   <p>{blog.rating}</p>
                   <p>{blog.comments}</p>
            </div>
        </div>
    );
};

export default SheardBlogCard;