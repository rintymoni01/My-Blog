import { FaTelegramPlane } from "react-icons/fa";
 import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="bg-black/25 ">
      <div className="flex justify-between items-center container py-2 mx-auto px-4">
        <img className="h-8 w-26" src="src/assets/rrrrrr.png" alt="" />
        <div className="text-white flex gap-4">
          
          <NavLink className={({isActive})=> isActive? `text-green-500`: ``} to="/">Home</NavLink>
          <NavLink className={({isActive})=> isActive? `text-green-500`: ``} to="/about">About</NavLink>
          <NavLink className={({isActive})=> isActive? `text-green-500`: ``} to="/blog">Blog</NavLink>
          <NavLink className={({isActive})=> isActive? `text-green-500`: ``} to="/successStory">Success Story</NavLink>

          
         
          <div className="flex  gap-1 ">
            <NavLink className={({isActive})=> isActive? `text-green-500`: `` } to="/contact">Contact:</NavLink>
                
                <p className="text-pink-200 ">(01834688332)</p>
               </div>
               <div className="flex items-center gap-4">
                <button className=" flex items-center gap-2 font-semibold bg-pink-500 px-2  rounded-md ">
                    <FaTelegramPlane />
                    <p>Join Now</p>
                    
                </button>
               
<div className="flex gap-2 font-bold text-xl ">
    <IoSearchOutline />
<IoCartOutline />
</div>
                
               </div>
          


        </div>
      </div>
    </div>
  );
};

export default Header;
