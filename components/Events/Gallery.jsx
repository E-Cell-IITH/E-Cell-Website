import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Image from "next/image";
import { useEffect } from "react";

import "swiper/css";
import "swiper/css/pagination";

function Card({ bgColor, slide, img }) {
  return (
    <div
      className={`relative font-semibold ${bgColor} rounded-xl overflow-hidden h-full w-full flex justify-center items-center`}
    >
      <Image
        className=" w-full h-full"
        layout="fill"
        objectFit="cover"
        src={img}
        alt=""
      />
    </div>
  );
}

function Gallery() {
  return (
    <Swiper
      spaceBetween={50}
      effect={"coverflow"}
      slidesPerView={1}
      centeredSlides={true}
      grabCursor={true}
      loop={true}
      coverflowEffect={{
        slideShadows: false,
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
      }}
      pagination={{ clickable: true }}
      breakpoints={{
        600: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      modules={[EffectCoverflow, Pagination]}
      className="py-[3rem]"
    >
      <SwiperSlide className="swiperSlide h-[17rem] w-[23rem] overflow-hidden">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="case study"
            height="140"
            image="/casestudy.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="white">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide className="swiperSlide h-[17rem] w-[23rem] overflow-hidden"></SwiperSlide>
    </Swiper>
  );
}

export default Gallery;
