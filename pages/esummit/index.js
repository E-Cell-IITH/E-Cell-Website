import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ESummit25 from "/public//esummit25/bg.png";
import "@fontsource/josefin-sans";
import {Tilt} from "react-next-tilt";
import "@fontsource/montserrat";
import { Divider } from "@mui/material";
import Head from "next/head";
import EsummitNavbar from "../../components/esummit25/navbar";
import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({ subsets: ["latin"], display: "swap" });

import { useMediaQuery } from "@mui/material";


const Aboutus = () => {
  const isBiggerThan1150 = useMediaQuery("(min-width: 1150px)");
  const isBiggerThan1024 = useMediaQuery("(min-width: 1024px)");
  return (
    <Tilt
      scale={1.00}
      tiltMaxAngleX={0}
      tiltMaxAngleY={0}
      style={{ borderRadius: "12px" }}
    >
      <Box
        sx={{
          background: "rgba(211, 211, 211, 0.1)", // Adjust background opacity here
          paddingTop: "3rem",
          paddingLeft: "3rem",
          paddingRight: "3rem",
          paddingBottom: "1rem",
          margin: "0.5rem",
          minWidth: "20vw",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderWidth: "2px",
          borderColor: "#d3d3d3",
          maxWidth:isBiggerThan1024?"50vw":"85vw"
        }}
      >
        <Typography
          class={josefinSans.className}
          variant="h4"
          style={{fontSize:"2.5rem",fontWeight:600, float:"left"}}>
          AB<span style={{ color: "#FF5100", fontWeight:600 }}>O</span>UT US
        </Typography>
        <br />
        <Box style={{ fontSize: "1.0rem", paddingTop:"4rem", textAlign:"justify"}}>
          <span style={{ color: "#FFFFFF" }}>
          We&apos;re the Entrepreneurship Cell at IIT Hyderabad, driven by passion, hard work, and a relentless pursuit of success. Our space is where ideas meet action—a hub where dreams become reality. We&apos;re enthusiasts who thrive on ideation, turning concepts into growing businesses. {<br/>}{<br/>}
          Our aim is clear: to support entrepreneurship and innovation within and beyond our campus. We recognize the importance of new business ideas and guide students, providing market exposure and pathways for their startups. We&apos;re a platform that fosters collaboration between students and businesses, offering mentorship from idea conception to product completion.
          {<br/>}{<br/>}
          Join us to <span style={{ color: "#FF5100", fontWeight:600 }}>THINK</span> big, <span style={{ color: "#FF5100", fontWeight:600 }}>BUILD</span> ambitiously, and <span style={{ color: "#FF5100", fontWeight:600 }}>INSPIRE</span> change through entrepreneurship.
          </span>
        </Box>
      </Box>
    </Tilt>
  );
};

const Theme = () => {
  const isBiggerThan1150 = useMediaQuery("(min-width: 1150px)");
  const isBiggerThan1024 = useMediaQuery("(min-width: 1024px)");
  return (
    <Tilt
      scale={1.00}
      tiltMaxAngleX={0}
      tiltMaxAngleY={0}
      style={{ borderRadius: "12px", marginTop:"2rem" }}
    >
      <Box
        sx={{
          background: "rgba(211, 211, 211, 0.1)", // Adjust background opacity here
          paddingTop: "3rem",
          paddingLeft: "3rem",
          paddingRight: "3rem",
          paddingBottom: "1rem",
          margin: "0.5rem",
          minWidth: "20vw",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderWidth: "2px",
          borderColor: "#d3d3d3",
          maxWidth:isBiggerThan1024?"50vw":"85vw"
        }}
      >
        <Typography
          class={josefinSans.className}
          variant="h4"
          style={{fontSize:"2.5rem",fontWeight:600, float:"left"}}>
          THEME
        </Typography>
        <br />
        <Box style={{ fontSize: "1.0rem", paddingTop:"4rem", textAlign:"justify"}}>
          <span style={{ color: "#FFFFFF" }}>
          The theme of <span style={{ color: "#FF5100", fontWeight:600 }}>&quot;Anomaly&quot;</span> at E-Cell IITH celebrates individuals who challenge societal norms and conventional patterns, transforming from misfits and rebels into pioneers of innovation. 
          This movement recognizes that true progress arises from questioning the status quo and taking bold risks, allowing creativity and strategy to collide in uncharted territories. 
          By nurturing these visionaries, E-Cell IITH empowers them to unlock new possibilities and shape a limitless future, illustrating that the audacity to defy expectations is what drives meaningful change.
          </span>
        </Box>
      </Box>
    </Tilt>
  );
};


