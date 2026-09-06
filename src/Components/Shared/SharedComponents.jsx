import React from 'react';

const SharedComponents = ({heading, colorHeading, discription}) => {
    return (
        <div>
            <div>
                <h1>{heading}{colorHeading}{discription}</h1>
            </div>
        </div>
    );
};

export default SharedComponents;