

import { FiMinimize2 } from "react-icons/fi";

export function Pause({fullPlay,setFullPlay}){
    if(fullPlay){
        return(
            <button onClick={()=>{
                setFullPlay(!fullPlay);
            }} className="md:h-16 h-12 md:w-16 w-12 rounded-full bg-transparent border border-green-500 hover:bg-green-300 fixed left-10 top-80 z-50 text-white font-bold text-2xl flex justify-center">
                <div className="h-full  flex flex-col justify-center">
                    <FiMinimize2 />
                </div>
            </button>
        )
    }
    else{
        return<>
        </>
    }
}