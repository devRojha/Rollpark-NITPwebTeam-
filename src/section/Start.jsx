import { useEffect, useState } from "react";
import { CirculButton } from "../components/CirculButton";
import { FaPlay } from "react-icons/fa";
import AOS from "aos"
import "aos/dist/aos.css"
import video1 from "../assets/hero.mp4"
export function Start({fullPlay , setFullPlay}){
    const subtitle = ["spacial event","universities","municipalities","automanufacturers", "airports"]
    const [counter , setCounter] = useState(0);
    const [update , setUpdate] = useState("airports")

    useEffect(()=>{
        const value = setInterval(()=>{
        setCounter(((counter < 4)? (counter+ 1):0));
        setUpdate(subtitle[counter]);
        },2000)
        return ()=>{
        clearInterval(value)
        }

    },[counter])

    useEffect(()=>{
      AOS.init({duration:2000})
    },[update])

    return (
      <>
        <div className='md:hidden  max-md:h-[100vh] lg:h-[80vh]'>
            <div className='flex flex-col absolute  bottom-20 left-6 bg-transparent text-white'>
              <div>
                <button onClick={() => {
                  setFullPlay(true);
                }} className="border border-green-500 h-[50px] w-[50px] rounded-full bg-transparent hover:bg-green-300 flex justify-center pt-4">
                  <FaPlay />
                </button>
              </div>
              <div className='text-4xl font-bold mt-4 mb-4'>COMMERCIAL PARKING</div>
              <div className='mb-6 text-3xl italic'>for {update}</div>
              <div className='flex text-sm'>Not Asphalt. Not Gravel.<span className='text-green-600 ml-1 font-semibold'>Geotextile.</span></div>
            </div>
          <div className='h-full overflow-hidden'>
            <video className={`${fullPlay?"fixed h-screen w-100vw z-40":"h-full"} object-cover bg-white`} autoPlay src={video1}></video>
          </div>
        </div>
        {/* after mid */}
        <div className='max-md:hidden h-[80vh] '>
          <div className='flex flex-col absolute  top-80 left-20 bg-transparent text-white'>
              <div>
                <button onClick={() => {
                  setFullPlay(true);
                }} className="border border-green-500 h-[50px] w-[50px] rounded-full bg-transparent hover:bg-green-300 flex justify-center pt-4">
                  <FaPlay />
                </button>
              </div>
            <div className='text-6xl font-bold mt-4 mb-4'>COMMERCIAL PARKING</div>
            <div className='mb-6 text-5xl italic' data-aos="fade-up">for {update}</div>
            <div className='flex text-xl'>Not Asphalt. Not Gravel.<span className='text-green-600 ml-1 font-semibold'>Geotextile.</span></div>
          </div>
          <div className='h-full overflow-hidden'>
            <video className={`${fullPlay?"fixed h-screen w-100vw z-40":"h-full w-full"} object-cover bg-white`} autoPlay src={video1}></video>
          </div>
        </div>
      </>
    )
}