import { Button } from "./Button";

export function Appbar({trans,setQuote,setMenu}){
  
    return (
      <>
        <div className={`md:grid max-sm:hidden w-full shadow-lg p-4 pt-5 pb-4 ${!trans?"bg-transparent":"bg-white"}  grid-cols-5 fixed font-bold text-slate-400 z-30 `}>
          <div className='flex flex-col justify-center text-4xl text-green-500 col-span-1'>Rollpark</div>
          <div className='flex flex-col justify-center col-span-3'>
            <div className='grid grid-cols-5 space-x-1'>
              <button>Why Rollpark</button>
              <button>Case Study</button>
              <button>Installation</button>     
              <button>Company</button>
              <button>Spacs</button>
            </div>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='flex justify-end pr-8'>
              <button className="text-slate-700 mr-6">FAQ</button>
            <div className='border border-slate-700 bg-green-300 hover:bg-orange-500 hover:text-slate-400 rounded-3xl'>
              <Button caption={"get a Quote"} onClick={()=>{
                setQuote(true);
              }} />
            </div> 
            </div>
          </div>
        </div>
              {/* below mid */}
        <div className={`md:hidden sm:hidden w-full shadow-lg p-8 pt-5 pb-4 ${!trans?"bg-transparent":"bg-white"} grid  grid-cols-2 fixed font-bold text-slate-400 z-30 `}>
          <div className="flex">
            <button className="mr-4 flex flex-col justify-center z-50" onClick={()=>{
              setMenu(true)
            }}><div className="border border-slate-700 w-6"></div><div className="border border-slate-700 w-6 mt-1 mb-1"></div><div className="border border-slate-700 w-6"></div> </button> 
            <div className='flex flex-col justify-center text-3xl text-green-500 col-span-1'>Rollpark</div>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='flex justify-end pr-8'>
              <div className='border border-slate-700 bg-orange-300 hover:bg-orange-500 hover:text-slate-400 rounded-3xl'>
                <Button caption={"get a Quote"} onClick={()=>{
                  setQuote(true);
                }} />
              </div> 
            </div>
          </div>
        </div>
      </>
    )
}
// max-sm:block hidden
{/* <button className='border border-slate-700 p-2 bg-green-400 rounded-3xl'>Get a Quote</button>  */}
