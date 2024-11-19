'use client';

import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { FaTrashAlt } from "react-icons/fa";
import { MdSystemUpdateAlt } from "react-icons/md";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import Swal from "sweetalert2";

const ProjectTable = () => {
  const [selectedProject, setSelectedProject] = useState(null); // Track selected project for modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility

  // Fetch all projects
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['allProjects'],
    queryFn: async () => {
      const resp = await axios.get('/api/project');
      return resp.data;
    },
  });

  if (isLoading) {
    return (
      <tbody>
        <tr>
          <td colSpan="7" className="py-6 text-center text-gray-500 text-lg">
            Loading...
          </td>
        </tr>
      </tbody>
    );
  }

  if (isError || !data) {
    return (
      <tbody>
        <tr>
          <td colSpan="7" className="py-6 text-center text-red-500 text-lg">
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
      Swal.fire("Deleted!", "The project has been deleted.", "success");
    } else {
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
        deleteProject(id);
      }
    });
  };

  const toggleTopStatus = async (id, currentStatus) => {
    const newStatus = !currentStatus;
    console.log(id, newStatus); // Log _id and new status
    setIsModalOpen(false); // Close the modal
    try {
      const resp = await axios.patch(`/api/project/${id}`, { top: newStatus });
      if (resp.status === 200) {
        refetch();
        Swal.fire("Success!", `Project ${newStatus ? "added to" : "removed from"} home.`, "success");
      }
    } catch (error) {
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
              {!project?.top ? (
                <AiFillCheckCircle
                  size={24}
                  className="text-green-500 cursor-pointer"
                  onClick={() => {
                    setSelectedProject(project);
                    setIsModalOpen(true);
                  }}
                />
              ) : (
                <AiFillCloseCircle
                  size={24}
                  className="text-red-500 cursor-pointer"
                  onClick={() => {
                    setSelectedProject(project);
                    setIsModalOpen(true);
                  }}
                />
              )}
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
              {selectedProject.top
                ? "Remove from Home"
                : "Add to Home Page"}
            </h3>
            <p className="mt-4 text-gray-600">
              Are you sure you want to{" "}
              {selectedProject.top ? "remove" : "add"} this project from the home
              page?
            </p>
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg"
              >
                Cancel
              </button>
              <button
                // onClick={() =>
                //   toggleTopStatus(selectedProject._id, selectedProject.top)
                // }
                className={`px-4 py-2 ${
                  !projects.top
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-green-500 hover:bg-green-600"
                } text-white rounded-lg`}
              >
                {projects.top ? "Remove" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectTable;
