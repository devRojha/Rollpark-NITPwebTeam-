

export function Button({onClick, caption}){
    return (
        <>
            <button onClick={onClick} className={" p-2 rounded-3xl flex justify-center"}>{caption}</button>
        </>
    )
}

{/* <button className='cursor-pointer flex justify-center border border-slate-700 p-4  rounded-3xl  text-2xl bg-slate-800 mb-5'>Request a Quote</button> */}

// border border-slate-700 p-2 bg-green-400 rounded-3xl