import React from 'react';
import { FaHome } from 'react-icons/fa'; // Home icon for real estate theme

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg flex justify-center items-center z-50">
      {/* Loader Content */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <FaHome className="text-5xl text-yellow-500 animate-spin-slow" />
        <h1 className="text-xl text-white font-semibold">Loading Properties...</h1>
        <div className="border-t-4 border-t-yellow-500 border-solid w-16 h-16 rounded-full animate-spin"></div> {/* Spinner */}
      </div>
    </div>
  );
};

export default Loader;
