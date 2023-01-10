import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import { useEffect } from "react";

import "swiper/css";
import "swiper/css/pagination";

const img = [
  "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
];
const img2 =
  "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg";
const img3 =
  "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320";
const img4 =
  "https://media.istockphoto.com/id/505239248/photo/humayun-tomb-new-delhi-india.jpg?s=612x612&w=0&k=20&c=UQTU6YOnVsSklzHi34cOhNW5AhsACDxKLiD9--T-3Kg=";

function Card({ bgColor, slide, img }) {
  return (
    <div
      className={`relative font-semibold ${bgColor} rounded-xl overflow-hidden h-full w-full flex justify-center items-center`}
    >
      <img className="object-cover w-full h-full" src={img} alt="" />
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
        <Card img={img[0]} bgColor="bg-slate-300" slide="SLIDE 1" />
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
