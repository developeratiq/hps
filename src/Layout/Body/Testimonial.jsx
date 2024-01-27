import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { VscFeedback } from "react-icons/vsc";
import profile from '../../assets/PROFILE.png'
function Testimonial() {
    const data = [
        {
            name: "atiqur rahman",
            img: profile,
            students: "class10",
            feedback: "lorem hdtygh uygft uihytvsf uhytvsf"
        }, {
            name: "atiqur rahman",
            img: profile,
            students: "class10",
            feedback: "lorem hdtygh uygft uihytvsf uhytvsf"
        }, {
            name: "shafiq rahman",
            img: "hgghag",
            students: "class10",
            feedback: "lorem hdtygh uygft uihytvsf uhytvsf"
        }, {
            name: "jami rahman",
            img: "hgghag",
            students: "class10",
            feedback: "lorem hdtygh uygft uihytvsf uhytvsf"
        }, {
            name: "Rehan rahman",
            img: "hgghag",
            students: "class10",
            feedback: "lorem hdtygh uygft uihytvsf uhytvsf"
        },

    ]
    return (
        <div className='mt-[8vh] w-[90vw]  ml-[10vw]'>
            <div className='flex gap-8'>
                <div className='w-[50%] flex justify-center items-center mb-[5%] mt-[2%]'>
                    <div className=' w-[80%]'>
                        <h2 className=' w-max text-red-500 font-semibold text-2xl border-b-2 border-red-600 border-dotted'>Testimonial</h2>
                        <h1 className='text-4xl font-bold font-mono'>What Our Students Says</h1>
                        <h4 className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatem ut alias nostrum laboriosam repellat blanditiis suscipit. Quos in magnam unde rerum velit repudiandae nulla corporis, cupiditate officiis, dolore repellat.</h4>
                    </div>
                </div>

                <div className='w-[50%]'>
                    <SlickSlider data={data}/>

                </div>
            </div>
        </div>
    )
}

export default Testimonial

const SlickSlider = ({data}) => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        // autoplay: true,
        // nextArrow:true,
        // prevArrow:true
    };
    return (<>
    <Slider {...settings} className="w-[100%] h-[80%] ">
      
    {
        data.map((x)=>(
            <div className='testicard'>
     <h1 className=' ml-[20%]'><VscFeedback  size={"3em"} color='#2878eb'/></h1>
     <h1 className='w-[60%] ml-[15%] mt-6'>{x?.feedback}</h1>
     <div className='flex gap-[10%] mt-6 absolute top-[55%]  ml-[.3%]'>
     <img className='h-[80px] ml-[15%] mt-3 rounded-full' src={x.img} alt="" />
     <div className='mt-6'>
        <h1 className='font-bold'>{x?.name}</h1>
        <h1 className='font-[700]'>{x?.students}</h1>
     </div>

     </div>

     </div>
        ))
    }
    </Slider>
    </>)
}