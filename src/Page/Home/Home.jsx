import React from 'react';
import YourChoose from './HomeComponents/YourChoose';
import HomeCard from './HomeComponents/HomeCard';
import Destinations from './HomeComponents/Destinations';




;

const Home = () => {
    return (
        <div>
            <div>
                
             <YourChoose></YourChoose>
            
            <Destinations ></Destinations>
            <HomeCard ></HomeCard>
              
                
               
            </div>
        </div>
    );
};

export default Home;