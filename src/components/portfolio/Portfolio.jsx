import React from 'react'
import Siteindexing from './Siteindexing'
import NavBar from '../../templates/NavBar'
import HomePortfolio from './HomePortfolio'

const Portfolio = () => {
  return (
    <div className='w-full flex flex-col items-center   overflow-hidden'>
      <NavBar />
    <HomePortfolio />
    <Siteindexing />
  </div>
  )
}

export default Portfolio