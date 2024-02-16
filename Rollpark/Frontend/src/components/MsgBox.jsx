






import { FaRegSmile } from "react-icons/fa";


export function MsgBox({isokk}){
    return (
        <div className={`${isokk?"flex": "hidden"} h-50 w-80 rounded-lg bg-white fixed right-10 bottom-32 z-30 text-black pl-2 pr-2 pb-4 border`}>
            <div className="grid grid-cols-1">
                <div className="flex">
                    <div className="h-12 w-12 border rounded-full mr-4 ml-4 relative -top-5 p-2 bg-white">
                        <img className="h-full w-full" src="icon/magicon.png" alt="" />
                    </div>
                    <div className="h-full  flex flex-col justify-center">
                        <div className="text-[10px] text-slate-400">Basil Polvika form Rolloark</div>
                    </div>
                </div>
                <div className="h-full  flex flex-col justify-center">
                    <div className="text-sm mb-2">Hey, how can I help you? Just in case I'm away from my desk, can you please include your name, company, phone, and email address? Thanks!</div>
                </div>
                <div className="flex">
                    <input className="focus:outline-none border-l border-t border-b text-sm h-8 w-full pl-2 placeholder:text-slate-500" type="text" border placeholder="write a reply..." />
                    <button className="border-r border-t border-b h-8 flex flex-col justify-center pr-2 cursor-pointer"><FaRegSmile /></button>
                </div>
            </div>
        </div>
    )
}

// md:h-16 h-12 md:w-16 w-12 
