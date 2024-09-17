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

import styles from "../styles/startupfair.module.css";
import { Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TestCards from "../components/ui/TestCards";

function Emegrge() {
  const parent = useRef();

  const tl = useRef();

  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const ecell = isLargeScreen ? "5rem" : isMediumScreen ? "2.2rem" : "2.5rem";

  const fair = isLargeScreen ? "7rem" : isMediumScreen ? "2rem" : "2.8rem";
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

          <Button
            onClick={handleOpen}
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
          >
            <Typography
              color="#FFF"
              textAlign="center"
              fontFamily="Montserrat"
              fontSize="32px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="normal"
              textTransform="capitalize"
            >
              Register Here
            </Typography>
          </Button>
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
                    //TODO
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
                    //TODO
                  }}
                >
                  School Student
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
            // minHeight: "100vh",

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
            E-MERGE 2.0
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
            The 2nd edition of E-Merge is set to become the hub of meaningful
            conversations and impactful connections, taking place on 19th
            october at IIT Hyderabad. This premier event of the Entrepreneurship
            Cell, IIT Hyderabad is a cornerstone in the evolving landscape of
            social enterprise and sustainability, catering to passionate
            students, emerging entrepreneurs, and established leaders alike.
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundImage:
              "linear-gradient(#BD63C3 10%, #3E15A0 40%, #0e0e0e 100%)",

            clipPath: "polygon(0 25%, 0% 100%, 42% 100%);",

            height: "100vh",

            width: "100%",

            position: "absolute",

            bottom: "0",

            top:"10%",

            left: "0",

            zIndex: "1",
          }}
        ></Box>
        <Box height={"300px"}></Box>
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
        <div>
        <p>Don’t Miss Out – Join Us</p>
        </div>
        <br></br>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register Now
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </Typography>
    </div>
  );
}

export default Emegrge;
