import React, { useRef, useEffect } from "react";

import Navbar from "../components/first";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Box from "@mui/material/Box";

import EcellLogo from "../public/ecellLogo.png";

import Image from "next/image";

import Typography from "@mui/material/Typography";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";

import Button from "@mui/material/Button";
import styles from "../styles/startupfair.module.css";
import { Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { auth, provider, signInWithPopup } from "../lib/firebase";

function StartupFair() {
  const parent = useRef();
  const router = useRouter();

  const tl = useRef();

  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const ecell = isLargeScreen ? "5rem" : isMediumScreen ? "2.2rem" : "2.5rem";

  const fair = isLargeScreen ? "7rem" : isMediumScreen ? "2rem" : "2.8rem";
  const presents = isLargeScreen ? "1.4rem" : "1rem";
  const padding = isLargeScreen ? "1rem 2.4rem" : "0.5rem 1rem";

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      router.push("/register");
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div ref={parent}>
      <Box sx={{ position: "absolute", top: "60px", left: "80px" }}>
        <Image src={EcellLogo} alt="logo" />
      </Box>

      <Box
        sx={{
          minHeight: "100vh",

          backgroundImage: "linear-gradient(#02023c 5vh, black)",

          display: "flex",

          flexDirection: "column",

          justifyContent: "center",

          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "100%",

            display: "flex",

            justifyContent: "center",

            alignItems: "center",

            flexDirection: "column",
          }}
        >
          <Typography
            // variant="h2"
            // color="white"
            // sx={{ fontWeight: "600", textAlign: "center", fontSize: ecell }}
            color= "#FFF"
            textAlign= "center"
            fontFamily= "Montserrat"
            fontSize= {ecell}
            fontStyle= "normal"
            fontWeight= "700"
            lineHeight= "normal"
          >
            E-CELL IIT HYDERABAD
          </Typography>

          <Typography
            // variant="body1"
            // color="white"
            // sx={{ textAlign: "center", fontSize: presents }}
            color= "#FFF"
            textAlign= "center"
            fontFamily= "Montserrat"
            fontSize= {presents}
            fontStyle= "normal"
            fontWeight= "700"
            lineHeight= "41.968px"
            textTransform= "uppercase"
          >
            PRESENTS
          </Typography>

          <Typography
            sx={{
              fontWeight: "700",

              color: "white",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              lineSpacing: "-1.14px",

              background:
                "-webkit-linear-gradient(180deg, #5FD2D8 30%, #3982E6 90%)",

              WebkitBackgroundClip: "text",

              WebkitTextFillColor: "transparent",

              textAlign: "center",

              fontSize: fair,
            }}
          >
            STARTUP FAIR &apos;25
          </Typography>

          {/* <Link href="/register"> */}
            <Button
              sx={{
                padding: padding,
                textAlign: "center",
                marginTop: "2vw",
                fontSize: isLargeScreen ? "1.3rem" : "1rem",
                textTransform: "capitalize",
                fontWeight: "lighter",
                border: "2.439px solid #5FD2D8",
                borderRadius: "10px",
                boxShadow: "0px 0px 27.979px 3.497px #61E0FD;",
                color: "white",
              }}
              onClick={handleLogin}
              // className={styles.borderGradient}
            >
              <Typography
                color= "#FFF"
                textAlign= "center"
                fontFamily= "Montserrat"
                fontSize= "32px"
                fontStyle= "normal"
                fontWeight= "500"
                lineHeight= "normal"
                textTransform= "capitalize"
              >
                Register Here
              </Typography>
            </Button>
          {/* </Link> */}
        </Box>
        <Box
          sx={{
            color: "white",
            position: "absolute",
            bottom: "10px",
            left: "10px",
          }}
        >
          <Box sx={{ display: "flex", gap: ".5rem" }}>
            <Link
              href="https://www.instagram.com/ecell_iith/?hl=en"
              sx={{ color: "white" }}
              target="_blank"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/company/entrepreneurship-cell-iit-hyderabad"
              sx={{ color: "white" }}
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
            <Link href="https://twitter.com/ecell_iith" sx={{ color: "white" }}>
              <TwitterIcon />
            </Link>
            <Link
              href="https://www.facebook.com/ecell.iithyd/"
              sx={{ color: "white" }}
              target="_blank"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="https://www.youtube.com/user/ecelliithyderabad"
              sx={{ color: "white" }}
              target="_blank"
            >
              <YouTubeIcon />
            </Link>
          </Box>
        </Box>
      </Box>

      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            minHeight: "100vh",

            display: "flex",

            flexDirection: "column",

            justifyContent: "center",

            alignItems: "center",

            gap: "1rem",

            zIndex: "2",
          }}
        >
          <Typography
            color="white"
            textAlign="center"
            fontFamily="Montserrat"
            fontStyle="normal"
            lineHeight="normal"
            textTransform="uppercase"
            sx={{
              textAlign: "center",

              zIndex: "2",

              fontWeight: 700,

              fontSize: isLargeScreen ? "4rem" : "3rem",
            }}
          >
            E-SUMMIT 2025
          </Typography>

          <Typography
            variant="body1"
            color="white"
            fontFamily="Montserrat"
            sx={{
              textAlign: "center",

              paddingInline: isLargeScreen ? "6rem" : "3rem",

              paddingBottom: "2rem",

              fontSize: isLargeScreen ? "2rem" : "1.2rem",
              // fontSize: "32px",

              zIndex: "2",
            }}
          >
            The highlight of E-Cell&apos;s calendar! This event bridges
            academia, venture capitalists, and inventive entrepreneurs, bringing
            together early-stage thinkers, students, corporate leaders, and
            startups from every corner of the country. Experience a vibrant mix
            of competitions, workshops, a delectable food festival, enlightening
            talks, engaging panel discussions, and alumni networking. The
            standout feature? A three-month pitching competition, offering
            winners the chance to showcase their innovative ideas before
            respected industry experts and notable speakers. Join us in shaping
            the future of entrepreneurship!
          </Typography>
        </Box>

        <Box
          sx={{
            minHeight: "100vh",

            display: "flex",

            flexDirection: "column",

            justifyContent: "center",

            alignItems: "center",

            gap: "3rem",

            zIndex: "2",
          }}
        >
          <Typography
            color="white"
            sx={{
              textAlign: "center",

              zIndex: "2",
              fontFamily: "Montserrat",

              fontWeight: "900",

              fontSize: isLargeScreen ? "4rem" : "3rem",

              background:
                "-webkit-linear-gradient(180deg, #5FD2D8 30%, #3982E6 90%)",

              WebkitBackgroundClip: "text",

              WebkitTextFillColor: "transparent",
            }}
          >
            STARTUP FAIR
          </Typography>

          <Typography
            variant="body1"
            color="white"
            sx={{
              fontFamily: "Montserrat",
              textAlign: "center",

              paddingInline: isLargeScreen ? "6rem" : "3rem",

              fontSize: isLargeScreen ? "2rem" : "1.2rem",

              zIndex: "2",
            }}
          >
            StartupFair is a startup exhibition event, welcoming all the top-notch Startups,
            Investors, Speakers, Organizations, and attendees from all over India. What sets
            it apart is the inclusion of 14 specialized tracks, each dedicated to a unique
            sphere of innovation. Whether it&apos;s tech, sustainability, healthcare, or any other
            niche, there&apos;s a track tailored precisely to your interests. This event offers
            startups an unparalleled opportunity to showcase pioneering products and cultivate
            essential connections within a dynamic community.
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundImage:
              "linear-gradient(#BD63C3 10%, #3E15A0 40%, #0e0e0e 100%)",

            clipPath: "polygon(0 25%, 0% 100%, 56% 100%);",

            height: "200vh",

            width: "100%",

            position: "absolute",

            bottom: "0",

            left: "0",

            zIndex: "1",
          }}
        ></Box>
      </Box>
    </div>
  );
}

export default StartupFair;
