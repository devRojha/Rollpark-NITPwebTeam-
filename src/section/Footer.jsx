import { Button } from "../components/Button";
import { Msg } from "../components/Msg";

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export function Footer({setQuote}){
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
    return(
      <div className='flex flex-col items-center justify-center bg-green-500 text-white h-[480px] w-full fixed bottom-0 z-1 pl-3 pr-3 pb-10'>
        <div className="flex flex-col justify-center pt-3 pb-10">
            <div className="flex justify-center">
                <div className="font-bold text-6xl max-md:text-4xl max-sm:text-2xl text-slate-900" data-aos="fade-up">REQUEST A PROPOSAL</div>
            </div>
            <div className=" text-slate-700 flex flex-col justify-center mt-5 mb-5 text-lg max-md:text-md max-sm:text-sm">
                <div className="flex justify-center">Leave your details for our manager to contact you.</div>
                <div className="flex justify-center">Let our estimating and design team assess your project.</div>
                <div className="flex justify-center">Receive a proposal and free consultation.</div>
            </div>
            <div className="flex justify-center">
                <div className='cursor-pointer flex justify-center border border-slate-700 p-2 rounded-3xl  text-2xl bg-slate-800 mb-5'>
                  <Button caption={"Request a Quote"} onClick={()=>{
                    setQuote(true);
                  }}/>
                </div>
            </div>
            <div className="flex justify-center text-slate-500">
                Save on your next parking project with Rollpark, the most advanced and eco-friendly semi-permanent parking solution to date.
            </div>
        </div>
        <div className='grid  grid-cols-3  fixed bottom-0 bg-white w-full p-3 shadow-lg'>
          <div className='flex'>
            <div className='text-slate-700 flex flex-col justify-center mr-2'>
              {/* here */}
              <img className="h-20 max-sm:h-10 " src="src/assets/icon.png" alt="" />
            </div>
            <div className='flex flex-col justify-center'>
                <div className='text-slate-700 font-bold text-xl max-sm:text-[7px] '>Rollpark</div>
                <div className='text-slate-500 max-sm:text-[5px]'>13700 Providence Road, Suite 200</div>
                <div className='text-slate-500 max-sm:text-[5px]'>Weddington, NC 28104</div>
            </div>
          </div>
          <div className='flex flex-col justify-center'>
              <div className='text-slate-700 font-medium text-xl max-sm:text-[10px] flex justify-center'>704-321-0802</div>
              <div className='text-slate-700 font-medium text-xl max-sm:text-[10px] flex justify-center'>
                <a href='email:devraj22780405@gmail.com'>info@rollpark.us</a>
              </div>
          </div>
          <div className='flex flex-col justify-center '>
            <div className='text-slate-500  flex justify-end space-x-1 max-sm:text-[12px]'>
            <FaInstagram />
            <FaLinkedinIn />
            <FaTwitter />
            </div>
            <div className='text-slate-500  flex justify-end max-sm:text-[7px]'>Copyright © 2018 Rollpark</div>
            <div className='text-slate-500  flex justify-end max-sm:text-[7px]'>Trademark of Polivka International Company</div>
          </div>
        </div>
      </div>
    )
}

{/* <button className='cursor-pointer flex justify-center border border-slate-700 p-4  rounded-3xl  text-2xl bg-slate-800 mb-5'>Request a Quote</button> */}