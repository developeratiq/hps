import React from 'react'
import inst from '../../assets/COSS-instructor-02.png'

function Instructor() {
    return (
        <div
            className='mt-[8vh] flex justify-between gap-5 instContainer  '
        >
<div className='w-[55%] grid place-items-center'>
    <div>

    <h1 className='text-5xl font-bold font-mono  mt-6 ml-5'>Our Best Instuctors</h1>
    <p className='mt-6 ml-5 text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, debitis! Est molestias soluta vitae eos quia unde. Dolores aspernatur, molestiae hic, enim accusantium aperiam dolorum aliquam, possimus dolor assumenda amet?</p>
    <p className='mt-6 ml-5 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatem pariatur culpa fugit dignissimos! Voluptas eum, cupiditate aliquid ipsam corrupti, blanditiis voluptates ea magnam autem aperiam non ut voluptatibus libero.</p>
    </div>
</div>
<div className='instparent'>

<div className='instructor'>
    <img src={inst} alt=""   className=''/>
</div>
<div className='instructor'>
    <img src={inst} alt=""   className=''/>
</div>
<div className='instructor'>
    <img src={inst} alt=""   className=''/>
</div>
<div className='instructor'>
    <img src={inst} alt=""   className=''/>
</div>
</div>

        </div>
    )
}

export default Instructor