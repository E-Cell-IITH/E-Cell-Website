import React from "react";
import style from "../styles/fourth.module.css";
import Grid from "@mui/material/Grid";
import Image from "next/image";

export default function Fourth() {
  return (
    <div>
      <Grid container id="sponsors">
        <Grid item xs={1.6}></Grid>
        <Grid item xs={4}>
          <div className={style.sponsor}>OUR SPONSORS</div>
          <br />
          <br />
        </Grid>
      </Grid>
      <br />
      <div className={style.bg}>
        <Grid
          container
          className={style.slider}
          direction="row"
          alignItems="center"
          spacing={1.5}
          sx={{
            py: "1rem",
            overflowX: "hidden",
            position: "relative",
            flexWrap: "nowrap",
            justifyContent: "center",
            width: "200%",
            marginBottom: "-12px",
          }}
        >
          <Grid
            item
            md={1.6}
            xs={2}
            sx={{ position: "relative", height: "8vw" }}
          >
            <Image
              className={style.img}
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696045/ecell/image_5_bpk4pq.png"
              alt="Dare 2 Compete logo"
              layout="fill"
              objectFit="contain"
            />
          </Grid>
          <Grid
            item
            md={1.6}
            xs={2}
            sx={{ position: "relative", height: "8vw" }}
          >
            <Image
              className={style.img}
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696044/ecell/image_1_hpq2eu.png"
              alt="Bada Bussiness logo"
              layout="fill"
              objectFit="contain"
            />
          </Grid>
          <Grid
            item
            md={1.6}
            xs={2}
            sx={{ position: "relative", height: "8vw" }}
          >
            <Image
              className={style.img}
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696044/ecell/image_4_wxnxnd.png"
              alt="Uber logo"
              layout="fill"
              objectFit="contain"
            />
          </Grid>
          <Grid
            item
            md={1.6}
            xs={2}
            sx={{ position: "relative", height: "8vw" }}
          >
            <Image
              className={style.img}
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696044/ecell/image_3_xmcjnj.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </Grid>
          <Grid
            item
            md={1.6}
            xs={2}
            sx={{ position: "relative", height: "8vw" }}
          >
            <Image
              className={style.img}
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696045/ecell/image_6_yv9wg1.png"
              alt="aglasem logo"
              layout="fill"
              objectFit="contain"
            />
          </Grid>
          <Grid
            item
            md={1.6}
            xs={2}
            sx={{ position: "relative", height: "8vw" }}
          >
            <Image
              className={style.img}
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696045/ecell/image_7_curhvo.png"
              alt="money control logo"
              layout="fill"
              objectFit="contain"
            />
          </Grid>
          <Grid
            item
            md={1.6}
            xs={2}
            sx={{ position: "relative", height: "8vw" }}
          >
            <Image
              className={style.img}
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696045/ecell/image_5_bpk4pq.png"
              alt="Dare 2 Compete logo"
              layout="fill"
              objectFit="contain"
            />
          </Grid>
          <Grid
            item
            md={1.6}
            xs={2}
            sx={{ position: "relative", height: "8vw" }}
          >
            <Image
              className={style.img}
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696044/ecell/image_1_hpq2eu.png"
              alt="Bada Bussiness logo"
              layout="fill"
              objectFit="contain"
            />
          </Grid>
          <Grid
            item
            md={1.6}
            xs={2}
            sx={{ position: "relative", height: "8vw" }}
          >
            <Image
              className={style.img}
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696044/ecell/image_4_wxnxnd.png"
              alt="Uber logo"
              layout="fill"
              objectFit="contain"
            />
          </Grid>
          <Grid
            item
            md={1.6}
            xs={2}
            sx={{ position: "relative", height: "8vw" }}
          >
            <Image
              className={style.img}
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696044/ecell/image_3_xmcjnj.png"
              alt="Bada Bussiness logo"
              layout="fill"
              objectFit="contain"
            />
          </Grid>
          <Grid
            item
            md={1.6}
            xs={2}
            sx={{ position: "relative", height: "8vw" }}
          >
            <Image
              className={style.img}
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696045/ecell/image_6_yv9wg1.png"
              alt="aglasem logo"
              layout="fill"
              objectFit="contain"
            />
          </Grid>
          <Grid
            item
            md={1.6}
            xs={2}
            sx={{ position: "relative", height: "8vw" }}
          >
            <Image
              className={style.img}
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696045/ecell/image_7_curhvo.png"
              alt="money control logo"
              layout="fill"
              objectFit="contain"
            />
          </Grid>
        </Grid>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
