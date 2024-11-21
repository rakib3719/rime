'use client'
import Image from 'next/image';
import logo from '../../asset/image/logo.jpeg';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import Form from '../[components]/others/contact/Form';


const page = () => {


  
    return (
        <div>
            {/* Hero Section */}
            <div
                className="hero m min-h-60"
                style={{
                    backgroundImage: `url('/banner2.jpg')`,
                }}
            >
                <ToastContainer/>
                <div className="hero-overlay bg-[#c3bebe] bg-opacity-80"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div>
                        <h1 className="mb-5 bg-gray-700 text-white p-4 text-5xl font-bold rounded">
                          Contact us
                        </h1>
                    </div>
                </div>
            </div>

            {/* About & Form Section */}
            <section className="md:flex -mt-12 justify-between md:px-16 gap-6">
                {/* About Information */}
                <div className="text-xl space-y-6 bg-white drop-shadow-md shadow-lg pl-6 pr-12 pt-8 pb-16 rounded w-full md:w-1/2">
                    <Image src={logo} alt="logo" className="w-16 h-16 mb-4" />
                    <address>
                        House #12 (Ground & 1st Floor) <br />
                        Road #16/A, Gulshan-01, Dhaka-1212
                    </address>
                    <div>
                        <p>
                            Call: 
                            <span className="text-[#6a2b93] hover:underline ml-2">
                                167722
                            </span>
                        </p>
                        <p>
                            Email: 
                            <span className="text-[#6a2b93] hover:underline ml-2">
                                info@glgassets.com
                            </span>
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="text-xl space-y-6 bg-white drop-shadow-md shadow-lg p-8 rounded w-full md:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                        Contact Us
                    </h2>
                  <Form/>
                </div>
            </section>

           <div className='mt-14'>
   
           </div>
        </div>
    );
};

export default page;
