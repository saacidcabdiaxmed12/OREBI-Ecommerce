import React from 'react'
import Navber from '../layouts/Navber'
import Sideber from '../layouts/Sideber'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <div>
      <Navber/>
      <Sideber/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout