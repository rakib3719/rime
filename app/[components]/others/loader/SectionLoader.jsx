import React from 'react';
import { FaHome } from 'react-icons/fa'; // Icon related to real estate theme

const SectionLoader = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-opacity-60 flex justify-center items-center ">
        <div className="text-center flex justify-center flex-col animate-fadeIn">
          <FaHome className="text-6xl text-yellow-400 animate-pulse mx-auto mb-4 transform hover:scale-110 transition duration-300" />
          <h3 className="text-2xl text-gray-700 font-semibold mt-4 tracking-wide">
            Loading Properties...
          </h3>
          <p className="text-lg text-gray-500 mt-2 opacity-75">Please wait while we fetch the best properties for you.</p>
        </div>
      </div>
    </div>
  );
};

export default SectionLoader;
