import style from "../styles/first.module.css";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className={style.container}>
            <br />
            <div className={style.image}>
                <Image src="/static/logo.png" alt="" width="300" height="120" />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className={style.title}>
                ENTREPRENEURSHIP CELL <br />
            </div>
            <div className={style.iit}>
                IIT HYDERABAD <br />
            </div>
            <br />
            <div className={style.think}>THINK | BUILD | INSPIRE</div>
            <div className={style.box}>
                <a className={style.pic} href="https://www.instagram.com/ecell_iith/?hl=en" target="_blank"><Image className={style.images} src="/static/instagram.png" alt="" width="20" height="20" /></a>
                <a className={style.pic} href="https://in.linkedin.com/company/entrepreneurship-cell-iit-hyderabad" target="_blank"><Image className={style.images} src="/static/linkedin.png" alt="" width="20" height="20" /></a>
                <a className={style.pic} href="https://twitter.com/ecell_iith" target="_blank"><Image className={style.images} src="/static/twitter.png" alt="" width="20" height="20" /></a>
                <a className={style.pic} href="https://www.facebook.com/ecell.iithyd/" target="_blank"><Image className={style.images} src="/static/facebook.png" alt="" width="20" height="20" /></a>
                <a className={style.pic} href="https://www.youtube.com/user/ecelliithyderabad" target="_blank"><Image className={style.images} src="/static/youtube.png" alt="" width="20" height="20" /></a>
                <br />
            </div>
            <div className={style.container2} id="about">
                <div className={style.about}>ABOUT US</div> <br />
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={10} md={9} className={style.cont}>
                        We at IIT Hyderabad&#39;s Entrepreneurship Cell believe in passion,
                        hard effort, and an unquenchable drive for achievement. It is a
                        place that is the confluence of a billion sparks of ideas, a place
                        where the fire of passion mingles with the cold calculation of the
                        brain, and a place where dreams come true. We are people who love
                        nothing more than the thrill of coming up with ideas, working them
                        out into businesses and experiencing the pleasure of watching it all
                        come to fruition.
                    </Grid>
                </Grid>
                <br />
                <br />
                <br />
            </div>
        </div>
    );
}
