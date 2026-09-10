import React from "react";
import { ImEarth } from "react-icons/im";
import { MdEmail, MdMarkEmailRead, MdOutlineEmail, MdOutlinePhoneAndroid } from "react-icons/md";
const ContactSection = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">
          Contact <span className="text-blue-500">With Us</span>
        </h1>
        <p className="text-gray-400 text-sm">
          Get in touch with us and let’s make your journey unforgettable.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center container mx-auto py-8">
        <div className=" w-8 pl-2 rounded-sm  py-3 bg-gray-600">
        
            <MdMarkEmailRead className=" text-white" />
          
        </div>
        <p className="text-gray-700 text-sm font-bold">Mail & Website</p>
        <div className="flex items-center gap-1">
         <MdEmail className="text-gray-500 text-xs" />
          <p className="text-xs text-gray-500">rintymoni0@gmail.com</p>
        </div>
        <div className="flex items-center gap-1">
          <ImEarth  className="text-gray-500 text-xs"/>
          <p className="text-xs text-gray-500">www.website.come</p>
        </div>
      </div>
      {/* <p><MdOutlinePhoneAndroid /></p>
          <p><MdOutlineLocationOn /></p> */}
    </div>
  );
};

export default ContactSection;
