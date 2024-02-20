import { Button, Input, useDisclosure } from "@chakra-ui/react"


import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import React from "react"
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router-dom";

export function DrawerJs({ isOpen, onOpen, onClose,btnRef }) {
  
  
    return (
      <div className="absolute drawerjs">
      
        <Drawer
          isOpen={isOpen}
          placement='right'
          key={"xs"}
          onClose={onClose}
          finalFocusRef={btnRef}
          h={50}
          w={20}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
            <img src="https://seeklogo.com/images/E/education-college-school-logo-289049824A-seeklogo.com.png" className="h-8" alt="Flowbite Logo" />
            </DrawerHeader>
  
            <ul className="flex responsiveul flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
  
            <DrawerFooter>
              {/* <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button> */}
              {/* <Button colorScheme='blue'>Save</Button> */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    )
  }