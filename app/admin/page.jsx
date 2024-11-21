'use client'
import { FaBuilding, FaLayerGroup } from "react-icons/fa";
import { MdOutlineApartment } from "react-icons/md";
import { GiArchiveRegister } from "react-icons/gi";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionLoader from "../[components]/others/loader/SectionLoader";

const DashboardHome = () => {


  const {data, isLoading} = useQuery({
    queryKey: ['dashboardinfo'],
    queryFn:async()=>{

const data = await axios.get('/api/dash');
return data?.data;

    }

  
  })
  if(isLoading){
    return  <div className="py-28 text-center">
    <SectionLoader />
  </div>
  }
  console.log(data,'dataaa');
  return (
    <div className="mt-20 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>
      {/* Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-gradient-to-r from-rose-500 to-yellow-500 text-white rounded-lg shadow-md p-6 flex items-center gap-4">
          <FaBuilding size={40} className="bg-white text-rose-500 p-2 rounded-full" />
          <div>
            <h3 className="text-lg font-semibold">Total Projects</h3>
           <p className="text-2xl font-bold">{data?.totalProjects}</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-r from-yellow-500 to-rose-500 text-white rounded-lg shadow-md p-6 flex items-center gap-4">
          <FaLayerGroup size={40} className="bg-white text-yellow-500 p-2 rounded-full" />
          <div>
            <h3 className="text-lg font-semibold">Total Levels</h3>
            <p className="text-2xl font-bold">{data?.totalLevels}</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-r from-rose-500 to-yellow-500 text-white rounded-lg shadow-md p-6 flex items-center gap-4">
          <MdOutlineApartment size={40} className="bg-white text-rose-500 p-2 rounded-full" />
          <div>
            <h3 className="text-lg font-semibold">Total Units</h3>
            <p className="text-2xl font-bold">{data?.totalUnits}</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-gradient-to-r from-yellow-500 to-rose-500 text-white rounded-lg shadow-md p-6 flex items-center gap-4">
          <GiArchiveRegister size={40} className="bg-white text-yellow-500 p-2 rounded-full" />
          <div>
            <h3 className="text-lg font-semibold">Available Units</h3>
            <p className="text-2xl font-bold">{data?.totalAvailableUnits
            }</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
