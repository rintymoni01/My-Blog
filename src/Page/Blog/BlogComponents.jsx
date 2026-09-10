import React from 'react';
import useData from '../../Components/Shared/Hooks/useData';
import { Link } from 'react-router';




const BlogComponents = () => {
    const {categories} = useData()
    return (
        
       <div>
         <div className='flex gap-8  justify-center'>
            {categories?.slice(0,3).map(c=>(
<div className="card bg-base-100 w-90 shadow-sm">
  <figure>
    <img
      src={c?.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{c?.name}</h2>
    <p>{c?.description}</p>
    <div className="card-actions items-center  "> 
        <p className=' font-bold'>{c?.place}</p>

      <Link>
      <button className="btn btn-primary">View Now</button>
      </Link>
    </div>
  </div>

</div>
            ))}
        </div>
       
         
       </div>
     
    );
};

export default BlogComponents;