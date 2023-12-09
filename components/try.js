import Grid from "@mui/material/Grid";
import style from '../styles/sponsor.module.css'
import Image from "next/image";

export default function Sponsor() {
  return (
    <div>
      <div className={style.heading}>
        SPONSORS
      </div>
      <div> Event Partner </div>
        <Grid
          container
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          rowSpacing={2}
          gap= {5}
        >
            <Grid item 
                xs={7}
                sm={9}
                md={3}
                sx={{
                spacing:2,
                border:"0.1vw solid grey",
                borderRadius:2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                }}
            >
              <Image 
              className={style.img}
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696043/ecell/2_nvqfjz.png"
              alt="Ecell IITH Think logo"
              priority="true"
              height={100}
              width={100}
              />
              <div className={style.card}>
                <div className={style.content}>
                  Successful Entrepreneurs are the ones who are great at thinking
                  out solutions. Through various hackathons and workshop events,
                  we promote the culture of thinking to prepare students for
                  future entrepreneurial challenges.
                </div>
              </div>   
            </Grid>
        </Grid>
    </div>
  )
}
