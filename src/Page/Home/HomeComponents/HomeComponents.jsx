import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import Category from './Category';
import CategoryBlogs from './CategoryBlogs';

const HomeComponents = () => {

   const[blogs,setBlogs]=useState([])
   useEffect(()=>{
    fetch("blogs.json")
    .then(res=>res.json())
    .then(data => setBlogs(data))
   },[])


    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch("category.json")
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    const [categoryId,setCategoryId] =useState ()
    const handleCaTegoryId = (id)=>{
        setCategoryId(id)
    }
   
    return (
        <div className='bg-gray-200'>
            <div>
                <div className='grid grid-cols-12 gap-6  pt-6 container mx-auto'>
                    <div className='col-span-8 '>
                        <Blog blogs={blogs}></Blog>
                     </div>
                    <div className='col-span-4 border border-gray-200 rounded-md'>
                        <Category categories={categories} handleCaTegoryId={handleCaTegoryId}></Category>
                        
                        <CategoryBlogs categoryId={categoryId} blogs={blogs}></CategoryBlogs>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeComponents;