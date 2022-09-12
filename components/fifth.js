import React from 'react'
import style from '../styles/fifth.module.css'
import Grid from '@mui/material/Grid'

export default function Fifth() {
    return (
        <div>
            <div className={style.QC}>
                <Grid container>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3} justifyContent="center" className={style.QL}>
                        <ul className={style.ql}>Quick Links</ul>
                        <ul>
                            <li className={style.list}>Notable Start-Ups</li>
                            <li className={style.list}>CA Programme</li>
                            <li className={style.list}>E-Summit</li>
                            <li className={style.list}>Our Partners</li>
                        </ul>
                    </Grid>
                    <Grid item xs={0.4}></Grid>
                    <Grid item xs={3}>
                        <div className={style.final}>
                            <div className={style.image}>
                                <img className={style.ecell} src="/static/ecell.png"></img>
                            </div>
                            <br />
                            <div className={style.think}>THINK | BUILD | INSPIRE</div><br />
                            <div className={style.images}>
                                <img className={style.icon} src="/static/instagram1.png"></img>
                                <img className={style.icon} src="/static/linkedin1.png"></img>
                                <img className={style.icon} src="/static/twitter1.png"></img>
                                <img className={style.icon} src="/static/facebook1.png"></img>
                                <img className={style.icon} src="/static/youtube1.png"></img>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3} className={style.QL2} >
                        <ul className={style.ql}>Contact us</ul>
                        <div className={style.log}><img className={style.loc} src="/static/location.png"></img>
                            <div className={style.list1}>
                                <h3> </h3> E-Cell Office
                                C-714, Academic block C,
                                IIT Hyderabad</div></div>
                        <div className={style.log}> <img className={style.logo} src="/static/msg.png"></img>
                            <div className={style.list1}>
                                ecell@iith.ac.in</div></div>
                        <div className={style.log}>
                            <img className={style.logo} src="/static/call.png"></img>
                            <div className={style.list1}>
                                (+91)8979471587</div>
                        </div>
                    </Grid>
                    <Grid item xs={0.5}></Grid>
                </Grid>

            </div><br /><br /><br /><br />
        </div>
    )
}
