import React from 'react';

const CategoryBlogs = ({blogs,categoryId}) => {
    const filterBlogs = categoryId?  blogs.filter(blog=>blog.categoryId==categoryId):blogs
    
    return (
        <div className='p-3'>
        {
          filterBlogs.map(blog=>(
                <div className='items-center container  mx-auto gap-4 py-1  '>
<div className='border  flex justify-between items-center border-gray-200 rounded-md gap-2 py-2 px-1'>
    <div>
    <img className='h-20 w-20 rounded-md' src={blog.image} alt={blog.title} />
</div>
               
               <div className='items-center container mx-auto '>
                 <p className=' test-black font-semibold'> {blog.title}</p>
             <div> 
                <div className=" pr-4 items-center">
                    <p className='text-xs text-gray-600'>{blog.author}</p>
              <div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn btn-xs px-1 bg-pink-600 font-semibold  text-white text-center "
                  onClick={() =>
                    document.getElementById(`modal_${blog.id}`).showModal()
                  }
                >
                  View More
                </button>
                <dialog id={`modal_${blog.id}`} className="modal ">
                  <div className="modal-box relative h-fit max-w-6xl">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-50">
                        ✕
                      </button>
                    </form>
                   
                  </div>
                </dialog>
              </div>

             
            </div>
             </div>
               </div>
</div>
                </div>
            ))
        }
        </div>
    );
};

export default CategoryBlogs;