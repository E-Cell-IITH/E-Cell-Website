import CardMedia from "@mui/material/CardMedia";
import isEmail from "validator/lib/isEmail";
import React, { useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Head from "next/head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import axios from "axios";
import img from "../public/vector.png";
import {
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from "@mui/material";
import { Grid } from "@mui/material";
import { data } from "autoprefixer";
gsap.registerPlugin(ScrollTrigger);

const Register = () => {

    const Field = ({
        label,
        placeholder,
        flag,
        value,
        name,
        options,
    }) => {
        let input = <></>;
        const [selectOpen, setSelectOpen] = useState(false);

        const closeMenu = () => {
            setSelectOpen(false);
        };

        if (!flag)
            input = (
                <>
                    <FormControl fullWidth variant="standard">
                        <Select
                            required
                            displayEmpty
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <em>{placeholder}</em>;
                                }
                                return selected;
                            }}
                            inputProps={{ "aria-label": "Without label" }}
                            name={name}
                            value={value}
                            onChange={(e)=>{
                                setSelectOpen(false);
                                setData({
                                    ...data,
                                    [e.target.name]:e.target.value
                                })
                                console.log(data)
                            }}
                            open={selectOpen}
                            onOpen={() => {
                                window.addEventListener("scroll", closeMenu);
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
                                            color: "black",
                                        },
                                        "& .Mui-selected": {
                                            color: "black",
                                        },
                                    },
                                },
                                disableScrollLock: true,
                            }}
                        >
                            {options.map((el, key) => (
                                <MenuItem
                                    sx={{
                                        borderBottom: "1px solid white",
                                        backgroundColor: "#32329B",
                                        color: "white",
                                    }}
                                    key={key}
                                    value={el}
                                >
                                    {el}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </>
            );
        else
            input = (
                <>
                    <TextField
                        fullWidth
                        placeholder={placeholder}
                        variant="standard"
                        name={name}
                        value={value}
                        onChange={(e)=>{
                            console.log("hello")
                            setData({
                                ...data,
                                [e.target.name]:e.target.value
                            })
                        }}
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
            );

        return (
            <>
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
        );
    };

    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        year: "",
        school: "",
        experience: "",
        committee: "",
        country: ""
    });

    const isDataFilled = () => {
        return Object.values(data).every((value) => value !== "");
    };

    function check() {
        if (data.phone.length !== 10) {
            alert("Enter a valid phone number!");
            return false;
        }

        const x = data.phone;
        for (var i = 0; i < x.length; i++) {
            if (!(x[i] >= "0" && x[i] <= "9")) {
                alert("Enter valid phone number!");
                return false;
            }
        }

        setData({...data,phone: Number(data.phone)})

        const y = data.year;
        for (var i = 0; i < y.length; i++) {
            if (!(y[i] >= "0" && y[i] <= "9")) {
                alert("Enter valid year!");
                return false;
            }
        }

        setData({...data,year: Number(data.year)})

        if (!isEmail(data.email)) {
            alert("Enter valid email!");
            return false;
        }

        return true;
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (!check()) {
            return;
        }

        const fetchData = await axios.post(
            `http://127.0.0.1:8000/mun`,
            data
        );

        setData({
            name: "",
            phone: "",
            email: "",
            year: "",
            school: "",
            experience: "",
            committee: "",
            country: ""
        });

        const data2 = fetchData.data;
        if (data2.alert === true) {
            alert(data2.message);
        }
    }

    const fieldData = [
        {
            label: "Name",
            placeholder: "type your name",
            flag: true,
            value: data.name,
            name: "name",
            options : []
        },
        {
            label: "Phone number",
            placeholder: "enter your phone number",
            flag: true,
            value: data.phone,
            name: "phone",
            options : []
        },
        {
            label: "Email",
            placeholder: "enter your email",
            flag: true,
            value: data.email,
            name: "email",
            options : []
        },
        {
            label: "Year/class",
            placeholder: "enter your year/class",
            flag: true,
            value: data.year,
            name: "year",
            options : []
        },
        {
            label: "School/University",
            placeholder: "enter your school/university name",
            flag: true,
            value: data.school,
            name: "school",
            options : []
        },
        {
            label: "MUN experience",
            placeholder: "enter your MUN experience in number of years",
            flag: true,
            value: data.experience,
            name: "experience",
            options : []
        },
        {
            label: "Committee preference",
            placeholder: "enter your committee preference",
            flag: false,
            value: data.committee,
            name: "committee",
            options: ["UNGA", "UNSC", "WHO", "UNHRC", "UNEP", "UNODC"],
        },
        {
            label: "Country preference",
            placeholder: "enter your country preference",
            flag: false,
            value: data.country,
            name: "country",
            options: ["USA", "UK", "Russia", "China", "India", "Pakistan", "Afghanistan", "Iran", "Iraq", "Syria"],
        }
    ]

    return (
        <div
            style={{
                background:
                    "linear-gradient(0deg, rgba(10, 10, 12, 0.70) 1.78%, rgba(2, 2, 68, 0.70) 100%), #000",
            }}
        >
            <Head>
                <title>E-Cell Register</title>
                <meta
                    name="google-site-verification"
                    content="agHaKoDcApHadKU7BhRCOJK0w5SRZtQCG9YxNKZBGvc"
                />
                <link rel="canonical" href="https://ecell.iith.ac.in/register" />
            </Head>
            <Typography
                paddingTop="3vw"
                textAlign="center"
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
                Model United Nations
            </Typography>

            <Grid container rowSpacing={6}
            >
                <Grid item xl={2} lg={3} xs={2} />
                <Grid item xl={8} lg={6} xs={8}>
                    {fieldData.map((el, key) => (
                        Field({...el})
                    ))}
                </Grid>
                <Grid item xl={2} lg={3} xs={2} />

                <Grid item xl={3} lg={3} xs={2} />
                <Grid item xl={6} lg={6} xs={12}>
                    <span
                        style={{
                            cursor: isDataFilled() ? "pointer" : "not-allowed",
                            paddingTop: "2.5vw",
                            margin: 0,
                            height: "fit-content",
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "2vw"
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
        </div>
    );
};

export default Register;
