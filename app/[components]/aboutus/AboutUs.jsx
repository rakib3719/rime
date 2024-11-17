import React from 'react';
import img from '../../../asset/image/aboutusimg.png'
import Image from 'next/image';

const AboutUs = () => {
    return (
        <div className='flex px-16 gap-16 mt-16 items-center'>
            <div className='flex-1'>
                <Image src={img} alt='about' className='w-full'/>
            </div>

            <div className='flex-1'>
<h1 className='text-3xl font-bold mb-4'>ABOUT US</h1>

<p className='mt-12 text-2xl text-gray-800 font-blinkers' >
GLG Assets Ltd. is a fast-growing real estate company established in Bangladesh in 2016. We are a member of REHAB and also an enlisted real estate company of RAJUK. 
<br /><br />

Although GLG Assets Ltd. is a new company in the real estate sector by its name, it has a mature team to build your dream home. We consider every single associate of GLG Assets Ltd.

<br /><br />

as part of its family, and most of these competent team members are involved in this industry for more than 20 years. We believe that our experience, commitment, quality of work and architectural design have satisfied our valued clients and land owners from the very beginning. This has motivated us and enabled us to give everything we have so that we can become one of the most trusted names in the real estate sector of Bangladesh within a short period of time.
</p>

<button className='btn rounded font-blinkers text-white p-4 mt-6 text-xl font-bold uppercase bg-[#000000]'>Read More</button>
            </div>
        </div>
    );
};

export default AboutUs;