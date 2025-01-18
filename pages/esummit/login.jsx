import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

const ESummitLoginPage = () => {
  const router = useRouter();
  const redirectTo = router.query.redirectTo || "/esummit";

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [disableSendOTPButton, setDisableSendOTPButton] = useState(false);

  const handleSendOtp = async () => {
    try {
      const response = await axios.post(
        "https://register.ecelliith.org.in/signin/otp/send",
        { email }
      );
      if (response.data.message) {
        setDisableSendOTPButton(true);
        setTimeout(() => setDisableSendOTPButton(false), 60000);
      } else {
        alert(`Error sending OTP: ${response.data.error}`);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://register.ecelliith.org.in/signin",
        { email, otp }
      );
      if (response.data.message) {
        router.replace(redirectTo);
      } else {
        alert("Invalid OTP");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "url(/esummit25/bg.png) no-repeat center center/cover",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            mt: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: 500,
              letterSpacing: "0.1em",
              color: "white",
            }}
          >
            LOGIN
          </Typography>
          <Box sx={{ width: "100%", mt: 1 }}>
            <Box sx={{ position: "relative", width: "100%", mb: 2 }}>
              <TextField
                fullWidth
                placeholder="Enter your email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "0.5px solid rgb(153, 153, 153)",
                    },
                    "& input::placeholder": {
                      color: "white",
                    },
                    "& input": {
                      color: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.8)",
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  width: "25%",
                  position: "absolute",
                  right: 0,
                  backgroundColor: `${
                    disableSendOTPButton
                      ? "rgba(1, 1, 1, 0.12) !important"
                      : "rgba(255, 81, 0, 0.61) !important"
                  }`,
                  color: "white !important",
                  "&:hover": {
                    backgroundColor: "rgba(255, 81, 0, 0.8) !important",
                  },
                  height: "100%",
                  borderRadius: "2px",
                  textTransform: "none",
                  marginBottom: "16px",
                }}
                disabled={disableSendOTPButton}
                onClick={handleSendOtp}
              >
                Send OTP
              </Button>
            </Box>
            <Box sx={{ position: "relative", width: "100%", mb: 2 }}>
              <TextField
                fullWidth
                placeholder="Enter OTP"
                variant="outlined"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "0.5px solid rgb(153, 153, 153)",
                    },
                    "& input::placeholder": {
                      color: "white",
                    },
                    "& input": {
                      color: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.8)",
                    },
                  },
                }}
              />
            </Box>
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                mb: 2,
                backgroundColor: "#ff4500 !important",
                color: "white !important",
                "&:hover": {
                  backgroundColor: "#e63900 !important",
                },
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ESummitLoginPage;
