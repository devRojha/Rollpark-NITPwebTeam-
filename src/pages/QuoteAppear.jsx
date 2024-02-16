import { Button } from "../components/Button";
import { Tailored } from "../components/Tailored";




export function QuoteAppear({Quote, setQuote}){
    if(Quote == true){
        return (
            <div className="absolute bg-transparent w-full top-60 z-40">
                <div className="bg-white shadow-lg ml-20 mr-20">
                    <div className="pt-10 pb-10 border">
                        <button className="absolute w-14 h-14 rounded-full border bg-slate-200 right-24 p-2" onClick={()=>{
                            setQuote(false);
                        }}>
                            <div className="border border-slate-600 rotate-45"></div>
                            <div className="border border-slate-600 -rotate-45"></div>
                        </button>
                        <div className="flex justify-center">
                            <div className="flex flex-col justify-center">
                                <div className="text-2xl md:text-4xl font-bold flex justify-center mb-5">REQUEST A QUOTE</div>
                                <div className="text-3xl text-slate-400 flex justify-center">Share your details to get a project estimation</div>
                                <div className="text-3xl text-slate-400 flex justify-center" >and free consulation</div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-10 pb-10 border">
                        <div className="grid grid-cols-2">
                            <div className="flex justify-center">
                                <div className="flex flex-col justify-center">
                                    <div className="flex justify-center text-1xl font-bold mb-2">Lot's current surface</div>
                                    <div className="flex justify-center">
                                        <div className='p-3 flex flex-col'>
                                            <button onClick={()=>{}} className='flex justify-center h-[80px] w-[80px] rounded-full hover:border border-blue-300 p-1'>
                                                <img src="" alt={"I"}/>
                                            </button>
                                            <div className='text-slate-400 flex justify-center mt-3'>Grass or drift</div>
                                        </div>
                                        <div className='p-3 flex flex-col'>
                                            <button onClick={()=>{}} className='flex justify-center h-[80px] w-[80px] rounded-full hover:border border-blue-300 p-1'>
                                                <img src="" alt={"I"}/>
                                            </button>
                                            <div className='text-slate-400 flex justify-center mt-3'>Stone</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="flex flex-col justify-center">
                                    <div className="flex justify-center text-1xl font-bold mb-2">Lot's area size <span className="ml-2 font-semibold text-slate-400">(approx.)</span></div>
                                    <div className="flex justify-center">
                                        <input type="text" placeholder="5" className="text-5xl w-[80%] border-b border-green-500 mb-4 placeholder-black text-center focus:outline-none"/>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="w-[80%]">
                                            <div className="grid grid-cols-4 w-[40%] space-x-1">
                                                <button className="">ac</button>
                                                <button className="text-slate-400 text-1xl">ft2</button>
                                                <button className="text-slate-400 text-1xl">m2</button>
                                                <button className="text-slate-400 text-1xl">km2</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-10 pb-10 border">
                        <div className="grid gird-cols-1 pl-40 pr-40 pt-10 pb-10 space-y-20">
                            <div className="grid grid-cols-2">
                                <input placeholder="First Name" type="text" className="border-b border-slate-300 mr-4 focus:outline-none focus:border-green-500"/>
                                <input placeholder="Last Name" type="text" className="border-b border-slate-300 focus:outline-none focus:border-green-500"/>
                            </div>
                            <input type="text" placeholder="Company" className="border-b border-slate-300 focus:outline-none focus:border-green-500"/>
                            <input type="email" placeholder="Email" className="border-b border-slate-300 focus:outline-none focus:border-green-500"/>
                            <input type="text" placeholder="Phone number" className="border-b border-slate-300 focus:outline-none focus:border-green-500"/>
                            <input type="text" placeholder="Lot location" className="border-b border-slate-300 focus:outline-none focus:border-green-500"/>
                            <div className="flex flex-col">
                                <label  className="text-slate-400">Use</label>
                                <select className="border-b border-slate-300 focus:outline-none focus:border-green-500">
                                    <option value="option1">Daily, temporary use</option>
                                    <option value="option2">Daily, long term use</option>
                                    <option value="option3">Event Parking, Overflow, Vehicle Storage</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid gird-cols-1 pl-40 pr-40 pb-10 space-y-20 border">
                            <input type="text" placeholder="Additional comments" className="border-b border-red-700 focus:outline-none focus:border-green-500 h-[300px]"/>
                            <div className="flex justify-center"> 
                                <button className="bg-green-500 text-white text-bold text-3xl rounded-full w-60 pt-8 pb-8">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}