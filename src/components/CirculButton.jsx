

export function CirculButton({onClick, icon}){
    return (
        <button onClick={onClick} className='border h-[50px] w-[50px]  rounded-full bg-green-500 hover:bg-green-300 flex  justify-center'>
            <img className="mt-3" src={icon} alt="L" />
        </button>
    )
}