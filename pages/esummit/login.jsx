import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import EsummitNavbar from "../../components/esummit25/navbar";
import { toast } from "react-toastify";

const ESummitLoginPage = () => {
  const router = useRouter();
  const redirectTo = router.query.redirectTo || "/esummit";

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [disableSendOTPButton, setDisableSendOTPButton] = useState(true);

  const [disableLoginButton, setDisableLoginButton] = useState(true);
  const [loadingSendOTPButton, setLoadingSendOTPButton] = useState(false);
  const [loadingLoginButton, setLoadingLoginButton] = useState(false);

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(e.target.value)) {
      setDisableSendOTPButton(false);
      setDisableLoginButton(!otp);
    } else {
      setDisableLoginButton(true);
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    setDisableLoginButton(!email || !e.target.value);
  };

  const handleSendOtp = async () => {
    setLoadingSendOTPButton(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/signin/otp/send`,
        { email },
        { withCredentials: true }
      );
      if (response.data.message) {
        setDisableSendOTPButton(true);
        toast.success("OTP sent successfully", {
          autoClose: 3000,
        });
      } else {
        toast.error(
          `Error: ${response.data.error || "Unknown error occurred"}`,
          {
            autoClose: 3000,
          }
        );
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(`Error: ${error.response.data.error}`, {
          autoClose: 3000,
        });
      } else {
        toast.error(`Error: ${error.message || "Unknown error occurred"}`, {
          autoClose: 3000,
        });
      }
    } finally {
      setLoadingSendOTPButton(false);
    }
  };

  const handleLogin = async () => {
    setLoadingLoginButton(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/signin`,
        { email, otp },
        { withCredentials: true }
      );
      if (response.data.message) {
        toast.success("Logged in successfully", {
          autoClose: 3000,
        });
        setTimeout(() => {
          router.replace(redirectTo);
        }, 1300);
      } else {
        toast.error(
          `Error: ${response.data.error || "Unknown error occurred"}`,
          {
            autoClose: 3000,
          }
        );
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(`Error: ${error.response.data.error}`, {
          autoClose: 3000,
        });
      } else {
        toast.error(`Error: ${error.message || "Unknown error occurred"}`, {
          autoClose: 3000,
        });
      }
    } finally {
      setLoadingLoginButton(false);
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
      <Container maxWidth="sm">
        <Box
          sx={{
            mt: 22,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            sx={{
              mb: 0,
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
                onChange={handleEmailChange}
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
                disabled={disableSendOTPButton || loadingSendOTPButton}
                onClick={handleSendOtp}
              >
                {loadingSendOTPButton ? (
                  <>
                  <CircularProgress size={24} sx={{ position: "absolute" }} />
                  <span>{"Send OTP"}</span>
                  </>
                ) : (
                  "Send OTP"
                )}
              </Button>
            </Box>
            <Box sx={{ position: "relative", width: "100%", mb: 2 }}>
              <TextField
                fullWidth
                placeholder="Enter OTP"
                variant="outlined"
                value={otp}
                onChange={handleOtpChange}
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
                mb: 2,
                borderRadius: "0",
                color: "white",
                // width: { lg: "24.5rem", sm: "20rem", xs: "10rem" },
                fontFamily: "Montserrat, sans-serif",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem" },
                fontWeight: "700",
                letterSpacing: "3.6px",
                textTransform: "uppercase",
                "&.MuiButton-contained": {
                  backgroundColor: "#FF5100",
                },
                "&:hover": {
                  backgroundColor: "#B73A00",
                },
                "&.Mui-disabled": {
                  color: "grey !important",
                  backgroundColor: "rgba(1, 1, 1, 0.13) !important",
                },
              }}
              disabled={disableLoginButton || loadingLoginButton}
              onClick={handleLogin}
            >
              {loadingLoginButton ? (
                <>
                  <CircularProgress size={32} sx={{ position: "absolute" }} />
                  <span>{"Login"}</span>
                </>
              ) : (
                "Login"
              )}
            </Button>
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255,255,255,0.7)" }}
              >
                New Here?{" "}
                <Link
                  href="/esummit/register"
                  style={{ color: "#ff4500", textDecoration: "none" }}
                >
                  Register
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ESummitLoginPage;
