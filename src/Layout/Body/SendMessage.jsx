import React from 'react'
import { FaCertificate } from 'react-icons/fa6'
import { GiGraduateCap } from 'react-icons/gi'
import { CiLocationOn } from "react-icons/ci";
import { MdAddCall, MdEmail } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";


function SendMessage() {
    const classes =""
  return (
    <div>
        <div className=''>

<div className='mt-[9vh]  flex gap-[5vw] w-[90vw] ml-[13vw]  '>
   
    <div className=' send_message_sec1 bg-slate-100 px-6 py-10 rounded-sm grid place-items-center'>

    <div className='mt-3 w-[90%]'>
            <div className='flex gap-3'>
                <div className='send_form_icon bg-[#8a2349]  w-[100px] grid place-items-center'>
                <CiLocationOn size={"2.5em"}  color='white'/>
                </div>
                <div className='class2'>
                    <h2 className='text-black text-3xl font-semibold'>Our Location</h2>
                    <h5 className='text-l capitalize'>Rampatti road Shakarpur  bharwara Darbhanga</h5>
                </div>
            </div>
            <div className='flex gap-3 my-2'>
                <div className='send_form_icon bg-[#2878eb]  w-[108px] grid place-items-center'>
                    <MdAddCall size={"2em"} color='white'/>
                </div>
                <div className='class2 '>
                    <h2 className='text-black text-3xl font-semibold'>Call Us</h2>
                    <h5 className='text-l'>+91 6378493754</h5>
                </div>
            </div>
            <div className='flex gap-3'>
                <div className='send_form_icon bg-[#616975]   w-[100px] grid place-items-center '>
                <MdMarkEmailRead size={"2em"} color='white'/>
                    
                </div>
                <div className='class2'>
                    
                    <h2 className='text-black text-3xl font-semibold'>Email Us</h2>
                    <h5 className='text-l'>atiqur.mdrahman@gmail.com</h5>
                </div>
            </div>
        </div>
    </div>

    <div className='send_message_sec2'>
        <h2 className='  text-red-500 font-semibold text-2xl border-b-2 border-red-600 border-dotted'>Need Help??</h2>
        <h1 className='text-6xl font-semibold font-mono'>Send Us Message </h1>
    <div>
        <Forms/>
    </div>
        

    </div>
</div>
</div>
    </div>
  )
}

export default SendMessage

const Forms = ()=>{
    return (
        

<form class="max-w-md mx-auto ml-[1vw]">
<div class="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_email" id="floating_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div> 
  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
  </div> 
  <div class="relative z-0 w-full mb-5 group">
      <textarea type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
  </div>


  
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    )
}