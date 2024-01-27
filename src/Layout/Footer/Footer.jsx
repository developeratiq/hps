import React from 'react'
import { FaBookReader } from "react-icons/fa";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { MdAddCall, MdEmail } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { TiSocialInstagram, TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";

function Footer() {
  return (
    <div className='bg-slate-900 text-white mt-[5vh]'>

      <div className=' w-[80vw] ml-[10vw] flex justify-between pt-[5vh]'>
        <div className='w-[30vw] font-mono'>
          <div className='flex  gap-6 font-bold font-mono'>
            <FaBookReader size={"2.3em"} />
            <h1 className='text-center text-2xl'>Heaven Public School</h1>

          </div>
          <h1 className='mt-[3vh] text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptates molestias! Mollitia temporibus, culpa aperiam vitae tempora corporis eligendi sequi dignissimos et dolores magni cumque blanditiis laborum porro perferendis reprehenderit obcaecati tempore accusantium delectus dolor doloribus veritatis aliquam vero enim?</h1>

        </div>


        <div className="newsletter">
          <div>
            <h1 className='capitalize text-2xl'>News letter</h1>
            <input type="text " className='bg-white text-black' placeholder='Your Email Address' />
          </div>
        </div>
      </div>
      <div className='footersection w-[80vw] ml-[10vw] '>
        <div className='flex justify-between'>
          <div className='intouch  mt-[5vh]'>
            <h1 className='text-2xl font-bold font-mono'>Get in Touch</h1>
            <div className='flex gap-4 mt-3'>
              <i><CiLocationOn size={'2em'} color='white'></CiLocationOn></i>
              <h1 className='text-xl'>Rampatti Road Shakarpur</h1>
            </div>
            <div className='flex gap-4 mt-3'>
              <i><MdAddCall size={'2em'} color='white'></MdAddCall></i>
              <h1 className='text-xl'>+91 6378493754</h1>
            </div>
            <div className='flex gap-4 mt-3'>
              <i><MdEmail size={'2em'} color='white'></MdEmail></i>
              <h1 className='text-xl'>atiqur.mdrahaman@gmail.com</h1>
            </div>
            <div className="social my-8 flex gap-4">
              <TiSocialTwitter size={"3em"} />
              <TiSocialFacebook size={"3em"} />
              <TiSocialInstagram size={"3em"} />
              <TiSocialTwitter size={"3em"} />
            </div>
          </div>
          <div>
            <h1 className='capitalize text-2xl font-bold font-mono mt-[5vh]'>Our Courses</h1>
            <ul className='mt-3 '>
              <li className=' py-1 flex justify-center items-center gap-3'><IoIosArrowForward size={"1.3em"}></IoIosArrowForward>Web Design </li>
              
              <li className=' py-1 flex justify-center items-center gap-3'><IoIosArrowForward size={"1.3em"}></IoIosArrowForward>Web Design </li>
              
              <li className=' py-1 flex justify-center items-center gap-3'><IoIosArrowForward size={"1.3em"}></IoIosArrowForward>Web Design </li>
              
              <li className=' py-1 flex justify-center items-center gap-3'><IoIosArrowForward size={"1.3em"}></IoIosArrowForward>Web Design </li>
              
              <li className=' py-1 flex justify-center items-center gap-3'><IoIosArrowForward size={"1.3em"}></IoIosArrowForward>Web Design </li>
            </ul>
          </div>
          <div>
          <div>
            <h1 className='capitalize text-2xl font-bold font-mono mt-[5vh]'>quick links</h1>
            <ul className='mt-3 '>
              <li className=' py-1 flex justify-center items-center gap-3'><IoIosArrowForward size={"1.3em"}></IoIosArrowForward>Home </li>
              
              <li className=' py-1 flex justify-center items-center gap-3'><IoIosArrowForward size={"1.3em"}></IoIosArrowForward>About </li>
              
              {/* <li className=' py-1 flex justify-center items-center gap-3'><IoIosArrowForward size={"1.3em"}></IoIosArrowForward>Web Design </li> */}
              
              <li className=' py-1 flex justify-center items-center gap-2'><IoIosArrowForward size={"1.3em"}></IoIosArrowForward>courses</li>
              
              <li className=' py-1 flex justify-center items-center gap-3'><IoIosArrowForward size={"1.3em"}></IoIosArrowForward>pages </li>
            </ul>
          </div>

          </div>


        </div>
      </div>

    </div>
  )
}

export default Footer