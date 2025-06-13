import React from 'react'
import HomePortfoio from './HomePortfoio'
import Siteindexing from './Siteindexing'

const Portfolio = () => {
  return (
    <div className='w-full flex flex-col items-center  min-h-[100vh] overflow-hidden'>
    <HomePortfoio />
    <Siteindexing />
  </div>
  )
}

export default Portfolio