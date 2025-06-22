import React from 'react'

const BuildCard = () => {
  return (
    <div className='w-[25vw] h-[60vh] bg-zinc-400 px-3 py-3 rounded-xl'>
        <div className="indside-box w-[100%] h-[85%] overflow-hidden bg-red-300 rounded-3xl">
            <img loading='lazy' className='w-full h-full object-cover' src="/images/livingroom.png" alt="" />
        </div>
        <div className="text-tag w-[100%] h-[15%]  py-3 flex items-center justify-center text-[2vw] font-['Seasons'] "><h1>This is my service</h1></div>
    </div>
  )
}

export default BuildCard