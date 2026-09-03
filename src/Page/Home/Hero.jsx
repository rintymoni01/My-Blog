import React from 'react';
import bg from '../../assets/bg.jpg';

const Hero = () => {
    return (
        <div
            className="h-[600px] bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
        >

            <div>
                <div className="text-white text-center pt-15">
                    <p className="text-xl font-semibold text-gray-200">Set out in search of your next adventure </p>
                    <p className="text-4xl font-bold pt-6">Nature is calling— <br /><p className="">are you ready to answer the call?</p></p>
                </div>
        <div className="">
     <div className="pt-85 pl-6">
            <div className="border rounded-md pt- text-white w-36 hover:text-black skew-x-8  hover:bg-white hover:font-semibold duration-1000 bg-gray-400 border-gray-300 px-6 py-1">
  Explore Now
</div>
     </div>

<div className="absolute right-6 top-1/2 -translate-y-1/2 
border rounded-md text-white bg-black font-semibold border-gray-300 
px-6 py-1 rotate-90">
  <u><i>Rinty moni..</i></u>
</div>
 </div>
            </div>
        </div>
    );
};

export default Hero;