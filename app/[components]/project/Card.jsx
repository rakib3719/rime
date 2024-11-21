'use client';

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionLoader from "../others/loader/SectionLoader";
import { IoLocationOutline } from "react-icons/io5";
import { FaBuilding, FaCheck } from "react-icons/fa";
import Link from "next/link";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";
import { MdDateRange } from "react-icons/md";

const Card = () => {
  const [page, setPage] = useState(1);
  const limit = 6; // Number of items per page

  const { data, isLoading, isError } = useQuery({
    queryKey: ["allProject", page],
    queryFn: async () => {
      const response = await axios.get(`/api/project?page=${page}&limit=${limit}`);
      return response;
    },
    keepPreviousData: true,
    
  });

  const projects = data?.data?.data;

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
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((data) => (
          <div key={data?._id} className="px-2">
            <div className="card">
              <div className="relative">
                {/* Image */}
                <figure className="h-[300px] w-full">
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
                  <IoLocationOutline className="text-yellow-500" /> {data?.location}
                </p>
                <p className="flex items-center gap-2">
                  <FaCircleDollarToSlot className="text-yellow-500" /> {data?.availableUnits} Units available
                </p>
              </div>

              {/* Card Body */}
              <div className="card-body">
                <h2 className="card-title font-poppins font-bold">{data?.projectName}</h2>
                <p className="my-2 h-16">{data?.description.slice(0, 100)}...</p>
                <p className="flex items-center gap-2">
                  <MdDateRange className="text-[#1E2A47]" /> Date Of Completion : {data?.dateOfCompletion}
                </p>
                <p className="flex items-center gap-2">
                  <MdDateRange className="text-[#1E2A47]" /> Date Of  Expected Handover : {data?.dateOfExpectedHandover}
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
      </div>

      {/* Pagination Controls */}
      {!isLoading && data && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
            className="btn mr-2"
          >
            Previous
          </button>
          <span className="my-auto text-lg">
            Page {page} of {data?.totalPages}
          </span>
          <button
            onClick={() => setPage((old) => (data?.page < data?.totalPages ? old + 1 : old))}
            disabled={data?.page === data?.totalPages}
            className="btn ml-2"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
