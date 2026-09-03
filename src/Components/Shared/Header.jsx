import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";


const Header = () => {
    return (
        <div className="bg-linear-to-r from-[#00FFFF] to-[#FF00FF] py-1">
           <div className ="flex text-white justify-between items-center container mx-auto px-4">
            <div className="gap-4 flex text-xl text-[rgb(50,32,51)] ">
                <FaFacebook />
                <FaInstagram />
                <FaTwitterSquare />
                <FaTelegram />
            </div>
            <div className="flex gap-8 text-xl">
                <p>About</p>
                <p>Blog</p>
                
                <p>Privacy</p>
               <div className="flex gap-1">
                <p>Contact</p>
                <p className="text-gray-500">(01834688332)</p>
               </div>
            </div>
                
            </div>
           </div>

        
    );
};

export default Header;