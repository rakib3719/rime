import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const SocialLInks = () => {
    return (
        <div className="z-30 space-y-4">
            <div className="bg-[#1e73be] p-4 ">
                <FaFacebookF className="text-white text-xl rounded-r"/>         
                
                   </div>
            <div className="bg-[#8abc3a] p-4 ">
                <FaWhatsapp className="text-white text-xl rounded-r"/>         
                
                   </div>
            <div className="bg-[#bcbcbc] p-4 ">
                <IoCall className="text-white text-xl rounded-r"/>         
                
                   </div>
       
        </div>
    );
};

export default SocialLInks;