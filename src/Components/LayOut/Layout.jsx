import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Fotter from '../Fotter'
const Layout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Fotter/>
    </>
  )
}

export default Layout