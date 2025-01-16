import {
  Box,
  Button,
  Container,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";

const ESummitRegistrationPage = () => {
  return (
    <>
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
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              REGISTER
            </Typography>

            <Box component="form" sx={{ width: "100%", mt: 1 }}>
              <TextField
                fullWidth
                placeholder="Enter your name"
                variant="outlined"
                sx={{
                  mb: 2,
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
              <TextField
                fullWidth
                placeholder="Enter your Email"
                variant="outlined"
                sx={{
                  mb: 2,
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
              <TextField
                fullWidth
                placeholder="Enter OTP"
                variant="outlined"
                sx={{
                  mb: 2,
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
              <TextField
                fullWidth
                placeholder="Enter Coupon Code (optional)"
                variant="outlined"
                sx={{
                  mb: 2,
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
              >
                Next
              </Button>
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  mb: 2,
                  color: "white",
                  borderColor: "rgb(153, 153, 153)",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,0.2)",
                  },
                }}
              >
                Back
              </Button>
              <Box sx={{ textAlign: "center", mb: 3 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    style={{ color: "#ff4500", textDecoration: "none" }}
                  >
                    Login Now
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ width: "100%", mt: 4 }}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    1/3
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={33}
                  sx={{
                    height: 2,
                    mb: 10,
                    bgcolor: "rgba(255,255,255,0.1)",
                    "& .MuiLinearProgress-bar": {
                      bgcolor: "rgba(255,255,255,0.5)",
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ESummitRegistrationPage;
