import React from 'react'
import style from '../styles/third.module.css'
import Grid from '@mui/material/Grid'

export default function Third() {

    return (
        <div>
            <div className={style.container}>
                <Grid container className={style.grid}>
                    <Grid item xs={1.6}></Grid>
                    <Grid item xs={8}>
                        <div className={style.events}>EVENTS</div>
                    </Grid>
                    <Grid item xs={2.2}></Grid>
                    <Grid item xs={1.4}></Grid>
                    <Grid item xs={4}>
                        <ul className={style.head}>E-Summit</ul>
                        <ul className={style.list}>
                            <li className='power'>START-UP FAIR</li><br />
                            <li className='power'>E-NETWORKING</li><br />
                            <li className='power'>POWERTALKS & PANEL</li>
                            <li className='power'>DISCUSSIONS</li><br />
                            <li className='power'>CAMPUS AMBASSADOR</li>
                            <li className='power'>PROGRAM</li>
                        </ul>
                    </Grid>
                    <Grid item xs={0.1} className={style.border}></Grid>
                    <Grid item xs={4.5} justifyContent="center" className={style.content}>
                        <div className={style.box}>
                            E-Summit is the flagship event of E-Cell IITH which aims to bring early entrepreneurs, students, corporates, venture capitalists and start-ups with burgeoning ideas from all over the country to one platform to share their entrepreneur ventures and wisdom.
                            <br /><br />
                            This summit provides a medium for healthy discussions and inculcates an entrepreneurial mindset into minds through a plethora of events like debates and panel discussions. We aim to provide a competitive environment for start-ups via events like Elevator Pitch, Pitch Showdown and many more events to commemorate the spirit of entrepreneurship.
                        </div>
                    </Grid>
                </Grid>
                <br />
                <br /><br /><br /><br /><br /><br />
                <Grid container className={style.grid}>
                    <Grid item xs={1.6}></Grid>
                    <Grid item xs={8}>
                        <div className={style.events}>COMPETITIONS</div>
                    </Grid>
                    <Grid item xs={2.2}></Grid>
                    <Grid item xs={1.4}></Grid>
                    <Grid item xs={4}>
                        <ul className={style.head}>IDEA VALIDATION CAMP</ul>
                        <ul className={style.list}>
                            <li>BIZ-QUIZ</li><br />
                            <li>E-PIC</li><br />
                            <li>TRADEPOINT</li><br />
                            <li>THE PITCH SHOWDOWN</li><br />
                            <li>CASE STUDY CHALLENGE</li>
                        </ul>
                    </Grid>
                    <Grid item xs={0.1} className={style.border1}></Grid>
                    <Grid item xs={4.5} justifyContent="center" alignContent="center" className={style.content}>
                        <div className={style.box2}>
                            A platform for budding entrepreneurs to get their innovative ideas evaluated by successful entrepreneurs, VCs, and market leaders. It is a one week long event where students pitch tier ideas and seek experts opinion and validation. The winner of this competition receive prize money and mentorship from VC’s to develop their idea.
                        </div>
                    </Grid>
                </Grid>
            </div>
            <br /><br /><br /><br /><br />
        </div>
    )
}
