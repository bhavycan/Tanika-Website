import React from 'react'
import HomePortfoio from './HomePortfoio'
import Siteindexing from './Siteindexing'
import NavBar from '../../templates/NavBar'

const Portfolio = () => {
  return (
    <div className='w-full flex flex-col items-center   overflow-hidden'>
      <NavBar />
    <HomePortfoio />
    <Siteindexing />
  </div>
  )
}

export default Portfolio