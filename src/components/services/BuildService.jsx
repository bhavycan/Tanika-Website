import React from 'react'
import BuildCard from '../../templates/BuildCard'

const BuildService = () => {
  return (
    <div className='w-full h-[100vh] flex items-center justify-center  relative'>
            <div className="title w-[60%] flex flex-col items-center justify-center px-[10%] h-[80%]">
                <h1 className='w-full h-[30%]   text-[10vw] flex items-center font-["Seasons"]'>Brick</h1>
                <h1 className='w-full h-[2%] text-gray-500 font-bold text-[5vw]  flex items-center justify-center font-["Brittany"]'>By</h1>
                <h1 className='w-full h-[30%] text-[10vw] flex items-center ml-[15%] justify-end font-["Seasons"]'>Brick</h1>
            </div>

            <div className='w-full h-full flex items-center justify-center absolute'>
                <BuildCard />
            </div>
        
    </div>
  )
}

export default BuildService