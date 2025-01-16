import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ESummit25 from "/public/ESummit25.png";
import "@fontsource/josefin-sans";

import "@fontsource/montserrat";
import { Divider } from "@mui/material";
import { useRouter } from "next/router";

const ESummitPage = () => {
  const router = useRouter();

  const handleRegisterClick = () => {
    // alert("Registration will start soon. Stay tuned!");
    // Add your redirect or functionality here
    router.replace("/esummit/register");
  };

  const redirectToCalender = () => {
    const formatDateToUTCString = (date) => {
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const seconds = String(date.getUTCSeconds()).padStart(2, '0');
        return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
    };

    const title = `E-Summit 2025, IIT Hyderabad`;
    const startDate = formatDateToUTCString(new  Date('2025-02-08T00:00:00+05:30'));
    const endDate = formatDateToUTCString(new Date('2025-02-09T00:00:00+05:30'));
    const description = `E-Cell IIT Hyderabad Presents you E-Summit 2025 on 8th and 9th February 2025. Register now to be a part of the biggest entrepreneurial extravaganza of the year!`;
    const location = "Hyderabad, India";
    const timeZone = "Asia/Kolkata";

    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE` +
        `&text=${encodeURIComponent(title)}` +
        `&dates=${startDate}/${endDate}` +
        `&details=${encodeURIComponent(description)}` +
        `&location=${encodeURIComponent(location)}` +
        `&ctz=${encodeURIComponent(timeZone)}`;

    window.open(calendarUrl, '_blank');
};

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${ESummit25.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: { xs: "80px 20px 0", sm: "100px 40px 0" }, // Responsive padding for navbar space
        boxSizing: "border-box",
      }}
    >
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
            width: { lg: "24.5rem", sm: "20rem", xs: "10rem"}, // Updated width for responsiveness
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
            width: { lg: "24.5rem", sm: "20rem", xs: "10rem"},
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
  );
};

export default ESummitPage;
