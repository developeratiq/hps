import React from 'react'

function AboutUs() {
    return (
        <section className='aboutuspage'>
            <div className='flex-1 h-[55vh] sec1'>
                <img className='h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2U5NISrrVuBCt-G9tbnH0fxOFCsPWLi1F7-65PXG_JEhbKzek8BLReKrZdkWoaw6McZw&usqp=CAU" alt="" />

            </div>
            <div className='flex-2 sec2 '>
                <h2 className='text-red-500 font-semibold text-2xl border-b-2 border-red-600 border-dotted'>About us</h2>
                <h1 className='text-6xl font-semibold font-mono'>First Choice For Online</h1>
                <h1 className='text-6xl font-semibold font-mono'> Education Anywhere</h1>
                <h4

                    className='mt-5 leading-5 text-xl w-[90%]'>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</h4>

                <div className='about-usbottom'>
                    <div className='bg-[#28a745] '>
                        <h1>123</h1>
                        <h1>Available Subject</h1>
                    </div>
                    <div className='bg-[#2878eb]'>
                        <h1>123</h1>
                        <h1>Online Courses</h1>
                    </div>
                    <div className='bg-[#f14d5d] '>
                        <h1>123</h1>
                        <h1>Skilled Instructors</h1>
                    </div>
                    <div className='bg-[#ffc107] '>
                        <h1>123</h1>
                        <h1>Happy Students</h1>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutUs