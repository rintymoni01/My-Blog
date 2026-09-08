import React from 'react';
import dicplay from'../../../assets/dicplay.jfif'

const Dicplay = () => {
    return (
        <div className='h-[70vh] w-360 bg-cover bg-center bg-no-repeat ' style={{backgroundImage:`url(${dicplay})`}}>
           
            <p>Pause Life. Find Yourself.
Sometimes, all you need is a little time away from the rush of life.
Explore Your Journey →</p>
        </div>
    );
};

export default Dicplay;

