
import { CirculButton } from "../components/CirculButton";
import { FaArrowRight } from "react-icons/fa";
import icon1 from "../assets/icon01.png"
import icon2 from "../assets/icon02.png"
import icon3 from "../assets/icon03.png"
import icon4 from "../assets/icon04.png"
export function StartFooter(){
    return (
        <div className="lg:h-[20vh] bg-white">
            <div className='h-[100%]  bg-white grid lg:grid-cols-5 md:grid-cols-2 pl-8 pr-20'>
                <div className='flex flex-col justify-center w-[200px] mt-4 mb-4'>
                    <div className='flex justify-center text-3xl'>
                        <img className="h-6 m-3" src={icon1} alt="Loading.."/>
                        <div className="flex flex-col justify-center">40%</div>
                    </div>
                    <div className="flex justify-center">
                        <div className=' text-slate-500  w-[160px]'>less cost than using asphalt</div>
                    </div>
                </div>
                <div className='flex flex-col justify-center w-[200px] mt-4 mb-4'>
                    <div className='flex justify-center text-3xl'>
                        <img className="h-6 m-3" src={icon1} alt="Loading.."/>
                        <div className="flex flex-col justify-center">80%</div>
                    </div>
                    <div className="flex justify-center">
                        <div className=' text-slate-500  w-[160px]'>less construction time than conventional lots</div>
                    </div>
                </div><div className='flex flex-col justify-center w-[200px] mt-4 mb-4'>
                    <div className='flex justify-center text-3xl'>
                        <img className="h-6 m-3" src={icon2} alt="Loading.."/>
                        <div className="flex flex-col justify-center">7y</div>
                    </div>
                    <div className="flex justify-center">
                        <div className=' text-slate-500  w-[160px]'>durable enough to last for up to 7 years</div>
                    </div>
                </div><div className='flex flex-col justify-center w-[200px] mt-4 mb-4'>
                    <div className='flex justify-center text-3xl'>
                        <img className="h-6 m-3" src={icon3} alt="Loading.."/>
                        <div className="flex flex-col justify-center">100%</div>
                    </div>
                    <div className="flex justify-center">
                        <div className=' text-slate-500  w-[160px]'>permeability protects surrounding land</div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex flex-col justify-center w-[200px]'>
                        <div className='flex justify-center  text-3xl'>12+</div>
                        <div className="flex justify-center">
                            <div className=' text-slate-500  w-[160px]'>permeability protects surrounding land</div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <button onClick={()=>{}} className='border h-[50px] w-[50px]  rounded-full bg-green-500 hover:bg-green-300 flex justify-center pt-4'>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}