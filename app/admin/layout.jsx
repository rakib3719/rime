'use client'
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import { BiWallet, BiPieChartAlt2 } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import logo from '../../asset/image/logo.jpeg';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const path = usePathname().split('/')[2] || "null";

  const queryClient = new QueryClient()
  
  // Links data array
  const Links = [
    {
      path: '/admin',
      name: "Home",
      slug: 'null',
      icon: <AiOutlineDashboard />
    },
    {
      path: 'admin/addProject',
      name: "Add Project",
      slug: 'addProject',
      icon: <AiOutlineUser />
    },
    {
      path: 'admin/allProject',
      name: "All Projects",
      slug: 'allProject',
      icon: <BiWallet />
    },
    {
      path: '/reports',
      name: "Reports",
      slug: 'reports',
      icon: <BiPieChartAlt2 />
    },
    {
      path: '/settings',
      name: "Settings",
      slug: 'settings',
      icon: <BsGear />
    },
  ];



  return (
  <>
        {/* Top Navbar */}
        <div className="fixed top-0 left-0 w-full h-16 bg-white shadow-md flex items-center justify-between px-4 z-50">
          <h1 className="text-2xl font-bold text-blue-500">
            <Link href={'/'}><Image src={logo} alt={'logo'} className="w-16 h-16 " /></Link>
          </h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search your key..."
              className="hidden md:block border border-gray-300 rounded-md px-3 py-1"
            />
            <div className="relative">
              <button className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">20</span>
              </button>
            </div>
            <button
              className="md:hidden text-xl"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Sidebar */}
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
              {Links.map((link) => (
                <li key={link.slug} className={`flex  items-center px-4 py-2 ${path === link.slug && 'bg-yellow-500'}`}>
                  <Link href={link.path} className="flex items-center w-full">
                    {link.icon && <span className="mr-3">{link.icon}</span>}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main Content */}

<QueryClientProvider client={queryClient}>
<div className="pt-16 md:pl-64">{children}</div>

</QueryClientProvider>

  
 </>
  );
}
