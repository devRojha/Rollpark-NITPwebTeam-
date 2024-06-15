
import { FaMessage } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
export function Msg({setIsokk,isokk}){
    return (
        <button onClick={()=>{
            setIsokk(!isokk);
        }} className="md:h-16 h-12 md:w-16 w-12 rounded-full bg-slate-800 fixed right-10 bottom-16 z-30 text-white font-bold text-2xl flex justify-center">
            <div className="h-full  flex flex-col justify-center">
                {(isokk)?<div className="rotate-45"><IoMdAdd /></div>:<FaMessage />}
            </div>
        </button>
    )
}