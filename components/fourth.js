import React from 'react'
import style from '../styles/fourth.module.css'
import Grid from '@mui/material/Grid'

export default function Fourth() {
    return (
        <div>
            <Grid container>
                <Grid item xs={1.6}></Grid>
                <Grid item xs={4}>
                <div className={style.sponsor}>OUR SPONSORS</div><br /><br />
                </Grid>
            </Grid>
            <br />
            <Grid container className={style.container} direction="row" justifyContent="center" alignItems="center" spacing={1.5}>
                <Grid item md={1.6}>
                    <img className={style.img} src="/static/image 5.png" alt="" />
                </Grid>
                <Grid item md={1.6}>
                    <img className={style.img} src="/static/image 1.png" alt="" />
                </Grid>
                <Grid item md={1.6}>
                    <img className={style.img} src="/static/image 4.png" alt="" />
                </Grid>
                <Grid item md={1.6}>
                    <img className={style.img} src="/static/image 3.png" alt="" />
                </Grid>
                <Grid item md={1.6}>
                    <img className={style.img} src="/static/image 6.png" alt="" />
                </Grid>
                <Grid item md={1.6}>
                    <img className={style.img} src="/static/image 7.png" alt="" />
                </Grid>
            </Grid>
            <br /><br /><br /><br /><br />
        </div>
    )
}
