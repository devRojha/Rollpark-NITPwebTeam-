import { CirculButton } from "../components/CirculButton";
import { Info } from "../components/Info";
import { FaArrowRight } from "react-icons/fa";

export function StartFooter(){
    return (
        <div className="lg:h-[20vh] bg-white">
            <div className='h-[100%]  bg-white grid lg:grid-cols-5 md:grid-cols-2 pl-8 pr-20'>
                <div className='flex flex-col justify-center w-[200px] mt-4 mb-4'>
                    <div className='flex justify-center text-3xl'>
                        <img className="h-6 m-3" src="src/assets/icon01.png" alt="Loading.."/>
                        <div className="flex flex-col justify-center">40%</div>
                    </div>
                    <div className="flex justify-center">
                        <div className=' text-slate-500  w-[160px]'>less cost than using asphalt</div>
                    </div>
                </div>
                <Info title={"80%"} descrioption={"less construction time than conventional lots"} icon={"src/assets/icon02.png"} />
                <Info title={"7y"} descrioption={"durable enough to last for up to 7 years"} icon={"src/assets/icon03.png"} />
                <Info title={"100%"} descrioption={"permeability protects surrounding land"} icon={"src/assets/icon04.png"}/>
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