import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import Image from "next/image";
import { useEffect } from "react";

import "swiper/css";
import "swiper/css/pagination";

const img = 
  "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg";
;
const img2 =
"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg";
const img3 = img2;
const img4 = img3
function Card({ bgColor, slide, img }) {
  return (
    <div
      className={`relative font-semibold ${bgColor} rounded-xl overflow-hidden h-full w-full flex justify-center items-center`}
    >
      <Image className=" w-full h-full" layout="fill" objectFit="cover" src={img} alt="" />
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
        <Card img={img} bgColor="bg-slate-300" slide="SLIDE 1" />
      </SwiperSlide>
      <SwiperSlide className="swiperSlide h-[17rem] w-[23rem] overflow-hidden">
        <Card img={img2} bgColor="bg-slate-400" slide="SLIDE 2" />
      </SwiperSlide>
      <SwiperSlide className="swiperSlide h-[17rem] w-[23rem] overflow-hidden">
        <Card img={img3} bgColor="bg-slate-500" slide="SLIDE 3" />
      </SwiperSlide>
      <SwiperSlide className="swiperSlide h-[17rem] w-[23rem] overflow-hidden">
        <Card img={img4} bgColor="bg-slate-600" slide="SLIDE 4" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Gallery;
