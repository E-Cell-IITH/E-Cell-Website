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

function StartupFair() {
  const parent = useRef();

  const tl = useRef();

  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const ecell = isLargeScreen ? "3rem" : isMediumScreen ? "2.2rem" : "2rem";

  const fair = isLargeScreen ? "3.2rem" : isMediumScreen ? "2rem" : "2.5rem";

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
            sx={{ textAlign: "center" }}
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

          <Button
            sx={{
              padding: "1rem 2.4rem",

              textAlign: "center",
            }}
          >
            Register Now
          </Button>
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

              fontSize: "1.5rem",

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

              fontSize: "1.5rem",

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
