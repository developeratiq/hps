import React, { useState } from 'react'
import Buttons from '../../Comps/Buttons'
import { Link, NavLink } from 'react-router-dom'
import DrawerNav from './DrawerNav'
import { GiHamburgerMenu } from "react-icons/gi";
import { DrawerJs } from '../Drawer/DrawerJs';
import { TiThMenu } from 'react-icons/ti';
import { Button, useDisclosure } from '@chakra-ui/react';

function Nav() {
    const[openMenu,setOpenMenu]=useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    
    return (
       <>
       <DrawerJs isOpen={isOpen} onOpen={onOpen}  onClose={onClose} btnRef={btnRef}/>
  
<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to={'/'}  className="flex items-center space-x-3 ">
      <img src="https://seeklogo.com/images/E/education-college-school-logo-289049824A-seeklogo.com.png" className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HPS</span>
    </Link>
    
    <div className="flex ">
     
    <button type="button" class="text-white hover:opacity-[.8]  navbutton">
       </button>
   
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NavLink to='' className=" nav-link block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</NavLink>
        </li>
        <li>
          <NavLink to='' className=" nav-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
        </li>
        <li>
          <NavLink to='' className=" nav-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Courses</NavLink>
        </li>
        <li>
          <NavLink to='' className=" nav-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pages</NavLink>
        </li>
        <li>
          <NavLink to='' className=" nav-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
        </li>
       
      </ul>
    </div>
   
    </div>
    <div>
        <Button>Get Started</Button>
      </div>
    <div className='navbutton'>
     

    <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          <TiThMenu/>
        </Button>
    </div>
  </div>
</nav>
       </>



    )
}

export default Nav