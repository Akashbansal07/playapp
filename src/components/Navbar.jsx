import React, { useState, useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";
import { FaPlay } from "react-icons/fa6";
import Dropdown from './Dropdown';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([]);
  const [activeItem, setActiveItem] = useState(null); 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = (items, index) => {
    setIsDropdownOpen(true);
    setDropdownItems(items);
    setActiveItem(index); 
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
    setDropdownItems([]);
    setActiveItem(null);
  };

  const generateItems = (category) => {
    switch (category) {
      case 'IPL 2024':
        return ['IPL 2024 LIVE'];
      case 'Thriller':
        return ['Drishyam', 'Mumbai Police', 'Talvar'];
      case 'Comedy':
        return ['3 Idiots','Phir Hera Pheri','Dhamaal'];
      case 'Sci-Fi':
        return ['Ra.One','Robot','Krrish'];
      case 'Horror':
        return ['Shaitaan','Vash','Tumbaad'];
      case 'More':
        return windowWidth < 768 ? ['IPL 2024', 'Thriller', 'Comedy', 'Sci-Fi', 'Horror', 'Drama', 'Action', 'Kids', 'Anime'] : ['Drama', 'Action', 'Kids', 'Anime'];
      default:
        return [];
    }
  };

  const categories = windowWidth < 768 ? ["More"] : ["IPL 2024", "Thriller", "Comedy", "Sci-Fi", "Horror", "More"];

  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center border-b-[1px] lg:flex-row flex-col'>
     
      {/* logo */}
      <h2 className='text-white text-3xl font-semibold flex items-center justify-content'>
        PLAY<FaPlay />
      </h2>
      
      {/* list */}
      <div className='links flex gap-14 ml-42 relative lg:ml-48 ml-0'>
        {categories.map((elem, index) => (
          <div 
            key={index} 
            className="relative group" 
            onMouseEnter={() => handleMouseEnter(generateItems(elem), index)}
            onMouseLeave={handleMouseLeave}
          >
            <a key={index}
              className='text-sm flex items-center gap-1 whitespace-nowrap' 
              href='#'
            >
              {elem}
            </a>
            {isDropdownOpen && activeItem === index && <Dropdown items={dropdownItems} />} 
          </div>
        ))}
      </div>
      
      {/* search */}
      <div className="Search bg-transparent flex  border-b-[.5px] items-center justify-content lg:ml-48 ml-0">
        <IoIosSearch/>
        <input className='bg-[#0d1829] flex bg-transparent pl-2 text-[#cccccc] outline-none underline-offset-1 ' type='text' placeholder='Search' />
        <span className="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5" id="button-addon2"></span>
      </div>
    </div>
  );
}

export default Navbar;
