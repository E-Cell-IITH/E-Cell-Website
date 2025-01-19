import {
  Box,
  Button,
  Container,
  LinearProgress,
  MenuItem,
  TextField,
  Typography,
  CircularProgress,
  Select,
  InputLabel,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useRouter } from "next/router";
import EsummitNavbar from "../../components/esummit25/navbar";
import { toast } from "react-toastify";

const ESummitRegistrationPage = () => {
  const [step, setStep] = useState(1);
  const [degree, setDegree] = useState("");
  const [instituteName, setInstituteName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [disableSendOTPButton, setDisableSendOTPButton] = useState(true);
  const [disableVerifyOTPButton, setDisableVerifyOTPButton] = useState(true);
  const [verified, setVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [couponCode, setCouponCode] = useState("");

  const [loadingSendOTPButton, setLoadingSendOTPButton] = useState(false);
  const [loadingVerifyOTPButton, setLoadingVerifyOTPButton] = useState(false);
  const [loadingSignUpButton, setLoadingSignUpButton] = useState(false);

  const [userRole, setUserRole] = useState("");
  const [industry, setIndustry] = useState("");

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleGetUserDetails = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/me`, {
        withCredentials: true,
      });

      if (response.data.message) {
        router.replace("/esummit/tickets");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Unauthorized - Redirecting to login...");
      } else {
        console.error("Error getting user details:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetUserDetails();
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(e.target.value)) {
      setDisableSendOTPButton(false);
    } else {
      setDisableSendOTPButton(true);
    }
    setVerified(false);
  };

  const handleOTPChange = (e) => {
    setOtp(e.target.value);
    if (e.target.value.length == 6) {
      setDisableVerifyOTPButton(false);
    }
    setVerified(false);
  };

  function isValidPhoneNumber(phoneNumber) {
    const indianPhoneRegex = /^[6-9]\d{9}$/;
    return indianPhoneRegex.test(phoneNumber);
  }

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const handleSendOtp = async () => {
    setLoadingSendOTPButton(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/signup/otp/send`,
        {
          email,
        },
        { withCredentials: true }
      );

      if (response.data.message) {
        setDisableSendOTPButton(true);
        toast.success("OTP sent successfully", {
          autoClose: 3000,
        });
      } else {
        toast.error(
          `Error sending OTP: ${response.data.error || "Unknown error"}`,
          {
            autoClose: 3000,
          }
        );
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(`Error sending OTP: ${error.response.data.error}`, {
          autoClose: 3000,
        });
      } else {
        toast.error(`Error sending OTP: ${error.message || "Unknown error"}`, {
          autoClose: 3000,
        });
      }
    } finally {
      setLoadingSendOTPButton(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoadingVerifyOTPButton(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/signup/otp/verify`,
        {
          email,
          otp,
        },
        { withCredentials: true }
      );

      if (response.data.message) {
        setDisableSendOTPButton(true);
        setVerified(true);
        setDisableVerifyOTPButton(true);
        toast.success("OTP verified successfully", {
          autoClose: 3000,
        });
      } else {
        toast.error("Invalid OTP", {
          autoClose: 3000,
        });
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(`Error verifying OTP: ${error.response.data.error}`, {
          autoClose: 3000,
        });
      } else {
        toast.error(
          `Error verifying OTP: ${error.message || "Unknown error"}`,
          {
            autoClose: 3000,
          }
        );
      }
    }
    setLoadingVerifyOTPButton(false);
  };

  const handleBack = () => {
    if (step == 2) setStep(1);
    else router.replace("/esummit");
  };

  const handleNext = async () => {
    if (step == 1) setStep(2);
    else {
      setLoadingSignUpButton(true);
      try {
        const response = await axios.post(
          `${BASE_URL}/signup`,
          {
            email,
            name,
            data: JSON.stringify({
              degree: degree,
              coupon: couponCode,
              role: userRole,
              industry: industry,
              institute: instituteName,
            }),
            contact_number: phoneNumber,
            otp,
          },
          { withCredentials: true }
        );

        if (response.data.message) {
          toast.success("Successfully signed up", {
            autoClose: 3000,
          });
          // router.replace("/esummit/tickets");
          setTimeout(() => {
            router.replace("/esummit/tickets");
          }, 2000);
        } else {
          toast.error(`${response.data.error}`, {
            autoClose: 3000,
          });
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          toast.error(`${error.response.data.error}`, {
            autoClose: 3000,
          });
        } else {
          toast.error(`Error: ${error.message || "Unknown error"}`, {
            autoClose: 3000,
          });
        }
      }
      setLoadingSignUpButton(false);
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <CircularProgress color="secondary" />
      </Box>
    );
  }

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
                      <CircularProgress
                        size={24}
                        sx={{ position: "absolute" }}
                        />
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
                    onChange={handleOTPChange}
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
                      backgroundColor: disableVerifyOTPButton
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
                    disabled={disableVerifyOTPButton || loadingVerifyOTPButton}
                  >
                    {loadingVerifyOTPButton ? (
                      <>
                      <CircularProgress
                        size={24}
                        sx={{ position: "absolute" }}
                      />
                      <span>{"Verify OTP"}</span>
                      </>
                    ) : (
                      "Verify OTP"
                    )}
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
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value)}
                  variant="outlined"
                  SelectProps={{
                    IconComponent: KeyboardArrowDown,
                    displayEmpty: true,
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
                        color: userRole ? "white" : "rgba(255, 255, 255, 0.5)",
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
                    Which of the following describes you the best?
                  </MenuItem>
                  {[
                    "Student",
                    "Founder",
                    "Aspiring Founder",
                    "Professional",
                  ].map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                {userRole == "Student" ? (
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
                    select
                    fullWidth
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    variant="outlined"
                    placeholder="Select your area of focus"
                    SelectProps={{
                      IconComponent: KeyboardArrowDown,
                      displayEmpty: true,
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
                          color: industry
                            ? "white"
                            : "rgba(255, 255, 255, 0.5)",
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
                      Select your area of focus
                    </MenuItem>
                    {[
                      "Technology",
                      "Finance",
                      "Healthcare",
                      "Education",
                      "Marketing",
                      "Other",
                    ].map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
                <TextField
                  select
                  fullWidth
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  variant="outlined"
                  SelectProps={{
                    IconComponent: KeyboardArrowDown,
                    displayEmpty: true,
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
                        color: degree ? "white" : "rgba(255, 255, 255, 0.5)",
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
                  {["Graduate", "Post Graduate", "Doctorate", "School"].map(
                    (option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    )
                  )}
                </TextField>
                {/* <TextField
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
                </TextField> */}
                {/* <TextField
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
                </TextField> */}
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
                      mb: 2,
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
                mb: 2,
                borderRadius: "0",
                color: "white !importan",
                fontFamily: "Montserrat, sans-serif",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem" },
                fontWeight: "600",
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
              onClick={handleNext}
              disabled={
                (verified && step == 1 && name != "") ||
                (step == 2 &&
                  isValidPhoneNumber(phoneNumber) &&
                  degree != "" &&
                  userRole != "" &&
                  loadingSignUpButton == false &&
                  (userRole === "Student"
                    ? instituteName != ""
                    : industry != ""))
                  ? false
                  : true

                  || loadingSignUpButton
              }
            >
              {step == 2 ? (
                loadingSignUpButton ? (
                  <>
                  <CircularProgress size={24} sx={{ position: "absolute" }} />
                  <span>{"Sign Up"}</span>
                  </>
                ) : (
                  "Sign Up"
                )
              ) : (
                "Next"
              )}
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                borderRadius: "0",
                color: "white",
                mb: 2,
                borderColor: "white",
                fontFamily: "Montserrat, sans-serif",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem" },
                textTransform: "uppercase",
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderColor: "white",
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
                  href="/esummit/login"
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
