import React from 'react';
import img from '../../../asset/image/aboutusimg.png'
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = ({header, title, aboutImg}) => {
    return (
        <div className='lg:flex max-w-[1500px] mx-auto md:px-16 gap-16  items-center'>
            <div className='flex-1'>
                <Image src={aboutImg} alt='about' className={`w-full ${title !== 'default' && 'h'}`}/>
            </div>

            <div className='flex-1 px-4 mt-4'>
<h1 className='text-3xl font-bold mb-4'>{header}</h1>

{
    title === 'default'? <p className='mt-12 text-2xl text-gray-800 font-blinkers' >
Rime Asset Ltd. is a fast-growing real estate company established in Bangladesh in 2016. We are dedicated to providing quality properties, tailored solutions, and exceptional services to our clients. Our focus is on building trust and creating lasting value, ensuring every step of your property journey is seamless and satisfying.
    <br /><br />
    
    Although Rime Asset Ltd. is a new company in the real estate sector by its name, it has a mature team to build your dream home. We consider every single associate of Rime Asset Ltd.
    
    <br /><br />
    
    as part of its family, and most of these competent team members are involved in this industry for more than 20 years. We believe that our experience, commitment, quality of work and architectural design have satisfied our valued clients and land owners from the very beginning. This has motivated us and enabled us to give everything we have so that we can become one of the most trusted names in the real estate sector of Bangladesh within a short period of time.
    </p>: <p className='mt-12 text-2xl text-gray-800 font-blinkers'>{title}</p>
}

{
    title === 'default' && <Link href={'/about'}><button className=' rounded font-blinkers text-white px-4 py-2 hover:bg-gray-700 mt-6 text-xl font-bold uppercase bg-[#000000]'>Read More</button></Link>
}
            </div>
        </div>
    );
};

export default AboutUs;