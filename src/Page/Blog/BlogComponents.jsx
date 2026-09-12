import React from 'react';
import useData from '../../Components/Shared/Hooks/useData';

import { Link } from 'react-router-dom';




const BlogComponents = () => {
    const {categories} = useData()
    return (
        
       <div>
         <div className="flex flex-col lg:flex-row gap-8 justify-center">
  {categories?.slice(0, 3).map((c) => (
    <div
      key={c.id}
      className="card bg-base-100 w-full sm:w-90 lg:w-90 shadow-sm"
    >
      <figure>
        <img
          src={c?.image}
          alt={c?.name}
          className="w-full"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{c?.name}</h2>

        <p>{c?.description}</p>

        <div className="card-actions items-center justify-between">
          <p className="font-bold">{c?.place}</p>

          <Link to={"/contact"}>
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