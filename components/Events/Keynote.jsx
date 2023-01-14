import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import Image from "next/image";
import style from "../../styles/fourth.module.css";

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

  function Card({name, imgUrl}){
    return <div className="p-2 flex flex-col items-center">
        <div className="h-[13.75rem] w-[8rem] relative bg-white rounded-xl overflow-hidden">
            <Image src={imgUrl} layout="fill" objectFit="cover" alt={name}/>
        </div>
        <div className="mt-4">
            <h3 className="text-white">{name}</h3>
        </div>
    </div>
  }

export default function Keynote(){
    return <div>
        <h2 className="text-center font-medium text-5xl text-blue">KEYNOTE SPEAKERS</h2>
        <Box
        sx={{
          mt: { xs: "4rem", sm: "3rem", lg: "4rem" },
          pb: "5rem",
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
            width: { xs: `500%`, sm: "400%", md: "300%", lg: "400%" },
          }}
        >
          
          {sponsors.map((sponsor) => (
            <Card key={sponsor} name={sponsor.name} imgUrl={sponsor.imgUrl}/>
          ))}
          {sponsors.map((sponsor) => (
            <Card key={sponsor} name={sponsor.name} imgUrl={sponsor.imgUrl}/>
          ))}
        </Grid>
      </Box>

    </div>
}