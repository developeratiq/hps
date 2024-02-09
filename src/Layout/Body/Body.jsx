
import React, { useEffect } from "react";
import Slick from "./Slick";
import AboutUs from "./AboutUs";
import ChooseUs from "./ChooseUs";
import Instructor from "./Instructor";
import OffForm from "./OffForm";
import Testimonial from "./Testimonial";
import SendMessage from "./SendMessage";
import DrawerNav from "../Nav/DrawerNav";
import video from '../../assets/Heaven.mp4'

import AOS from "aos";

import 'aos/dist/aos.css'

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function Body() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (

    <section className="flex  flex-col justify-center items-center bodysection">
      {/* <DrawerNav/> */}

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#a2d9ff" fill-opacity="1" d="M0,128L48,160C96,192,192,256,288,234.7C384,213,480,107,576,106.7C672,107,768,213,864,266.7C960,320,1056,320,1152,272C1248,224,1344,128,1392,80L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg> */}



      <div className=" flex  justify-center items-center slickcont " data-aos="fadeup">

      <video src={video} autoPlay  muted></video>

        {/* <Slick /> */}
      </div>
      <div data-aos="zoom-in-down">

        <AboutUs />
      </div>
      <div data-aos="zoom-in-down">
        <ChooseUs />

      </div>
      <div data-aos="zoom-in-down">
        <Instructor />

      </div>
      <div data-aos="zoom-in-down">
        <OffForm />

      </div>
      <div data-aos="zoom-in-down">

        <Testimonial />
      </div>
      <div data-aos="zoom-in-down">

        <SendMessage />
      </div>
    </section>
  )
}

export default Body