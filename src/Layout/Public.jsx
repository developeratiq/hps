import React from 'react'
import Nav from './Nav/Nav'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'


function Public() {
  return (
    <>
    <Nav/>
    
   <div className='outlet'>
   <Outlet/>
   </div>
    {/* <Body/> */}
    <Footer/>    
    </>
  )
}

export default Public