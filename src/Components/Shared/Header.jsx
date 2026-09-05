import { FaTelegramPlane } from "react-icons/fa";
 import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="bg-black/25 ">
      <div className="flex justify-between items-center container mx-auto px-4">
        <img className="h-12 w-30" src="src/assets/rrrrrr.png" alt="" />
        <div className="text-white flex gap-4">
          <p className=" text-xl ">Home</p>
          <p className="text-xl ">About </p>
          <p className="text-xl ">Blog</p>
          <p className="text-xl ">Success Story</p>
          <div className="flex  gap-1 text-xl">
                <p>Contact:</p>
                <p className="text-pink-200 ">(01834688332)</p>
               </div>
               <div className="flex items-center gap-4">
                <button className=" flex items-center gap-2 font-semibold bg-pink-500 px-2 py-1 rounded-md ">
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
