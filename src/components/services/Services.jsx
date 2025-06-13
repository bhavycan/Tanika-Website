import { motion } from 'framer-motion'
import React from 'react'
import HomeService from './HomeService'
import Process from './Process'
import ServiceWorkBanner from '../../templates/ServiceWorkBanner'
import Offer from '../Offer'




const Services = () => {
  const background = "https://images.unsplash.com/photo-1520052205864-92d242b3a76b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <div className="main w-full  overflow-hidden ">
     
    <HomeService />
    <Process />
    <Offer imagelink={background} />
    </div>
  )
}

export default Services