

export function Info({title, descrioption, icon}){
    return (
     <div className='flex flex-col justify-center w-[200px] mt-4 mb-4'>
        <div className='flex justify-center  text-3xl'>
            <img src={icon} alt="Loading.." className="h-9 mr-3" />
            {title}</div>
        <div className="flex justify-center">
            <div className=' text-slate-500  w-[160px]'>{descrioption}</div>
        </div>
    </div>
    )
}