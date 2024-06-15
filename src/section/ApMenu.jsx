
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

import { IoMdAdd } from "react-icons/io";
import logo from "../assets/navlogo.png"

export function ApMenu({menu, setMenu}){
    useEffect(()=>{
        AOS.init({duration:2000});
      },[])
    if(menu){
        return(
            <div className="fixed bg-green-500 h-screen w-full top-0 z-40" data-aos="fade-right">
                <div className="flex flex-col">
                    <button onClick={()=>{setMenu(false)}} className="flex flex-col justify-center border h-16 text-4xl text-white ">
                        <div className="rotate-45 absolute ml-2"> <IoMdAdd/> </div>
                    </button>
                    <div className="flex flex-col text-6xl text-slate-700 font-bold space-y-4 pl-4">
                        <div className="hover:text-black" data-aos="fade-up">why Rollpark</div>
                        <div className="hover:text-black" data-aos="fade-up">Case Studies</div>
                        <div className="hover:text-black" data-aos="fade-up">Installation</div>
                        <div className="hover:text-black" data-aos="fade-up">Compay</div>
                        <div className="hover:text-black" data-aos="fade-up">Specs</div>
                    </div>
                </div>
                <div className="absolute right-10 bottom-10">
                    <button className="mr-6 font-bold text-slate-600">FAQ</button>
                    <button className="border p-2 rounded-full bg-orange-500 text-white font-bold">Get a Quote</button>
                </div>
                <div className="absolute left-10 bottom-10">
                   <img className="h-12" src={logo} alt="" />
                </div>
                
            </div>
        )
    }
    else{
        return (
            <></>
        )
    }
}