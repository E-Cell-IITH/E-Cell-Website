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

import Button from "@mui/material/Button";
import styles from "../styles/startupfair.module.css";
import { Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

function StartupFair() {
  const parent = useRef();

  const tl = useRef();

  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const ecell = isLargeScreen ? "5rem" : isMediumScreen ? "2.2rem" : "2.5rem";

  const fair = isLargeScreen ? "7rem" : isMediumScreen ? "2rem" : "2.8rem";
  const presents = isLargeScreen ? "1.4rem" : "1rem";
  const padding = isLargeScreen ? "1rem 2.4rem" : "0.5rem 1rem";

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
            variant="h2"
            color="white"
            sx={{ fontWeight: "600", textAlign: "center", fontSize: ecell }}
          >
            E-CELL IIT HYDERABAD
          </Typography>

          <Typography
            variant="body1"
            color="white"
            sx={{ textAlign: "center", fontSize: presents }}
          >
            PRESENTS
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontWeight: "900",

              color: "white",

              background:
                "-webkit-linear-gradient(180deg, #5FD2D8 30%, #3982E6 90%)",

              WebkitBackgroundClip: "text",

              WebkitTextFillColor: "transparent",

              textAlign: "center",

              fontSize: fair,
            }}
          >
            STARTUP FAIR &apos;24
          </Typography>

          <Link href="/register">
            <Button
              sx={{
                padding: padding,
                textAlign: "center",
                marginTop: "2vw",
                fontSize: isLargeScreen ? "1.3rem" : "1rem",
                textTransform: "capitalize",
                fontWeight: "lighter",
                borderRadius: "3px",
                boxShadow:
                  "rgba(57,130,230, .5) -2px -2px 3px , rgba(95,210,216, .5) 2px 2px 3px, rgba(95,210,216, .5) 2px -2px 3px, rgba(57,130,230, .5) -2px 2px 5px",
              }}
              className={styles.borderGradient}
            >
              Register Now
            </Button>
          </Link>
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
              href="https://mui.com/material-ui/react-link/"
              sx={{ color: "white" }}
            >
              <InstagramIcon />
            </Link>
            <Link
              href="https://mui.com/material-ui/react-link/"
              sx={{ color: "white" }}
            >
              <LinkedInIcon />
            </Link>
            <Link
              href="https://mui.com/material-ui/react-link/"
              sx={{ color: "white" }}
            >
              <TwitterIcon />
            </Link>
            <Link
              href="https://mui.com/material-ui/react-link/"
              sx={{ color: "white" }}
            >
              <FacebookIcon />
            </Link>
            <Link
              href="https://mui.com/material-ui/react-link/"
              sx={{ color: "white" }}
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
            variant="h1"
            color="white"
            sx={{
              textAlign: "center",

              zIndex: "2",

              fontWeight: 900,

              fontSize: isLargeScreen ? "3.5rem" : "3rem",
            }}
          >
            E-SUMMIT 2024
          </Typography>

          <Typography
            variant="body1"
            color="white"
            sx={{
              textAlign: "center",

              paddingInline: isLargeScreen ? "6rem" : "3rem",

              paddingBottom: "2rem",

              fontSize: isLargeScreen ? "1.5rem" : "1.2rem",

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
            variant="h1"
            color="white"
            sx={{
              textAlign: "center",

              zIndex: "2",

              fontWeight: "900",

              fontSize: isLargeScreen ? "3.5rem" : "3rem",

              background:
                "-webkit-linear-gradient(180deg, #5FD2D8 30%, #3982E6 90%)",

              WebkitBackgroundClip: "text",

              WebkitTextFillColor: "transparent",
            }}
          >
            E-SUMMIT 2024
          </Typography>

          <Typography
            variant="body1"
            color="white"
            sx={{
              textAlign: "center",

              paddingInline: isLargeScreen ? "6rem" : "3rem",

              fontSize: isLargeScreen ? "1.5rem" : "1.2rem",

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
