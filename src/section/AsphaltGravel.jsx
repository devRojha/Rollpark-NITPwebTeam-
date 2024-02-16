import { GreedComponent } from "../components/GreedComponent";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";


export function AsphaltGravel(){
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
    return (
        <div className='bg-white shadow-md border'>
          <div className='sm:text-4xl text-2xl font-bold lg:ml-40 md:ml-20 ml-10 mb-5 mt-10' data-aos="fade-up">A Proven Alternative to Asphalt and Gravel</div>
          <div className='flex justify-center'>
            <div className='grid grid-cols-3 border-b w-[60%] sm:text-3xl text-1xl pb-4 mt-10' data-aos="fade">
              <div className='justify-center flex'>Asphalt</div>
              <div className='justify-center flex text-green-500'>Rollpark</div>
              <div className='justify-center flex'>Gravel</div>
            </div>
          </div>
          {/* table */}
          <div className='flex justify-center mt-4'>
            <div className='grid grid-cols-3 w-[60%] md:text-1xl max-md:text-[10px] max-sm:text-[7px] pb-4'>
              <div className='flex'>
                <img className='h-8 max-sm:h-3' src="src/assets/icon04.png" alt="I" data-aos="fade"/>
                <div className='w-full flex justify-center text-slate-400'>imprevious</div>
              </div>
              <div className='justify-center flex font-bold'>Permeable</div>
              <div className='justify-center flex font-bold'>Permeable</div>
            </div>
          </div>
          <div className='flex justify-center mt-4'>
            <div className='grid grid-cols-3 w-[60%] md:text-1xl max-md:text-[10px] max-sm:text-[7px] pb-4'>
              <div className='flex'>
                <img className='h-8 max-sm:h-3' src="src/assets/icon04.png" alt="I" data-aos="fade"/>
                <div className='w-full flex justify-center text-slate-400'>Expensive</div>
              </div>
              <div className='justify-center flex font-bold'>Less Expensive</div>
              <div className='justify-center flex font-bold'>Comparable Cost</div>
            </div>
          </div>
          <GreedComponent icon={"src/assets/icon04.png"} first={"Cannot be reused"} second={"Re-usable"} third={"Not usually reused"}/>
          <div className='flex justify-center mt-4'>
            <div className='grid grid-cols-3 w-[60%] md:text-1xl max-md:text-[10px] max-sm:text-[7px] pb-4'>
              <div className='flex'>
                <img className='h-8 max-sm:h-3' src="src/assets/icon04.png" alt="I" data-aos="fade"/>
                <div className='w-full flex justify-center text-slate-400'>15 years life</div>
              </div>
              <div className='justify-center flex  text-slate-400'>7+ years life</div>
              <div className='justify-center flex  text-slate-400'>5-7 years life</div>
            </div>
          </div>
          <GreedComponent icon={"src/assets/icon04.png"} first={"2-3 weeks per acre"} second={"1 week per acre"} third={"-1 week per acre"}/>
          <GreedComponent icon={"src/assets/icon04.png"} first={"ADA accessible"} second={"ADA accessible"} third={"Not ADA accessible"}/>
          <GreedComponent icon={"src/assets/icon04.png"} first={"No LEED"} second={"Up to 7 LEED"} third={"No LEED"}/>
          <GreedComponent icon={"src/assets/icon04.png"} first={"Cannot be rented"} second={"Rentable"} third={"Cannot be rented"}/>
          <div className='flex justify-center mt-4 mb-10'>
            <div className='grid grid-cols-3 w-[60%] md:text-1xl max-md:text-[10px] max-sm:text-[7px] pb-4'>
              <div className='flex'>
                <img className='h-8 max-sm:h-3' src="src/assets/icon04.png" alt="I" data-aos="fade"/>
                <div className='w-full flex justify-center text-slate-400'>Easy Maintenance</div>
              </div>
              <div className='flex justify-center pl-10  text-slate-400'>Moderate Maintenance</div>
              <div className='justify-center flex  pl-10 text-slate-400'>Difficult Maintenance</div>
            </div>
          </div>
        </div> 
    )
}