import Image from "next/image";
import Navbar from "./[components]/navbar/Navbar";
import Banner from "./[components]/Banner";
import SocialLInks from "./[components]/others/SocialLInks";
import AboutUs from "./[components]/aboutus/AboutUs";
import Footer from "./[components]/footer/Footer";

export default function Home() {
  return (
  <div className="relative font-poppins">
<div className="fixed z-50 left-0 top-1/2  ">
<SocialLInks/>
</div>
<Navbar/>

<Banner/>

<AboutUs/>
<Footer/>


  </div>
  );
}
