import Banner from "./[components]/Banner";
import AboutUs from "./[components]/aboutus/AboutUs";
import aboutImg from '../asset/image/aboutusimg.png'
import More from "./[components]/others/More";

export default function Home() {
  return (
  <div className="relative font-poppins">


<Banner/>

<AboutUs header={'ABOUT US'} title={'default'}  aboutImg={aboutImg}/>

<More/>


  </div>
  );
}
