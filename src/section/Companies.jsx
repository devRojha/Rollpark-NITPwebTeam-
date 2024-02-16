

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
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
              <img className=' h-6 flex justify-center' src="src/assets/company-logo-1.jpg" alt="" data-aos="fade-up"/>
            </div>
            <div className=' flex justify-center mb-6'>
              <img className=' h-6 flex justify-center' src="src/assets/company-logo-2.jpg" alt="" data-aos="fade-up"/>
            </div><div className=' flex justify-center mb-6'>
              <img className=' h-6 flex justify-center' src="src/assets/company-logo-4.jpg" alt="" data-aos="fade-up"/>
            </div><div className=' flex justify-center mb-6'>
              <img className=' h-6 flex justify-center' src="src/assets/company-logo-5.jpg" alt="" data-aos="fade-up"/>
            </div><div className=' flex justify-center mb-6'>
              <img className=' h-6 flex justify-center' src="src/assets/company-logo-6.jpg" alt="" data-aos="fade-up"/>
            </div><div className=' flex justify-center mb-6'>
              <img className=' h-6 flex justify-center' src="src/assets/company-logo-7.jpg" alt="" data-aos="fade-up"/>
            </div><div className=' flex justify-center mb-6'>
              <img className=' h-6 flex justify-center' src="src/assets/company-logo-8.jpg" alt="" data-aos="fade-up"/>
            </div><div className=' flex justify-center mb-6'>
              <img className=' h-6 flex justify-center' src="src/assets/company-logo-9.jpg" alt="" data-aos="fade-up"/>
            </div>
          </div>
          <div className='grid lg:grid-cols-2 md:grid-cols-1 m-2'>
            <div className='h-[500px] border flex flex-col justify-center'>
              <img className="h-full" src="src/assets/gallery1.png" alt="" data-aos="fade-up"/>
            </div>
            <div className='h-[500px] border flex flex-col justify-center'>
              <img className="h-full" src="src/assets/gallery2.png" alt="" data-aos="fade-up"/>
            </div>
            <div className='h-[500px] border flex flex-col justify-center'>
              <img className="h-full" src="src/assets/gallery3.png" alt="" data-aos="fade-up"/>
            </div>
            <div className='h-[500px]  mr-2 flex  justify-center'>
              <div className='flex flex-col justify-center'>
                <div className='m-auto  w-[80%] h-[70%]'>
                  <div className='sm:text-6xl text-4xl text-slate-400' data-aos="fade-up">"</div>
                  <div className='sm:text-3xl text-2xl font-bold'data-aos="fade-up">Rollpark has saved Ford Motor Company several million dollars
                    <span className=' text-slate-400 font-medium ml-2'data-aos="fade-up">by having a single site developed in a shorter time in lieu of the traditional multiple paved facilities we have utilized in the past</span>
                  </div>
                  <img className='mt-3 h-20' src="src/assets/DeanAnos.png" alt="L" data-aos="fade-up"/>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}