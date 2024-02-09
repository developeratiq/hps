import React, { useEffect } from 'react'
import Nav from './Nav/Nav'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import Aos from 'aos'


function Public() {

    useEffect(() => {
      Aos.init({ duration: 2000 })
    }, [])
  return (
    <>
    <Nav/>
    
   <div className='outlet'>
   <Outlet/>
   </div>
    {/* <Body/> */}
    <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">

    <Footer  />    
    </div>
    
    </>
  )
}

export default Public