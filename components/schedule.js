import React from 'react'
import Image from 'next/image'
import { Grid } from '@mui/material'

const Schedule = () => {
    return (
        <div>
            <div container className='text-6xl text-white flex justify-center font-sans pt-20 pb-10'>SCHEDULE</div>
            <div className=''>

                <div className=' text-white px-15 py-20 text-3xl border-white border-2 flex justify-center'>DAY 1<br></br>20th January</div>
                <div className=' border-white border-2 flex justify-center text-white text-2xl py-20'>Inaugaration Day</div>


                <div className=' text-white px-20 py-20 text-3xl  border-white border-2 flex justify-center'>DAY 2<br></br>21st January</div>
                <div className='  border-white border-2 flex justify-center px-5 py-5'><Image src="/tt-1.jpg" width="600" height="200"></Image></div>


                <div className=' text-white px-20 py-20 text-3xl border-white border-2 flex justify-center'>DAY 3<br></br>22nd January</div>
                <div className='  border-white flex justify-center border-2 px-5 py-5'><Image src="/tt-2.jpg" width="650" height="400"></Image></div>


            </div>
        </div >
    )
}

export default Schedule