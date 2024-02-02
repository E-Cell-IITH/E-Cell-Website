import style from "../styles/first.module.css";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Box from "@mui/material/Box";
import { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMediaQuery } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar({
  desc = true,
  heading = "ENTREPRENEURSHIP CELL",
  subheading = "",
  sponsors = false,
}) {
  const headingRef = useRef();
  const iith = useRef();
  const parent = useRef();

  const matchesMd = useMediaQuery("(min-width:900px)");

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        "#tagline > *, #smLinks>*",
        {
          x: -4,
          autoAlpha: 0,
        },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.6,
          delay: 0.4,
          ease: "power2.inOut",
          stagger: 0.05,
        }
      );

      if (desc) {
        gsap.fromTo(
          "#about",
          { autoAlpha: 0.2, y: 10, scale: 1 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1.03,
            scrollTrigger: {
              trigger: "#about",
              start: "top 70%",
              duration: 0.9,
              end: "60% 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, [parent]);

    gsap.fromTo(
      headingRef.current,
      0.8,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0 }
    );
    gsap.fromTo(
      iith.current,
      0.6,
      { autoAlpha: 0, y: 15 },
      {
        autoAlpha: 1,
        y: 0,
      }
    );

    return () => ctx.revert();
  }, []);

  return (
    <div ref={parent}>
      <br />
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1))",
          top: 0,
          zIndex: 1,
        }}
      ></Box>
      <div className={style.image} id="ecellLogo">
        <Image
          src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696046/ecell/logo_dshics.png"
          alt="Ecell Logo"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <Image
        src="https://res.cloudinary.com/dwsverefw/image/upload/v1665878886/ecell/hostels_svd8y6.jpg"
        priority
        layout="fill"
        objectFit="cover"
        sx={{ zIndex: 0 }}
        alt="IIT Hyderabad Hostel"
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={style.title} ref={headingRef}>
        <>
          {heading} <br />
          {subheading}
        </>
        <br />
      </div>
      {!sponsors ? (
        <div className={style.iit} ref={iith}>
          IIT HYDERABAD <br />
        </div>
      ) : (
        ""
      )}
      <br />
      <div className={style.think} id="tagline">
        <span>THINK |</span> <span>BUILD |</span> <span>INSPIRE</span>
      </div>
      <div className={style.box} id="smLinks">
        <a
          className={style.pic}
          href="https://www.instagram.com/ecell_iith/?hl=en"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            className={style.images}
            src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696045/ecell/instagram_kxgpgt.png"
            alt="Instagram Link"
            width="20"
            height="20"
            layout="responsive"
          />
        </a>
        <a
          className={style.pic}
          href="https://in.linkedin.com/company/entrepreneurship-cell-iit-hyderabad"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            className={style.images}
            src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696046/ecell/linkedin_yylzcz.png"
            alt="Linkedin link"
            width="20"
            height="20"
            layout="responsive"
          />
        </a>
        <a
          className={style.pic}
          href="https://twitter.com/ecell_iith"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            className={style.images}
            src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696046/ecell/twitter_fmiaf4.png"
            alt="Twitter Link"
            width="20"
            height="20"
            layout="responsive"
          />
        </a>
        <a
          className={style.pic}
          href="https://www.facebook.com/ecell.iithyd/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            className={style.images}
            src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696044/ecell/facebook_o9s1ml.png"
            alt="Facebook Link"
            width="20"
            height="20"
            layout="responsive"
          />
        </a>
        <a
          className={style.pic}
          href="https://www.youtube.com/user/ecelliithyderabad"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            className={style.images}
            src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696047/ecell/youtube_arknwl.png"
            alt="Youtube Link"
            width="18"
            height="18"
            layout="responsive"
          />
        </a>
        <br />
      </div>
      {desc && (
        <div className={style.container2} id="about">
          <div className={style.about}>ABOUT US</div> <br />
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={10} md={9} className={style.cont} id="desc">
              We at IIT Hyderabad&#39;s Entrepreneurship Cell believe in
              passion, hard effort, and an unquenchable drive for achievement.
              It is a place that is the confluence of a billion sparks of ideas,
              a place where the fire of passion mingles with the cold
              calculation of the brain, and a place where dreams come true. We
              are people who love nothing more than the thrill of coming up with
              ideas, working them out into businesses and experiencing the
              pleasure of watching it all come to fruition.
            </Grid>
          </Grid>
          <br />
          <br />
          <br />
        </div>
      )}
    </div>
  );
}
