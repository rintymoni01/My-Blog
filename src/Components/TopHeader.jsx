import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaTwitterSquare } from 'react-icons/fa';

const TopHeader = () => {
    return (
        <div>
             <div className="bg-linear-to-r lg:block hidden  from-[#00FFFF] to-[#FF00FF] py-1">
           <div className ="flex text-white justify-between items-center container mx-auto px-4">
            <div className="gap-4 flex text-xl text-[rgb(50,32,51)] ">
                <FaFacebook/>
                <FaInstagram />
                <FaTwitterSquare />
                <FaTelegram />
            </div>
            <div className="flex gap-8 text-xl">
                <p>About</p>
                <p>Blog</p>
                
                <p>Privacy</p>
              
            </div>
                
            </div>
           </div>
        </div>
    );
};

export default TopHeader;