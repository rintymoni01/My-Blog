import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TopHeader from './Components/TopHeader';
import Footer from './Components/Shared/Footer';
import Home from './Page/Home/Home';
// আপনার যদি আরও পেজ থাকে, তবে সেগুলোকে এভাবে ইমপোর্ট করবেন:
// import Blog from './Page/Blog/Blog'; 

const App = () => {
  return (
    <BrowserRouter basename="/My-Blog">
      <div>
        <TopHeader />
        
        {/* রাউটিং সেটআপ - পেজ পরিবর্তন করার জন্য */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* নিচে আপনার অন্যান্য পেজের রাউট যোগ করতে পারেন */}
          {/* <Route path="/blog" element={<Blog />} /> */}
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;