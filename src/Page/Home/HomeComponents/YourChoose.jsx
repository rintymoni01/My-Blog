import { useEffect, useState } from "react";




const YourChoose = ({handleCaTegoryId}) => {
        const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch("category.json")
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    
     
       
    return (
        <div className='bg-gray-100 pt-10' >
        <div className="flex justify-between items-center container mx-auto px-4">
               <div className='items-center '>
                
             <h1 className='text-xl font-bold'> Let Your Next Journey Begin</h1>
            <p className='text-sm text-gray-400'>Explore breathtaking places, hidden treasures, and unforgettable<br /> journeys across Bangladesh.</p>
           </div>
              
            <div className="flex  gap-4">
                    {categories.map((category) => (
            <p className="text-xm font-bold">{category.place}</p>
          ))}
    
            </div>
           </div>
        </div>
    );
};

export default YourChoose;