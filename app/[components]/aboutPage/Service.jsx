import Image from 'next/image';
import icon1 from '../../../asset/image/service1.png'
import icon2 from '../../../asset/image/service2.png'
import icon3 from '../../../asset/image/service3.png'
import img2 from '../../../asset/image/aboutpage2.jpg'
const Service = () => {
    return (
        <div className='lg:w-[80%] px-4 md:px-0 mx-auto'>
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




            <section className='mt-24'>
            <div className="lg:flex gap-4 items-center mt-8 about-bg">




<div  className="about-left flex-1">

<p className="text-[#264ba1] font-workSense">Experience with DreamSpace</p>
<h1  className="font-playFair font-bold text-3xl pt-6"> Why are you investing here? </h1>


<div  className="flex mt-4 mb-4" >
<p   className="bg-blue-800 w-10 h-1" ></p>
<p  className="bg-orange-500 w-10 h-1   " ></p>

</div>

<p  className="font-semibold font-workSense">

Investing in Rime is advantageous because it offers stable returns, diversification, and potential appreciation. The company demonstrates strong growth prospects, reliable management, and a market-aligned portfolio, making it an attractive investment opportunity.</p>
<br />

<p   className="text-[#666666] font-workSense">
Investing in DreamSpace Real Estate means aligning with a company that cherishes dreams and assists in finding the ideal home. Their seasoned team, market expertise, and innovative strategies ensure well-informed decisions and dream realization. Whether buying, selling, or investing, DreamSpace commitment to integrity and personalized attention guides clients towards turning real estate aspirations into reality.</p>
</div>
<div className="about-right mt-8 lg:mt-0 flex-1" >

<Image src={img2}  className='w-[100%] rounded-lg text-center' alt="" />

</div>


</div>
            </section>
        </div>
    );
};

export default Service;