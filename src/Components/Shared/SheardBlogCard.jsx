import React from 'react';

const SheardBlogCard = ({blog}) => {
    return (
        <div>
            <div>
                <img className='w-52 h-42' src={blog.image} alt="" />
            </div>
        </div>
    );
};

export default SheardBlogCard;