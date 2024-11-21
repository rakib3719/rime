'use client';
import SectionLoader from "@/app/[components]/others/loader/SectionLoader";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const Messagepage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['message', currentPage],
    queryFn: async () => {
      const response = await axios.get(`/api/contact?page=${currentPage}`);
      return response.data;
    },
    keepPreviousData: true, 
  });

  if (isLoading) {
    return (
      <div className="py-28 text-center">
        <SectionLoader />
      </div>
    );
  }

  if (isError) {
    return <p className="text-center text-xl text-red-500">Error loading messages.</p>;
  }

  const { data: messages, totalPages } = data;

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold text-center mb-8 text-[#6a2b93]">Messages</h1>

     
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {messages.map((message) => (
          <div
            key={message._id}
            className="bg-white rounded-lg shadow-lg p-6 space-y-4 hover:shadow-2xl transition-all"
          >
            <h2 className="text-2xl font-semibold text-[#6a2b93]">{message.name}</h2>
            <div className="">
              <p className="text-lg text-gray-700">
                <strong>Email: </strong>{message.email}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Phone: </strong>{message.tel}
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md mt-4">
              <p className="text-md text-gray-800"><strong>Message:</strong></p>
              <p className="text-gray-600">{message.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-[#6a2b93] text-white rounded-lg hover:bg-[#5c1a7d] disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="mx-4 text-lg text-gray-700">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 bg-[#6a2b93] text-white rounded-lg hover:bg-[#5c1a7d] disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Messagepage;
