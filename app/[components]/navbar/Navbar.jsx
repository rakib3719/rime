'use client'
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import logo from '@/asset/image/logo-removebg-preview.png';
import Link from "next/link";

import { usePathname } from "next/navigation";
import Header from "./Header";

const Navbar = () => {
  const pathname = usePathname();

  // If the current pathname contains '/admin' or '/login', do not render the navbar
  if (pathname.includes('/admin') || pathname.includes('/login')) {
    return null;
  }

  console.log(pathname.split('/')[1], "pathname");
  const currentPage = pathname.split('/')[1];

  // Navigation menu items array
  const menuItems = [
    { pathname: "Home", path: "/" },
    { pathname: "About Us", path: "/about" },
    { pathname: "Our Projects", path: "/project" },
    { pathname: "Contact Us", path: "/contact" },
    { pathname: "Why Choose Us?", path: "/#why" },
  ];

  return (
    <>
      <Header />
      {/* Navbar */}
      <nav className="sticky top-0 left-0 w-full bg-white shadow-lg z-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-20">

          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Image src={logo} alt="Logo" className="w-16 h-16 rounded-lg" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-lg text-[#4A4A4A] font-medium">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`hover:text-[#1E2A47] transition-all duration-300 ease-in-out transform hover:scale-105 ${
                  pathname === item.path ? "text-[#2a4fa4]" : ""
                }`}
              >
                {item.pathname}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
