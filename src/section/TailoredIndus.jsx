import { useState } from "react";
import { Tailored } from "../components/Tailored";

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import logo1 from "../assets/truck.png"
import logo2 from "../assets/truck2.png"
import logo3 from "../assets/calender.png"
import logo4 from "../assets/chair.png"
import logo5 from "../assets/drop.png"
import logo6 from "../assets/clock.png"
import logo7 from "../assets/truck.png"


export function TailoredIndus(){
    const [title, setTitle] = useState("Economic Uncertainty in the Autologistics World");
    const [desc, setDesc] = useState("Discover available geotextile characteristics, unique features of subgrade design, and how Rollpark holds up against asphalt and gravel.")

    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    
    return(
        <div className="bg-white">
            <div className='bg-white'>
            <div className='sm:text-4xl text-2xl font-bold lg:ml-40 md:ml-20 ml-10 mr-5 mb-5 mt-10' data-aos="fade-up">Tailored to Your Industry</div>
            <div className=' w-[80%] lg:ml-40 md:ml-20 ml-10 mt-4 mb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7'>
                <Tailored onClick={()=>{
                    setTitle("Economic Uncertainty in the Autologistics World");
                    setDesc("Discover available geotextile characteristics, unique features of subgrade design, and how Rollpark holds up against asphalt and gravel.")
                }} caption={"Autologistics"} icon={logo1}/>
                <Tailored onClick={()=>{
                    setTitle("Short Term Parking for Auto-manufacturers");
                    setDesc("Because auto-manufacturers have constantly fluctuating manufacturing volumes and stringent capital requirements, Rollpark is a less costly solution for quality holds and occasional large-capacity vehicle launches.");
                }} caption={"Auto-manuacturing"} icon={logo2}/>
                <Tailored onClick={()=>{
                    setTitle("Inexpensive and Safe Event Parking");
                    setDesc("Beyond parking in the mud, there isn't an effective, inexpensive, and proven temporary parking material for events besides Rollpark. Stabilize the ground and roll Rollpark directly overtop for instant parking for a few days to a month and then roll it up and re-use it at another event.");
                }} caption={"Events"} icon={logo3}/> 
                <Tailored onClick={()=>{
                    setTitle("Proven Temporary Parking for Filming");
                    setDesc("Films often require a stable and flat surface for small segments, usually involving vehicles. Rollpark can be transformed to look exactly like asphalt, reused on multiple films, and at a low price.");
                }} caption={"Hollywood"} icon={logo4}/>
                <Tailored onClick={()=>{
                    setTitle("Permitting Spells Trouble for Asphalt");
                    setDesc("Some regions have impervious surface limits, requiring solutions like Rollpark or pervious asphalt. Unlike pervious asphalt, Rollpark is far less expensive and doesn't have the same tendency to fail from clogging.");
                }} caption={"Permitting Restrictions"} icon={logo5}/>
                <Tailored onClick={()=>{
                    setTitle("Don't Put Asphalt On Land You'll Develop in 5 Years");
                    setDesc("Universities are constantly expanding, which is good for universities, but bad for their parking capacity. When land is available it is usually only available temporarily. Rollpark can be used for land the university intends to develop without the same cost-restrictions as asphalt (both for installation and tear down).");
                }} caption={"Universities"} icon={logo6}/>
                <Tailored onClick={()=>{
                    setTitle("Parking Garages Take Time To Build");
                    setDesc("While you wait for a massive parking garage to be designed, built, and approved, use Rollpark to park your clients so as to not waste revenue while waiting.");
                }} caption={"Parking Managers"} icon={logo7}/>
            </div>
            </div>
            <div className='flex border-b bg-white pb-10'>
            <div className='flex flex-col md:w-[60%] w-[100%]'>
                <div className='text-2xl font-bold mr-24 lg:ml-40 md:ml-20 ml-10 mb-5 mt-10 'data-aos="fade-up">{title}</div>
                <div className='text-2xl  mr-24 lg:ml-40 md:ml-20 ml-10 text-slate-400 mb-1 font-thin' data-aos="fade-up">{desc}</div>
            </div>
            </div>
        </div>
    )
}