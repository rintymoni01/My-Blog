import React from 'react';

const Category = ({ categories }) => {
    return (
        <div className='flex flex-wrap  gap-2 p-4'>
            {
                categories.map(category =>(
                    <div className='border border-gray-200 rounded-md px-4 py-2'>
                        <p >{category.name}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Category;