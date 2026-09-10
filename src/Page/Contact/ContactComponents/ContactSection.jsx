import React from "react";
import { MdMarkEmailRead, MdOutlineEmail, MdOutlinePhoneAndroid } from "react-icons/md";
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
        <p >rintymoni0@gmail.com</p>
        <p>www.website.come</p>
      </div>
      {/* <p><MdOutlinePhoneAndroid /></p>
          <p><MdOutlineLocationOn /></p> */}
    </div>
  );
};

export default ContactSection;
