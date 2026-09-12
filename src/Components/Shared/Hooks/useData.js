import { useEffect, useState } from "react";

const useData = () => {
const [blogs, setBlogs] = useState([]);
const [categories, setCategories] = useState([]);

useEffect(() => {
fetch(`${import.meta.env.BASE_URL}blogs.json`)
.then((res) => {
if (!res.ok) {
throw new Error("Failed to load blogs.json");
}


    return res.json();
  })
  .then((data) => {
    setBlogs(data);
  })
  .catch((error) => {
    console.error("Blogs loading error:", error);
  });


}, []);

useEffect(() => {
fetch(`${import.meta.env.BASE_URL}category.json`)
.then((res) => {
if (!res.ok) {
throw new Error("Failed to load category.json");
}


    return res.json();
  })
  .then((data) => {
    setCategories(data);
  })
  .catch((error) => {
    console.error("Categories loading error:", error);
  });


}, []);

return {
blogs,
categories,
};
};

export default useData;
