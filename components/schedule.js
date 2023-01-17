import React from 'react'
import Image from 'next/image'
import { Grid } from '@mui/material'

const Schedule = () => {
    return (
        <div>
            <div className='text-6xl flex justify-center font-sans pt-20 pb-10 text-blue'>SCHEDULE</div>
            <div className=''>

                <div className=' text-blue px-15 py-20 text-3xl flex justify-left ml-20'>DAY 1 - 20th January</div>
                <div className=' flex justify-center text-white text-5xl sm: text-[2rem] pb-16 border-b-2 border-blue'>Inauguration Day</div>


                <div className=' text-blue px-20 py-20 text-3xl flex justify-left'>DAY 2 - 21st January</div>
                <div className='  flex justify-center px-5 pb-16 border-b-2 border-blue'><Image src="/tt-1.jpg" alt="tt2" width="600" height="350"></Image></div>


                <div className=' text-blue px-20 py-20 text-3xl flex justify-left'>DAY 3 - 22nd January</div>
                <div className='  flex justify-center px-5 py-5 mb-40'><Image src="/tt-2.jpg" alt="tt2" width="650" height="400"></Image></div>


            </div>
        </div >
    )
}

export default Schedule