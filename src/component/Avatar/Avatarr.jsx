import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Avatarr() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
        
      <button
        onClick={toggleDropdown}
        className="text-green-600 py-2 px-4 rounded focus:outline-none"
      >
            <div className="flex gap-2 items-center h-[1px] w-[10px] text-green-500">
            <Avatar className='text-green-600'/><i class="fa-solid fa-angle-down "></i>
            </div>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <Link to={'/account'}
              className="block px-4 py-2 text-sm text-green-900 hover:bg-gray-100"
            >
              My Account
            </Link>

            <Link to={'home'}
              className="block px-4 py-2 text-sm text-green-900 hover:bg-gray-100"
            >
              Home
            </Link>

            <Link to={'order'}
              className="block px-4 py-2 text-sm text-green-900 hover:bg-gray-100"
            >
              My Orders
            </Link>

            <Link to={'cart'}
              className="block px-4 py-2 text-sm text-green-900 hover:bg-gray-100"
            >
              Cart
            </Link>

            <Link to={'wishlist'}
              className="block px-4 py-2 text-sm text-green-900 hover:bg-gray-100"
            >
              Wishlist
            </Link>


            <Link to={'/signup'}
              className="block px-4 py-2 text-sm text-green-900 hover:bg-gray-100"
            >
              Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatarr;
