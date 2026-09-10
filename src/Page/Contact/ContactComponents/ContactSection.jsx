import React from "react";
import { ImEarth } from "react-icons/im";
import {
  MdEmail,
  MdLocationOn,
  MdMarkEmailRead,
  MdOutlinePhoneAndroid,
} from "react-icons/md";
const ContactSection = () => {
  return (
    <div>
      <div className="text-center pt-12">
        <h1 className="text-2xl font-bold pb-2">
          Contact <span className="text-blue-500 ">With Us</span>
        </h1>
        <p className="text-gray-400 text-sm">
          Get in touch with us and let’s make your journey unforgettable.
        </p>
      </div>
      <div className="flex gap-4 justify-center container mx-auto items-center py-12">
        <div className="flex flex-col justify-center border  w-90 rounded-md border-gray-200  items-center   py-8">
          <div className=" w-8 pl-2 rounded-sm  py-3 bg-gray-600">
            <MdMarkEmailRead className=" text-white" />
          </div>
          <p className="text-gray-700 text-sm font-bold pt-1">Mail & Website</p>
          <div className="flex items-center gap-1 py-1">
            <MdEmail className="text-gray-500 text-xs" />
            <p className="text-xs text-gray-500">rintymoni0@gmail.com</p>
          </div>
          <div className="flex items-center gap-1">
            <ImEarth className="text-gray-500 text-xs" />
            <p className="text-xs text-gray-500">www.website.come</p>
          </div>
        </div>
        <div className="flex flex-col justify-center border w-90  rounded-md border-gray-200  items-center py-8">
          <div className=" w-8 pl-2 rounded-sm  py-3 bg-gray-600">
            <MdOutlinePhoneAndroid className=" text-white" />
          </div>
          <p className="text-gray-700 text-sm font-bold pt-1">Contact</p>
          <div className="flex items-center gap-1 py-1">
            <MdOutlinePhoneAndroid className="text-gray-500 text-xs" />
            <p className="text-xs text-gray-500">++88018********</p>
          </div>
          <div className="flex items-center gap-1">
            <MdOutlinePhoneAndroid className="text-gray-500 text-xs" />
            <p className="text-xs text-gray-500">017********</p>
          </div>
        </div>
        <div className="flex flex-col justify-center border w-90  rounded-md border-gray-200  items-center  py-8">
          <div className=" w-8 pl-2 rounded-sm  py-5 bg-gray-600">
            <MdLocationOn className=" text-white" />
          </div>
          <p className="text-gray-700 text-sm font-bold pt-1">Address</p>
          <div className="flex items-center gap-1 py-1">
            <MdLocationOn className="text-gray-500 text-xs" />
            <p className="text-xs text-gray-500">
              House 12, Road 3, Mohakhali, Dhaka 1212, Bangladesh
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4851008789146!2d90.42419807532019!3d23.7657340881875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c754583dd209%3A0xdd0c5fcc7d2d3836!2sBetopia%20Group%20-%20Corporate%20Office!5e0!3m2!1sen!2sbd!4v1789056770328!5m2!1sen!2sbd"
            width="500"
            height="450"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
