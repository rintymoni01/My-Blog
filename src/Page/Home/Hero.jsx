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
               <div className="flex gap-6 justify-end pt-90 pr-6">
                 <div className="border rounded-md text-white hover  bg-gray-400 border-gray-300 px-6 py-1 ">Explore Now</div>
                <div className="border rounded-md text-white  bg-gray-400 border-gray-300 px-6 py-1 ">Discover Places</div>
               </div>
            </div>
        </div>
    );
};

export default Hero;