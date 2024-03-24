import React from 'react';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Produts from './components/Produts';
import Marcees from './components/Marcees';
import Card from './components/Card';
import Footer from './components/Footer';

import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-full bg-zinc-900 text-white font-sans '>
      <Navbar />
      <Work />
      <Produts />
      <Marcees/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default App