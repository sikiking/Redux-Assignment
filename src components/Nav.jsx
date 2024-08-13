import React, { useState, useCallback } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Access cart items from Redux store
  const cart = useSelector(state => state.cart);
  const cartCount = cart.length; // Assuming cart is an array

  const isActive = useCallback(
    (path) => (location.pathname === path ? 'text-blue-500' : 'text-black'),
    [location.pathname]
  );

  const toggleChange = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleCross = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <header className="bg-white border-gray-200 fixed top-0 z-10 w-full mb-10">
        <div className="container mx-auto flex justify-between p-5 items-center">
          <Link to="/">
            <div>
              <h3 className="font-bold text-3xl m-1">
                <span>Book</span>
                <span className="text-red-500 text-2xl">Shop</span>
              </h3>
            </div>
          </Link>

          <div className="hidden md:block">
            <ul className="flex items-center text-lg justify-center font-semibold">
              <Link to="/">
                <li className={`mr-5 hover:text-gray-900 cursor-pointer ${isActive('/')}`}>Home</li>
              </Link>
              <Link to="/About">
                <li className={`mr-5 hover:text-gray-900 cursor-pointer ${isActive('/About')}`}>About</li>
              </Link>
              <Link to="/Contact">
                <li className={`mr-5 hover:text-gray-900 cursor-pointer ${isActive('/Contact')}`}>Contact</li>
              </Link>
            </ul>
          </div>

          {isOpen && (
            <div className="absolute inset-0 h-screen bg-red-600 z-10 flex flex-col items-center justify-center text-white">
              <ul className="flex flex-col gap-10 text-2xl font-semibold">
                <Link to="/" onClick={toggleCross}>
                  <li className={`hover:text-gray-900 cursor-pointer ${isActive('/')}`}>Home</li>
                </Link>
                <Link to="/About" onClick={toggleCross}>
                  <li className={`hover:text-gray-900 cursor-pointer ${isActive('/About')}`}>About</li>
                </Link>
                <Link to="/Contact" onClick={toggleCross}>
                  <li className={`hover:text-gray-900 cursor-pointer ${isActive('/Contact')}`}>Contact</li>
                </Link>
              </ul>
              <button className="absolute top-[83px] right-0 text-white py-2 px-4" onClick={toggleCross}>
                <RxCross2 size={30} />
              </button>
            </div>
          )}

          <div className="flex items-center gap-3">
            <Link to="/Login">
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-bold">
                Login
              </button>
            </Link>
            <Link to="/Cart">
              <button className="relative">
                <FaCartShopping size={30} />
                {cartCount > 0 && (
                  <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    {cartCount}
                  </span>
                )}
              </button>
            </Link>
            <button className="md:hidden" onClick={toggleChange}>
              <GiHamburgerMenu size={30} />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;