import React from 'react'
import NavBar from './Components/NavBar'
import { Outlet } from 'react-router'
import Footer from './Components/Footer'

const Rootlayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Rootlayout
