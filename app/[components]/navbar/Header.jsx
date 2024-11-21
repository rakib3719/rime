'use client'
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
    
    return (
        <div>
            <div className="flex justify-between items-center p-4 bg-[#2e4271] text-sm">
                {/* Left Section (Email & Phone with Icons) */}
                <div className="md:flex items-center gap-6">
                    <div className="text-white flex items-center gap-2">
                        <FaEnvelope className="text-yellow-300" />
                        <a href="mailto:sd.rakib36@gmail.com" className="text-white hover:text-yellow-300 transition-colors duration-300">
                            sd.rakib36@gmail.com
                        </a>
                    </div>
                    <div className="text-white mt-1 md:mt-0 flex items-center gap-2">
                        <FaPhoneAlt className="text-yellow-300" />
                        <a href="tel:+1234567890" className="text-white hover:text-yellow-300 transition-colors duration-300">
                            01608-538567
                        </a>
                    </div>
                </div>

                {/* Right Section (Social Media Icons) */}
                <div className="flex mt-2 lg:mt-0 items-center   md:gap-6 gap-2">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#3b5998] transition-colors duration-300"
                    >
                        <FaFacebook className="md:text-2xl text-xl" />
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#E4405F] transition-colors duration-300"
                    >
                        <FaInstagram className="md:text-2xl text-xl" />
                    </a>
                    <a
                        href="https://www.youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#FF0000] transition-colors duration-300"
                    >
                        <FaYoutube className="md:text-2xl text-xl" />
                    </a>
                    <a
                        href="https://wa.me/+1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#25D366] transition-colors duration-300"
                    >
                        <FaWhatsapp className="md:text-2xl text-xl" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
