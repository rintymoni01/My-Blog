import React from "react";
import useData from "../../Components/Shared/Hooks/useData";

const AboutComponents = () => {
  const { blogs,categories } = useData();
  return (
    <div>
      <div className=" text-center py-8">
        <p className="font-bold text-gray-700">Come, let’s wander somewhere unknown—</p>
        <p className="text-2xl font-bold text-gray-700 py-1">where there are rivers, endless blue skies,</p>
        <p className="text-3xl font-bold text-gray-700">and beautiful moments that make the heart feel alive. </p>
      </div>
       <div className="overflow-hidden w-full">
      <div className="flex gap-4 w-max animate-scroll">
        
        {/* First set */}
        {categories?.map((c) => (
          <div key={c.id} className="shrink-0">
            <img
              className="h-35 w-45 object-cover rounded-md"
              src={c?.image}
             
            />
           
          </div>
        ))}

        {/* Duplicate set for infinite loop */}
        {categories?.map((c) => (
          <div key={`duplicate-${c.id}`} className="shrink-0">
            <img
              className="h-35 w-45 object-cover rounded-md"
              src={c?.image}
              alt=""
            />
            
            
          </div>
        ))}

      </div>
    </div>
    <div className="px-4 container mx-auto">
        <div className="flex py-12  gap-8">
        <img className="w-150 h-[40vh] rounded-2xl " src="/Image/colourfull.jfif" alt="" />
       <div>
         <p className="text-3xl font-bold pt-12">Colorful flowers in a peaceful garden.</p>
        <p className="py-4 text-sm font-semibold text-gray">Let life be like nature—colorful, beautiful, and free.
        where there are rivers, endless blue skies,
        and beautiful moments that make the heart feel alive.</p>
        
       </div>
    </div>
    </div>
     <div>
         {blogs?.map((c) => (
        <div>
            
        </div>
      ))}
     </div>
    </div>
  );
};

export default AboutComponents;
