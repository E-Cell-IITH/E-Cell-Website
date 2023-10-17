import Image from "next/image";
import Grid from "@mui/material/Grid";
import { style } from "@mui/system";
import styles from "../styles/sponsor.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React, { useRef, useEffect } from "react";
import Navbar from "../components/first";
import { Box, Button, CardActionArea, Typography } from "@mui/material";
import style2 from "../styles/changesFirst.module.css";
import Managers from "../components/Managers";
import parallax from "../styles/team.module.css";
import Head from "next/head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const StartupFair = () => {
  const router = useRouter();
  const parent = useRef();
  const tl = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#head",
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          "#head > *",
          {
            y: 20,
            autoAlpha: 0.2,
            scale: 0.9,
          },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.3,
          }
        );

      const cards = gsap.utils.toArray(".card");
      console.log(cards);
      cards.forEach((card) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 50%",
            },
          })
          .fromTo(
            card.children,
            {
              y: 20,
              autoAlpha: 0,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
              stagger: 0.3,
            }
          );
      });
    }, parent);
    return () => ctx.revert();
  }, []);
  return (
    <div>
      <Head>
        <title>E-Cell Startup Fair</title>
      </Head>

      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(10, 10, 12, 0.70) 74.76%, rgba(1, 1, 89, 0.70) 100%), #000",
          backgroundAttachment: "fixed",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "300vh",
        }}
      >
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            flex: "1",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            color="white"
            textAlign="center"
            fontFamily={"Montserrat"}
            fontSize={78}
            fontStyle={"normal"}
            fontWeight={700}
            lineHeight={"normal"}
            textTransform={"uppercase"}
          >
            E-CELL IIT HYDERABAD
          </Typography>
          <Typography
            color="white"
            textAlign="center"
            fontFamily={"Montserrat"}
            fontSize={30}
            fontStyle={"normal"}
            fontWeight={700}
            lineHeight={"41.918px"}
            textTransform={"uppercase"}
          >
            PRESENTS
          </Typography>
          <Typography
            textAlign="center"
            fontFamily={"Montserrat"}
            fontSize={"114px"}
            fontStyle={"normal"}
            fontWeight={700}
            lineHeight={"normal"}
            letterSpacing={"-1.14px"}
            textTransform={"uppercase"}
            marginBottom={"5rem"}
            marginTop={1.5}
            sx={{
              background: "linear-gradient(91deg, #3881E6 0%, #65E8FF 99.86%)",
              backgroundClip: "text",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
          >
            startup fair ’24
          </Typography>
          <Button
            sx={{
              borderRadius: "12.195px",
              border: "solid 2.439px #5FD2D8",
              background: "rgba(217, 217, 217, 0.00)",
              boxShadow: "0px 0px 27.97853px 3.49732px #61E0FD",
              textTransform: "capitalize",
              width: "fit-content",
            }}
          >
            <Typography
              color="white"
              textAlign="center"
              fontFamily={"Montserrat"}
              fontSize={"32px"}
              fontStyle={"normal"}
              fontWeight={500}
              lineHeight={"normal"}
              padding={2}
              paddingX={6}
            >
              Register Here
            </Typography>
          </Button>
        </div>
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            color="white"
            textAlign="center"
            fontFamily={"Montserrat"}
            fontSize={64}
            fontStyle={"normal"}
            fontWeight={700}
            lineHeight={"normal"}
            textTransform={"uppercase"}
          >
            e-summit 2024
          </Typography>
          <Typography
            color="white"
            textAlign="center"
            fontFamily={"Montserrat"}
            fontSize={32}
            fontStyle={"normal"}
            fontWeight={500}
            lineHeight={"133.9%"}
            width={"70%"}
            marginTop={5}
          >
            The highlight of E-Cell's calendar! This event bridges academia, venture capitalists, and inventive entrepreneurs, bringing together early-stage thinkers, students, corporate leaders, and startups from every corner of the country. Experience a vibrant mix of competitions, workshops, a delectable food festival, enlightening talks, engaging panel discussions, and alumni networking. The standout feature? A three-month pitching competition, offering winners the chance to showcase their innovative ideas before respected industry experts and notable speakers. Join us in shaping the future of entrepreneurship!
          </Typography>
        </div>
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            color="white"
            textAlign="center"
            fontFamily={"Montserrat"}
            fontSize={64}
            fontStyle={"normal"}
            fontWeight={700}
            lineHeight={"normal"}
            textTransform={"uppercase"}
            sx={{
              background: "linear-gradient(91deg, #3881E6 0%, #65E8FF 99.86%)",
              backgroundClip: "text",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
          >
            startup fair
          </Typography>
          <Typography
            color="white"
            textAlign="center"
            fontFamily={"Montserrat"}
            fontSize={32}
            fontStyle={"normal"}
            fontWeight={500}
            lineHeight={"133.9%"}
            width={"70%"}
            marginTop={5}
          >
            StartupFair is a startup exhibition event, welcoming all the top-notch Startups, Investors, Speakers, Organizations, and attendees from all over India. What sets it apart is the inclusion of 14 specialized tracks, each dedicated to a unique sphere of innovation. Whether it's tech, sustainability, healthcare, or any other niche, there's a track tailored precisely to your interests. This event offers startups an unparalleled opportunity to showcase pioneering products and cultivate essential connections within a dynamic community.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default StartupFair;
