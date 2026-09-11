
import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Blog from './Page/Blog/Blog';

import Contact from './Page/Contact/Contact';
import SingleBlogs from './Components/Shared/SingleBlogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
      children: [
      { index: true, element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/blog", element: <Blog></Blog> },
    
       { path: "/contact", element: <Contact></Contact> },
        { path: "/home/:id", element: <SingleBlogs></SingleBlogs> },
      
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
