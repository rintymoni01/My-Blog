import React, { useEffect, useState } from 'react';

const useData = () => {
   const[blogs,setBlogs]=useState([])
   useEffect(()=>{
    fetch("/blogs.json")
    .then(res=>res.json())
    .then(data => setBlogs(data))
   },[])


    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch("/category.json")
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

    return{blogs,categories}
};

export default useData;