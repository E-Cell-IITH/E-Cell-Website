import React from "react";
import style from "../styles/fifth.module.css";
import Grid from "@mui/material/Grid";
import Image from "next/image";

export default function Fifth() {
  return (
    <footer>
      <div className={style.QC}>
        <Grid container>
          <Grid item sm={1}></Grid>
          <Grid item sm={3} justifyContent="center" className={style.QL}>
            <ul className={style.ql}>Quick Links</ul>
            <ul>
              <li className={style.list}>
                <a
                  className={style.links}
                  href="https://tanmayshah07.github.io/E-CELL-IITH-Startup/"
                >
                  Notable Start-Ups
                </a>
              </li>
              <li className={style.list}>
                <a
                  className={style.links}
                  href="http://caprogram-ecell-iith.netlify.app/"
                >
                  CA Programme
                </a>
              </li>
              <li className={style.list}>
                <a
                  className={style.links}
                  href="http://esummit-ecell-iith.netlify.app/"
                >
                  E-Summit
                </a>
              </li>
              {/* <li className={style.list}>Our Partners</li> */}
            </ul>
          </Grid>
          <Grid item md={0.4}></Grid>
          <Grid item xs={12} sm={12} md={3} sx={{ pt: 5 }}>
            <div className={style.final}>
              <div className={style.image}>
                <Image
                  className={style.ecell}
                  src="/static/ecell.png"
                  alt="Ecell IITH"
                  width={140}
                  height={50}
                />
              </div>
              <br />
              <div className={style.think}>THINK | BUILD | INSPIRE</div>
              <br />
              <div className={style.images}>
                <div className={style.icon}>
                  <a
                    href="https://www.instagram.com/ecell_iith/?hl=en"
                    target="_blank"
                  >
                    <Image
                      src="/static/instagram1.png"
                      width="20"
                      height="20"
                      alt="Ecell IITH Instagram"
                    />
                  </a>
                </div>
                <div className={style.icon}>
                  <a
                    href="https://in.linkedin.com/company/entrepreneurship-cell-iit-hyderabad"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      src="/static/linkedin1.png"
                      width="20"
                      height="20"
                      alt="Ecell IITH Linkedin"
                    />
                  </a>
                </div>
                <div className={style.icon}>
                  <a href="https://twitter.com/ecell_iith" target="_blank">
                    <Image
                      src="/static/twitter1.png"
                      width="20"
                      height="20"
                      alt="Ecell IITH Twitter"
                    />
                  </a>
                </div>
                <div className={style.icon}>
                  <a
                    href="https://www.facebook.com/ecell.iithyd/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      src="/static/facebook1.png"
                      width="20"
                      height="20"
                      alt="Ecell IITH Facebook"
                    />
                  </a>
                </div>
                <div className={style.icon}>
                  <a
                    href="https://www.youtube.com/user/ecelliithyderabad"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      src="/static/youtube1.png"
                      width="20"
                      height="20"
                      alt="Ecell IITH Youtube"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3} sm={3} md={1}></Grid>
          <Grid item xs={6.4} sm={6.4} md={3} className={style.QL2}>
            <ul className={style.ql} id={style.q1}>
              Contact us
            </ul>
            <div className={style.log}>
              <div className={style.loc}>
                <Image src="/static/location.png" width="60" height="60" />
              </div>
              <div className={style.list1} id={style.list1}>
                E-Cell Office C-714, Academic block C, IIT Hyderabad
              </div>
            </div>
            <div className={style.log}>
              <div className={style.logo}>
                <Image src="/static/msg.png" width="60" height="60" />
              </div>
              <div className={style.list1} id={style.list2}>
                ecell@iith.ac.in
              </div>
            </div>
            <div className={style.log}>
              <div className={style.logo}>
                <Image src="/static/call.png" width="60" height="60" />
              </div>
              <div className={style.list1} id={style.list3}>
                (+91)8979471587
              </div>
            </div>
          </Grid>
          <Grid item xs={0.5}></Grid>
        </Grid>
      </div>
      <br />
      <br />
      <br />
      <br />
    </footer>
  );
}
