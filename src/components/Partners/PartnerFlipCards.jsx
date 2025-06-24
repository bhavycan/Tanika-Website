import React from 'react'
import PartnersCard from '../../templates/PartnersCard'
import { image } from 'motion/react-client'

const PartnerFlipCards = () => {

    const cardinfo = [

    {
        name : "Hardware",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing eli amet consectetur adipisicing eli",
        image : ["/images/partners_images/ebco.webp","/images/partners_images/hettich.png","/images/partners_images/olive-logo.webp", "/images/partners_images/vita.png"]
    },
      {
        name : "Electric",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing eli amet consectetur adipisicing eli",
        image : ["/images/partners_images/rr.png", "/images/partners_images/finolex.png"]
    },
      {
        name : "Plywood",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing eli amet consectetur adipisicing eli",
        image : ["/images/partners_images/royal_touch.jpg"]
    },
     {
        name : "Paint",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing eli amet consectetur adipisicing eli",
        image : ["/images/partners_images/asian_paints.webp"]
    },
    
    
    ]
  return (
    <div className='w-full h-[100vh] px-[3%] pt-[5%] flex flex-col items-center justfify-cenetr '>
            <div className='w-full h-[20%] bg-pink-200 flex items-center justify-center overflow-hidden'>
                <h1 className='w-[30%] flex items-center justify-center font-["Seasons"] text-[9vw] h-[100%] bg-pink-600'>Reveal</h1>
            </div>
            <div className="card-container h-[80%] pt-[5%] flex items-center justify-center gap-[2%] w-full bg-yellow-400">

                {cardinfo.map((items, index)=>{
                    return(
<PartnersCard card={items}/>

                    )
                })}

            </div>
        
    </div>
  )
}

export default PartnerFlipCards