import ProjectTable from "@/app/[components]/admin/ProjectTable";

const page = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">All Projects</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          {/* Table Header */}
          <thead>
            <tr className="bg-gradient-to-r from-rose-500 to-yellow-500 text-white">
              <th className="py-4 px-6 text-left text-sm font-semibold uppercase">
                Name
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold uppercase">
                Available Units
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold uppercase">
                Levels
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold uppercase">
                Total Units
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold uppercase">
                Location
              </th>
            
              <th className="py-4 px-6 text-center text-sm font-semibold uppercase">
                Action
              </th>
            </tr>
          </thead>
          {/* Table Body - Rendered by ProjectTable */}
          <ProjectTable />
        </table>
      </div>
    </div>
  );
};

export default page;
