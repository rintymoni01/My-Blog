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
                <img  className='w-70 h-70 rounded-t-md '
                    src={findBlogs?.image} 
                    alt={""} 
                />
            </div>

             
            <p>{findBlogs?.location}</p>
            <p>{findBlogs.longDescription}</p>
            <div className='flex gap-4  items-center'>
              <p>duration: {findBlogs?.duration}</p>
            <p>difficulty: {findBlogs?.difficulty}</p>
            </div>
            <p>bestTime: {findBlogs?.bestTime}</p>
            <p>{findBlogs?.tags}</p>
           <div className='flex gap-4'>
             <p>{findBlogs?.transport}</p>
            <p>{findBlogs?.budget}</p>
           </div>

        </div>
    );
};

export default SingleBlogs;