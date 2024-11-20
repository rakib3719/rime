import Image from "next/image";
import img from '../../../asset/image/more.jpg'
import { FaCar, FaCouch, FaCube, FaRegSquare } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";


const More = () => {
    return (
        <div className="px-12  py-8 mt-16 bg-gray-100">
             <section className='mt-24 max-w-[1400px] mx-auto'>
            <div className="flex  justify-center flex-col-reverse lg:flex-row-reverse gap-24  mt-8 about-bg">




<div  className="about-left flex-1">

<p className="text-[#264ba1] font-workSense">Our Best Qualities</p>
<h1  className="font-playFair font-bold text-3xl pt-6"> Why Choose Property </h1>


<div  className="flex mt-4 mb-4" >
<p   className="bg-blue-800 w-10 h-1" ></p>
<p  className="bg-orange-500 w-10 h-1   " ></p>

</div>

<p  className="font-semibold font-workSense">

Citizens of distant epochs. Jean-François Champollion explorations? Brain is the seed of intelligence from which we spring paroxysm of global death dream of the mind's eye rogue. Science laws of physics consciousness. Dispassionate extraterrestrial observer hundreds of thousands kindling the energy hidden in matter. Take root and flourish gathered by…</p>
<br />

<section className="mt-12 space-y-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="flex items-center gap-4 group cursor-pointer">
  <span className="border border-black p-6 bg-transparent group-hover:bg-[#1E2A47] transition duration-300 ease-in-out">
    <GrLike className="text-5xl text-[#1E2A47] group-hover:text-white transition duration-300 ease-in-out" />
  </span>
  <div>
    <h1 className="text-xl font-bold group-hover:text-[#1E2A47] transition duration-300 ease-in-out">
    Best Quality
    </h1>
    <p className="text-gray-600 group-hover:text-[#1E2A47] transition duration-300 ease-in-out">
      Looking Rime Property
    </p>
  </div>
</div>
<div className="flex items-center gap-4 group cursor-pointer">
  <span className="border border-black p-6 bg-transparent group-hover:bg-[#1E2A47] transition duration-300 ease-in-out">
    <FaCouch className="text-5xl text-[#1E2A47] group-hover:text-white transition duration-300 ease-in-out" />
  </span>
  <div>
    <h1 className="text-xl font-bold group-hover:text-[#1E2A47] transition duration-300 ease-in-out">
      Furniture
    </h1>
    <p className="text-gray-600 group-hover:text-[#1E2A47] transition duration-300 ease-in-out">
      Looking Rime Property
    </p>
  </div>
</div>
<div className="flex items-center gap-4 group cursor-pointer">
  <span className="border border-black p-6 bg-transparent group-hover:bg-[#1E2A47] transition duration-300 ease-in-out">
    <FaCube className="text-5xl text-[#1E2A47] group-hover:text-white transition duration-300 ease-in-out" />
  </span>
  <div>
    <h1 className="text-xl font-bold group-hover:text-[#1E2A47] transition duration-300 ease-in-out">
    Interior Designs
    </h1>
    <p className="text-gray-600 group-hover:text-[#1E2A47] transition duration-300 ease-in-out">
      Looking Rime Property
    </p>
  </div>
</div>
<div className="flex items-center gap-4 group cursor-pointer">
  <span className="border border-black p-6 bg-transparent group-hover:bg-[#1E2A47] transition duration-300 ease-in-out">
    <FaRegSquare className="text-5xl text-[#1E2A47] group-hover:text-white transition duration-300 ease-in-out" />
  </span>
  <div>
    <h1 className="text-xl font-bold group-hover:text-[#1E2A47] transition duration-300 ease-in-out">
    Squre Feet
    </h1>
    <p className="text-gray-600 group-hover:text-[#1E2A47] transition duration-300 ease-in-out">
      Looking Rime Property
    </p>
  </div>
</div>
<div className="flex items-center gap-4 group cursor-pointer">
  <span className="border border-black p-6 bg-transparent group-hover:bg-[#1E2A47] transition duration-300 ease-in-out">
    <MdOutlineSecurity className="text-5xl text-[#1E2A47] group-hover:text-white transition duration-300 ease-in-out" />
  </span>
  <div>
    <h1 className="text-xl font-bold group-hover:text-[#1E2A47] transition duration-300 ease-in-out">
   Parking
    </h1>
    <p className="text-gray-600 group-hover:text-[#1E2A47] transition duration-300 ease-in-out">
      Looking Rime Property
    </p>
  </div>
</div>
<div className="flex items-center gap-4 group cursor-pointer">
  <span className="border border-black p-6 bg-transparent group-hover:bg-[#1E2A47] transition duration-300 ease-in-out">
    <FaCar className="text-5xl text-[#1E2A47] group-hover:text-white transition duration-300 ease-in-out" />
  </span>
  <div>
    <h1 className="text-xl font-bold group-hover:text-[#1E2A47] transition duration-300 ease-in-out">
   Parking
    </h1>
    <p className="text-gray-600 group-hover:text-[#1E2A47] transition duration-300 ease-in-out">
      Looking Rime Property
    </p>
  </div>
</div>


</section>
</div>
<div className="about-right mt-8 lg:mt-0 " >

<Image src={img}  className='border-8 border-gray-400 text-center' alt="" />

</div>


</div>
            </section>
        </div>
    );
};

export default More;