import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Navbar'
import Footer from '../Footer'

const RootLayout = () => {
  return (
    <>
        <Navbar></Navbar>
            <Outlet/>
        <Footer></Footer>
    </>
  )
}

export default RootLayout