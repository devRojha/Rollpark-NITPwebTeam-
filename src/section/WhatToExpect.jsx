
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export function WhatToExpect(){
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
    return (
      <>
        <div className='flex bg-white '>
          <div className='flex flex-col  bg-white md:w-[60%] w-[100%]'>
            <div className='sm:text-4xl text-2xl font-bold mr-24 lg:ml-40 md:ml-20 ml-10 mb-5 mt-10' data-aos="fade-up">What to expect? <span className=' text-slate-400 font-medium ml-2'>A turnkey solution</span></div>
          </div>
        </div>
        <div className='flex border-b bg-white '>
          <div className='flex flex-col  bg-white md:w-[60%] w-[100%]'>
            <div className="bg-transparent z-10">
              <div className='sm:text-3xl text-2xl  mr-24 lg:ml-40 md:ml-20 ml-10 text-slate-400 mb-1 font-thin' data-aos="fade-up">From design to installation, Rollpark can handle every aspect of the job: site procurement, civil engineering, geotechnical engineering, design, site preparation, and installation.</div>
              <button className='text-sm font-bold mr-24 lg:ml-40 md:ml-20 ml-10 mb-8 mt-10 ' data-aos="fade-up">
                <div className="flex">
                  <div className="flex justify-start hover:w-36">Installation process</div>
                  <div className="flex-col justify-center pt-1 pl-2"><FaArrowRight /></div>
                </div>
              </button>
            </div>
          </div>
          <div className='absolute flex flex-col justify-center right-4 z-2'>
            <img className='h-60' src="src/assets/workers.jpg" alt="L" />
          </div>
        </div>
      </>
    )
}
<div className='text-4xl font-bold mr-24 lg:ml-40 md:ml-20 ml-10 mb-5 mt-10'>What to expect? <span className=' text-slate-400 font-medium ml-2'>A turnkey solution</span></div>
