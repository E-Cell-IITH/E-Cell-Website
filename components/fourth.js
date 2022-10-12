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
          }}
        >
          <Grid item md={1.6} sx={{ position: "relative", height: "8vw" }}>
            <Image
              className={style.img}
              src="/static/image 5.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </Grid>
          <Grid item md={1.6} sx={{ position: "relative", height: "8vw" }}>
            <Image
              className={style.img}
              src="/static/image 1.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </Grid>
          <Grid item md={1.6} sx={{ position: "relative", height: "8vw" }}>
            <Image
              className={style.img}
              src="/static/image 4.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </Grid>
          <Grid item md={1.6} sx={{ position: "relative", height: "8vw" }}>
            <Image
              className={style.img}
              src="/static/image 3.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </Grid>
          <Grid item md={1.6} sx={{ position: "relative", height: "8vw" }}>
            <Image
              className={style.img}
              src="/static/image 6.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </Grid>
          <Grid item md={1.6} sx={{ position: "relative", height: "8vw" }}>
            <Image
              className={style.img}
              src="/static/image 7.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </Grid>
          <Grid item md={1.6} sx={{ position: "relative", height: "8vw" }}>
            <Image
              className={style.img}
              src="/static/image 5.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </Grid>
          <Grid item md={1.6} sx={{ position: "relative", height: "8vw" }}>
            <Image
              className={style.img}
              src="/static/image 1.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </Grid>
          <Grid item md={1.6} sx={{ position: "relative", height: "8vw" }}>
            <Image
              className={style.img}
              src="/static/image 4.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </Grid>
          <Grid item md={1.6} sx={{ position: "relative", height: "8vw" }}>
            <Image
              className={style.img}
              src="/static/image 3.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </Grid>
          <Grid item md={1.6} sx={{ position: "relative", height: "8vw" }}>
            <Image
              className={style.img}
              src="/static/image 6.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </Grid>
          <Grid item md={1.6} sx={{ position: "relative", height: "8vw" }}>
            <Image
              className={style.img}
              src="/static/image 7.png"
              alt=""
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
