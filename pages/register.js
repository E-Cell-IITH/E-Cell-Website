
import CardMedia from "@mui/material/CardMedia";
import isEmail from 'validator/lib/isEmail'
import React, { useRef, useState } from "react";
import { Button, Typography } from "@mui/material";
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

const Field = ({label, placeholder, name, value, onChange, isOption, options}) => {
  let input = <></>
  if (isOption)
    input = <>
      <FormControl fullWidth variant="standard">
        <Select
          required
          id="demo-simple-select"
          placeholder={placeholder}
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
        >
          {options.map((el,key) => (
            <MenuItem key={key} value={el}>{el}</MenuItem>
          ))}
          {/* <MenuItem value="Idea">Idea</MenuItem>
          <MenuItem value="Prototype">Prototype</MenuItem>
          <MenuItem value="Launch">Launch</MenuItem> */}
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
    location:"",
    city:"",
    about:""
  });
  const isDataFilled = () => {
    return Object.values(data).every(value => value !== "");
  };

  function onChange(e) {
    const { name, value } = e.target;
    setData((previous) => ({ ...previous, [name]: value }));
  }

  function check(){
    if(data.contact.length !== 10) {
      alert("Enter a valid phone number!")
      return false;
    }

    const x = data.contact
    for(var i=0;i<x.length;i++){
      if(!(x[i] >= '0' && x[i] <= '9')){
        alert("Enter valid phone number!")
        return false;
      }
    }

    const y = data.ayears
    for(var i=0;i<y.length;i++){
      if(!(y[i] >= '0' && y[i] <= '9')){
        alert("Enter valid active years!")
        return false;
      }
    }

    if(!isEmail(data.semail) && !isEmail(data.email)){
      alert("Enter valid email!")
      return false;
    }

    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if(!check()) {return;}

    console.log(data)

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
      location:"",
      city:"",
      about:""
    })

    const data2 = fetchData.data
    if(data2.alert === true){
      alert(data2.message)
    }
  }

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     tl.current = gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: "#head",
  //           start: "top 80%",
  //           end: "top 50%",
  //           toggleActions: "play none none reverse",
  //         },
  //       })
  //       .fromTo(
  //         "#head > *",
  //         {
  //           y: 20,
  //           autoAlpha: 0.2,
  //           scale: 0.9,
  //         },
  //         {
  //           autoAlpha: 1,
  //           scale: 1,
  //           y: 0,
  //           duration: 0.4,
  //           ease: "power2.out",
  //           stagger: 0.3,
  //         }
  //       );

  //     const cards = gsap.utils.toArray(".card");
  //     console.log(cards);
  //     cards.forEach((card) => {
  //       gsap
  //         .timeline({
  //           scrollTrigger: {
  //             trigger: card,
  //             start: "top 80%",
  //             end: "top 50%",
  //           },
  //         })
  //         .fromTo(
  //           card.children,
  //           {
  //             y: 20,
  //             autoAlpha: 0,
  //           },
  //           {
  //             autoAlpha: 1,
  //             y: 0,
  //             duration: 0.4,
  //             ease: "power2.out",
  //             stagger: 0.3,
  //           }
  //         );
  //     });
  //   }, parent);
  //   return () => ctx.revert();
  // }, []);
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
      placeholder: "Hello",
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
      placeholder: "Mention Startup Service Areas",
      name: "service",
      value: data.service,
      onChange: onChange
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
      placeholder: "Hello",
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
    <div style={{background:
      "linear-gradient(0deg, rgba(10, 10, 12, 0.70) 1.78%, rgba(2, 2, 68, 0.70) 100%), #000",padding:"10vw"}}>
      <Head>
        <title>E-Cell Register</title>
      </Head>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "fit-content",
          padding: "0 5%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: "1",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            textAlign="left"
            fontFamily={"Montserrat"}
            fontSize={"3.52256rem"}
            fontStyle={"normal"}
            fontWeight={700}
            lineHeight={"normal"}
            textTransform={"uppercase"}
            marginBottom={"5rem"}
            marginTop={-25}
            width={"34.62881rem"}
            sx={{
              background:
                "linear-gradient(91deg, #3880E7 0.4%, #62D7D8 99.34%)",
              backgroundClip: "text",
              "WebkitBackgroundClip": "text",
              "WebkitTextFillColor": "transparent",
            }}
          >
            Tell us about your StartuP...
          </Typography>
          <CardMedia
            sx={{ width: "18.24944rem", height: "28.67769rem" }}
            image="/vector.png"
            title="groww"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "50%",
          }}
        >
          <Typography
            sx={{
              color: "#D3D3D3",
              fontFamily: "Montserrat",
              fontSize: "1.29563rem",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              textTransform: "uppercase",
              marginBottom: 2,
            }}
          >
            Startup Name
          </Typography>
          <TextField
            id="standard-basic"
            placeholder="Type Startup Name"
            size="normal"
            fullWidth={true}
            name="sname"
            value={data.sname}
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
            variant="standard"
          />

          <Typography
            sx={{
              color: "#D3D3D3",
              fontFamily: "Montserrat",
              fontSize: "1.29563rem",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              textTransform: "uppercase",
              marginBottom: 2,
              marginTop: 4,
            }}
          >
            Founder/CEO NAME
          </Typography>
          <TextField
            id="standard-basic"
            placeholder="Type Founder / CEO Name"
            size="normal"
            fullWidth={true}
            name="fname"
            value={data.fname}
            onChange={onChange}
            sx={{
              "& .MuiInputBase-input": {
                color: "#7E94F8",
                fontFamily: "Montserrat",
                fontSize: "1.16706rem",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                width: "100%",
                width: "100%", // Make the TextField take up all available width
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
            variant="standard"
          />
          <Grid container columnSpacing={4}>
            {fieldData.map((el,key) => (
              <Grid item xs={6} alignContent="flex-start" key={key}>
                <Field {...el}/>
              </Grid>
            ))
            }
          </Grid>
          {/* <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                flex: 1,
                marginRight: "1rem",
                marginTop: "4%",
                gap: "4%",
                textAlign: "left",
              }}
            >
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
                }}
              >
                POC Name
              </Typography>
              <TextField
                fullWidth
                placeholder="Type Point of Contact Name"
                variant="standard"
                size="normal"
                name="pocname"
                value={data.pocname}
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
                Contact No.
              </Typography>
              <TextField
                fullWidth
                placeholder="Type Contact No."
                variant="standard"
                size="normal"
                name="contact"
                value={data.contact}
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
                Startup Stage
              </Typography>
              <FormControl fullWidth variant="standard">
                <Select
                  id="demo-simple-select"
                  placeholder="Hello"
                  name="startup"
                  value={data.startup}
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
                >
                  <MenuItem value="Idea">Idea</MenuItem>
                  <MenuItem value="Prototype">Prototype</MenuItem>
                  <MenuItem value="Launch">Launch</MenuItem>
                </Select>
              </FormControl>
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
                Service Areas
              </Typography>
              <TextField
                fullWidth
                placeholder="Mention Startup Service Areas"
                variant="standard"
                name="service"
                value={data.service}
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
                Location
              </Typography>
              <FormControl fullWidth variant="standard">
                <Select
                  id="demo-simple-select"
                  placeholder="Hello"
                  name="location"
                  value={data.location}
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
                >
                  {states.map((el,key) => (
                    <MenuItem key={key} value={el}>{el}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div
              style={{
                flex: 1,
                marginLeft: "1rem",
                marginTop: "4%",
                gap: "4%",
                textAlign: "left",
              }}
            >
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
                }}
              >
                Email ID
              </Typography>
              <TextField
                fullWidth
                placeholder="Type POC Email ID"
                variant="standard"
                name="email"
                value={data.email}
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
                Startup Email ID
              </Typography>
              <TextField
                fullWidth
                placeholder="Type Startup Mail ID"
                variant="standard"
                name="semail"
                type="email"
                value={data.semail}
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
                Industry Focus
              </Typography>
              <TextField
                fullWidth
                placeholder="Mention Startup Industry Focus"
                variant="standard"
                name="ifocus"
                value={data.ifocus}
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
                Active Years
              </Typography>
              <TextField
                fullWidth
                placeholder="Type The Number Active of Years"
                variant="standard"
                name="ayears"
                value={data.ayears}
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
                  marginBottom:4
                }}
              />
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
                  marginTop: -1,
                }}
              >
                City
              </Typography>
              <TextField
                fullWidth
                placeholder="Mention the city of your startup"
                variant="standard"
                name="city"
                value={data.city}
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
            </div>
          </div> */}
          <Typography
            sx={{
              color: "#D3D3D3",
              fontFamily: "Montserrat",
              fontSize: "1.29563rem",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              textTransform: "uppercase",
              marginTop:2.5,
              marginBottom: 2,
            }}
          >
            About
          </Typography>
          <TextField
            id="standard-basic"
            placeholder="Tell us about your startup..."
            size="normal"
            fullWidth={true}
            name="about"
            value={data.about}
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
            variant="standard"
          />
          <span style={{ cursor: isDataFilled() ? 'pointer' : 'not-allowed', paddingTop:"2.5vw",margin:0, height:"fit-content" }}>
            <Button
            disabled={!isDataFilled()}
              sx={{
                borderRadius: "0.5rem",
                backgroundImage: isDataFilled()?
                  "linear-gradient(90deg, #3880E7 0.58%, #62D7D8 99.89%) !important":"linear-gradient(90deg, #637897 0.58%, #668D8E 99.89%) !important",
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
        </div>
      </div>
    </div>
  );
};

export default Register;
