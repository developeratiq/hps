import React from 'react'
import Nav from './Nav/Nav'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'


function Public() {
  return (
    <div>
    <Nav/>
    <Outlet/>
    {/* <Body/> */}
    <Footer/>    
    </div>
  )
}

export default Public