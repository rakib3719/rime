"use client";

import SectionLoader from "@/app/[components]/others/loader/SectionLoader";
import { imageUpload } from "@/app/utilites/photoUpload";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const Page = ({ params }) => {
  const  {id } = useParams()

  const [loader, setLoader] = useState(false);
  const [imageFile, setImages] = useState([])
  const {data, isLoading} = useQuery({
queryKey:['singleProject', id],
queryFn: async ()=>{
  const data =await axios.get(`/api/action/${id}`);
  return data
}


  })
if(isLoading){
  return <div className="flex justify-center mt-56 items-center">
    <SectionLoader/>
  </div>
}
  console.log(data,'ddddd');
  const {
    _id,
    projectName,
    location,
    category,
    projectType,
    description,
    dateOfCompletion,
    dateOfExpectedHandover,
    levels,
    status,
    availableUnits,
    totalUnits,
    carParking,
    images,
    communityHall,
    top,
    
         } = data?.data?.data;

    const     frontImage2 = data?.data?.data
  // const [project, setProject] = useState(null); 
  // const [loader, setLoader] = useState(false); 


const handleImageUpload = (e) => {

 
    const files = Array.from(e.target.files);
    setImages(files);
}


const handleSubmit = async (e) => {
  e.preventDefault();
  setLoader(true);

  let imagesUrl = [...images]; // Start with existing images
  let front_image_url = frontImage2; // Default to existing front image

  try {
    // Check if new images are uploaded
    if (imageFile.length > 0) {
      const uploadPromises = imageFile.map(async (image) => {
        const imgUrl = await imageUpload(image);
        return imgUrl;
      });

      const uploadedUrls = await Promise.all(uploadPromises);
      imagesUrl = [...imagesUrl, ...uploadedUrls]; // Combine existing and new images
    }

    // Check if a new front image is uploaded
    const form = e.target;
    const frontImage = form.frontImage.files[0]; // Check for uploaded file
    if (frontImage) {
      front_image_url = await imageUpload(frontImage); // Upload the new front image
    }

    // Prepare the data object
    const data = {
      projectName: form.projectName.value,
      location: form.location.value,
      category: form.category.value,
      projectType: form.projectType.value,
      description: form.description.value,
      dateOfCompletion: form.dateOfCompletion.value,
      dateOfExpectedHandover: form.dateOfExpectedHandover.value,
      levels: form.levels.value,
      status: form.status.value,
      availableUnits: form.availableUnits.value,
      totalUnits: form.totalUnits.value,
      carParking: form.carParking.value,
      images: imagesUrl, // Use updated image URLs
      communityHall: form.communityHall.checked,
      frontImage: front_image_url, // Use updated front image
      top: top,
    };

    // Send updated data to the server
    const resp = await axios.put(`/api/action/${_id}`, data);

    if (resp?.data?.result?.modifiedCount) {
      toast.success("Updated successfully");
    } else {
      toast.error("Something went wrong. Please try again later!");
    }
  } catch (error) {
    console.error(error.message);
    toast.error(error?.message || "Image upload failed");
  } finally {
    setLoader(false);
  }
};









console.log(id, 'finally id i sgget');
  return (
    <div className="max-w-4xl mt-12 mx-auto p-6 bg-white shadow-md rounded-lg">
      <ToastContainer/>
      <h1 className="text-center text-3xl font-bold">Update {projectName} </h1>
     <form onSubmit={handleSubmit} className="space-y-8">
        {/* Project Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="projectName" className="text-lg font-medium text-gray-700">Project Name</label>
            <input
              id="projectName"
              name="projectName"
              type="text"
              defaultValue={projectName}
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
              defaultValue={location}
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
            defaultValue={category}
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
            defaultValue={projectType}
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
            defaultValue={description}
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
              defaultValue={dateOfCompletion}
              className="border border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="dateOfExpectedHandover" className="text-lg font-medium text-gray-700">Date of Expected Handover</label>
            <input
              id="dateOfExpectedHandover"
              name="dateOfExpectedHandover"
              type="date"
              defaultValue={dateOfExpectedHandover}
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
            defaultValue={status}
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
              defaultValue={levels}
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
              defaultValue={totalUnits}
              className="border border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="availableUnits" className="text-lg font-medium text-gray-700">Available Units</label>
            <input
              id="availableUnits"
              name="availableUnits"
              type="number"
              defaultValue={availableUnits}
              className="border border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="carParking" className="text-lg font-medium text-gray-700">Car Parking</label>
            <input
              id="carParking"
              name="carParking"
              type="number"
              defaultValue={carParking}
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
            defaultValue={communityHall}
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
        <div className="flex flex-col">
          <label htmlFor="images" className="text-lg font-medium text-gray-700">Upload front image</label>
          <input
            id="image"
            name="frontImage"
            type="file"
            accept="image/*"
        
            className="border border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
          disabled={loader}
            type="submit"
            className="px-6 py-3 bg-[#374a75] text-white font-medium rounded-lg hover:bg-[#212b42] focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
           {
            !loader ? 'Update Project' : 'Loading....'
           }
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
