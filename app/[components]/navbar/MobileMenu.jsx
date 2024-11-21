"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Navigation menu items array
  const menuItems = [
    { pathname: "Home", path: "/" },
    { pathname: "About Us", path: "/about" },
    { pathname: "Our Projects", path: "/project" },
    { pathname: "Contact Us", path: "/contact" },
    { pathname: "Why Choose Us?", path: "/#why" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Menu Toggle Button */}
      <button onClick={toggleMenu} className="md:hidden text-gray-700">
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

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#333333] text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        {/* Close Button */}
        <div className="p-4">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white">
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

        {/* Menu Items */}
        <ul className="mt-8 space-y-4 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={`relative px-6 pb-2 pt-2   ${
                pathname === item.path
                  ? "bg-[#424242] text-[#3761c5]" // Active state
                  : "hover:bg-[#424242] hover:text-[#324e8f]"
              } transition-all duration-300 ease-in-out`}
            >
              <Link
                href={item.path}
                className="block transition-transform duration-300 ease-in-out transform hover:scale-105"
                onClick={toggleMenu} // Close menu after clicking a link
              >
                {item.pathname}
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer Section */}
        <div className="absolute bottom-0 left-0 w-full bg-[#424242] p-4 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Rime Real state</p>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
