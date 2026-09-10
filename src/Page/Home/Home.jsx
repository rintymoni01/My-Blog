import React from 'react';

import Destinations from './HomeComponents/Destinations';
import YourChoose from './HomeComponents/YourChoose';
import HomeCard from './HomeComponents/HomeCard';



;

const Home = () => {
    return (
        <div>
            <div>
                
             <YourChoose></YourChoose>
            
            <Destinations></Destinations>
            <HomeCard></HomeCard>
              
                
               
            </div>
        </div>
    );
};

export default Home;