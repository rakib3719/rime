'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  const pathname = usePathname();
  
  
  // If the current pathname contains '/admin', do not render the footer
  if (pathname.includes('/admin' || '/login')) {
    return null;
  }

  return (
    <footer className="bg-gray-800 mt-12 text-gray-300 py-10">
      <div className="max-w-[1400px] mx-auto  grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Address Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">Address</h3>
          <p>House # 12 (Ground & 1st Floor)</p>
          <p>Road # 16/A, Gulshan-01</p>
          <p>Dhaka-1212</p>
          <p>
            <strong>Email:</strong> info@glgassets.com
          </p>
          <p>
            <strong>Phone:</strong> 16772
          </p>
        </div>

        {/* Navigation Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                » Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                » About
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                » Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                » Our Project
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                » Best Real Estate Company in Bangladesh
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">Newsletter</h3>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-700 text-gray-300 py-2 px-3 mb-3 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-700 text-gray-300 py-2 px-3 mb-3 rounded"
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-3 rounded hover:bg-red-700"
            >
              SUBSCRIBE
            </button>
          </form>
          <div className="flex items-center space-x-4 mt-5 text-xl">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-5">
        © 2024 RIME LTD. All Rights Reserved.
        <br />
        Developed by <span className="text-white font-bold">Cholo Bohodhur Soft</span>
      </div>
    </footer>
  );
};

export default Footer;


















