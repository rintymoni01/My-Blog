import React from 'react';
import { Outlet } from 'react-router';

import TopHeader from '../Components/TopHeader';
import Footer from '../Components/Shared/Footer';
import Hero from '../Page/Home/Hero';

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