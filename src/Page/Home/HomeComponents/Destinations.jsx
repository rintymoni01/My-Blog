import React from 'react';
import HomeComponents from './HomeComponents';

const Destinations = () => {
    return (
    <div>
         <div className="bg-gray-50 pt-10" >
          <div className="text-center flex flex-col">
            <div className="">
                <p className='text-xl text-color-gray-300 font-bold pb-5'>Your Destination, Your Story</p>

<p className='text-xl text-color-gray-500 font-semibold pb-7'>Whether it’s mountains, beaches, or lush green landscapes—every 
   <br /> destination has a new story waiting to be discovered.</p>
<p className='text-3xl text-color-gray font-bold'>Where will your story begin?</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <HomeComponents></HomeComponents>
          </div>
        </div>
    </div>
    );
};

export default Destinations;