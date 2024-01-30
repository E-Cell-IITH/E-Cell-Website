import React from "react";
import style from "../styles/fifth.module.css";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";


const ananda = localFont({
  src: "../public/fonts/ananda-neptouch-4.ttf",
});
export default function Fifth({ esummit = false }) {
  if (esummit) {
    return (
      <footer style={{ "background": "#042630"}}>
        <div
          className={`text-[#FCBF5F] py-9 
          "bg-[#042630]"
         `}
        >
          <Grid container>
            <Grid item sm={1}></Grid>
            <Grid item sm={3} justifyContent="center" className={style.QL}>
              <ul
                className={`py-[2rem] text-[#FCBF5F] text-[2.4rem] max-[400px]:text-[1rem] md:text-[2rem] lg:text-[2rem] 2xl:text-[3rem] ${ananda.className}`}
              >
                Quick Links
              </ul>
              <ul style={{ color: "#FCBF5F",listStyleType:"disc" }}>
                <li className={style.list}>
                  <Link
                    href="/sponsor"
                    className={style.links}
                    style={{ color: "#FCBF5F" }}
                  >
                    Collaborations
                  </Link>
                </li>
                <li className={style.list}>
                  <Link
                    href="/esummit"
                    className={style.links}
                    style={{ color: "#FCBF5F" }}
                  >
                    E-Summit
                  </Link>
                </li>
                <li className={style.list}>
                  <Link
                    href="/startupfair"
                    className={style.links}
                    style={{ color: "#FCBF5F" }}
                  >
                    Startup Fair
                  </Link>
                </li>
                <li className={style.list}>
                  <Link
                    href="/Team"
                    className={style.links}
                    style={{ color: "#FCBF5F" }}
                  >
                    Team
                  </Link>
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
                    src="/esummit/gallery/ecell-logo.png"
                    alt="Ecell IITH"
                    width={190}
                    height={70}
                  />
                </div>
                <br />
                <div className={style.think} style={{ color: "#FCBF5F" }}>
                  THINK | BUILD | INSPIRE
                </div>
                <br />
                <div className={style.images}>
                  <div className={style.icon}>
                    <Link
                      href="https://www.instagram.com/ecell_iith/?hl=en"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Image
                        src="/esummit/gallery/ig-logo.png"
                        width="20"
                        height="20"
                        alt="Ecell IITH Instagram"
                        layout="responsive"
                      />
                    </Link>
                  </div>
                  <div className={style.icon}>
                    <Link
                      href="https://in.linkedin.com/company/entrepreneurship-cell-iit-hyderabad"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Image
                        src="/esummit/gallery/linkedin-logo.png"
                        width="20"
                        height="20"
                        alt="Ecell IITH Linkedin"
                        layout="responsive"
                      />
                    </Link>
                  </div>
                  <div className={style.icon}>
                    <Link
                      href="https://twitter.com/ecell_iith"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Image
                        src="/esummit/gallery/twitter-logo.png"
                        width="20"
                        height="20"
                        alt="Ecell IITH Twitter"
                        layout="responsive"
                      />
                    </Link>
                  </div>
                  <div className={style.icon}>
                    <Link
                      href="https://www.facebook.com/ecell.iithyd/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Image
                        src="/esummit/gallery/fb-logo.png"
                        width="20"
                        height="20"
                        alt="Ecell IITH Facebook"
                        layout="responsive"
                      />
                    </Link>
                  </div>
                  <div className={style.icon}>
                    <Link
                      href="https://www.youtube.com/user/ecelliithyderabad"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Image
                        src="/esummit/gallery/yt-logo.png"
                        width="20"
                        height="20"
                        alt="Ecell IITH Youtube"
                        layout="responsive"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={3} sm={3} md={1}></Grid>
            <Grid item xs={6.4} sm={6.4} md={3} className={"text-left"}>
              <h2
                className={`py-[2rem] text-[#FCBF5F] text-[2.4rem] max-[400px]:text-[1rem] md:text-[2rem] lg:text-[2rem] 2xl:text-[3rem] ${ananda.className}`}
                id={style.q1}
              >
                Contact us
              </h2>
              <div className={style.log}>
                <div className={style.loc}>
                  <Image
                    src="/esummit/gallery/location.png"
                    width="50"
                    height="50"
                    layout="responsive"
                    alt="location"
                  />
                </div>
                <div className={style.list1} id={style.list1}>
                  E-Cell Office C-714, Academic block C, IIT Hyderabad
                </div>
              </div>
              <div className={style.log}>
                <div className={style.logo}>
                  <Image
                    src="/esummit/gallery/email.png"
                    width="60"
                    height="60"
                    alt="dot"
                  />
                </div>
                <div className={style.list1} id={style.list2}>
                  ecell@iith.ac.in
                </div>
              </div>
              <div className={style.log}>
                <div className={style.logo}>
                  <Image
                    src="/esummit/gallery/phone.png"
                    width="60"
                    height="60"
                    alt="dial"
                  />
                </div>
                <div className={style.list1} id={style.list3}>
                  (+91)90900 72712 <br/> (+91)72359 15379
                </div>
              </div>
            </Grid>
            <Grid item xs={0.5}></Grid>
          </Grid>
        </div>
      </footer>
    );
  } else {
    return (
      <footer>
        <div
          className={`text-white py-9 ${
            esummit
              ? "bg-[#042630]"
              : "bg-gradient-to-b from-[#281332] to-transparent"
          } `}
        >
          <Grid container>
            <Grid item sm={1}></Grid>
            <Grid item sm={3} justifyContent="center" className={style.QL}>
              <ul className={style.ql}>Quick Links</ul>
              <ul>
                <li className={style.list}>
                  <Link href="/sponsor" className={style.links}>
                    Collaborations
                  </Link>
                </li>
                <li className={style.list}>
                  <Link href="/Team" className={style.links}>
                    Team
                  </Link>
                </li>
                <li className={style.list}>
                  <Link href="caprg/index.html" className={style.links}>
                    CA Programme
                  </Link>
                </li>
                <li className={style.list}>
                  <Link href="/esummit" className={style.links}>
                    E-Summit
                  </Link>
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
                    src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696044/ecell/ecell_v6xqu3.png"
                    alt="Ecell IITH"
                    width={190}
                    height={70}
                  />
                </div>
                <br />
                <div className={style.think}>THINK | BUILD | INSPIRE</div>
                <br />
                <div className={style.images}>
                  <div className={style.icon}>
                    <Link
                      href="https://www.instagram.com/ecell_iith/?hl=en"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Image
                        src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696045/ecell/instagram1_zt22es.png"
                        width="20"
                        height="20"
                        alt="Ecell IITH Instagram"
                        layout="responsive"
                      />
                    </Link>
                  </div>
                  <div className={style.icon}>
                    <Link
                      href="https://in.linkedin.com/company/entrepreneurship-cell-iit-hyderabad"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Image
                        src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696046/ecell/linkedin1_cdvqk7.png"
                        width="20"
                        height="20"
                        alt="Ecell IITH Linkedin"
                        layout="responsive"
                      />
                    </Link>
                  </div>
                  <div className={style.icon}>
                    <Link
                      href="https://twitter.com/ecell_iith"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Image
                        src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696047/ecell/twitter1_gtx5gu.png"
                        width="20"
                        height="20"
                        alt="Ecell IITH Twitter"
                        layout="responsive"
                      />
                    </Link>
                  </div>
                  <div className={style.icon}>
                    <Link
                      href="https://www.facebook.com/ecell.iithyd/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Image
                        src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696044/ecell/facebook1_w5seu6.png"
                        width="20"
                        height="20"
                        alt="Ecell IITH Facebook"
                        layout="responsive"
                      />
                    </Link>
                  </div>
                  <div className={style.icon}>
                    <Link
                      href="https://www.youtube.com/user/ecelliithyderabad"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Image
                        src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696047/ecell/youtube1_a7c8bc.png"
                        width="20"
                        height="20"
                        alt="Ecell IITH Youtube"
                        layout="responsive"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={3} sm={3} md={1}></Grid>
            <Grid item xs={6.4} sm={6.4} md={3} className={"text-left"}>
              <h2
                className={
                  "text-[2vw] font-bold text-center md:text-left md:pl-8 pb-5 !ml-0 sm:pb-1"
                }
                id={style.q1}
              >
                Contact us
              </h2>
              <div className={style.log}>
                <div className={style.loc}>
                  <Image
                    src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696046/ecell/location_tgobmr.png"
                    width="50"
                    height="50"
                    layout="responsive"
                    alt="location"
                  />
                </div>
                <div className={style.list1} id={style.list1}>
                  E-Cell Office C-714, Academic block C, IIT Hyderabad
                </div>
              </div>
              <div className={style.log}>
                <div className={style.logo}>
                  <Image
                    src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696046/ecell/msg_mqpkbk.png"
                    width="60"
                    height="60"
                    alt="dot"
                  />
                </div>
                <div className={style.list1} id={style.list2}>
                  ecell@iith.ac.in
                </div>
              </div>
              <div className={style.log}>
                <div className={style.logo}>
                  <Image
                    src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696044/ecell/call_bcfebi.png"
                    width="60"
                    height="60"
                    alt="dial"
                  />
                </div>
                <div className={style.list1} id={style.list3}>
                  (+91)90900 72712 (+91)72359 15379
                </div>
              </div>
            </Grid>
            <Grid item xs={0.5}></Grid>
          </Grid>
        </div>
      </footer>
    );
  }
}
