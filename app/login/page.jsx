"use client";
import Link from "next/link";
import React, { useState } from "react";
import { TbLogin2 } from "react-icons/tb";
import { FaKey, FaRegUser, FaUnlockAlt } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loader, setLoader] = useState(false)

  const router = useRouter();

  const loginHandle = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (response.status === 200) {
      toast.success("Login success");
      setLoading(false);
      router.push("/admin");
    } else {
      toast.error("Incorrect email or password. Please try again!");
      setLoading(false);
    }
  };

  const handlePasswordChange = async(e) => {
    setLoader(true)
    e.preventDefault();
 const   oldPassword = e.target.old.value;
 const newPassword = e.target.new.value;
 const email = e.target.email.value;

 const data = {
  oldPassword,
   newPassword ,
    email
 }
 console.log(data);

try {
  const resp = await axios.put('/api/passUpdate',data);
  console.log(resp?.status);
 


  if(resp?.status === 200){
    toast.success('Password change successfully')
    setLoader(false)
    setIsModalOpen(false);
  }
  
} catch (error) {
if(error?.response?.data?.message){
  toast.error(error?.response?.data?.message)
  setLoader(false)

 
}
else{
  toast.error('something went wrong please try again')
  setLoader(false)
}
}
   
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 pb-20">
      <ToastContainer />
      <div className="w-full max-w-[700px] mt-24 pb-8 space-y-6 bg-white shadow-lg">
        {/* Header */}
        <div className="flex w-full items-center font-semibold text-lg gap-4 text-white px-8 py-2 bg-[#6a2b93]">
          <h1 className="text-3xl">
            <TbLogin2 />
          </h1>
          <h1>Sign in now</h1>
        </div>

        {/* Login Form */}
        <div className="md:flex">
          <form onSubmit={loginHandle} className="mt-8 space-y-6 px-8 w-full">
            <div className="rounded-md shadow-sm space-y-4">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="sr-only flex">
                  Email address
                </label>
                <div className="relative flex items-center">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaRegUser className="text-[#ababab] text-lg " />
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#6a2b93] focus:border-[#6a2b93] sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
              </div>

              {/* Password Field with Eye Icon */}
              <div>
                <label htmlFor="password" className="sr-only flex">
                  Password
                </label>
                <div className="relative flex items-center">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaKey className="text-[#ababab] text-lg " />
                  </span>
                  <input
                    id="password"
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="block w-full pl-10 pr-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#6a2b93] focus:border-[#6a2b93] sm:text-sm"
                    placeholder="Password"
                  />
                  <span
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {passwordVisible ? (
                      <AiFillEyeInvisible className="text-[#ababab]" />
                    ) : (
                      <AiFillEye className="text-[#ababab]" />
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  href="/forgot-password"
                  className="font-medium text-[#ababab] hover:text-[#6a2b93]"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            {/* Sign In Button */}
            <div>
              <button
                type="submit"
                className="group mt-16 relative flex w-full justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#6a2b93] hover:bg-[#3c0e5a] transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6a2b93] items-center gap-2"
              >
                <FaUnlockAlt className="mb-1" />{" "}
                {loading ? "Loading" : "Sign in"}
              </button>
            </div>
          </form>

          {/* Additional Section */}
          <div className="mt-6 px-8">
            <h1 className="font-semibold">YOU ARE AN ADMIN?</h1>
            <p className="font-medium text-[#4f4f4f] mt-4">
              If you are not an admin, this section is not for you. Please go
              back.
            </p>
            <ul className="space-y-2 mt-4 italic list-style">
              <li>Go to Dashboard</li>
              <li>Add New Project</li>
              <li>Update or Delete Existing Project</li>
            </ul>

            <Link
              href="/"
              className="group relative flex w-full justify-center mt-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#6a2b93] hover:bg-[#300d48] transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6a2b93]"
            >
              GO TO HOMEPAGE
            </Link>

            {/* Change Password Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative flex w-full justify-center mt-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#6a2b93] hover:bg-[#300d48] transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6a2b93]"
            >
          { loader? "loading..." :  "Change Password"}
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-[400px]">
            <h2 className="text-lg font-bold mb-4">Change Password</h2>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              
            <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-2 rounded-md"
               
                name="email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Old Password</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 p-2 rounded-md"
               
                name="old"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">New Password</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 p-2 rounded-md"
            
              name="new"
                  required
                />
               
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="py-2 px-4 bg-gray-300 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-[#6a2b93] text-white rounded-md"
                >
                 {loader? "loading..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
