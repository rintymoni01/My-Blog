import { useState } from "react";
import { NavLink } from "react-router";
import { FaTelegramPlane, FaBars, FaTimes } from "react-icons/fa";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-green-500 font-bold text-xl"
      : "font-bold text-xl";

  return (
    <div className="bg-black/25">
      <div className="container mx-auto px-4 py-2">

        {/* Navbar Top */}
        <div className="flex justify-between items-center">

          {/* Logo */}
          <img
            className="h-10 w-28"
            src="/Image/rrrrrr.png"
            alt="Logo"
          />

          {/* Desktop Menu */}
          <div className="hidden lg:flex text-white gap-4 items-center">
            <NavLink className={navLinkClass} to="/">
              Home
            </NavLink>

            <NavLink className={navLinkClass} to="/about">
              About
            </NavLink>

            <NavLink className={navLinkClass} to="/blog">
              Blog
            </NavLink>

            <div className="flex gap-1 items-center">
              <NavLink className={navLinkClass} to="/contact">
                Contact:
              </NavLink>

              <p className="text-gray-100 font-bold">
                (01834688332)
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 font-semibold bg-pink-500 px-2 py-1 rounded-md">
                <FaTelegramPlane />
                <p>Join Now</p>
              </button>

              <div className="flex gap-2 font-bold text-xl">
                <IoSearchOutline />
                <IoCartOutline />
              </div>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white text-2xl"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile & Tablet Menu */}
        {open && (
          <div className="lg:hidden flex flex-col gap-4 py-5 text-white">

            <NavLink
              onClick={() => setOpen(false)}
              className={navLinkClass}
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              onClick={() => setOpen(false)}
              className={navLinkClass}
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              onClick={() => setOpen(false)}
              className={navLinkClass}
              to="/blog"
            >
              Blog
            </NavLink>

            <NavLink
              onClick={() => setOpen(false)}
              className={navLinkClass}
              to="/contact"
            >
              Contact
            </NavLink>

            <p className="text-gray-100 font-bold">
              (01834688332)
            </p>

          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;