import React from 'react'
import HomePartners from './HomePartners'
import SubPartners from './SubPartners'
import NavBar from '../../templates/NavBar'

const Partners = () => {
  return (
    <div className='w-full min-h-[100vh] overflow-hidden'>
      <NavBar />
        <HomePartners />
        <SubPartners />
    </div>
  )
}

export default Partners