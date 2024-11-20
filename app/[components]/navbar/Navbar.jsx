import Image from "next/image";
import MobileMenu from "./MobileMenu";
import logo from '@/asset/image/logo.jpeg';
import Link from "next/link";
import Header from "./Header";


const Navbar = () => {
  return (
    <>
    <Header />
      {/* Navbar */}
      <nav className="sticky top-0 left-0 w-full bg-white shadow-lg z-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="logo" className="w-14 h-14 rounded-lg" />
           
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 text-[#4A4A4A] font-medium text-lg">
            <Link href="/" className="hover:text-[#1E2A47] transition-all duration-300">Home</Link>
            <Link href="/about" className="hover:text-[#1E2A47] transition-all duration-300">About Us</Link>
            <Link href="#" className="hover:text-[#1E2A47] transition-all duration-300">Management Team</Link>
            <Link href="#" className="hover:text-[#1E2A47] transition-all duration-300">Projects</Link>
            <Link href="/admin" className="hover:text-[#1E2A47] transition-all duration-300">Admin</Link>
            <Link href="/contact" className="hover:text-[#1E2A47] transition-all duration-300">Contact Us</Link>
          </div>

          <MobileMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
