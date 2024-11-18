import Image from "next/image";
import MobileMenu from "./MobileMenu";
import logo from '@/asset/image/logo.jpeg'
import Link from "next/link";


const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#cfcecd] shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#6a2b93]">
       <Image src={logo} alt={'logo'} className="w-16 h-16 "/>
          </div>
       
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 text-gray-700 font-medium">
            <Link href="/" className="hover:text-[#6a2b93] text-2xl font-bold">Home</Link>
            <Link href="/about" className="hover:text-[#6a2b93] text-2xl font-bold">About Us</Link>
            <a href="#" className="hover:text-[#6a2b93] text-2xl font-bold">Management Team</a>
            <a href="#" className="hover:text-[#6a2b93] text-2xl font-bold">Projects</a>
            <Link href="/admin" className="hover:text-[#6a2b93] text-2xl font-bold">Admin</Link>
            <Link href="/contact" className="hover:text-[#6a2b93] text-2xl font-bold">Contact Us</Link>
          </div>


          <MobileMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
