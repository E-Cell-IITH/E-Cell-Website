import React from "react";
import style from "../styles/first.module.css";
import Image from "next/image";
import Navbar from "../components/first";
import Card from "../components/Card";
import { Grid, styled, Box, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import style2 from "../styles/changesFirst.module.css";

function Team() {
  const operations = [
    {
      name: "",
      pic: " ",
    },
  ];
  const Item = () => {
    return (
      <Card
        name="Viren Soni"
        imgUrl="https://res.cloudinary.com/dwsverefw/image/upload/v1665876488/ecell/team/Viren_Design_1_vvcrml.png"
      />
    );
  };
  return (
    <>
      {/* <div>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1))",
            top: 0,
            zIndex: 1,
          }}
        ></Box>
        <Box as="div" className={style.image} sx={{ mt: "1rem" }}>
          <Image
            src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696046/ecell/logo_dshics.png"
            alt="Ecell Logo"
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Image
          src="https://res.cloudinary.com/dwsverefw/image/upload/v1665878886/ecell/hostels_svd8y6.jpg"
          priority={true}
          layout="fill"
          objectFit="cover"
          sx={{ zIndex: 0 }}
          alt="IIT Hyderabad Hostel"
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Box as="div" className={style2.title}>
          TEAM E-Cell
          <br />
        </Box>
        <Box as="div" className={style2.iit}>
          IIT Hyderabad <br />
          2022-23
        </Box>
        <br />
        <div className={style.box}>
          <a
            className={style.pic}
            href="https://www.instagram.com/ecell_iith/?hl=en"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              className={style.images}
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696045/ecell/instagram_kxgpgt.png"
              alt="Instagram Link"
              width="20"
              height="20"
              layout="responsive"
            />
          </a>
          <a
            className={style.pic}
            href="https://in.linkedin.com/company/entrepreneurship-cell-iit-hyderabad"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              className={style.images}
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696046/ecell/linkedin_yylzcz.png"
              alt="Linkedin link"
              width="20"
              height="20"
              layout="responsive"
            />
          </a>
          <a
            className={style.pic}
            href="https://twitter.com/ecell_iith"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              className={style.images}
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696046/ecell/twitter_fmiaf4.png"
              alt="Twitter Link"
              width="20"
              height="20"
              layout="responsive"
            />
          </a>
          <a
            className={style.pic}
            href="https://www.facebook.com/ecell.iithyd/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              className={style.images}
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696044/ecell/facebook_o9s1ml.png"
              alt="Facebook Link"
              width="20"
              height="20"
              layout="responsive"
            />
          </a>
          <a
            className={style.pic}
            href="https://www.youtube.com/user/ecelliithyderabad"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              className={style.images}
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696047/ecell/youtube_arknwl.png"
              alt="Youtube Link"
              width="18"
              height="18"
              layout="responsive"
            />
          </a>
          <br />
        </div>
      </div> */}
      <Navbar heading="Team E-Cell" desc={false} />
      <div>
        <Card
          imgUrl={
            "https://res.cloudinary.com/dwsverefw/image/upload/v1665868302/ecell/team/Shreyansh_Agarwal_Overall_Head_1_bi10yy.jpg"
          }
          name="Shreyansh Agarwal"
          position="Overall Coordinator"
          sx={{ pb: 5 }}
          bold
        />
      </div>

      <Grid
        container
        sx={{
          position: "relative",
          zIndex: 30,
          justifyContent: "center",
          mt: 6,
          p: 6,
        }}
        spacing={6}
        className={style2.gap}
      >
        {/* Operation */}
        <Grid
          item
          container
          xs={12}
          xl={4}
          spacing={5}
          sx={{ p: 0, justifyContent: "center" }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontFamily: "Montserrat",
                fontSize: {
                  sm: "2.5rem",
                  md: "3rem",
                  textAlign: "center",
                  fontWeight: 400,
                  textAlignLast: "center",
                  fontWeight: 600,
                },
              }}
            >
              Operations
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifySelf="center"
            sx={{ maxWidth: { sm: "40rem" } }}
            spacing={5}
          >
            <Grid item xs={12} sm={6}>
              <Card
                name="Anish Ambavat"
                imgUrl="https://res.cloudinary.com/dwsverefw/image/upload/v1665876113/ecell/team/Anish_Ambavat_Operations_Head_1_dioism.jpg"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card
                name="Yash Sharma"
                imgUrl="https://res.cloudinary.com/dwsverefw/image/upload/v1665876113/ecell/team/Yash_Sharma_Operations_Head_1_pr9bwl.jpg"
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Web */}
        <Grid
          item
          container
          xs={12}
          xl={4}
          spacing={5}
          sx={{ p: 0, justifyContent: "center" }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontFamily: "Montserrat",
                fontSize: {
                  sm: "2.5rem",
                  md: "3rem",
                  textAlign: "center",
                  fontWeight: 400,
                  textAlignLast: "center",
                  fontWeight: 600,
                },
              }}
            >
              Web
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifySelf="center"
            sx={{ maxWidth: { sm: "40rem" } }}
            spacing={2}
          >
            <Grid item xs={12}>
              <Card
                name="Anuj Pandey"
                imgUrl="https://res.cloudinary.com/dwsverefw/image/upload/v1665876114/ecell/team/Anuj_Pandey_WebHead_1_mrhxks.jpg"
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Ideation */}
        <Grid
          item
          container
          xs={12}
          xl={4}
          spacing={5}
          sx={{ p: 0, justifyContent: "center" }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontFamily: "Montserrat",
                fontSize: {
                  sm: "2.5rem",
                  md: "3rem",
                  textAlign: "center",
                  fontWeight: 400,
                  textAlignLast: "center",
                  fontWeight: 600,
                },
              }}
            >
              Ideation
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifySelf="center"
            sx={{ maxWidth: { sm: "40rem" } }}
            spacing={5}
          >
            <Grid item xs={12} sm={6}>
              <Card
                name="Yashas Yajur"
                imgUrl="https://res.cloudinary.com/dwsverefw/image/upload/v1665876113/ecell/team/Yashas_Ideation_1_k4xjd1.jpg"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card
                name="Nandita Lakshmi"
                imgUrl="https://res.cloudinary.com/dwsverefw/image/upload/v1665876114/ecell/team/Nandita_Ideation_1_qdovck.jpg"
              />
            </Grid>
          </Grid>
        </Grid>
        {/* PR & Networking */}
        <Grid
          item
          container
          xs={12}
          xl={4}
          spacing={5}
          sx={{ p: 0, justifyContent: "center" }}
          className={style2.pad}
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontFamily: "Montserrat",
                fontSize: {
                  sm: "2.5rem",
                  md: "3rem",
                  textAlign: "center",
                  fontWeight: 400,
                  textAlignLast: "center",
                  fontWeight: 600,
                },
              }}
            >
              PR & Networking
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifySelf="center"
            sx={{ maxWidth: { sm: "40rem" } }}
            spacing={5}
          >
            <Grid item xs={12} sm={6}>
              <Card
                name="Tanay Yadav"
                imgUrl="https://res.cloudinary.com/dwsverefw/image/upload/v1665876488/ecell/team/IMG_20220815_141142_Bokeh__01_1_it1j2m.jpg"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card
                name="Satya Aditi Dhaaipule"
                imgUrl="https://res.cloudinary.com/dwsverefw/image/upload/v1665876488/ecell/team/Satya_Aditi_PR_Head_1_nfksee.png"
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Sponsorship */}
        <Grid
          item
          container
          xs={12}
          xl={4}
          spacing={5}
          sx={{ p: 0, justifyContent: "center" }}
          className={style2.pad}
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontFamily: "Montserrat",
                fontSize: {
                  sm: "2.5rem",
                  md: "3rem",
                  textAlign: "center",
                  fontWeight: 400,
                  textAlignLast: "center",
                  fontWeight: 600,
                },
              }}
            >
              Sponsorship
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifySelf="center"
            sx={{ maxWidth: { sm: "40rem" } }}
            spacing={2}
          >
            <Grid item xs={12}>
              <Card
                name="Tanmay Shah"
                imgUrl="https://res.cloudinary.com/dwsverefw/image/upload/v1665876488/ecell/team/TanmayShah_SponHead_1_apyqpk.png"
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Design */}
        <Grid
          item
          container
          xs={12}
          xl={4}
          spacing={5}
          sx={{ p: 0, justifyContent: "center" }}
          className={style2.pad}
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontFamily: "Montserrat",
                fontSize: {
                  sm: "2.5rem",
                  md: "3rem",
                  textAlign: "center",
                  fontWeight: 400,
                  textAlignLast: "center",
                  fontWeight: 600,
                },
              }}
            >
              Design
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifySelf="center"
            sx={{ maxWidth: { sm: "40rem" } }}
            spacing={2}
          >
            <Grid item xs={12}>
              <Card
                name="Viren Soni"
                imgUrl="https://res.cloudinary.com/dwsverefw/image/upload/v1665876488/ecell/team/Viren_Design_1_vvcrml.png"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* ------------------------------------------------------ */}
      {/* Managers section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "column", lg: "row" },
          allignItems: "center",
          marginTop: "10rem",
        }}
      >
        {/* operations info */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { lg: "80rem" },
            justifyContent: "center",
            allignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "white",

              margin: { xs: "0 auto", lg: "0 10rem" },
              // padding: { lg: "0 10rem" },
              paddingBottom: "1rem",
              fontFamily: "Montserrat",
              fontSize: {
                sm: "2.5rem",
                md: "3rem",
                fontWeight: 600,
              },
            }}
          >
            Operations
          </Typography>
          <Typography
            varient="p"
            sx={{
              color: "white",
              width: { xs: "20rem", md: "30rem" },
              margin: { xs: "0 auto", lg: "0 10rem" },
              textAlign: { xs: "center", lg: "left" },
              ontFamily: "Montserrat",
              fontSize: {
                xs: ".9rem",
                sm: ".9rem",
                md: "1rem",
                lg: "1.2rem",
                fontWeight: 300,
              },
            }}
          >
            The Operations domain is in charge of putting on events and
            competitions on campus. We makes arrangements like booking places,
            procuring and setting up equipment, media coverage, logistics and
            transportation. We also collaborate with the PR and Networking teams
            on the Campus Ambassador programme to expand the reach of E-Cell
            among other colleges. We conduct workshops and bootcamps. also
            introduce new event ideas to promote entrepreneurial spirit among
            students.
          </Typography>
        </Box>
        {/* operations team */}

        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "#D3D3D3",
              fontFamily: "Montserrat",
              textAlign: "center",
              padding: "0 auto",
              marginBottom: "2rem",
              marginTop: { xs: "1rem" },
              fontSize: {
                sm: "2rem",
                md: "2.5rem",
                fontWeight: 600,
              },
            }}
          >
            Managers
          </Typography>
          <Grid
            container
            sx={{
              position: "relative",
              zIndex: 30,
              justifyContent: "center",
            }}
            spacing={5}
          >
            <Grid item xs={12} md={4} lg={3}>
              <Item>1</Item>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Item>2</Item>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Item>3</Item>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Item>4</Item>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Item>4</Item>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Item>4</Item>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Item>4</Item>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Item>4</Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Team;
