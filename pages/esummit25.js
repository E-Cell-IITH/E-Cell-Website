import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ESummit25 from "../public/ESummit25.png";
import "@fontsource/josefin-sans";

import "@fontsource/montserrat";

const ESummitPage = () => {
  const handleRegisterClick = () => {
    alert("Register button clicked!");
    // Add your redirect or functionality here
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
            lg: "15px",
          },
          fontWeight: 400,
          textTransform: "uppercase",
          letterSpacing: "3.8px",
          marginBottom: "10px",
          marginLeft: "20px",
        }}
      >
        PRESENTS
      </Typography>

      {/* E-SUMMIT */}
      <Typography
        variant="h2"
        sx={{
          fontFamily: "genome, sans-serif", // Default font family
          letterSpacing: "2px",
          textTransform: "uppercase",
          fontSize: {
            xs: "30px", // Smaller font size for extra small screens
            sm: "40px", // Slightly larger font for small screens
            md: "50px", // Default font size for medium screens and up
          },
        }}
      >
        <span
          style={{
            fontFamily: "genome, sans-serif",
            marginRight: "10px",
            fontSize: "inherit", // Inherit from Typography
          }}
        >
          E
        </span>
        <span
          style={{
            fontFamily: "cybercity",
            marginRight: "8px",
            fontSize: "inherit", // Inherit from Typography
          }}
        >
          -
        </span>
        <span
          style={{
            fontFamily: "azonix",
            fontSize: "70px",
            marginRight: "10px",
            display: "inline-block",
          }}
          className="responsive-letter"
        >
          S
        </span>
        <span
          style={{
            fontFamily: "azonix",
            fontSize: "70px",
            color: "#FF5100",
            marginRight: "10px",
            display: "inline-block",
          }}
          className="responsive-letter"
        >
          U
        </span>
        <span
          style={{
            fontFamily: "genome, sans-serif",
            marginRight: "10px",
            fontSize: "inherit", // Inherit from Typography
          }}
        >
          M
        </span>
        <span
          style={{
            fontFamily: "genome, sans-serif",
            marginRight: "10px",
            fontSize: "inherit", // Inherit from Typography
          }}
        >
          M
        </span>
        <span
          style={{
            fontFamily: "genome, sans-serif",
            marginRight: "10px",
            fontSize: "inherit", // Inherit from Typography
          }}
        >
          I
        </span>
        <span
          style={{
            fontFamily: "genome, sans-serif",
            fontSize: "inherit", // Inherit from Typography
          }}
        >
          T
        </span>
      </Typography>

      {/* Year */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: "azonix, sans-serif",
          fontWeight: "500",
          fontSize: {
            xs: "18px",
            md: "20px",
          },
          marginTop: { xs: "5px", sm: "10px", md: "15px" },
        }}
      >
        2025
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "'Josefin Sans', sans-serif",
          letterSpacing: "4px",

          marginTop: { xs: "15px", sm: "20px", md: "30px" },
          fontSize: {
            xs: "12px",
            sm: "14px",
            lg: "16px",
            xl: "20px",
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
          sx={{
            color: "white",
            width: { md: "234px" }, // Updated width for responsiveness
            borderColor: "white",
            padding: { xs: "8px 16px", sm: "10px 20px" },
            fontFamily: "azonix, sans-serif",
            fontSize: { xs: "12px", sm: "14px", md: "18px" },
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
            backgroundColor: "#FF5100",
            color: "white",
            width: { xs: "150px", sm: "200px", md: "234px" },
            padding: { xs: "8px 16px", sm: "10px 20px" },
            fontFamily: "Montserrat, sans-serif",
            fontSize: { xs: "12px", sm: "14px", md: "18px" },
            fontWeight: "bold",
            letterSpacing: "2px",
            textTransform: "uppercase",
            "&:hover": {
              backgroundColor: "#FF5100",
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
