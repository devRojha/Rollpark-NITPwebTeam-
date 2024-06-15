

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

import logo1 from "../assets/company-logo-1.jpg"
import logo2 from "../assets/company-logo-2.jpg"
import logo4 from "../assets/company-logo-4.jpg"
import logo5 from "../assets/company-logo-5.jpg"
import logo6 from "../assets/company-logo-6.jpg"
import logo7 from "../assets/company-logo-7.jpg"
import logo8 from "../assets/company-logo-8.jpg"
import logo9 from "../assets/company-logo-9.jpg"
import gallery1 from "../assets/gallery1.png"
import gallery2 from "../assets/gallery2.png"
import gallery3 from "../assets/gallery3.png"
import dean from "../assets/DeanAnos.png"

export function Companies(){
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
    return (
        <div className='flex flex-col bg-white border pb-11 pt-11'>
          <div className='sm:text-4xl text-2xl font-bold mr-24 lg:ml-40 md:ml-20 ml-10 mb-5' data-aos="fade-up">Over 1 million cars parked</div>
          <div className='sm:text-4xl text-2xl  mr-24 lg:ml-40 md:ml-20 ml-10 mb-9 text-slate-400' data-aos="fade-up">on Rollpark for companies like</div>
          <div className='grid lg:grid-cols-8 md:grid-cols-3  lg:ml-40 md:ml-20 ml-10  mb-8 p-4 w-[70%]'>
            <div className=' flex justify-center mb-6'>
              <img className=' h-6 flex justify-center' src={logo1} alt="" data-aos="fade-up"/>
            </div>
            <div className=' flex justify-center mb-6'>
              <img className=' h-6 flex justify-center' src={logo2} alt="" data-aos="fade-up"/>
            </div><div className=' flex justify-center mb-6'>
              <img className=' h-6 flex justify-center' src={logo4} alt="" data-aos="fade-up"/>
            </div><div className=' flex justify-center mb-6'>
              <img className=' h-6 flex justify-center' src={logo5} alt="" data-aos="fade-up"/>
            </div><div className=' flex justify-center mb-6'>
              <img className=' h-6 flex justify-center' src={logo6} alt="" data-aos="fade-up"/>
            </div><div className=' flex justify-center mb-6'>
              <img className=' h-6 flex justify-center' src={logo7} alt="" data-aos="fade-up"/>
            </div><div className=' flex justify-center mb-6'>
              <img className=' h-6 flex justify-center' src={logo8} alt="" data-aos="fade-up"/>
            </div><div className=' flex justify-center mb-6'>
              <img className=' h-6 flex justify-center' src={logo9} alt="" data-aos="fade-up"/>
            </div>
          </div>
          <div className='grid lg:grid-cols-2 md:grid-cols-1 m-2'>
            <div className='h-[500px] border flex flex-col justify-center'>
              <img className="h-full" src={gallery1} alt="" data-aos="fade-up"/>
            </div>
            <div className='h-[500px] border flex flex-col justify-center'>
              <img className="h-full" src={gallery2} alt="" data-aos="fade-up"/>
            </div>
            <div className='h-[500px] border flex flex-col justify-center'>
              <img className="h-full" src={gallery3} alt="" data-aos="fade-up"/>
            </div>
            <div className='h-[500px]  mr-2 flex  justify-center'>
              <div className='flex flex-col justify-center'>
                <div className='m-auto  w-[80%] h-[70%]'>
                  <div className='sm:text-6xl text-4xl text-slate-400' data-aos="fade-up">"</div>
                  <div className='sm:text-3xl text-2xl font-bold'data-aos="fade-up">Rollpark has saved Ford Motor Company several million dollars
                    <span className=' text-slate-400 font-medium ml-2'data-aos="fade-up">by having a single site developed in a shorter time in lieu of the traditional multiple paved facilities we have utilized in the past</span>
                  </div>
                  <img className='mt-3 h-20' src={dean} alt="L" data-aos="fade-up"/>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}