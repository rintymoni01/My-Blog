
import { useState } from "react";
import useData from "../../../Components/Shared/Hooks/useData";
import SheardBlogCard from "../../../Components/Shared/SheardBlogCard";

const YourChoose = () => {
    const { blogs, categories } = useData();

    const [categoryId, setCategoryId] = useState();

    const handleCategoryId = (id) => {
        setCategoryId(id);
    };

    // Category ID অনুযায়ী blogs filter
    const filterBlogs = categoryId
        ? blogs.filter(blog => blog.categoryId == categoryId)
        : blogs;

    return (
        <div className="bg-gray-100 pt-4">

              <div className="text-center py-5 sm:py-6 lg:py-8 px-3">
  <p className="font-bold text-sm sm:text-base lg:text-base text-gray-700">
    Come, let’s wander somewhere unknown—
  </p>

  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 py-1">
    where there are rivers, endless blue skies,
  </p>

  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-700">
    and beautiful moments that make the heart feel alive.
  </p>
</div>
      <div className="overflow-hidden w-full">
        <div className="flex gap-4 w-max animate-scroll">
          {/* First set */}
          {categories?.map((c) => (
            <div key={c.id} className="shrink-0">
              <img
                className="h-35 w-45 object-cover rounded-md"
                src={c?.image}
              />
            </div>
          ))}

          {/* Duplicate set for infinite loop */}
          {categories?.map((c) => (
            <div key={`duplicate-${c.id}`} className="shrink-0">
              <img
                className="h-35 w-45 object-cover rounded-md"
                src={c?.image}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

           <div className="flex flex-col lg:flex-row justify-between items-center pt-8 lg:items-center container mx-auto px-4 gap-5 lg:gap-0">

  {/* Text */}
  <div className="text-center lg:text-left">
    <h1 className="text-xl font-bold">
      Let Your Next Journey Begin
    </h1>

    <p className="text-sm text-gray-400">
      Explore breathtaking places, hidden treasures, and unforgettable
      <br className="hidden lg:block" />
      journeys across Bangladesh.
    </p>
  </div>

  {/* Categories */}
  <div className="flex flex-wrap justify-center gap-4">
    {categories.slice(0, 4).map((category) => (
      <p
        key={category.id}
        onClick={() => handleCategoryId(category.id)}
        className="text-sm font-bold cursor-pointer"
      >
        {category.place}
      </p>
    ))}
  </div>

</div>

            {/* Blogs */}
            <div className="px-4 container mx-auto py-10">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">

    {filterBlogs.slice(0, 8).map((blog) => (
      <SheardBlogCard
        key={blog.id}
        blog={blog}
      />
    ))}

  </div>
</div>

        </div>
    );
};

export default YourChoose;

