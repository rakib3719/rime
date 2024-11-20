import Image from "next/image";
import missionImg from '../../../asset/image/mission.png'

const Mission = () => {
    return (
        <div className="bg-[#3f3227] py-12 mt-12 ">
            
<div className="md:px-12 px-4 mt-10 md:flex items-center justify-between">
<div className="text-white lg:w-1/2">

<div>
<h1 className="text-2xl font-bold ">MISSION</h1>
<p className="text-2xl">To build aesthetic, seismic-resistant durable buildings for the society and people. Also, to provide our clients with their dream homes and ultimate comfort.</p>
</div>
<div className="mt-12">
<h1 className="text-2xl font-bold ">VISION</h1>
<p className="text-2xl">Our vision is to become the MOST TRUSTWORTHY LEADING REAL ESTATE company in our sector. We always operate with Re-eminence, Restructuring, Adherence, Virtuosity, and Alliance.</p>
</div>
<div className="px-4 mt-12">
<h1 className="text-2xl font-bold ">CORE VALUES</h1>
<div className="text-2xl ">


    <ul className="space-y-4 list-disc">

        <li>Quality</li>
        <li>Commitment</li>
        <li>Price</li>
        <li>Time</li>
        <li>Durability</li>
        <li>Sustainability</li>
        <li>Comfortability</li>
    </ul>
</div>
</div>

</div>
<div className="lg:w-1/2 mt-8 w-full flex justify-center lg:ml-36">

    <Image src={missionImg} alt="mission"/>
</div>

</div>

        </div>
    );
};

export default Mission;