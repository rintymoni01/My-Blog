import React from "react";
import { LiaRProject } from "react-icons/lia";

const Footer = () => {
  return (
   <div className="bg-gray-100">
     <div className="py-12 flex justify-between container  mx-auto px-4">
     <div className="w-70">
         <LiaRProject className="text-7xl" />
      <p className="text-xs text-gray-500 py-2 font-semibold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex gap-1">
        <p className="border-b-3 border-green-500"><span className="text-xs font-bold">(120)444-0213</span></p>
     <p className="text-gray-500"> or</p>
     <p className="border-b-3 border-green-500"><span className="text-xs font-bold">humayra01@gmail.com</span></p>
      </div>
     </div>
     <div className="flex flex-col gap-2 ">
        <h3 className="text-sm font-bold pt-6">My Account</h3>
        <p className="text-xs text-gray-500 font-semibold">My Account</p>
        <p className="text-xs text-gray-500 font-semibold">Order History</p>
        <p className="text-xs text-gray-500 font-semibold">Shoping Cart</p>
        <p className="text-xs text-gray-500 font-semibold">WishList</p>
        

     </div>
     <div className="flex flex-col gap-2 ">
        <h3 className="text-sm font-bold pt-6">Helps</h3>
        <p className="text-xs text-gray-500 font-semibold">Contact</p>
        <p className="text-xs text-gray-500 font-semibold">Page</p>
        <p className="text-xs text-gray-500 font-semibold">Candidate</p>
        <p className="text-xs text-gray-500 font-semibold">Prayvacy Palicy</p>
     </div>
     <div className="flex flex-col gap-2 ">
        <h3 className="text-sm font-bold pt-6">Proxy</h3>
        <p className="text-xs text-gray-500 font-semibold">Home</p>
        <p className="text-xs text-gray-500 font-semibold">Blogs</p>
        <p className="text-xs text-gray-500 font-semibold">Page</p>
     </div>
     <div className="flex flex-col gap-2 ">
       <h2 className="text-sm font-bold pt-6"> Download Your App</h2>
       <img className="h-12 w-60" src="/Image/appStore.png" alt="" />
     </div>

    </div>
   </div>
  );
};

export default Footer;
