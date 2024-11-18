'use client'
const { AiOutlineDashboard, AiOutlineUser } = require("react-icons/ai");
const { BiWallet, BiPieChartAlt2 } = require("react-icons/bi");
const { BsGear } = require("react-icons/bs")



const Sidebar = () => {
    return (


<div
className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 md:translate-x-0 transform ${
  sidebarOpen ? "translate-x-0" : "-translate-x-full"
} transition-transform duration-300 z-40`}
>
<div className="flex items-center justify-center h-16 bg-gray-900">
  <h1 className="text-xl font-bold">Dashboard</h1>
</div>
<nav className="mt-4">
  <ul>
    <li className="flex items-center px-4 py-2 hover:bg-gray-700">
      <AiOutlineDashboard className="mr-3" />
      Dashboard
    </li>
    <li className="flex items-center px-4 py-2 hover:bg-gray-700">
      <AiOutlineUser className="mr-3" />
      Users
    </li>
    <li className="flex items-center px-4 py-2 hover:bg-gray-700">
      <BiWallet className="mr-3" />
      Wallet
    </li>
    <li className="flex items-center px-4 py-2 hover:bg-gray-700">
      <BiPieChartAlt2 className="mr-3" />
      Reports
    </li>
    <li className="flex items-center px-4 py-2 hover:bg-gray-700">
      <BsGear className="mr-3" />
      Settings
    </li>
  </ul>
</nav>
</div>
    );
};

export default Sidebar;