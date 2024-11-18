import Image from 'next/image';
import icon1 from '../../../asset/image/service1.png'
import icon2 from '../../../asset/image/service2.png'
import icon3 from '../../../asset/image/service3.png'

const Service = () => {
    return (
        <div className='lg:w-[80%] mx-auto'>
            <h1 className='text-5xl mt-12 font-bold text-center te'>WHY Rime LTD.</h1>

            <section className='md:flex space-y-16 md:space-y-16 mt-16 justify-between gap-8 '>
<div className='mt-16'>
<div className='p-6 bg-[#d9d9d9] border-4 border-black flex justify-center items-center'>
    
<Image src={icon1} alt='LUXURY' height={170}/>
</div>
   <article className='mt-4 '>
   <h1 className='text-2xl font-semibold text-center py-6'>LUXURY</h1>
   <p className='text-xl w-[86%] mx-auto text-center'>We trust a house is not only an amalgamation of concrete and mortar neither is it a place where enclosed in our walls.</p>
   </article>
</div>
<div className=''>
<div className='p-6 bg-[#d9d9d9] border-4 border-black flex justify-center items-center'>
    
<Image src={icon2} alt='COMMITMENT'/>
</div>
   <article className='mt-4 '>
   <h1 className='text-2xl font-semibold text-center py-6'>COMMITMENT</h1>
   <p className='text-xl w-[86%] mx-auto text-center'>We trust a house is not only an amalgamation of concrete and mortar neither is it a place where enclosed in our walls.</p>
   </article>
</div>
<div className=''>
<div className='p-6 bg-[#d9d9d9] border-4 border-black flex justify-center items-center'>
    
<Image src={icon3} alt='COMMITMENT'/>
</div>
   <article className='mt-4 '>
   <h1 className='text-2xl font-semibold text-center py-6'>QUALITY</h1>
   <p className='text-xl w-[86%] mx-auto text-center'>We trust a house is not only an amalgamation of concrete and mortar neither is it a place where enclosed in our walls.</p>
   </article>
</div>



            </section>
        </div>
    );
};

export default Service;