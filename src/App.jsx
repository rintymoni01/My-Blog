import React from 'react';

import Footer from './Components/Shared/Footer';
import Home from './Page/Home/Home';
import TopHeader from './Components/TopHeader';

const App = () => {
  return (
    <div>
<TopHeader></TopHeader>
      
      <Home></Home>
      <Footer></Footer>
    </div>
  );
};

export default App;