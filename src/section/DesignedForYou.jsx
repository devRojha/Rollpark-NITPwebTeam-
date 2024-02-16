

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import image1 from "../assets/designed-for-you-image-1.png"
export function DesignedForYou(){
  useEffect(()=>{
      AOS.init({duration:2000})
  },[])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-1 bg-white border pb-11 pt-11'>
            <div className='flex flex-col sm:text-4xl text-2xl font-bold mr-24 lg:ml-40 md:ml-20 ml-10 mb-4'  data-aos="fade-up">Designed for You.</div>
            <div className='flex flex-col text-slate-400 font-thin sm:text-2xl text-sm md:pl-10 pl-8' >
              <div data-aos="fade-up">- Roll it out and instantly park</div>
              <div data-aos="fade-up">- Re-use it on multiple sites</div>
              <div data-aos="fade-up">- Event Parking, Overflow, Vehicle Storage</div>
              <div data-aos="fade-up">- Daily, temporary use <span className="text-green-500 italic">1-3 years</span> </div>
              <div data-aos="fade-up">- Daily, long term use <span className="text-green-500 italic">4-10 years</span></div>
            </div>
            <div data-aos="fade-down">
              <img className="h-60 pl-10" src={image1} alt="" />
            </div>
        </div>
    )
}