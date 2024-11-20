'use client';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Messagepage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['message'],
    queryFn: async () => {
      const data = await axios.get('/api/contact');
      return data?.data || [];  
    }
  });

  if (isLoading) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  if (isError) {
    return <p className="text-center text-xl text-red-500">Error loading messages.</p>;
  }
  console.log(data?.data, "data");
  // Ensure data is an array before using .map()
 

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold text-center mb-8 text-[#6a2b93]">Messages</h1>
      
      {/* Messages List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.data.map((message) => (
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
    </div>
  );
};

export default Messagepage;
