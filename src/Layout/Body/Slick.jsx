import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

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
    <Slider {...settings} className="w-[100%] h-[100%] max-w-[90vw] ml-[10vw]">
      <div className="w-full h-full">
        
        <img className="w-full h-[60vh]" src="https://media.istockphoto.com/id/1409722748/photo/students-raising-hands-while-teacher-asking-them-questions-in-classroom.jpg?s=612x612&w=0&k=20&c=NbVChOV9wIbQOhUD6BqpouZHHBbyQ2rkSjaVfIhpMv8=" alt="" />
        {/* <h3>1</h3> */}
      </div><div>
        <img  className="w-full h-[60vh]" src="https://media.istockphoto.com/id/1449192107/photo/pupils-raising-hands-during-lesson.jpg?b=1&s=170667a&w=0&k=20&c=ZJvXDIe9opn6_-LjQYm3kr0O2WDTj32fJ-qsD896POQ=" alt="" />
        {/* <h3>1</h3> */}
      </div>
     
    </Slider>
  )
}

export default Slick