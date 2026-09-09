import React from 'react';
import useData from './Hooks/useData';
import { useParams } from 'react-router';

const SingleBlogs = () => {
    const { id } = useParams();
    const { blogs } = useData();

    const findBlogs = blogs.find(b => b.id == Number(id));

    return (
        <div className='items-center container mx-auto px-4 py-8'>
            <div>
                <img  className='w-70 h-70 rounded-t-md'
                    src={findBlogs?.image} 
                    alt={""} 
                />
            </div>

            <p>{findBlogs?.title}</p>
        </div>
    );
};

export default SingleBlogs;