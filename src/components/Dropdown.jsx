import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Dropdown = () => {
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
        Events
      </button>
      {isOpen && (
        <div className="rounded-[8px] absolute top-full left-0 mt-1 py-2 w-60  bg-white shadow-md z-30 flex flex-col">
          <Link to = "/astrocampSandhan" className='className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-white cursor-pointer"'>Astrocamp Sandhan</Link>
          <Link to = "/astrocampKamshet" className='className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-white cursor-pointer"'>Astrocamp Pune</Link>
          <Link to = "/astrocampDahanu" className='className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-white cursor-pointer"'>Astrocamp Dahanu</Link>
          <Link to = "/astrocampSpiti" className='className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-white cursor-pointer"'>Astrocamp Spiti</Link>
          <Link to = "/astrocampLadakh" className='className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-white cursor-pointer"'>Astrocamp Ladakh</Link>
          <Link to = "/astrocampRajashthan" className='className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-white cursor-pointer"'>Astrocamp Rajasthan</Link>
          <Link to = "/astrocampKutch" className='className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-white cursor-pointer"'>Astrocamp Kutch</Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
