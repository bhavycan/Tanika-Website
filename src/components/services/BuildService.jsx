import React from 'react'
import BuildCard from '../../templates/BuildCard'

const BuildService = () => {


   const cards = [
  {
    id: 1,
    image: "/images/livingroom.png",
    tag: "Design",
    top: "20%",
    left: "25%",
    rotate: 8,
  },
  {
    id: 2,
    image: "/images/about.png",
    tag: "Development",
    top: "30%",
    left: "55%",
    rotate: -10,
  },
  {
    id: 3,
    image: "/images/services.png",
    tag: "Branding",
    top: "10%",
    left: "40%",
    rotate: -5,
  },
  {
    id: 4,
    image: "/images/tools.png",
    tag: "SEO",
    top: "15%",
    left: "45%",
    rotate: -5,
  },
  {
    id: 5,
    image: "/images/mobile.png",
    tag: "Marketing",
    top: "40%",
    left: "40%",
    rotate: 35,
  },
];


  return (
    <div className='w-full h-[100vh]  flex items-center justify-center overflow-hidden  relative'>
            <div className="title w-[60%] flex flex-col items-center justify-center px-[10%] h-[80%]">
                <h1 className='w-full h-[30%]   text-[10vw] flex items-center font-["Seasons"]'>Brick</h1>
                <h1 className='w-full h-[2%] text-gray-500 font-bold text-[5vw]  flex items-center justify-center font-["Brittany"]'>By</h1>
                <h1 className='w-full h-[30%] text-[10vw] flex items-center ml-[15%] justify-end font-["Seasons"]'>Brick</h1>
            </div>

            <div className='w-full h-full flex items-center justify-center absolute'>

    {cards.map((item,index)=>{
      return(
        <BuildCard  card = {item}/>
      )
    })}

               
            </div>
        
    </div>
  )
}

export default BuildService