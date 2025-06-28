import React, { useEffect, useState } from 'react'
import StepPart from './StepPart'
import useIsMobile from '../../hooks/useIsMobile'

const Siteindexing = () => {

const isMobile = useIsMobile()


  return (
    <div className={` ${isMobile ? "w-[90%]" : "w-[70%]"} min-h-[100vh] bg-white`}>
        <StepPart />
    </div>
  )
}

export default Siteindexing