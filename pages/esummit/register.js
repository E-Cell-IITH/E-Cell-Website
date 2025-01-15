import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import ESummit25 from "/public/ESummit25.png";
import "@fontsource/josefin-sans";
import "@fontsource/montserrat";

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    info: "",
    company: "",
    phone: "",
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const steps = [
    {
      label: "Step 1: Personal Info",
      content: (
        <>
          <TextField
            label={
              <span
                style={{
                  color: "#FFF",
                  fontFamily: "Josefin Sans",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  width: "119px",
                  height: "16px",
                  flexShrink: 0,
                }}
              >
                Enter your name
              </span>
            }
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label={
              <span
                style={{
                  color: "#FFF",
                  fontFamily: "Josefin Sans",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  width: "119px",
                  height: "16px",
                  flexShrink: 0,
                }}
              >
                Enter your email
              </span>
            }
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label={
              <span
                style={{
                  color: "#FFF",
                  fontFamily: "Josefin Sans",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  width: "119px",
                  height: "16px",
                  flexShrink: 0,
                }}
              >
                Enter your OTP
              </span>
            }
            name="otp"
            value={formData.otp}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label={
              <span
                style={{
                  color: "#FFF",
                  fontFamily: "Josefin Sans",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  width: "119px",
                  height: "16px",
                  flexShrink: 0,
                }}
              >
                Enter coupon code (optional)
              </span>
            }
            name="coupon"
            value={formData.coupon}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </>
      ),
    },
    // I would add here the later steps
  ];

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
        padding: { xs: "80px 20px 0", sm: "100px 40px 0" },
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "90%",
          maxWidth: "400px",
          borderRadius: "10px",
          padding: 4,
        }}
      >
        <Box
          sx={{
            color: "#FFF",
            fontFamily: "Josefin Sans",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            letterSpacing: "6.72px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          REGISTER
        </Box>

        {steps[step - 1].content}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          {step > 1 && (
            <Button
              variant="outlined"
              onClick={handleBack}
              sx={{
                width: "443px",
                height: "51.859px",
                flexShrink: 0,
                border: "0.5px solid #FFF",
                background: "transparent",
                color: "#FFF",
                fontFamily: "Josefin Sans",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                textTransform: "capitalize",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Back
            </Button>
          )}
          {step < 3 ? (
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{
                width: "443px",
                height: "51.859px",
                flexShrink: 0,
                border: "0.5px solid #FFF",
                background: "#e64a00",
                color: "#FFF",
                fontFamily: "Josefin Sans",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                textTransform: "capitalize",
                "&:hover": {
                  background: "#e64a00",
                },
              }}
            >
              Next
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                width: "443px",
                height: "51.859px",
                flexShrink: 0,
                border: "0.5px solid #FFF",
                background: "#FF5100",
                color: "#FFF",
                fontFamily: "Josefin Sans",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                textTransform: "capitalize",
                "&:hover": {
                  background: "#e64a00",
                },
              }}
            >
              Submit
            </Button>
          )}
        </Box>

        <Box
          sx={{
            marginTop: "20px",
            width: "443px",
            height: "8px",
            flexShrink: 0,
            background: "rgba(255, 255, 255, 0.3)",
            borderRadius: "4px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: `${(step / 3) * 100}%`,
              height: "100%",
              background: "#FF5100",
              transition: "width 0.3s ease-in-out",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
