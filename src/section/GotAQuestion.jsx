

export function GotAQuestion(){
    return (
        <div className='flex  max-md:flex-col pt-8 pb-10 bg-slate-100 mb-[490px] shadow-md'>
          <div className='text-4xl font-bold lg:ml-40 md:ml-20 ml-10 mr-5 pb-4'>Got a Question?</div>
          <div className='flex justify-center mr-3 max-sm:mb-10'>
            <div className="flex flex-col justify-center mb-2 max-sm:absolute left-10 ">
              <button className='flex  hover:text-green-500 '>
                <div className='text-1xl font-semibold mr-1'>
                <img className="" src="src/assets/profile.png" alt="" />
                </div>
                <div className='flex flex-col justify-center text-1xl font-semibold h-full'>Got a Question?</div>
              </button>
            </div>
          </div>
          <div className='flex justify-center mr-3'>
            <div className="flex flex-col justify-center mb-2 max-sm:absolute left-12">
              <button className='flex hover:text-green-500'>
                <div className='text-1xl font-semibold mr-1'>
                  <img className="mr-2" src="src/assets/faq.png" alt="" />
                </div>
                <div className='flex flex-col justify-center text-1xl font-semibold h-full'>Read FAQ</div>
              </button>
            </div>
          </div> 
        </div>
    )
}