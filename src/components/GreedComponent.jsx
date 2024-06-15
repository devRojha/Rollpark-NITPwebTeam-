
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export function GreedComponent({icon, first, second, third}){
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])  
  return (
        <div className='flex justify-center mt-4'>
            <div className='grid grid-cols-3 w-[60%] md:text-1xl max-md:text-[10px] max-sm:text-[7px] pb-4'>
              <div className='flex'>
                <img className='h-8 max-sm:h-3 mr-2' src={icon} alt="I" data-aos="fade"/>
                <div className='w-full flex justify-center text-slate-400 md:text-1xl max-md:text-[10px] max-sm:text-[7px] '>{first}</div>
              </div>
              <div className='justify-center flex font-bold'>{second}</div>
              <div className='justify-center flex text-slate-400 md:text-1xl max-md:text-[10px] max-sm:text-[7px] '>{third}</div>
            </div>
        </div>
    )
}