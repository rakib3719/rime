"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import SectionLoader from "../../others/loader/SectionLoader";
import Slider from "react-slick";
import Link from "next/link";
import { FaBuilding, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import axios from "axios";
import Image from "next/image";

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-black text-white rounded-full p-2 hover:bg-[#1E2A47]"
    onClick={onClick}
  >
    <FaChevronRight size={20} />
  </button>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-black text-white rounded-full p-2 hover:bg-[#1E2A47]"
    onClick={onClick}
  >
    <FaChevronLeft size={20} />
  </button>
);

// Slider settings with responsive breakpoints
const sliderSettings = {

   infinite: true, 
  autoplay: true,
   speed: 2000, 
   autoplaySpeed: 4000, 
   cssEase: "linear", 
   slidesToShow: 3,
    slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Project = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["allProjectsHome"],
    queryFn: async () => {
      const resp = await axios.get("/api/project?paginate=false");
      return resp?.data;
    },
  });

  const projects = data?.data;

  if (isLoading) {
    return (
      <div className="py-28 text-center">
        <SectionLoader />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="py-6 text-center text-red-500 text-lg">
        Failed to load data.
      </div>
    );
  }

  return (
    <div className="slider-wrapper max-w-[96%] mx-auto py-8 relative">
      <Slider {...sliderSettings}>
        {projects.map((data) => (
          <div key={data?._id} className="px-2">
            <div className="card">
              <div className="relative">
                {/* Image */}
                <figure className="h-[300px] w-full relative">
                  <Image
                    src={data?.frontImage}
                    alt="property image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </figure>

                {/* Status and Area */}
                <p className="bg-[#1E2A47B3] text-white p-2 status absolute top-0 left-0">
                  {data?.category}
                </p>
                <p className="bg-[#1E2A47B3] text-white p-2 status2 absolute top-0 right-0">
                  {data?.status}
                </p>
              </div>

              {/* Location and Price */}
              <div className="flex justify-between p-2 font-workSense bg-black text-white">
                <p className="flex items-center gap-2">
                  <IoLocationOutline className="text-yellow-500" />
                  {data?.location}
                </p>
                <p className="flex items-center gap-2">
                  <FaCircleDollarToSlot className="text-yellow-500" />
                  $350,000
                </p>
              </div>

              {/* Card Body */}
              <div className="card-body">
                <h2 className="card-title font-poppins font-bold">
                  {data?.projectName}
                </h2>
                <p className="flex items-center gap-2">
                  <FaBuilding className="text-[#1E2A47]" /> Residential
                </p>

                {/* View Property Button */}
                <div className="card-actions justify-end">
                  <Link
                    href={`/project/${data?._id}`}
                    className="btn hover:bg-black hover:text-white bg-[#1E2A47] text-white w-full"
                  >
                    View Property
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* View All Button */}
      <div className="text-center mt-8">
        <Link
          href="/project"
          className="btn bg-[#1E2A47] text-white hover:bg-black px-6 py-3 mt-12 rounded-lg shadow-md"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
};

export default Project;
