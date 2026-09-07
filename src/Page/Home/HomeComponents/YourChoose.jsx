import { useEffect, useState } from "react";
import useData from "../../../Components/Shared/Hooks/useData";
import SheardBlogCard from "../../../Components/Shared/SheardBlogCard";

const YourChoose = ({ handleCaTegoryId }) => {
 const {blogs,categories} =useData()

 
  const [categoryId, setCategoryId] =useState()
  const handleCategoryId=(id)=>{
    setCategoryId(id)
  }
 

  return (
    <div className="bg-gray-100 pt-10">
      <div className="flex justify-between items-center container mx-auto px-4">
        <div className="items-center ">
          <h1 className="text-xl font-bold"> Let Your Next Journey Begin</h1>
          <p className="text-sm text-gray-400">
            Explore breathtaking places, hidden treasures, and unforgettable
            <br /> journeys across Bangladesh.
          </p>
        </div>

        <div className="flex  gap-4">
          {categories.map((category) => (
            <p onClick={()=>handleCategoryId(category?.id)} className="text-xm font-bold cursor-pointer">{category.place}</p>
          ))}
        </div>
      </div>
      <div className="px-4 items-center container mx-auto py-10">
        <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-4 gap-5  ">
            {blogs.map(blog => <SheardBlogCard blog= {blog}></SheardBlogCard>)}
        </div>
      </div>
    </div>
  );
};

export default YourChoose;
