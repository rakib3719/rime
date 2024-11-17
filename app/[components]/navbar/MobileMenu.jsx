"use client"; 

import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    
      <button
        onClick={toggleMenu}
        className="md:hidden text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#333333] text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <div className="p-4">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="mt-8 space-y-4 pl-6 text-gray-300">
          <li>
            <a href="#" className="hover:text-rose-500">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-rose-500">About Us</a>
          </li>
          <li>
            <a href="#" className="hover:text-rose-500">Management Team</a>
          </li>
          <li>
            <a href="#" className="hover:text-rose-500">Projects</a>
          </li>
          <li>
            <a href="#" className="hover:text-rose-500">Blog</a>
          </li>
          <li>
            <a href="#" className="hover:text-rose-500">Contact Us</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
