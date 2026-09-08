import React from 'react';

import Destinations from './HomeComponents/Destinations';
import YourChoose from './HomeComponents/YourChoose';
import Dicplay from './HomeComponents/Dicplay';


;

const Home = () => {
    return (
        <div>
            <div>
                
             <YourChoose></YourChoose>
             <Dicplay></Dicplay>
            <Destinations></Destinations>
              
                
               
            </div>
        </div>
    );
};

export default Home;