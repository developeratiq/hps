import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import video from '../../assets/video.mp4'

function Slick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    // nextArrow:true,
    // prevArrow:true
  };
  return (
    <div className=" slickweb">
      <div className="w-full h-full maindiv relative">
        <img
          
          src="https://images.pexels.com/photos/710743/pexels-photo-710743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

        <h1 className='capitalize absolute top[5%] '>Heaven public School</h1>
        <div className='h2div'>
        <h2>Education is the most powerful weapon which you can use to change the world." - Nelson Mandela</h2>
        <h2>The beautiful thing about learning is that no one can take it away from you." - B.B. King</h2>
        </div>
      </div>

    </div>
  )
}

export default Slick