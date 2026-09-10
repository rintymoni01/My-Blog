import React from 'react';
import BlogComponents from './BlogComponents';
import BlogCard from './BlogCard';
import Blogpera from './Blogpera';

const Blog = () => {
    return (
        <div>
            <Blogpera></Blogpera>
            <BlogComponents></BlogComponents>
            <BlogCard></BlogCard>
        </div>
    );
};

export default Blog;