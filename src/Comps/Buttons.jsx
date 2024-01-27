import React from 'react'
import { Link } from 'react-router-dom'



function Buttons() {
    return (
        <div>
            <Link to="#_" class="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-slate-600 rounded text-white hover:bg-white group ">
                <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span class="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">Join Us</span>
            </Link>

        </div>
    )
}

export default Buttons