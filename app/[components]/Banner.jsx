import banner1 from "../../asset/image/banner1.jpg";
import banner2 from "../../asset/image/banner2.jpg";
import banner3 from "../../asset/image/banner3.jpg";
import banner4 from "../../asset/image/banner4.jpg";
import banner5 from "../../asset/image/banner5.jpg";

import dynamic from "next/dynamic";
import ClientSwiper from "./ClientSwiper";



const Banner = () => {
  const banners = [
    { src: banner1, alt: "Banner 1" },
    { src: banner2, alt: "Banner 2" },
    { src: banner3, alt: "Banner 3" },
    { src: banner4, alt: "Banner 4" },
    { src: banner5, alt: "Banner 5" },
  ];

  return (
    <div>
      {/* Render Swiper dynamically */}
      <ClientSwiper banners={banners} />
    </div>
  );
};

export default Banner;
