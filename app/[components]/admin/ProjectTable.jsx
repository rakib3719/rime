'use client';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { MdSystemUpdateAlt } from "react-icons/md";

const ProjectTable = () => {
  const { data, isLoading, isError } = useQuery({
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
          <td colSpan="6" className="py-6 text-center text-gray-500 text-lg">
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
          <td colSpan="6" className="py-6 text-center text-red-500 text-lg">
            Failed to load data.
          </td>
        </tr>
      </tbody>
    );
  }

  const projects = data.data;

  return (
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
          <td className="py-4 px-6 text-sm text-gray-600 text-center">
            <div className="flex justify-center gap-4">
              <button
                className="bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-lg shadow-md transition"
                aria-label="Delete"
              >
                <FaTrashAlt size={18} />
              </button>
              <button
                className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-lg shadow-md transition"
                aria-label="Update"
              >
                <MdSystemUpdateAlt size={20} />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ProjectTable;
