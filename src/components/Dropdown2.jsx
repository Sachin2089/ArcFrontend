import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Dropdown2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button>
        Services
      </button>
      {isOpen && (
        <div className="rounded-[8px] absolute top-full left-0 mt-1 py-2 w-60  bg-white shadow-md z-30 flex flex-col">
          <Link to = "/services/arc-planeterium" className='className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-white cursor-pointer"'>Arc Mobile Planeterium</Link>
          <Link to = "/services/arc-astronomy-workshop" className='className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-white cursor-pointer"'>Arc Astronomy Workshop</Link>
          <Link to = "/services/astrocamp" className='className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-white cursor-pointer"'>Astrocamp</Link>
          <Link to = "/services/astronomy-club" className='className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-white cursor-pointer"'>Astronomy Club</Link>
          <Link to = "/services/astronomy-labs" className='className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-white cursor-pointer"'>Astronomy Labs</Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown2;
