import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className=" py-1 rounded-md">
      <div className="card card-side bg-base-100 border border-gray-100 ">
        <img className="h-55 w-60 rounded-l-md" src={blog.image} alt="Movie" />

        <div className="card-body">
          <h2 className="card-title text-xl font-bold ">{blog.title}</h2>
          <div className="flex pb-2">
            <p className="text-xs font-bold text-gray-700">{blog.author}</p>
            <p className="text-xs text-gray-500 ">{blog.date}</p>
          </div>
          <p className="text-gray-400 text-xs font-semibold ">
            {blog.description}
          </p>
          <div className="">
            <div className="card-actions justify-between pr-4 items-center">
              <div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn bg-[#2E56CE] font-semibold text-white text-center "
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
                   <div>
<div className="card card-side bg-base-100 border border-gray-100 ">
        <img className="h-55 w-60 rounded-l-md" src={blog.image} alt="Movie" />

        <div className="card-body">
          <h2 className="card-title text-xl font-bold ">{blog.title}</h2>
          <div className="flex pb-2">
            <p className="text-xs font-bold text-gray-700">{blog.author}</p>
            <p className="text-xs text-gray-500 ">{blog.date}</p>
          </div>
          <p className="text-gray-400 text-xs font-semibold ">
            {blog.longDescription}
          </p>
          <div className="">
            <div className="card-actions justify-between pr-4 items-center">
             

              <div className="flex gap-4 items-center">
                <div className="flex  gap-1 items-center">
                  <p className="text-xs text-gray-500  font-semibold">
                    Total views:
                  </p>
                  <p className="text-xs text-gray-500 font-semibold ">
                    {blog.views}
                  </p>
                </div>
                <div className="flex">
                  <p className="text-xs text-gray-500 font-semibold ">
                    {blog.readTime}
                  </p>
                  <p className="text-xs text-gray-500 font-semibold">Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                   </div>
                  </div>
                </dialog>
              </div>

              <div className="flex gap-4 items-center">
                <div className="flex  gap-1 items-center">
                  <p className="text-xs text-gray-500  font-semibold">
                    Total views:
                  </p>
                  <p className="text-xs text-gray-500 font-semibold ">
                    {blog.views}
                  </p>
                </div>
                <div className="flex">
                  <p className="text-xs text-gray-500 font-semibold ">
                    {blog.readTime}
                  </p>
                  <p className="text-xs text-gray-500 font-semibold">Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BlogCard;
