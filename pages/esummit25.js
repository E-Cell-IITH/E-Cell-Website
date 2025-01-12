import React from "react";
import Box from "@mui/material/Box";
import ESummit25 from "../public/ESummit25.png";

const ESummitPage = () => (
  <Box
    sx={{
      width: "100vw",
      height: "100vh",
      backgroundImage: `url(${ESummit25.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <Box
      sx={{
        color: "white",
        position: "relative",
        zIndex: 1,
        textAlign: "center",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <h1>Welcome to E-Summit 2025</h1>
    </Box>
  </Box>
);

export default ESummitPage;
