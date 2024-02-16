
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export function Tailored({caption, icon, onClick}){
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])  
  return (
        <div className='p-1 flex flex-col'>
              <button onClick={onClick} className='flex flex-col justify-center h-[80px] w-[80px] rounded-full hover:border border-blue-300 p-1'>
                <img className="flex justify-center h-[80px] w-[80px]" src={icon} alt={"I"} data-aos="fade-up"/>
              </button>
              <div className='text-slate-400 flex mt-3' data-aos="fade-up">{caption}</div>
        </div>
    )
}