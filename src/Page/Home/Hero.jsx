import React from 'react';

import Header from '../../Components/Shared/Header';

import {Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div
            className="h-[600px] sm:h-[500px] md:h-[550px] lg:h-[80vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/My-Blog/Image/bg.jpg')` }}
// অথবা <img src="/My-Blog/Image/bg.jpg" />
        
        >
            <div>
                <Header></Header>
            </div>

           <div className="bg-black/25">
  <div className="lg:pt-60 pt-60 drop-shadow-md text-center">
    <p className="text-xl font-semibold text-gray-200">
      Set out in search of your next adventure
    </p>

    <p className="lg:text-4xl lg:font-bold text-2xl text-white font-semibold pt-6">
      Nature is calling— <br />
      are you ready to answer the call?
    </p>
  </div>

  <div>
    <div className="lg:pt-35 pt-24 pl-0 lg:pl-12">
  <Link to="/blog">
    <div className="rounded-md mx-auto lg:mx-0 w-fit whitespace-nowrap font-semibold hover:text-white bg-pink-500 duration-1000 shadow-2xl px-6 py-2 hover:bg-black text-white">
      Explore Now
    </div>
  </Link>
</div>

    <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 border rounded-md text-white bg-black font-semibold border-gray-300 px-6 py-1 rotate-90">
      <u><i>Rinty moni..</i></u>
    </div>
  </div>
</div>      


        </div>
    );
};

export default Hero;