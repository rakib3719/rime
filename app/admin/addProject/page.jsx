'use client'

import { imageUpload } from '@/app/utilites/photoUpload';
import axios from 'axios';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';


const ProjectForm = () => {
  const [facilities, setFacilities] = useState([]);
  const [images, setImages] = useState([]);
  const [pdf, setPdf] = useState(null);
  const [loader, setLoader] = useState(false)

  // Handle change in facilities checkboxes
  const handleFacilityChange = (e) => {
    const { value, checked } = e.target;
    setFacilities((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };
console.log(images, 'images');
  // Handle image upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  // Handle PDF upload
  const handlePdfUpload = (e) => {
    setPdf(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    setLoader(true)
    e.preventDefault();
  
    console.log(images, 'Images to upload');
  
    // Array to store uploaded image URLs
    const imagesUrl = [];
  
    try {
     
      const uploadPromises = images.map(async (image) => {
        const imgUrl = await imageUpload(image); 
        return imgUrl;
      });
  
    
      const uploadedUrls = await Promise.all(uploadPromises);
      imagesUrl.push(...uploadedUrls); 

      const form = e.target;
      const data = {

projectName: form.projectName.value,
location: form.location.value,
category: form.category.value,
projectType: form.projectType.value,
description: form.description.value,
dateOfCompletion:form.dateOfCompletion.value,
dateOfExpectedHandover:form.dateOfExpectedHandover.value,
levels: form.levels.value,
status: form.status.value,
availableUnits: form.availableUnits.value,
totalUnits: form.totalUnits.value,
carParking: form.carParking.value,
images: imagesUrl,
communityHall: form.communityHall.value






      }

    const resp = await axios.post('/api/project', data);
    console.log(resp?.status, "doen");

    if(resp?.status === 200){
      toast.success('Projects added sucessfully')
      setLoader(false)
    }

    else{
      toast.error('something went wrong! plz try again later')
    setLoader(false)
    }


  console.log(data, 'ki abosta');
    } catch (error) {
      console.error( error.message);
  setLoader(false)
    }
  };
  

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <ToastContainer/>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Add New Project</h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Project Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="projectName" className="text-lg font-medium text-gray-700">Project Name</label>
            <input
              id="projectName"
              name="projectName"
              type="text"
              className="border border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter project name"
              required
            />
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <label htmlFor="location" className="text-lg font-medium text-gray-700">Location</label>
            <input
              id="location"
              name="location"
              type="text"
              className="border border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter location"
              required
            />
          </div>
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label htmlFor="category" className="text-lg font-medium text-gray-700">Category</label>
          <select
            id="category"
            name="category"
            className="border border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          >
            <option value="">Select Category</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Mixed">Mixed</option>
          </select>
        </div>

        {/* Project Type */}
        <div className="flex flex-col">
          <label htmlFor="projectType" className="text-lg font-medium text-gray-700">Project Type</label>
          <select
            id="projectType"
            name="projectType"
            className="border border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          >
            <option value="">Select Project Type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Mixed">Mixed</option>
          </select>
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="border border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter project description"
            required
          />
        </div>

        {/* Additional Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="dateOfCompletion" className="text-lg font-medium text-gray-700">Date of Completion</label>
            <input
              id="dateOfCompletion"
              name="dateOfCompletion"
              type="date"
              className="border border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="dateOfExpectedHandover" className="text-lg font-medium text-gray-700">Date of Expected Handover</label>
            <input
              id="dateOfExpectedHandover"
              name="dateOfExpectedHandover"
              type="date"
              className="border border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        {/* Status */}
        <div className="flex flex-col">
          <label htmlFor="status" className="text-lg font-medium text-gray-700">Status</label>
          <select
            id="status"
            name="status"
            className="border border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Select Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        {/* Levels, Units, Parking, and Community Hall */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <label htmlFor="levels" className="text-lg font-medium text-gray-700">Number of Levels</label>
            <input
              id="levels"
              name="levels"
              type="number"
              className="border border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="totalUnits" className="text-lg font-medium text-gray-700">Total Units</label>
            <input
              id="totalUnits"
              name="totalUnits"
              type="number"
              className="border border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="availableUnits" className="text-lg font-medium text-gray-700">Available Units</label>
            <input
              id="availableUnits"
              name="availableUnits"
              type="number"
              className="border border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="carParking" className="text-lg font-medium text-gray-700">Car Parking</label>
            <input
              id="carParking"
              name="carParking"
              type="number"
              className="border border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <input
            id="communityHall"
            name="communityHall"
            type="checkbox"
            className="w-6 h-6"
          />
          <label htmlFor="communityHall" className="text-lg font-medium text-gray-700">
            Community Hall
          </label>
        </div>

     
       

        {/* Image Upload */}
        <div className="flex flex-col">
          <label htmlFor="images" className="text-lg font-medium text-gray-700">Upload Images</label>
          <input
            id="images"
            name="images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="border border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
          disabled={loader}
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
           {
            !loader ? ' Submit Project' : 'Loading....'
           }
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
