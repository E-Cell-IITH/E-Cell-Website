import {
  Box,
  Button,
  Container,
  LinearProgress,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useRouter } from "next/router";

const ESummitRegistrationPage = () => {
  const [step, setStep] = useState(1);
  const [degree, setDegree] = useState("BTech");
  const [gender, setGender] = useState("Male");
  const [institute, setInstitute] = useState("IITH Student");
  const [rollNumber, setRollNumber] = useState("");
  const [instituteName, setInstituteName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [disableSendOTPButton, setDisableSendOTPButton] = useState(false);
  const [verified, setVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [couponCode, setCouponCode] = useState("");

  const router = useRouter();

  const handleSendOtp = async () => {
    try {
      const response = await axios.post(
        "https://register.ecelliith.org.in/signup/otp/send",
        {
          email,
        }
      );

      if (response.data.message) {
        setDisableSendOTPButton(true);
        setTimeout(() => {
          setDisableSendOTPButton(false);
        }, 60000);
      } else {
        console.error("Error sending OTP:", response.data.error);
        alert(`Error sending OTP: ${response.data.error}`);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post(
        "https://register.ecelliith.org.in/signup/otp/verify",
        {
          email,
          otp,
        }
      );

      if (response.data.message) {
        setDisableSendOTPButton(true);
        setVerified(true);
      } else {
        console.error("Error verifying OTP:", response.data.error);
        alert(`Invalid OTP`);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  const handleBack = () => {
    if (step == 2) setStep(1);
    else router.replace("/esummit");
  };

  const handleNext = async () => {
    if (step == 1) setStep(2);
    else {
      try {
        const response = await axios.post(
          "https://register.ecelliith.org.in/signup",
          {
            email,
            name,
            data: JSON.stringify({
              college: institute == "IITH Student" ? "IITH" : instituteName,
              roll: institute == "IITH Student" ? rollNumber : "N/A",
              gender: gender,
              degree: degree,
              coupon: couponCode,
            }),
            contact_number: phoneNumber,
            otp,
          }
        );

        if (response.data.message) {
          router.replace("/esummit");
        } else {
          console.error("Error sending OTP:", response.data.error);
          alert(`Error sending OTP: ${response.data.error}`);
        }
      } catch (error) {
        console.error("Error sending OTP:", error);
      }
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
              fontFamily: "Josefin Sans, sans-serif",
            }}
          >
            REGISTER
          </Typography>

          <Box component="form" sx={{ width: "100%", mt: 1 }}>
            {step == 1 ? (
              <>
                <TextField
                  fullWidth
                  placeholder="Enter your name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  <Button
                    variant="contained"
                    sx={{
                      width: "25%",
                      position: "absolute",
                      right: 0,
                      backgroundColor: disableSendOTPButton
                        ? "rgba(1, 1, 1, 0.12) !important"
                        : "rgba(255, 81, 0, 0.61) !important",
                      color: "white !important",
                      "&:hover": {
                        backgroundColor: "rgba(255, 81, 0, 0.8) !important",
                      },
                      height: "100%",
                      borderRadius: "2px",
                      textTransform: "none",
                      marginBottom: "16px",
                    }}
                    onClick={handleVerifyOtp}
                    disabled={verified}
                  >
                    Verify OTP
                  </Button>
                </Box>
                <TextField
                  fullWidth
                  placeholder="Enter Coupon Code (optional)"
                  variant="outlined"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
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
              </>
            ) : (
              <>
                <TextField
                  select
                  fullWidth
                  value={institute}
                  onChange={(e) => setInstitute(e.target.value)}
                  variant="outlined"
                  displayEmpty
                  SelectProps={{
                    IconComponent: KeyboardArrowDown,
                    sx: {
                      mb: 2,
                      color: "white",
                      "& .MuiSvgIcon-root": {
                        color: "white",
                      },
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "0.5px solid rgb(153, 153, 153)",
                      },
                      "& .MuiSelect-select": {
                        color: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.8)",
                      },
                    },
                    "& .MuiSelect-icon": {
                      color: "white",
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    Institute
                  </MenuItem>
                  {["IITH Student", "Others"].map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                {institute == "Others" ? (
                  <TextField
                    fullWidth
                    placeholder="Enter your institute name"
                    variant="outlined"
                    value={instituteName}
                    onChange={(e) => setInstituteName(e.target.value)}
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
                ) : (
                  <TextField
                    fullWidth
                    placeholder="Enter your roll number"
                    variant="outlined"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
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
                )}
                <TextField
                  select
                  fullWidth
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  variant="outlined"
                  displayEmpty
                  SelectProps={{
                    IconComponent: KeyboardArrowDown,
                    sx: {
                      mb: 2,
                      color: "white",
                      "& .MuiSvgIcon-root": {
                        color: "white",
                      },
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "0.5px solid rgb(153, 153, 153)",
                      },
                      "& .MuiSelect-select": {
                        color: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.8)",
                      },
                    },
                    "& .MuiSelect-icon": {
                      color: "white",
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    Degree
                  </MenuItem>
                  {["BTech", "MTech", "MSc"].map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  select
                  fullWidth
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  variant="outlined"
                  displayEmpty
                  SelectProps={{
                    IconComponent: KeyboardArrowDown,
                    sx: {
                      mb: 2,
                      color: "white",
                      "& .MuiSvgIcon-root": {
                        color: "white",
                      },
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "0.5px solid rgb(153, 153, 153)",
                      },
                      "& .MuiSelect-select": {
                        color: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.8)",
                      },
                    },
                    "& .MuiSelect-icon": {
                      color: "white",
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    Gender
                  </MenuItem>
                  {["Male", "Female"].map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <TextField
                    placeholder="+91"
                    variant="outlined"
                    disabled
                    sx={{
                      width: "12%",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "0.5px solid rgb(153, 153, 153)",
                        },
                        "&.Mui-disabled": {
                          "& fieldset": {
                            border: "0.5px solid rgb(153, 153, 153)",
                          },
                          "& input::placeholder": {
                            color: "white",
                            opacity: 1,
                            "-webkit-text-fill-color": "white",
                          },
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    placeholder="Mobile Number"
                    variant="outlined"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "0.5px solid rgb(153, 153, 153)",
                        },
                        "& input::placeholder": {
                          color: "white",
                          opacity: 0.7,
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
              </>
            )}
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                mb: 2,
                backgroundColor: `${
                  (verified && step == 1) ||
                  (step == 2 &&
                    phoneNumber != 0 &&
                    (rollNumber != "" || instituteName != ""))
                    ? "#ff4500"
                    : "rgba(1, 1, 1, 0.13)"
                } !important`,
                color: "white !important",
                "&:hover": {
                  backgroundColor: "#e63900 !important",
                },
              }}
              onClick={handleNext}
              disabled={
                (verified && step == 1) ||
                (step == 2 &&
                  phoneNumber != 0 &&
                  (rollNumber != "" || instituteName != ""))
                  ? false
                  : true
              }
            >
              {step == 2 ? "Sign Up" : "Next"}
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
              onClick={handleBack}
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
              <LinearProgress
                variant="determinate"
                value={step * 50}
                sx={{
                  height: 8,
                  mb: 1,
                  bgcolor: "rgba(255,255,255,0.1)",
                  "& .MuiLinearProgress-bar": {
                    bgcolor: "rgb(255, 255, 255)",
                  },
                }}
              />
              <Box sx={{ display: "flex", justifyContent: "center", mb: 10 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {step}/2
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ESummitRegistrationPage;
