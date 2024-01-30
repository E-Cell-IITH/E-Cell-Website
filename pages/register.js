
import CardMedia from "@mui/material/CardMedia";
import isEmail from 'validator/lib/isEmail'
import React, { useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Head from "next/head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import axios from 'axios'
import img from "../public/vector.png";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Grid } from "@mui/material";
gsap.registerPlugin(ScrollTrigger);

const Field = ({ label, placeholder, name, value, onChange, isOption, options }) => {
  let input = <></>
  const [selectOpen, setSelectOpen] = useState(false);

  const closeMenu = () => {
    setSelectOpen(false);
  }

  if (isOption)
    input = <>
      <FormControl fullWidth variant="standard">
        <Select
          required
          displayEmpty
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>{placeholder}</em>;
            }
            return selected
          }}
          inputProps={{ 'aria-label': 'Without label' }}
          name={name}
          value={value}
          onChange={(e) => {
            setSelectOpen(false)
            onChange(e)
          }}
          open={selectOpen}
          onOpen={() => {
            window.addEventListener('scroll', closeMenu);
            setSelectOpen(true);
          }}
          onClose={() => setSelectOpen(false)}
          sx={{
            "& .MuiInputBase-input": {
              color: "#7E94F8",
              fontFamily: "Montserrat",
              fontSize: "1.16706rem",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              borderBottom: "2px solid rgba(201, 201, 201, 0.50)",
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#44447A",
              fontFamily: "Montserrat",
              fontSize: "0.86881rem",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              opacity: "100%",
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                "& .MuiMenuItem-root:hover": {
                  color:"black"
                },
                "& .Mui-selected": {
                  color: "black",
                },
              }
            },
            disableScrollLock: true,
          }}
        >
          {options.map((el, key) => (
            <MenuItem sx={{borderBottom:"1px solid white",backgroundColor:"#32329B",color:"white"}} key={key} value={el}>{el}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  else
    input = <>
      <TextField
        fullWidth
        placeholder={placeholder}
        variant="standard"
        name={name}
        value={value}
        onChange={onChange}
        sx={{
          "& .MuiInputBase-input": {
            color: "#7E94F8",
            fontFamily: "Montserrat",
            fontSize: "1.16706rem",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            borderBottom: "2px solid rgba(201, 201, 201, 0.50)",
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#44447A",
            fontFamily: "Montserrat",
            fontSize: "0.86881rem",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            opacity: "100%",
          },
        }}
      />
    </>

  return <>
    <Typography
      sx={{
        color: "#D3D3D3",
        fontFamily: "Montserrat",
        fontSize: "1.29563rem",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "normal",
        textTransform: "uppercase",
        marginBottom: 1,
        marginTop: 3,
      }}
    >
      {label}
    </Typography>
    {input}
  </>
}

const Register = () => {

  const [data, setData] = useState({
    sname: "",
    fname: "",
    pocname: "",
    contact: "",
    startup: "",
    service: "",
    email: "",
    semail: "",
    ifocus: "",
    ayears: "",
    location: "",
    city: "",
    about: ""
  });
  const isDataFilled = () => {
    return Object.values(data).every(value => value !== "");
  };

  function onChange(e) {
    const { name, value } = e.target;
    setData((previous) => ({ ...previous, [name]: value }));
  }

  function check() {
    if (data.contact.length !== 10) {
      alert("Enter a valid phone number!")
      return false;
    }

    const x = data.contact
    for (var i = 0; i < x.length; i++) {
      if (!(x[i] >= '0' && x[i] <= '9')) {
        alert("Enter valid phone number!")
        return false;
      }
    }

    const y = data.ayears
    for (var i = 0; i < y.length; i++) {
      if (!(y[i] >= '0' && y[i] <= '9')) {
        alert("Enter valid active years!")
        return false;
      }
    }

    if (!isEmail(data.semail) && !isEmail(data.email)) {
      alert("Enter valid email!")
      return false;
    }

    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!check()) { return; }


    const fetchData = await axios.post(`https://ecell.kludge.in:3001/input/signup`, data);

    setData({
      sname: "",
      fname: "",
      pocname: "",
      contact: "",
      startup: "",
      service: "",
      email: "",
      semail: "",
      ifocus: "",
      ayears: "",
      location: "",
      city: "",
      about: ""
    })

    const data2 = fetchData.data
    if (data2.alert === true) {
      alert(data2.message)
    }
  }

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu & Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];

  const serviceAreas = [
    "AI",
    "Personal Care",
    "IOT",
    "Design",
    "Agro/Food",
    "Spacetech/Aerospace",
    "SAAS",
    "EV",
    "Fintech",
    "Supply Chain/Logistics",
    "Biotech/Biomed/healthcare",
    "Robotics",
    "Cyber Security",
    "Energy Engg",
    "EdTech",
    "Others"
  ]

  const fieldData = [
    {
      label: "POC Name",
      placeholder: "Type Point of Contact Name",
      name: "pocname",
      value: data.pocname,
      onChange: onChange
    },
    {
      label: "Email ID",
      placeholder: "Type POC Email ID",
      name: "email",
      value: data.email,
      onChange: onChange
    },
    {
      label: "Contact No.",
      placeholder: "Type Contact No.",
      name: "contact",
      value: data.contact,
      onChange: onChange
    },
    {
      label: "Startup Email ID",
      placeholder: "Type Startup Mail ID",
      name: "semail",
      value: data.semail,
      onChange: onChange
    },
    {
      label: "Startup Stage",
      placeholder: "Select startup Stage",
      name: "startup",
      value: data.startup,
      onChange: onChange,
      isOption: true,
      options: ["Idea", "Prototype", "Launch"]
    },
    {
      label: "Industry Focus",
      placeholder: "Mention Startup Industry Focus",
      name: "ifocus",
      value: data.ifocus,
      onChange: onChange
    },
    {
      label: "Service Areas",
      placeholder: "Select Startup Service Areas",
      name: "service",
      value: data.service,
      onChange: onChange,
      isOption: true,
      options: serviceAreas
    },
    {
      label: "Active Years",
      placeholder: "Type The Number Active of Years",
      name: "ayears",
      value: data.ayears,
      onChange: onChange
    },
    {
      label: "Location",
      placeholder: "Select State",
      name: "location",
      value: data.location,
      onChange: onChange,
      isOption: true,
      options: states
    },
    {
      label: "City",
      placeholder: "Mention the city of your startup",
      name: "city",
      value: data.city,
      onChange: onChange
    }
  ]

  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(10, 10, 12, 0.70) 1.78%, rgba(2, 2, 68, 0.70) 100%), #000",
        padding: "10vw",
      }}
    >
      <Head>
        <title>E-Cell Register</title>
        <meta
          name="google-site-verification"
          content="agHaKoDcApHadKU7BhRCOJK0w5SRZtQCG9YxNKZBGvc"
        />
      </Head>
      <Grid container spacing={8}>
        <Grid
          item
          xl={6}
          lg={6}
          md={12}
          sm={12}
          xs={12}
          marginBottom={{ xl: 0, lg: 0, md: "2rem", sm: "2rem", xs: "2rem" }}
          alignItems="center"
        >
          <Grid container direction={"row-reverse"} height="100%">
            <Grid item xl={12} lg={12} md={9} sm={9} xs={9}>
              <Typography
                textAlign="left"
                fontFamily={"Montserrat"}
                fontSize={{
                  xl: "3.52256rem",
                  lg: "3.52256rem",
                  md: "2.8rem",
                  sm: "2.52256rem",
                  xs: "1.9rem",
                }}
                fontStyle={"normal"}
                fontWeight={700}
                lineHeight={"normal"}
                textTransform={"uppercase"}
                sx={{
                  background:
                    "linear-gradient(91deg, #3880E7 0.4%, #62D7D8 99.34%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Tell us about your StartuP...
              </Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={3} sm={3} xs={3}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <CardMedia
                  sx={{
                    width: {
                      xl: "20rem",
                      lg: "18.24944rem",
                      md: "4rem",
                      sm: "4rem",
                      xs: "2.5rem",
                    },
                    height: {
                      xl: (28.67769 / 18.24944) * 20 + "rem",
                      lg: "28.67769rem",
                      md: (28.67769 / 18.24944) * 4 + "rem",
                      sm: (28.67769 / 18.24944) * 4 + "rem",
                      xs: (28.67769 / 18.24944) * 2.5 + "rem",
                    },
                  }}
                  image="/vector.png"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <Grid container textAlign="left">
            <Grid item xs={12}>
              <Field
                label="startup name"
                placeholder="Type startup name"
                name="sname"
                value={data.sname}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                label="Founder/CEO name"
                placeholder="Type founder/CEO name"
                name="fname"
                value={data.fname}
                onChange={onChange}
              />
            </Grid>
            <Grid container columnSpacing={4}>
              {fieldData.map((el, key) => (
                <Grid
                  item
                  xl={6}
                  lg={6}
                  md={12}
                  sm={12}
                  xs={12}
                  alignContent="flex-start"
                  key={key}
                >
                  <Field {...el} />
                </Grid>
              ))}
            </Grid>
            <Grid item xs={12}>
              <Field
                label="About"
                name="about"
                placeholder="Tell us about yourself"
                value={data.about}
                onChange={onChange}
              />
            </Grid>
            <span
              style={{
                cursor: isDataFilled() ? "pointer" : "not-allowed",
                paddingTop: "2.5vw",
                margin: 0,
                height: "fit-content",
              }}
            >
              <Button
                disabled={!isDataFilled()}
                sx={{
                  borderRadius: "0.5rem",
                  backgroundImage: isDataFilled()
                    ? "linear-gradient(90deg, #3880E7 0.58%, #62D7D8 99.89%) !important"
                    : "linear-gradient(90deg, #637897 0.58%, #668D8E 99.89%) !important",
                  textTransform: "capitalize",
                  width: "fit-content",
                }}
                onClick={handleSubmit}
              >
                <Typography
                  color="white"
                  textAlign="center"
                  fontFamily={"Montserrat"}
                  fontSize={"1rem"}
                  fontStyle={"normal"}
                  fontWeight={500}
                  lineHeight={"normal"}
                  padding={1}
                >
                  REGISTER NOW
                </Typography>
              </Button>
            </span>
          </Grid>
        </Grid>
      </Grid>
    </div>
    // </div>
    // </div>
  );
};

export default Register;
