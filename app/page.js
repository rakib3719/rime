import Image from "next/image";
import Navbar from "./[components]/navbar/Navbar";
import Banner from "./[components]/Banner";
import SocialLInks from "./[components]/others/SocialLInks";

export default function Home() {
  return (
  <div className="relative">
<div className="fixed z-50 left-0 top-1/2  ">
<SocialLInks/>
</div>
<Navbar/>

<Banner/>


  </div>
  );
}
