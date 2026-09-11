import { FaTelegramPlane } from "react-icons/fa";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="bg-black/25 ">
      <div className="flex justify-between items-center container py-2 mx-auto px-4">
        <img className="h-10 w-28" src="/Image/rrrrrr.png" alt="" />
        <div className="text-white flex gap-4">
          <NavLink
            className={({ isActive }) => (isActive ? `text-green-500` : ``)}
            to="/"
          >
            <span className="font-bold text-xl">Home</span>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? `text-green-500` : ``)}
            to="/about"
          >
            <span className="font-bold text-xl">About</span>
            
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? `text-green-500` : ``)}
            to="/blog"
          >
            <span className="font-bold text-xl"> Blog</span>
           
          </NavLink>

          <div className="flex  gap-1 items-center ">
            <NavLink
              className={({ isActive }) => (isActive ? `text-green-500` : ``)}
              to="/contact"
            >
              <span className="font-bold text-xl"> Contact:</span>
             
            </NavLink>

            <p className="text-gray-100 font-bold  ">(01834688332)</p>
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
