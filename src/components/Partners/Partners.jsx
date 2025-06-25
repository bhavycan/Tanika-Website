import React from 'react'
import HomePartners from './HomePartners'
import PartnerFlipCards from './PartnerFlipCards'
import SubPartners from './SubPartners'

const Partners = () => {
  return (
    <div className='w-full min-h-[100vh]'>
        <HomePartners />
        <SubPartners />
    </div>
  )
}

export default Partners