const ESummitPage = () => {
  const handleRegisterClick = () => {
    alert("Registration will start soon. Stay tuned!");
    // Add your redirect or functionality here
  };

  

  const redirectToCalender = () => {
    const formatDateToUTCString = (date) => {
      const year = date.getUTCFullYear();
      const month = String(date.getUTCMonth() + 1).padStart(2, "0");
      const day = String(date.getUTCDate()).padStart(2, "0");
      const hours = String(date.getUTCHours()).padStart(2, "0");
      const minutes = String(date.getUTCMinutes()).padStart(2, "0");
      const seconds = String(date.getUTCSeconds()).padStart(2, "0");
      return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
    };

    const title = `E-Summit 2025, IIT Hyderabad`;
    const startDate = formatDateToUTCString(
      new Date("2025-02-08T00:00:00+05:30")
    );
    const endDate = formatDateToUTCString(
      new Date("2025-02-09T00:00:00+05:30")
    );
    const description = `E-Cell IIT Hyderabad Presents you E-Summit 2025 on 8th and 9th February 2025. Register now to be a part of the biggest entrepreneurial extravaganza of the year!`;
    const location = "Hyderabad, India";
    const timeZone = "Asia/Kolkata";

    const calendarUrl =
      `https://www.google.com/calendar/render?action=TEMPLATE` +
      `&text=${encodeURIComponent(title)}` +
      `&dates=${startDate}/${endDate}` +
      `&details=${encodeURIComponent(description)}` +
      `&location=${encodeURIComponent(location)}` +
      `&ctz=${encodeURIComponent(timeZone)}`;

    window.open(calendarUrl, "_blank");
  };

  return (
    <div>
      <Head>
        <title>E-Summit 2025</title>
        <meta
          name="google-site-verification"
          content="agHaKoDcApHadKU7BhRCOJK0w5SRZtQCG9YxNKZBGvc"
        />
        <link rel="canonical" href="https://ecell.iith.ac.in/esummit" />
      </Head>
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${ESummit25.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // This makes the background fixed
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          padding: { xs: "80px 20px 0", sm: "100px 40px 0" },
          boxSizing: "border-box",
          overflowY: "auto", // Ensures content scrolls
        }}
      >

        <Box
          sx={{
            position: "absolute", 
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 10, 
          }}
        >
          <EsummitNavbar />
        </Box>
        {/* Presents */}
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "'Josefin Sans', sans-serif", // Applying Josefin Sans
            fontSize: {
              xs: "14px",
              lg: "32px",
            },
            fontStyle: "normal",
            fontWeight: 400,
            textTransform: "uppercase",
            letterSpacing: "5.76px",
            marginBottom: "10px",
          }}
        >
          PRESENTS
        </Typography>

        {/* E-SUMMIT */}
        <Typography
          variant="h2"
          sx={{
            fontFamily: "genome, sans-serif", // Default font family
            letterSpacing: {
              xs: "0.2rem",
              sm: "0.5rem",
              lg: "1rem",
            },
            textTransform: "uppercase",
            fontSize: {
              xs: "2.5rem",
              sm: "5rem",
              lg: "5.625rem",
            },
          }}
        >
          <Box component="span">E</Box>
          <Box
            component="span"
            fontFamily={"sans-serif"}
            sx={{
              fontSize: {
                xs: "3rem",
                sm: "6rem",
                lg: "8rem",
              },
            }}
            fontWeight={"bold"}
          >
            -
          </Box>
          <Box
            component="span"
            sx={{
              fontFamily: "azonix",
              fontSize: {
                xs: "3.4rem",
                sm: "6.9rem",
                lg: "8rem",
              },
            }}
          >
            S
          </Box>
          <Box
            component="span"
            sx={{
              fontFamily: "azonix",
              fontSize: {
                xs: "3.4rem",
                sm: "6.9rem",
                lg: "8rem",
              },
              color: "#FF5100",
            }}
          >
            U
          </Box>
          <Box component="span">M</Box>
          <Box component="span">M</Box>
          <Box component="span">I</Box>
          <Box component="span">T</Box>
        </Typography>

        {/* Year */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px", // Space between the divider and the text
            width: "100%",
          }}
        >
          <Divider
            sx={{
              borderColor: "white",
              width: {
                xs: "2.75rem",
                sm: "3.75rem",
                lg: "5.75rem",
              },
            }}
          />

          <Typography
            variant="h4"
            sx={{
              fontFamily: "azonix, sans-serif",
              fontWeight: "400",
              letterSpacing: { lg: "0.45rem", xs: "0.2rem" },
              color: "white",
              fontSize: {
                xs: "1.3rem",
                md: "2.5rem",
              },
            }}
          >
            2025
          </Typography>

          <Divider
            sx={{
              borderColor: "white",
              width: {
                xs: "2.75rem",
                sm: "3.75rem",
                lg: "5.75rem",
              },
            }}
          />
        </Box>

        {/* Subtitle */}
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "'Josefin Sans', sans-serif",
            letterSpacing: "5px",
            marginTop: { xs: "15px", sm: "20px", md: "30px" },
            fontSize: {
              xs: "1rem",
              sm: "1.4rem",
              lg: "1.8rem",
            },
          }}
        >
          BE THE CHANGE THE WORLD NEEDS
        </Typography>

        {/* Button Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Stacks buttons vertically
            gap: "20px",
            marginTop: { xs: "30px", sm: "40px", md: "50px" },
          }}
        >
          {/* Date Button */}
          <Button
            variant="outlined"
            onClick={redirectToCalender}
            sx={{
              borderRadius: "0",
              color: "white",
              width: { lg: "24.5rem", sm: "20rem", xs: "10rem" }, // Updated width for responsiveness
              borderColor: "white",
              fontFamily: "azonix, sans-serif",
              fontSize: { xs: "1rem", sm: "1.5rem", md: "1.8rem" },
              textTransform: "uppercase",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderColor: "white",
              },
            }}
          >
            <span style={{ color: "#FF5100" }}>FEB</span>&nbsp;8-9
          </Button>

          {/* Register Button */}
          <Button
            variant="contained"
            onClick={handleRegisterClick}
            sx={{
              borderRadius: "0",
              color: "white",
              width: { lg: "24.5rem", sm: "20rem", xs: "10rem" },
              fontFamily: "Montserrat, sans-serif",
              fontSize: { xs: "1rem", sm: "1.5rem", md: "1.8rem" },
              fontWeight: "700",
              letterSpacing: "3.6px",

              textTransform: "uppercase",
              "&.MuiButton-contained": {
                backgroundColor: "#FF5100",
              },
              "&:hover": {
                backgroundColor: "#B73A00",
              },
            }}
          >
            REGISTER
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "auto",
          backgroundImage: `url(${ESummit25.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // This makes the background fixed
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          padding: { xs: "80px 20px 0", sm: "100px 40px 0" },
          boxSizing: "border-box",
          overflowY: "auto", // Ensures content scrolls
        }}
      >
        <Aboutus />
        <Theme />
        <br></br>
      </Box>
      
    </div>
  );
};

export default ESummitPage;
