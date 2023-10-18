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
import img from "../public/vector.png";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
gsap.registerPlugin(ScrollTrigger);

const Register = () => {
  const router = useRouter();
  const parent = useRef();
  const tl = useRef();
  const [startupStage, setStartupStage] = React.useState("");

  const handleStartupStageChange = (event) => {
    setStartupStage(event.target.value);
  };
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
        <title>E-Cell Register</title>
      </Head>

      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(10, 10, 12, 0.70) 1.78%, rgba(2, 2, 68, 0.70) 100%), #000",
          backgroundAttachment: "fixed",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          padding: "0 5%",
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
            textAlign="left"
            fontFamily={"Montserrat"}
            fontSize={"3.52256rem"}
            fontStyle={"normal"}
            fontWeight={700}
            lineHeight={"normal"}
            textTransform={"uppercase"}
            marginBottom={"5rem"}
            marginTop={1.5}
            width={"34.62881rem"}
            sx={{
              background:
                "linear-gradient(91deg, #3880E7 0.4%, #62D7D8 99.34%)",
              backgroundClip: "text",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
          >
            Tell us about your StartuP...
          </Typography>
          <CardMedia
            sx={{ width: "18.24944rem", height: "28.67769rem" }}
            image="/vector.png"
            title="groww"
          />
        </div>
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "50%",
          }}
        >
          <Typography
            sx={{
              color: "#D3D3D3",
              fontFamily: "Montserrat",
              fontSize: "1.29563rem",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              textTransform: "uppercase",
              marginBottom: 2,
            }}
          >
            Startup Name
          </Typography>
          <TextField
            id="standard-basic"
            placeholder="Type Startup Name"
            size="normal"
            fullWidth="true"
            sx={{
              "& .MuiInputBase-input": {
                color: "#7E94F8",
                fontFamily: "Montserrat",
                fontSize: "1.16706rem",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                borderBottom: "2px solid rgba(201, 201, 201, 0.50)",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#44447A",
                fontFamily: "Montserrat",
                fontSize: "0.86881rem",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                opacity: "100%",
              },
            }}
            variant="standard"
          />

          <Typography
            sx={{
              color: "#D3D3D3",
              fontFamily: "Montserrat",
              fontSize: "1.29563rem",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              textTransform: "uppercase",
              marginBottom: 2,
              marginTop: 4,
            }}
          >
            Founder/CEO NAME
          </Typography>
          <TextField
            id="standard-basic"
            placeholder="Type Founder / CEO Name"
            size="normal"
            fullWidth="true"
            sx={{
              "& .MuiInputBase-input": {
                color: "#7E94F8",
                fontFamily: "Montserrat",
                fontSize: "1.16706rem",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                width: "100%",
                width: "100%", // Make the TextField take up all available width
                borderBottom: "2px solid rgba(201, 201, 201, 0.50)",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#44447A",
                fontFamily: "Montserrat",
                fontSize: "0.86881rem",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                opacity: "100%",
              },
            }}
            variant="standard"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                flex: 1,
                marginRight: "1rem",
                marginTop: "4%",
                gap: "4%",
                textAlign: "left",
              }}
            >
              <Typography
                sx={{
                  color: "#D3D3D3",
                  fontFamily: "Montserrat",
                  fontSize: "1.29563rem",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  textTransform: "uppercase",
                  marginBottom: 1,
                }}
              >
                POC Name
              </Typography>
              <TextField
                fullWidth
                placeholder="Type Point of Contact Name"
                variant="standard"
                size="normal"
                sx={{
                  "& .MuiInputBase-input": {
                    color: "#7E94F8",
                    fontFamily: "Montserrat",
                    fontSize: "1.16706rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    borderBottom: "2px solid rgba(201, 201, 201, 0.50)",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#44447A",
                    fontFamily: "Montserrat",
                    fontSize: "0.86881rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    opacity: "100%",
                  },
                }}
              />
              <Typography
                sx={{
                  color: "#D3D3D3",
                  fontFamily: "Montserrat",
                  fontSize: "1.29563rem",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  textTransform: "uppercase",
                  marginBottom: 1,
                  marginTop: 3,
                }}
              >
                Contact No.
              </Typography>
              <TextField
                fullWidth
                placeholder="Type Contact No."
                variant="standard"
                size="normal"
                sx={{
                  "& .MuiInputBase-input": {
                    color: "#7E94F8",
                    fontFamily: "Montserrat",
                    fontSize: "1.16706rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    borderBottom: "2px solid rgba(201, 201, 201, 0.50)",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#44447A",
                    fontFamily: "Montserrat",
                    fontSize: "0.86881rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    opacity: "100%",
                  },
                }}
              />
              <Typography
                sx={{
                  color: "#D3D3D3",
                  fontFamily: "Montserrat",
                  fontSize: "1.29563rem",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  textTransform: "uppercase",
                  marginBottom: 1,
                  marginTop: 3,
                }}
              >
                Startup Stage
              </Typography>
              <FormControl fullWidth variant="standard">
                <Select
                  id="demo-simple-select"
                  placeholder="Hello"
                  value={startupStage}
                  onChange={handleStartupStageChange}
                  sx={{
                    "& .MuiInputBase-input": {
                      color: "#7E94F8",
                      fontFamily: "Montserrat",
                      fontSize: "1.16706rem",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "normal",
                      borderBottom: "2px solid rgba(201, 201, 201, 0.50)",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "#44447A",
                      fontFamily: "Montserrat",
                      fontSize: "0.86881rem",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "normal",
                      opacity: "100%",
                    },
                  }}
                >
                  <MenuItem value="Idea">Idea</MenuItem>
                  <MenuItem value="Prototype">Prototype</MenuItem>
                  <MenuItem value="Launch">Launch</MenuItem>
                </Select>
              </FormControl>
              <Typography
                sx={{
                  color: "#D3D3D3",
                  fontFamily: "Montserrat",
                  fontSize: "1.29563rem",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  textTransform: "uppercase",
                  marginBottom: 1,
                  marginTop: 3,
                }}
              >
                Service Areas
              </Typography>
              <TextField
                fullWidth
                placeholder="Mention Startup Service Areas"
                variant="standard"
                sx={{
                  "& .MuiInputBase-input": {
                    color: "#7E94F8",
                    fontFamily: "Montserrat",
                    fontSize: "1.16706rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    borderBottom: "2px solid rgba(201, 201, 201, 0.50)",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#44447A",
                    fontFamily: "Montserrat",
                    fontSize: "0.86881rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    opacity: "100%",
                  },
                }}
              />
              
            </div>
            <div
              style={{
                flex: 1,
                marginLeft: "1rem",
                marginTop: "4%",
                gap: "4%",
                textAlign: "left",
              }}
            >
              <Typography
                sx={{
                  color: "#D3D3D3",
                  fontFamily: "Montserrat",
                  fontSize: "1.29563rem",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  textTransform: "uppercase",
                  marginBottom: 1,
                }}
              >
                Email ID
              </Typography>
              <TextField
                fullWidth
                placeholder="Type POC Email ID"
                variant="standard"
                sx={{
                  "& .MuiInputBase-input": {
                    color: "#7E94F8",
                    fontFamily: "Montserrat",
                    fontSize: "1.16706rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    borderBottom: "2px solid rgba(201, 201, 201, 0.50)",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#44447A",
                    fontFamily: "Montserrat",
                    fontSize: "0.86881rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    opacity: "100%",
                  },
                }}
              />
              <Typography
                sx={{
                  color: "#D3D3D3",
                  fontFamily: "Montserrat",
                  fontSize: "1.29563rem",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  textTransform: "uppercase",
                  marginBottom: 1,
                  marginTop: 3,
                }}
              >
                Startup Email ID
              </Typography>
              <TextField
                fullWidth
                placeholder="Type Startup Mail ID"
                variant="standard"
                sx={{
                  "& .MuiInputBase-input": {
                    color: "#7E94F8",
                    fontFamily: "Montserrat",
                    fontSize: "1.16706rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    borderBottom: "2px solid rgba(201, 201, 201, 0.50)",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#44447A",
                    fontFamily: "Montserrat",
                    fontSize: "0.86881rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    opacity: "100%",
                  },
                }}
              />
              <Typography
                sx={{
                  color: "#D3D3D3",
                  fontFamily: "Montserrat",
                  fontSize: "1.29563rem",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  textTransform: "uppercase",
                  marginBottom: 1,
                  marginTop: 3,
                }}
              >
                Industry Focus
              </Typography>
              <TextField
                fullWidth
                placeholder="Mention Startup Industry Focus"
                variant="standard"
                sx={{
                  "& .MuiInputBase-input": {
                    color: "#7E94F8",
                    fontFamily: "Montserrat",
                    fontSize: "1.16706rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    borderBottom: "2px solid rgba(201, 201, 201, 0.50)",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#44447A",
                    fontFamily: "Montserrat",
                    fontSize: "0.86881rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    opacity: "100%",
                  },
                }}
              />
              <Typography
                sx={{
                  color: "#D3D3D3",
                  fontFamily: "Montserrat",
                  fontSize: "1.29563rem",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  textTransform: "uppercase",
                  marginBottom: 1,
                  marginTop: 3,
                }}
              >
                Active Years
              </Typography>
              <TextField
                fullWidth
                placeholder="Type The Number Active of Years"
                variant="standard"
                sx={{
                  "& .MuiInputBase-input": {
                    color: "#7E94F8",
                    fontFamily: "Montserrat",
                    fontSize: "1.16706rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    borderBottom: "2px solid rgba(201, 201, 201, 0.50)",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#44447A",
                    fontFamily: "Montserrat",
                    fontSize: "0.86881rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    opacity: "100%",
                  },
                }}
              />
            </div>
          </div>
          <Button
            sx={{
              borderRadius: "0.5rem",
              backgroundImage: "linear-gradient(90deg, #3880E7 0.58%, #62D7D8 99.89%) !important",
              textTransform: "capitalize",
              width: "fit-content",
              marginTop:4
            }}
          >
            <Typography
              color="white"
              textAlign="center"
              fontFamily={"Montserrat"}
              fontSize={"1rem"}
              fontStyle={"normal"}
              fontWeight={500}
              lineHeight={"normal"}
              padding={1}
            >
              Register Now
            </Typography>
          </Button>
        </div>
                  
      </div>
    </div>
  );
};

export default Register;
