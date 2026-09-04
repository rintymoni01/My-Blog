import React from 'react';
import BlogCard from './BlogCard';

const Blog = ({blogs}) => {
    return (
        <div>
            {blogs.map(blog=><BlogCard blog={blog}></BlogCard>)}
        </div>
    );
};

export default Blog;