
import { useEffect, useState } from 'react';
import Blog from './Blog';
import Category from './Category';
import CategoryBlogs from './CategoryBlogs';



const HomeComponents = () => {

const [blogs, setBlogs]=useState([])
useEffect(()=>{
    fetch("blogs.json")
    .then(res=>res.json())
    .then(data => setBlogs(data))
},[])

const [categories, setCategories]=useState([])
useEffect(()=>{
    fetch("category.json")
    .then(res=>res.json())
    .then(data=> setCategories(data))
},[])
    return (
        <div className="pt-6 px-20">
            <div>
             <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
    
    <div className="md:col-span-8 border border-gray-200">
        <Blog />
    </div>

    <div className="md:col-span-4 border border-gray-200">
        <Category categories={categories} />
        <CategoryBlogs blogs={blogs}/>
    </div>

</div>
            </div>

            
        </div>
    );
};

export default HomeComponents;