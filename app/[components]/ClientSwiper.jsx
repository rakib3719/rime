'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";

const ClientSwiper = ({ banners }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          {/* Parent container for image and overlay */}
          <div className="relative w-full h-full">
            {/* Image */}
            <Image
              src={banner.src}
              alt={banner.alt}
              layout="responsive"
              className="w-full h-full object-cover"
            />
            {/* Subtle Black Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClientSwiper;
