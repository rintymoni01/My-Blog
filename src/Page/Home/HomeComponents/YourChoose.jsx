
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
        <div className="bg-gray-100 pt-10">

            <div className="flex justify-between items-center container mx-auto px-4">

                <div>
                    <h1 className="text-xl font-bold">
                        Let Your Next Journey Begin
                    </h1>

                    <p className="text-sm text-gray-400">
                        Explore breathtaking places, hidden treasures, and unforgettable
                        <br />
                        journeys across Bangladesh.
                    </p>
                </div>

                {/* Categories */}
                <div className="flex gap-4">
                    {categories.slice(0,4).map((category) => (
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

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

