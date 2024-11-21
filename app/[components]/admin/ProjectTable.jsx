'use client';

import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { FaTrashAlt } from "react-icons/fa";
import { MdSystemUpdateAlt } from "react-icons/md";
import Swal from "sweetalert2";
import SectionLoader from "../others/loader/SectionLoader"; // Make sure you have a loader component like this

const ProjectTable = () => {
  const [selectedProject, setSelectedProject] = useState(null); // Track selected project for modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [loader, setLoader] = useState(false) // Loader state for deleting

  // Fetch all projects
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['allProjects'],
    queryFn: async () => {
      const resp = await axios.get('/api/project?paginate=false');
      return resp.data;
    },
  });

  if (isLoading) {
    return (
      <tr>
        <td colSpan="6" className="py-28 text-center text-gray-500 text-lg">
          <SectionLoader /> {/* Your custom loader component */}
        </td>
      </tr>
    );
  }

  if (isError || !data) {
    return (
      <tbody>
        <tr>
        <td colSpan="6" className="py-6 text-center text-red-500 text-lg">
          Failed to load data.
        </td>
      </tr>
      </tbody>
    );
  }

  const projects = data.data;

  const deleteProject = async (id) => {
    const resp = await axios.delete(`/api/action/${id}`);
    if (resp.status === 200) {
      refetch();
      setLoader(false);
      Swal.fire("Deleted!", "The project has been deleted.", "success");
    } else {
      setLoader(false);
      Swal.fire("Error!", "Failed to delete the project.", "error");
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoader(true);
        deleteProject(id);
      }
    });
  };

  const toggleTopStatus = async (id, currentStatus) => {
    setLoader(true);
    const newStatus = !currentStatus;
    setIsModalOpen(false); // Close the modal
    try {
      const resp = await axios.put(`/api/top/${id}`, { top: newStatus });
      if (resp.status === 200) {
        refetch();
        setLoader(false);
        Swal.fire("Success!", `Project ${newStatus ? "added to" : "removed from"} home.`, "success");
      }
    } catch (error) {
      setLoader(false);
      Swal.fire("Error!", "Failed to update project.", "error");
    }
  };

  return (
    <>
      <tbody>
        {projects?.map((project) => (
          <tr
            key={project?._id}
            className="bg-white hover:bg-gray-50 transition-all border-b"
          >
            <td className="py-4 px-6 text-sm text-gray-800 font-semibold">
              {project?.projectName}
            </td>
            <td className="py-4 px-6 text-sm text-gray-600">
              {project?.availableUnits}
            </td>
            <td className="py-4 px-6 text-sm text-gray-600">
              {project?.levels}
            </td>
            <td className="py-4 px-6 text-sm text-gray-600">
              {project?.totalUnits}
            </td>
            <td className="py-4 px-6 text-sm text-gray-600">
              {project?.location}
            </td>
            <td className="py-4 px-6 text-center">
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => handleDelete(project._id)}
                  className="bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-lg shadow-md transition"
                  aria-label="Delete"
                >
                  <FaTrashAlt size={18} />
                </button>
                <button
                  className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-lg shadow-md transition"
                  aria-label="Update"
                >
                  <Link href={`/admin/allProject/${project?._id}`}>
                    <MdSystemUpdateAlt size={20} />
                  </Link>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold text-gray-800">
              {selectedProject.top ? "Remove from Home" : "Add to Home Page"}
            </h3>
            <p className="mt-4 text-gray-600">
              Are you sure you want to{" "}
              {selectedProject.top ? "remove" : "add"} this project from the home page?
            </p>
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() =>
                  toggleTopStatus(selectedProject._id, selectedProject.top)
                }
                className={`px-4 py-2 ${
                  selectedProject.top
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-green-500 hover:bg-green-600"
                } text-white rounded-lg`}
              >
                {selectedProject.top ? "Remove" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectTable;
