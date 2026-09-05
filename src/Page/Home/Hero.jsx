import React from 'react';
import bg from '../../assets/bg.jpg';

const Hero = () => {
    return (
        <div
            className="h-[600px]  bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
        >

            <div>
                <div className="text-green-300 drop-shadow-md text-center pt-20">
                    <p className="text-xl font-semibold text-gray-200">Set out in search of your next adventure </p>
                    <p className="text-4xl font-bold pt-6">Nature is calling— <br />are you ready
                         to answer the call?</p>
                </div>
        <div className="">
     <div className="lg:pt-75 pt-40 pl-12">
            <div className="border rounded-md mx-auto  lg:mx-0 text-white w-36 hover:text-black   hover:bg-white hover:font-semibold duration-1000 bg-gray-400 border-gray-300 px-6 py-1">
  Explore Now
</div>
     </div>

<div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 
border rounded-md text-white  bg-black font-semibold border-gray-300 
px-6 py-1 rotate-90">
  <u><i>Rinty moni..</i></u>
</div>
 </div>
            </div>
        </div>
    );
};

export default Hero;