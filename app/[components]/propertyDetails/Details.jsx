import { useQuery } from "@tanstack/react-query";
import SectionLoader from "../others/loader/SectionLoader";
import axios from "axios";
import {
  FaCalendarCheck,
  FaCalendarAlt,
  FaBuilding,
  FaLocationArrow,
  FaLayerGroup,
  FaCar,
  FaThList,
  FaCheckCircle,
} from "react-icons/fa";
import Image from "next/image"; // Import next/image for optimized image loading

const Details = ({ id }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["projectDetails"],
    queryFn: async () => {
      const resp = await axios.get(`/api/action/${id}`);
      return resp?.data?.data;
    },
  });

  if (isLoading) {
    return (
      <div className="py-28 text-center">
        <SectionLoader />
      </div>
    );
  }

  console.log(data, "alhamdulillah");

  return (
    <div>
      {/* Header Section */}
      <div className="w-[94%] md:w-[90%] mx-auto mt-8">
        <div
          className="hero min-h-[80vh] h-full border-[3px] border-b-0 rounded-b-none rounded border-[#1E2A47]"
          style={{ backgroundImage: `url(${data?.frontImage})` }}
        >
          <div className="hero-overlay bg-opacity-40"></div>
          <div className="hero-content animate__animated animate__fadeInDown text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-3xl font-bold font-playFair">
                {data?.projectName}
              </h1>
              <h1 className="mb-5 text-xl animate__animated animate__fadeInLeft font-bold font-poppins">
                {data?.location}
              </h1>
            </div>
          </div>
        </div>

        {/* Key Project Details */}
        <div className="bg-[#1E2A47] grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 px-2 font-workSense text-white">
          <div className="flex items-center gap-3">
            <FaCalendarCheck />
            <p>{data?.dateOfCompletion || "N/A"}</p>
          </div>
          <div className="flex items-center gap-3">
            <FaCalendarAlt />
            <p>{data?.dateOfExpectedHandover || "N/A"}</p>
          </div>
          <div className="flex items-center gap-3">
            <FaBuilding />
            <p>{data?.status || "N/A"}</p>
          </div>
          <div className="flex items-center gap-3">
            <FaLocationArrow />
            <p>{data?.location || "N/A"}</p>
          </div>
          <div className="flex items-center gap-3">
            <FaLayerGroup />
            <p>{data?.levels || "N/A"} Levels</p>
          </div>
          <div className="flex items-center gap-3">
            <FaThList />
            <p>
              {data?.availableUnits}/{data?.totalUnits} Units Available
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaCar />
            <p>{data?.carParking ? "Car Parking Available" : "No Parking"}</p>
          </div>
          <div className="flex items-center gap-3">
            <FaCheckCircle />
            <p>{data?.communityHall ? "Community Hall" : "No Hall"}</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-8">
          <h1 className="font-poppins font-semibold text-xl">
            {data?.projectName} - {data?.status}
          </h1>
          <p className="font-workSense">Located in {data?.location}</p>

          {/* Description */}
          <div className="mt-4 sm:w-[70%] lg:w-[60%]">
            <span className="font-bold font-playFair text-lg">Description:</span>
            <p className="font-workSense mt-2">{data?.description}</p>
          </div>

          {/* Facilities */}
          <div className="mt-4">
            <h1 className="font-bold font-playFair text-2xl">Facilities:</h1>
            <ul className="list-disc list-inside mt-2 font-workSense">
              <li>Levels: {data?.levels}</li>
              <li>Total Units: {data?.totalUnits}</li>
              <li>Available Units: {data?.availableUnits}</li>
              <li>Car Parking: {data?.carParking ? "Yes" : "No"}</li>
              <li>
                Community Hall: {data?.communityHall ? "Available" : "Not Available"}
              </li>
            </ul>
          </div>

          {/* Image Gallery */}
          <div className="mt-8">
            <h1 className="font-bold font-playFair text-2xl">Gallery:</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {data?.images?.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                >
                  {/* Lazy Loading with Next.js Image component */}
                  <Image
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-40 object-cover"
                    width={400}
                    height={300}
                    loading="lazy" // Lazy loading
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
