import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Card, Link } from "@mui/material";
import { CardActionArea } from "@mui/material";

import Image from "next/image";
import { useEffect } from "react";

import "swiper/css";
import "swiper/css/pagination";

function CardNg({ bgColor, slide, img }) {
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
        <div>
          <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              // style={"background-image:url(./casestudy.png)"}
              title="Woman holding a mug"
            ></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg
                    className="fill-current text-gray-500 w-3 h-3 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Members only
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Can coffee make you a better developer?
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src="/casestudy.png"
                  alt="case study"
                ></img>
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                  <p className="text-gray-600">Aug 18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiperSlide h-[17rem] w-[23rem] overflow-hidden"></SwiperSlide>
    </Swiper>
  );
}

export default Gallery;
