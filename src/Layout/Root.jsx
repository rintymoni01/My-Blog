import React from 'react';
import { Outlet } from 'react-router-dom';

import TopHeader from '../Components/TopHeader';
import Footer from '../Components/Shared/Footer';
import Hero from '../Page/Home/Hero';
import Destinations from '../Page/Home/HomeComponents/Destinations';

const Root = () => {
    return (
        <div> 
            <TopHeader></TopHeader>

            <Hero></Hero>
            
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;