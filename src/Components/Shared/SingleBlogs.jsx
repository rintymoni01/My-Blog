import React from 'react';
import useData from './Hooks/useData';
import { useParams } from 'react-router';

const SingleBlogs = () => {
    const {id} =useParams()
   
    const {blogs}=useData()
    
 const findBlogs = blogs.find(b=> b.id == id )
    return (
        <div>
            <p>{findBlogs?.title}</p>
        </div>
    );
};

export default SingleBlogs;