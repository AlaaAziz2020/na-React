import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function Masterlayout() {
  return (
    <div>
      <Navbar />
      <div>
      <Outlet />
     
      </div>
      <Footer/>
    </div>
  )
}