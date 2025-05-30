import style from "../styles/first.module.css";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// MUI Components
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

// MUI Icons
import { Warning } from "@mui/icons-material";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar({
  desc = true,
  heading = "ENTREPRENEURSHIP CELL",
  subheading = "",
  sponsors = false,
  preOrientation = false,
}) {
  const headingRef = useRef();
  const iith = useRef();
  const preDescr = useRef();
  const parent = useRef();
  const warningRef = useRef();

  const matchesMd = useMediaQuery("(min-width:900px)");

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      if (preOrientation) {
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

      if (warningRef.current) {
        gsap.fromTo(
          warningRef.current,
          { autoAlpha: 0, y: -20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.2,
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
  }, [preOrientation]);

  return (
    <div ref={parent}>
      {/* Warning Banner */}
      <Box
        ref={warningRef}
        sx={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "90%", sm: "80%", md: "70%" },
          zIndex: 1000,
          backgroundColor: "black",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "0 0 8px 8px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 2, md: 3 },
            py: 1.5,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Warning 
              sx={{ 
                color: "white", 
                fontSize: { xs: 20, md: 24 },
              }} 
            />
            <Typography
              sx={{
                color: "white",
                fontWeight: 600,
                fontSize: { xs: "0.8rem", sm: "0.9rem", md: "0.95rem" },
                lineHeight: 1.4,
                letterSpacing: "0.3px",
                textAlign: "center",
              }}
            >
              <strong>IMPORTANT:</strong> E-Cell IIT Hyderabad does not engage with any external companies or individuals for internships or placements. 
              All official partnerships are listed on our website. For verification or legitimacy of any program, please refer to our website or contact an official team member directly.
            </Typography>
          </Box>
        </Box>
      </Box>

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
      {preOrientation ?
        (<div className={`${style.title} ${style.titlePreOr}`} ref={headingRef}>
          {heading} <br />
          <div className={style.title} ref={headingRef} >
            {subheading}
          </div>
          <br />
        </div>)
        : (!preOrientation && <div className={style.title} ref={headingRef}>
          <>
            {heading} <br />
            {subheading}
          </>
          <br />
        </div>)}
      {!sponsors ? !preOrientation ? (
        <div className={style.iit} ref={iith}>
          IIT HYDERABAD <br />
        </div>
      ) : ("") : (
        ""
      )}

      <br />
      {!preOrientation && <div className={style.think} id="tagline">
        <span>THINK |</span> <span>BUILD |</span> <span>INSPIRE</span>
      </div>}

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