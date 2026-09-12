import React from 'react';
import BlogCard from './BlogCard';

const Blog = ({blogs}) => {
    const sortBlog =[...blogs].sort((a,b)=>b.views- addEventListener.views)
    return (
        <div className='pb-10'>
            {sortBlog.slice(5, 10).map(blog=><BlogCard blog={blog}></BlogCard>)}
        </div>
    );
};

export default Blog;