import React from 'react';
import BlogCard from './BlogCard';

const Blog = ({blogs}) => {
    const sortBlog =[...blogs].sort((a,b)=>b.views- addEventListener.views)
    return (
        <div>
            {sortBlog.slice(0, 6).map(blog=><BlogCard blog={blog}></BlogCard>)}
        </div>
    );
};

export default Blog;