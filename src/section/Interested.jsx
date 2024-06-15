import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

import layer1 from "../assets/spec-layer-1.png"
import layer2 from "../assets/spec-layer-2.png"
import layer3 from "../assets/spec-layer-3.png"

import { FaArrowRight } from "react-icons/fa";
export function Interested(){
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
    return (
        <div className='flex border border-slate-200 bg-slate-50 pb-5 z-10'>
          <div className='flex flex-col md:w-[60%] w-[100%] justify-around'>
            <div className='sm:text-4xl text-2xl font-bold mr-24 lg:ml-40 md:ml-20 ml-10 mb-5 mt-10' data-aos="fade-up">Interested in product specifications?</div>
            <div className='sm:text-3xl text-2xl  mr-24 lg:ml-40 md:ml-20 ml-10 text-slate-400 mb-5 font-thin' data-aos="fade-up">Discover available geotextile characteristics, unique features of subgrade design, and how Rollpark holds up against asphalt and gravel.</div>
              <div className='text-md  mr-24 lg:ml-40 md:ml-20 ml-10 mb-1 font-bold'>
                <button>
                  <div className="flex" data-aos="fade-up">
                    <div className="flex justify-start hover:w-28" >Specification</div>
                    <div className="flex-col justify-center pt-1 pl-2"><FaArrowRight /></div>
                  </div>
                </button>
              </div>
          </div>
          <div className='sm:flex hidden flex-col justify-center absolute lg:right-34 right-10'>
            <img className='h-40 z-30 flex relative bottom-[-60px]' src={layer1} alt="L" />
            <img className='h-40 z-20 flex relative bottom-[20px]' src={layer2} alt="L" data-aos="fade-down"/>
            <img className='h-40 z-10  flex relative bottom-[100px] ' src={layer3} alt="L" data-aos="fade-down"/>
            {/* -20 -180 -340 */}
          </div>
        </div>
    )
}