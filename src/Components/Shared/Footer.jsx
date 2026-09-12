import React from "react";
import { LiaRProject } from "react-icons/lia";

const Footer = () => {
  return (
  <div className="bg-gray-100">
  <div className="py-12 flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left container mx-auto px-4 gap-8 lg:gap-4">

    {/* Logo / Contact */}
    <div className="w-full lg:w-70">
      <LiaRProject className="text-7xl" />

      <p className="text-xs text-gray-500 py-2 font-semibold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="flex gap-1 flex-wrap">
        <p className="border-b-3 border-green-500">
          <span className="text-xs font-bold">(120)444-0213</span>
        </p>

        <p className="text-gray-500">or</p>

        <p className="border-b-3 border-green-500">
          <span className="text-xs font-bold">
            humayra01@gmail.com
          </span>
        </p>
      </div>
    </div>

    {/* My Account */}
    <div className="flex flex-col gap-2 w-full lg:w-auto">
      <h3 className="text-sm font-bold pt-0 lg:pt-6">
        My Account
      </h3>

      <p className="text-xs text-gray-500 font-semibold">
        My Account
      </p>

      <p className="text-xs text-gray-500 font-semibold">
        Order History
      </p>

      <p className="text-xs text-gray-500 font-semibold">
        Shopping Cart
      </p>

      <p className="text-xs text-gray-500 font-semibold">
        WishList
      </p>
    </div>

    {/* Helps */}
    <div className="flex flex-col gap-2 w-full lg:w-auto">
      <h3 className="text-sm font-bold pt-0 lg:pt-6">
        Helps
      </h3>

      <p className="text-xs text-gray-500 font-semibold">
        Contact
      </p>

      <p className="text-xs text-gray-500 font-semibold">
        Page
      </p>

      <p className="text-xs text-gray-500 font-semibold">
        Candidate
      </p>

      <p className="text-xs text-gray-500 font-semibold">
        Privacy Policy
      </p>
    </div>

    {/* Proxy */}
    <div className="flex flex-col gap-2 w-full lg:w-auto">
      <h3 className="text-sm font-bold pt-0 lg:pt-6">
        Proxy
      </h3>

      <p className="text-xs text-gray-500 font-semibold">
        Home
      </p>

      <p className="text-xs text-gray-500 font-semibold">
        Blogs
      </p>

      <p className="text-xs text-gray-500 font-semibold">
        Page
      </p>
    </div>

    {/* Download App */}
    <div className="flex flex-col items-center  gap-2 w-full lg:w-auto">
      <h2 className="text-sm font-bold pt-0 lg:pt-6">
        Download Your App
      </h2>

      <img
        className="h-12 w-60 object-contain object-left"
        src="/My-Blog/Image/appStore.png"
        alt="Download App"
      />
    </div>

  </div>
</div>
  );
};

export default Footer;
