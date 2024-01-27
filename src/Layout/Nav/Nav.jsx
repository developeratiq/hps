import React from 'react'
import Buttons from '../../Comps/Buttons'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <section className='bg-white text-black flex justify-around  items-center h-[9vh]'>
            <div>
                <div className="logo h-[40px] hover:cursor-pointer">
                    <img className='h-[100%]' src="https://seeklogo.com/images/E/education-college-school-logo-289049824A-seeklogo.com.png" alt="" />
                </div>
            </div>
            <ul className='flex gap-5 justify-between align-middle text-[18px] font-medium navul'>
                <Link><li className='navli'>Home</li>  </Link>
                <Link><li className='navli'>About</li>  </Link>
                <Link><li className='navli'>Courses</li>  </Link>
                <Link><li className='navli'>Pages</li>  </Link>
                <Link><li className='navli'>Contact</li>  </Link>
            </ul>
            <Buttons />
        </section>
    )
}

export default Nav