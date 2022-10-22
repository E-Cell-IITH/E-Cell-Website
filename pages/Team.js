import React from "react";
import Navbar from "../components/first";
import Card from "../components/Card";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import style2 from "../styles/changesFirst.module.css";
import Managers from "../components/Managers";
import parallax from "../styles/team.module.css";

function Team() {
  return (
    <>
      <Navbar heading="Team E-Cell" desc={false} />
      <div id="team">
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
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontFamily: "Montserrat",
          mt: 6,
          fontSize: {
            sm: "2.7rem",
            md: "3.4rem",
          },
          textAlign: "center",
          fontWeight: 400,
          textAlignLast: "center",
          fontWeight: 600,
        }}
      >
        HEADS
      </Typography>
      <Grid
        container
        sx={{
          position: "relative",
          zIndex: 30,
          justifyContent: "center",
          mt: 2,
          p: 0,
          px: {
            lg: "10vw",
          },
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
                },
                textAlign: "center",
                fontWeight: 400,
                textAlignLast: "center",
                fontWeight: 600,
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
      <Managers />
    </>
  );
}

export default Team;
