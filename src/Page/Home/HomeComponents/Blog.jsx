import React from 'react';
import BlogCard from './BlogCard';

const Blog = ({blogs}) => {
    const sortBlog =[...blogs].sort((a,b)=>b.views- addEventListener.views)
    return (
        <div>
            {sortBlog.map(blog=><BlogCard blog={blog}></BlogCard>)}
        </div>
    );
};

export default Blog;