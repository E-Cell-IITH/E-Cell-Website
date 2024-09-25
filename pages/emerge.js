"use client"
import React, { useRef, useEffect, useState } from "react";

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

import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Carousel from "react-material-ui-carousel"
import BorderContainer from "../components/ESummt/BorderContainer";
import styles from "../styles/startupfair.module.css";
import { Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TestCards from "../components/ui/TestCards";

// import Carousel from "../components/Carousel";

/* 
const slides=["https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png"]
 */
  const gallery = [
    "esummit/gallery/20231105_113737.jpg",
    "esummit/gallery/20231105_114219.jpg",
    "esummit/gallery/20231105_130848.jpg",
    "esummit/gallery/Copy of 20220929_122820.jpg",
    "esummit/gallery/DJI_20231105_162001_538.jpg",
    "esummit/gallery/DSC02192.jpg",
    "esummit/gallery/DSC02197.jpg",
    "esummit/gallery/DSC02199.jpg",
    "esummit/gallery/DSC02200.jpg",
    "esummit/gallery/DSC02202.jpg",
    "esummit/gallery/DSC02211.jpg",
    "esummit/gallery/DSC02219.jpg",
    "esummit/gallery/IMG_2679.jpg",
    "esummit/gallery/IMG_2696.jpg",
    "esummit/gallery/IMG_2802.jpg",
  ];
function Emegrge() {
  const parent = useRef();

  const tl = useRef();

  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const ecell = isLargeScreen ? "4rem" : isMediumScreen ? "2.2rem" : "2.5rem";

  const fair = isLargeScreen ? "5rem" : isMediumScreen ? "2rem" : "2.8rem";
  const presents = isLargeScreen ? "1.4rem" : "1rem";
  const padding = isLargeScreen ? "1rem 2.4rem" : "0.5rem 1rem";

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div ref={parent}>
      <Box sx={{ position: "absolute", top: "60px", left: "80px" }}>
        <Image src={EcellLogo} alt="logo" />
      </Box>
      {/* <div className="relative">
      <div className="max-w-lg">
        <Carousel slides={slides} />
      </div>
    </div> */}
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
            color="#FFF"
            textAlign="center"
            fontFamily="Montserrat"
            fontSize={ecell}
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
          >
            E-CELL IIT HYDERABAD
          </Typography>

          <Typography
            color="#FFF"
            textAlign="center"
            fontFamily="Montserrat"
            fontSize={presents}
            fontStyle="normal"
            fontWeight="700"
            lineHeight="41.968px"
            textTransform="uppercase"
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
            E-MERGE &apos;24
          </Typography>


        </Box>
        <Box
          sx={{
            color: "white",
            position: "absolute",
            bottom: "10px",
            left: "10px",
          }}
        >
        
      </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        closeAfterTransition
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isLargeScreen ? 500 : 350,
            bgcolor: "#02174b", // Dark solid blue color
            borderRadius: "10px",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
            color: "#FFF",
            p: 0,
            outline: "none",
          }}
        >
          <Card
            sx={{ borderRadius: "10px", bgcolor: "#261156", color: "#FFF" }}
          >
            <CardContent
              sx={{
                position: "relative",
                padding: isLargeScreen ? 4 : 3,
                textAlign: "center",
              }}
            >
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  color: "#FFF",
                }}
              >
                <CloseIcon />
              </IconButton>
              <Typography id="modal-description" sx={{ marginBottom: 4 }}>
                Please choose one of the options below to proceed with
                registration.
              </Typography>
              <CardActions
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<AccountBalanceIcon />}
                  sx={{
                    width: "100%",
                    height: "50px",
                    fontSize: "16px",
                    background: "linear-gradient(90deg, #5FD2D8, #3982E6)",
                    color: "#FFF",
                    "&:hover": {
                      background: "linear-gradient(90deg, #3982E6, #5FD2D8)",
                    },
                  }}
                  onClick={() => {
                    window.open('https://forms.gle/6j59NVZv6bnzC3GU6', '_blank');
                  }}
                >
                  College Student
                </Button>
                <Button
                  variant="contained"
                  startIcon={<SchoolIcon />}
                  sx={{
                    width: "100%",
                    height: "50px",
                    fontSize: "16px",
                    background: "linear-gradient(90deg, #FF8E53, #FE6B8B)",
                    color: "#FFF",
                    "&:hover": {
                      background: "linear-gradient(90deg, #FE6B8B, #FF8E53)",
                    },
                  }}
                  onClick={() => {
                    window.open('https://forms.gle/A3zo4VguVE3hHS7g8', '_blank');
                  }}
                >
                  School Student
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    height: "50px",
                    fontSize: "16px",
                    background: "linear-gradient(90deg, #FF8E53, #FE6B8B)",
                    color: "#FFF",
                    "&:hover": {
                      background: "linear-gradient(90deg, #FE6B8B, #FF8E53)",
                    },
                  }}
                  onClick={() => {
                    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeyDSYL538ORpLEjuPpy9BixVK7lBtBUqZsPYUazSg8I74JpA/viewform ', '_blank');
                  }}
                >
                  Others
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Box>
      </Modal>

      <Box sx={{ position: "relative" }}>
        {/* <Box
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
            E-SUMMIT 2024
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
        </Box> */}



        <Box
          sx={{
             minHeight: "30vh",

            display: "flex",

            flexDirection: "column",

            justifyContent: "center",

            alignItems: "center",

            gap: "1rem",

            zIndex: "2",
          }}
        >
         

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
           The 2nd edition of E-Merge is set to become the hub of meaningful conversations and impactful connections, taking place on 20th October at IIT Hyderabad. This premier event of the Entrepreneurship Cell, IIT Hyderabad is a cornerstone in the evolving landscape of social enterprise and sustainability, catering to passionate students, emerging entrepreneurs, and established leaders alike.

          </Typography>
        </Box>
        
        <Box
          sx={{
            backgroundImage:
              "linear-gradient(#BD63C3 10%, #3E15A0 40%, #0e0e0e 100%)",

            clipPath: "polygon(0 25%, 0% 100%, 42% 100%);",

            height: "100vh",

            width: "100%",

            display:"none",

            position: "absolute",

            bottom: "0",

            top:"10%",

            left: "0",

            zIndex: "1",
          }}
        ></Box>
        <Box height={"100px"}></Box>
      </Box>
      <TestCards />
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
  
  <Typography
    variant="h3" 
    color="white"
    fontFamily="Montserrat"
    fontWeight="bold" 
    marginBottom="1rem" 
    marginTop="2rem"
  >
   Don’t Miss Out – Join Us!
  </Typography>

  
  <Button
    onClick={handleOpen}
    sx={{
      padding: padding,
      textAlign: "center",
      marginTop: "2vw",
      marginBottom:"2rem",
      fontSize: isLargeScreen ? "1.3rem" : "1rem",
      textTransform: "capitalize",
      fontWeight: "lighter",
      border: "2.439px solid #5FD2D8",
      borderRadius: "10px",
      boxShadow: "0px 0px 27.979px 3.497px #61E0FD;",
      color: "white",
    }}
  >
    <Typography
      color="#FFF"
      textAlign="center"
      fontFamily="Montserrat"
      fontSize="20px"
      fontStyle="normal"
      fontWeight="500"
      lineHeight="normal"
      textTransform="capitalize"
      
    >
      Register Here
    </Typography>
  </Button>
</Typography>
<Carousel
              animation="fade"
              duration={10}
              autoPlay={true}
              navButtonsAlwaysInvisible={true}
              infiniteLoop={true}
            >
              {gallery.map((i, index) => {
                return (
                  <center key={index}>
                    <BorderContainer
                      heightcss="h-[14rem] sm:h-[30rem] lg:h-[32rem] 2xl:h-[36rem]"
                      widthcss="w-[21rem] sm:w-[45rem] lg:w-[48rem] 2xl:w-[54rem]"
                      marginleftcss="ml-[14rem] sm:ml-[45rem] lg:ml-[48rem] 2xl:ml-[54rem]"
                      margintopcss="mt-[21rem] sm:mt-[30rem] lg:mt-[32rem] 2xl:mt-[36rem] "
                    >
                      <div className="flex flex-row gap-[2rem] align-center justify-center my-[auto] mx-[8%] relative w-full z-[-12]">
                        <div className="flex flex-[2] items-center">
                          <img src={i} />
                        </div>
                      </div>
                    </BorderContainer>
                  </center>
                );
              })}
            </Carousel>
           

    </div>
  );
}

export default Emegrge;
