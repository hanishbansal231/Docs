import React from 'react'

function Background() {
    return (
        <>
            <div className='fixed w-full h-screen z-[2]'>
                <div className='w-full py-10 absolute top-[5%] flex justify-center text-zinc-600 text-xl font-semibold'>Documents.</div>
                <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-zinc-900 text-[13vw] leading-none tracking-tighter'>Docs.</h1>
            </div>
        </>
    )
}

export default Background