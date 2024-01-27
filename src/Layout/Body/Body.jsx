
import React from "react";
import Slick from "./Slick";
import AboutUs from "./AboutUs";
import ChooseUs from "./ChooseUs";
import Instructor from "./Instructor";
import OffForm from "./OffForm";
import Testimonial from "./Testimonial";
import SendMessage from "./SendMessage";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function Body() {
   
  return (
    <section className="flex  flex-col max-w-[90vw] justify-center items-center">

    <div className=" flex  justify-center items-center h-[60vh] ">
         <Slick/>
    </div>
    <AboutUs/>
    <ChooseUs/>
    <Instructor/>
    <OffForm/>
    <Testimonial/>
    <SendMessage/>
    </section>
  )
}

export default Body