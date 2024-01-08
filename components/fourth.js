import React from "react";
import style from "../styles/fourth.module.css";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { Box } from "@mui/system";

const sponsors = [
  {
    name: "Yhills",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1668614499/ecell/Yhills_logo_ypyyhy.png",
  },
  {
    name: "Henry Harvin",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1668613949/ecell/henry_harwin_logo_ohdeqs.jpg",
  },
  {
    name: "Amazon",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1668613820/ecell/amazon_logo_abauyt.webp",
  },
  {
    name: "Uber",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1665696044/ecell/image_4_wxnxnd.png",
  },
  {
    name: "Aglasem",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1665696045/ecell/image_6_yv9wg1.png",
  },
  {
    name: "Unstop",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/c_scale,w_1125/v1666905522/ecell/unstop_wlsi8w.png",
  },
  {
    name: "stumagz",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1665696044/ecell/image_3_xmcjnj.png",
  },
  {
    name: "TE Hyderabad",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1666454047/ecell/avatar20191017110114_fhusr5.png",
  },
  {
    name: "Exfinity",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1666454115/ecell/fmh4aaygvimxajzcs3i7_rilt0x.webp",
  },
];

export default function Fourth() {
  return (
    <div>
      <Grid container id="sponsors" sx={{ mt: "1.7rem" }}>
        <Grid item xs={0} md={0}></Grid>
        <Grid item xs={12} md={6}>
          <div className={style.sponsor}>OUR COLLABORATORS</div>
        </Grid>
      </Grid>
      <br />
      <Box
        sx={{
          mt: { xs: "1.5rem", sm: "3rem", lg: "4rem" },
          backgroundColor: "#222222d6",
          overscroll: "hidden",
        }}
      >
        <Grid
          container
          className={style.slider}
          direction="row"
          alignItems="center"
          spacing={4}
          sx={{
            py: "1rem",
            overflowX: "hidden",
            position: "relative",
            flexWrap: "nowrap",
            justifyContent: "center",
            marginBottom: "-12px",
            width: { xs: `500%`, sm: "400%", md: "300%", lg: "250%" },
          }}
        >
          {sponsors.map((sponsor, i) => (
            <Grid
              item
              xs={12}
              key={{ sponsor, i }}
              sx={{
                position: "relative",
                height: { xs: "5rem", sm: "15vw", lg: "8vw" },
              }}
            >
              <Image
                className={style.img}
                src={sponsor.imgUrl}
                alt={sponsor.name}
                priority="true"
                fill
                objectFit="contain"
              />
            </Grid>
          ))}
          {sponsors.map((sponsor) => (
            <Grid
              item
              xs={12}
              key={sponsor}
              sx={{
                position: "relative",
                height: { xs: "5rem", sm: "15vw", lg: "8vw" },
              }}
            >
              <Image
                className={style.img}
                src={sponsor.imgUrl}
                alt={sponsor.name}
                priority="true"
                fill
                objectFit="contain"
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
