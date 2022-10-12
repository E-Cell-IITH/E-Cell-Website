import React from 'react'
import style from '../styles/fifth.module.css'
import Grid from '@mui/material/Grid'
import Image from "next/image";

export default function Fifth() {
    return (
        <div>
            <div className={style.QC}>
                <Grid container>
                    <Grid item sm={1}></Grid>
                    <Grid item sm={3} justifyContent="center" className={style.QL}>
                        <ul className={style.ql}>Quick Links</ul>
                        <ul>
                            <li className={style.list}>
                                <a className={style.links} href='https://tanmayshah07.github.io/E-CELL-IITH-Startup/'>Notable Start-Ups</a>
                            </li>
                            <li className={style.list}>
                                <a className={style.links} href='http://caprogram-ecell-iith.netlify.app/'>CA Programme</a>
                            </li>
                            <li className={style.list}>
                                <a className={style.links} href='http://esummit-ecell-iith.netlify.app/'>E-Summit</a>
                            </li>
                            {/* <li className={style.list}>Our Partners</li> */}
                        </ul>
                    </Grid>
                    <Grid item md={0.4}></Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <div className={style.final}>
                            <div className={style.image}>
                                <Image className={style.ecell} src="/static/ecell.png"></img>
                            </div>
                            <br />
                            <div className={style.think}>THINK | BUILD | INSPIRE</div><br />
                            <div className={style.images}>
                                <Image className={style.icon} src="/static/instagram1.png"></img>
                                <Image className={style.icon} src="/static/linkedin1.png"></img>
                                <Image className={style.icon} src="/static/twitter1.png"></img>
                                <Image className={style.icon} src="/static/facebook1.png"></img>
                                <Image className={style.icon} src="/static/youtube1.png"></img>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={1}></Grid>
                    <Grid item xs={6.4} sm={6.4} md={3} className={style.QL2} >
                        <ul className={style.ql} id={style.q1}>Contact us</ul>
                        <div className={style.log}>
                            <Image className={style.loc} src="/static/location.png"></img>
                            <div className={style.list1} id={style.list1}>
                                 E-Cell Office
                                C-714, Academic block C,
                                IIT Hyderabad
                            </div>
                        </div>
                        <div className={style.log}> 
                            <Image className={style.logo} src="/static/msg.png"></img>
                            <div className={style.list1} id={style.list2}>
                                ecell@iith.ac.in
                            </div>
                        </div>
                        <div className={style.log}>
                            <Image className={style.logo} src="/static/call.png"></img>
                            <div className={style.list1} id={style.list3}>
                                (+91)8979471587
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={0.5}></Grid>
                </Grid>

            </div><br /><br /><br /><br />
        </div>
    )
}
