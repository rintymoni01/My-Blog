import React from 'react';

const Category = ({categories}) => {
    return (
        <div className='flex gap-4 p-3 flex-wrap'>
           { categories.map(category => (
                <div key={category.id}>
                    <p className=" border bg-gray-100  border-gray-200 px-6 py-2 rounded-md">{category.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Category;