import React from 'react'
import { FaCertificate } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import classes from '../../../src/assets/online-education.png'

function ChooseUs() {
    return (
        <div className='chooseUs'>

        <div className='  '>
            <div className='sec2'>
                <h2 className='text-red-500 font-semibold text-2xl border-b-2 border-red-600 border-dotted'>Why Choose Us??</h2>
                <h1 className=' font-semibold font-mono'>Why You Start </h1>
                <h1 className=' font-bold font-mono'> Learning With Us</h1>
                <h4

                    className='mt-5 leading-5 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias modi minus reprehenderit consectetur, porro aut neque necessitatibus! Veniam dicta laborum minus eaque qui nobis impedit.</h4>

                <div className='mt-3 w-[90%]'>
                    <div className='flex gap-3'>
                        <div className='class1 bg-[#8a2349]   grid place-items-center'>
                        <GiGraduateCap size={"2.5em"}  color='white'/>
                        </div>
                        <div className='class2'>
                            <h2 className='text-black text-3xl font-semibold'>Classes</h2>
                            <h5 className='text-l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consectetur eos enim voluptatum alias molestias!</h5>
                        </div>
                    </div>
                    <div className='flex gap-3 my-2'>
                        <div className='class1 bg-[#2878eb]  w-[ grid place-items-center'>
                            <img   className="h-[40px]" src={classes} alt="" />
                        </div>
                        <div className='class2 '>
                            <h2 className='text-black text-3xl font-semibold'>Skilled Instructors</h2>
                            <h5 className='text-l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis inventore voluptate praesentium excepturi sequi soluta.</h5>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='class1 bg-[#616975]    grid place-items-center '>
                        <FaCertificate size={"2em"} color='white'/>
                            
                        </div>
                        <div className='class2'>
                            
                            <h2 className='text-black text-3xl font-semibold'>Certificates</h2>
                            <h5 className='text-l'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quibusdam officia assumenda rem at voluptatibus.</h5>
                        </div>
                    </div>
                </div>

            </div>
            <div className='sec1'>

                <div className='flex-1  sec1 ' style={{display:"none"}}>
                    <img className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2U5NISrrVuBCt-G9tbnH0fxOFCsPWLi1F7-65PXG_JEhbKzek8BLReKrZdkWoaw6McZw&usqp=CAU" alt="" />

                </div>
            </div>
        </div>
        </div>
    )
}

export default ChooseUs