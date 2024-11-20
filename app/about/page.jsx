import AboutUs from "../[components]/aboutus/AboutUs";
import aboutImg from '../../asset/image/about2.png'
import Mission from "../[components]/aboutPage/Mission";
import Service from "../[components]/aboutPage/Service";


const page = () => {
    return (
        <div className="  mt-20 md:mt-28">
          <AboutUs header={'COMPANY BACKGROUND'} title={'We trust a house is not only an amalgamation of concrete and mortar neither is it a place where you just view enclosed in our walls. We believe in homes the special place that helps you to discover the real you. Our aim is to partner with you in this art of homemaking. Since inception, we have been creating home and work spaces with a difference, to make a good living with affordability. We offer you a global touch living style, dovetail upmarket design, superior materials, and excellence in construction to deliver, at the least, comfortable homes at convenient prices, within the committed time frames.'} aboutImg={aboutImg}/>


          <Mission/>
          <Service/>
        </div>
    );
};

export default page;