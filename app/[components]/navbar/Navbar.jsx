'use client'
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import logo from '@/asset/image/logo.jpeg';
import Link from "next/link";
import Header from "./Header";
import { usePathname } from "next/navigation";
import SocialLInks from "../others/SocialLInks";

const Navbar = () => {
  const pathname = usePathname();
  
  // If the current pathname contains '/admin', do not render the navbar
  if (pathname.includes('/admin' || '/login')) {
    return null;
  }

  return (
    <>
      <Header />
      {/* Navbar */}
    
      <nav className="sticky top-0 left-0 w-full bg-white shadow-lg z-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Image src={logo} alt="Logo" className="w-16 h-16 rounded-lg shadow-lg" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-lg text-[#4A4A4A] font-medium">
            <Link href="/" className="hover:text-[#1E2A47] transition-all duration-300 ease-in-out transform hover:scale-105">Home</Link>
            <Link href="/about" className="hover:text-[#1E2A47] transition-all duration-300 ease-in-out transform hover:scale-105">About Us</Link>
            <Link href="/project" className="hover:text-[#1E2A47] transition-all duration-300 ease-in-out transform hover:scale-105">Our Projects</Link>
            <Link href="/contact" className="hover:text-[#1E2A47] transition-all duration-300 ease-in-out transform hover:scale-105">Contact Us</Link>
            <Link href="/#why" className="hover:text-[#1E2A47] transition-all duration-300 ease-in-out transform hover:scale-105">Why Choose Us?</Link>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
