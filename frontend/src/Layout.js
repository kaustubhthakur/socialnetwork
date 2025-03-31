import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Outlet/>
        <Navbar/>
        </div>
  )
}

export default Layout