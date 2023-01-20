import React from 'react'
import Image from 'next/image'
import { Grid } from '@mui/material'
import styles from '../styles/schedule.module.css'

const Schedule = () => {
    return (
        <div>
            <div className='text-6xl flex justify-center font-sans pt-20 pb-10 text-blue'>SCHEDULE</div>
            <div className={styles.img1}>
                <Image src="/ttf.png" height="1000vw" width="1000vw" alt='timetable'></Image>
            </div>
        </div >
    )
}

export default Schedule