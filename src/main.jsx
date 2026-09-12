import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './Layout/Root';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Blog from './Page/Blog/Blog';
import Contact from './Page/Contact/Contact';
import SingleBlogs from './Components/Shared/SingleBlogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "home/:id",
        element: <SingleBlogs />,
      },
    ],
  },
], {
  basename: "/My-Blog",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);