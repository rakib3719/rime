import Image from 'next/image';
import logo from '../../asset/image/logo.jpeg';


const page = () => {
    return (
        <div>
            {/* Hero Section */}
            <div
                className="hero mt-20 min-h-60"
                style={{
                    backgroundImage: `url('/banner2.jpg')`,
                }}
            >
                <div className="hero-overlay bg-[#c3bebe] bg-opacity-80"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div>
                        <h1 className="mb-5 bg-gray-700 text-white p-4 text-5xl font-bold rounded">
                            About Us
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
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full rounded-lg p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6a2b93]"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="input input-bordered w-full rounded-lg p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6a2b93]"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="input input-bordered w-full rounded-lg p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6a2b93]"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                placeholder="Write your message here..."
                                className="input input-bordered w-full h-32 rounded-lg p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6a2b93] resize-none"
                            ></textarea>
                        </div>
                        <div className="">
                            <button
                                type="submit"
                                className="px-6 py-3 text-lg font-semibold border hover:text-white bg-transparent text-black border-black hover:bg-[#582779] focus:ring-4 focus:ring-[#6a2b93] transition-all"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </section>

           <div className='mt-14'>
   
           </div>
        </div>
    );
};

export default page;
