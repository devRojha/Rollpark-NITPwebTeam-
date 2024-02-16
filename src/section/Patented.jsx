
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export function Patented(){
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return (
        <div className='bg-white border pl-2 pr-2 pt-2'>
          <div className='sm:text-4xl text-2xl font-bold mr-24 lg:ml-40 md:ml-20 ml-10 mb-5 mt-10'data-aos="fade-up">Patented cutting edge technology</div>
          <div className='sm:text-4xl text-2xl  mr-24 lg:ml-40 md:ml-20 ml-10 text-slate-400 mb-10'data-aos="fade-up">backed by decades of experience in construction</div>
          <div className='grid lg:grid-cols-2 md:-cols-1'>
          <div className=' border  flex flex-col bg-green-500 p-20'>
            <div className="flex">
                <span className="font-bold sm:text-2xl text-sm mr-2 mb-4" data-aos="fade-up">US Patent</span><span className="sm:text-2xl text-sm mr-2" data-aos="fade-up">No. 6,361,245B1</span> 
            </div>
            <div className="flex justify-center text-slate-500 font-thin sm:text-2xl text-sm" data-aos="fade-up">
                The product is resistant to tears, soft chemicals, puncture damage and ultraviolet light exposure. It’s also unaffected by hydrocarbons, mildew, rot and the freeze and thaw cycle.
            </div>
            <div className="grid grid-cols-3 text-slate-500 text-sm mt-4">
                <div className="flex flex-col">
                    <div>
                        <img className="h-10" src="src/assets/patent-logo-1.png" alt="" data-aos="fade-up"/>
                    </div>
                    <div className="p-8 pl-0 pt-1" data-aos="fade-up">Industrial Fabrics International Award</div>
                </div>
                <div className="flex flex-col">
                    <div>
                        <img className="h-10" src="src/assets/patent-logo-2.png" alt="" data-aos="fade-up"/>
                    </div>
                    <div className="p-8 pl-0 pt-1" data-aos="fade-up">Top 3 of 100 suppliers by CSX</div>
                </div>
                <div className="flex flex-col ">
                    <div>
                        <img className="h-10" src="src/assets/patent-logo-3.png" alt="" data-aos="fade-up"/>
                    </div>
                    <div className="p-8 pl-0 pt-1" data-aos="fade-up">3 Safety Awards from Advocare</div>
                </div>
            </div>
          </div>
          <div className='border  flex flex-col justify-center bg-slate-700'>
            <img className="h-full" src="src/assets/map.png" alt="" />
          </div>
          </div>
          <button onClick={()=>{
            console.log("compney")
          }} className='w-full h-20  bg-slate-100 shadow'>
            <div className="flex justify-center">
                <div className="hover:w-24">company</div>
                <div className="flex-col justify-center pt-1 pl-2"><FaArrowRight /></div>
            </div>
          </button>
        </div>
    )
}

{/* <source src="https://rollpark.us/wp-content/uploads/2019/01/rollpark-intro.mp4" type="video/mp4"></source> */}