import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    name: "Case Study Challenge",
    content:
      "Case studies are one of the best teaching tools for enhancing business acumen and testing practical knowledge. It asks for a quick and detailed analysis of a market situation or any organization, and the participants are required to use their problem-solving skills combined with structured thinking to rectify the complications in it.",
    contact: "Yash Ramteke",
    number: "+91 96963 33035",
    email: "bt21btech11006@iith.ac.in",
    link: "https://unstop.com/p/case-study-challenge-e-summit-23-e-cell-iit-hyderabad-indian-institute-of-technology-iit-hyderabad-585298",
    imgUrl:
      "https://res.cloudinary.com/dboy04n6m/image/upload/v1673379890/cs_qn73iw.jpg",
  },
  {
    name: "Tradepoint",
    content:
      "The contest by the name 'TradePoint' would be a 5-day live event where you'd be given some virtual money to create your own portfolio. This is a golden chance for all the finance pundits to showcase their trading skills. The portfolio with the highest profit would be declared the winner.",
    contact: "Asit Desai",
    number: "+91 94054 67723",
    email: "ch21btech11012@iith.ac.in",
    link: "https://unstop.com/competition/tradepoint-virtual-stock-trading-competition-indian-institute-of-technology-iit-hyderabad-572831",
    imgUrl:
      "https://res.cloudinary.com/dboy04n6m/image/upload/v1673381486/tp_zj7nwz.jpg",
  },
  {
    name: "E-PIC",
    content:
      "Is persuasion your forte? Do you have the knack to convert a 90-second elevator ride into a profitable investment? Look no further! E-Cell IIT Hyderabad presents you with the “Elevator Pitch”, where you can pitch your business ideas briefly yet impress potential investors.",
    contact: "Sneha Chilukuri",
    number: "+91 79936 59092",
    email: "me21mtech14002@iith.ac.in",
    link: "None",
    imgUrl:
      "https://res.cloudinary.com/dboy04n6m/image/upload/v1673381792/epic_yux10a.png",
  },
  {
    name: "Big-Quiz",
    content:
      "The objective of this event is to quiz participants on various trends and current affairs in the Business World, further, helping develop an interest in the same.Well, here's your chance! E-Cell IIT Hyderabad brings you 'Biz-Quiz'. Participants have to showcase their knowledge and understanding of business concepts and win exciting prizes.",
    contact: "Yash Vardhan Singh Gahlot",
    number: "+91 83059 24722",
    email: "ch21btech11036@iith.ac.in",
    link: "https://unstop.com/o/PnycSDH?utm_campaign=site-emails&utm_medium=d2c-automated&utm_source=woah-public-mode-activated-for-biz-quiz ",
    imgUrl:
      "https://res.cloudinary.com/dboy04n6m/image/upload/v1673381950/bq_op9y9k.jpg",
  },
  {
    name: "Investire",
    content:
      "When you watch Shark Tank, you see Entrepreneurs pitching their innovative ideas and individual business plans, but have you ever looked at the other side? The Investors, thinking, “Darn it! I could have known better than that?” Well, here's your chance! E-Cell IIT Hyderabad brings you 'Investire'. Participants have to showcase their Investment strategies to invest in one/some of the ideas presented to them.",
    contact: "Pradeep Rajesh Mundlik",
    number: "+91 70401 46995",
    email: "ai21btech11022@iith.ac.in",
    link: "https://unstop.com/p/investire-e-summit-23-e-cell-iit-hyderabad-indian-institute-of-technology-iit-hyderabad-585289",
    imgUrl:
      "https://res.cloudinary.com/dboy04n6m/image/upload/v1673382014/i_uqx457.png",
  },
  {
    name: "Pitch Showdown",
    content:
      "In this competition, participants will pitch on startup/business ideas that we give them and debate other teams ideas with their creativity and spontaneity being the criteria for evaluation.Well, here's your chance! E-Cell IIT Hyderabad brings you 'Pitch Showdown'. Participants have to showcase their startup ideas in order to get expert advice from the judges and win exciting prizes.",
    contact: "Amulya Mallavarapu",
    number: "+91 94056 20011",
    email: "bd21bdes11003@iith.ac.in",
    link: "https://unstop.com/pitch-showdown-competition-e-summit-23-e-cell-iit-hyderabad-indian-institute-of-technology-iit-hyderabad-585437",
    imgUrl:
      "https://res.cloudinary.com/dboy04n6m/image/upload/v1673382114/ps_htew5j.jpg",
  },
  {
    name: "Film Rush",
    content:
      "With the presence of a plethora of competitors in any sector you choose, every company embraces design thinking and creativity to prosper. E-Cell IIT Hyderabad brings to you FILM RUSH, a 2-week sprint to activate your artistic muscles towards advertising or shooting a movie based on actual startup statements",
    contact: "Subham Mohanty",
    number: "+91 90900 72712",
    email: "ms21btech11028@iith.ac.in",
    link: "https://unstop.com/competition/film-rush-e-summit-23-e-cell-iit-hyderabad-indian-institute-of-technology-iit-hyderabad-585235",
    imgUrl:
      "https://res.cloudinary.com/dboy04n6m/image/upload/v1673382449/fr_kfwpmu.jpg",
  },
  {
    name: "Beyond Horizon",
    content:
      "Beyond Horizon is the competition for all of the solutionists out there who want to test their tact in real life scenarios .The competition checks how you pickup the nuanced effect of complex political scenarios from the given data.",
    contact: "Tapishi Kaur",
    number: "+91 86305 45437",
    email: "ma20btech11017@iith.ac.in",
    link: "https://unstop.com/competition/beyond-horizon-e-summit-e-cell-iit-hyderabad-indian-institute-of-technology-iit-hyderabad-585069",
    imgUrl:
      "https://res.cloudinary.com/dboy04n6m/image/upload/v1673382371/bh_bdvpwc.jpg",
  },
];

let slides = [];

data.forEach((item, index) => {
  slides.push(
    <SwiperSlide
      key={index}
      className="w-[50rem] flex items-center justify-center"
    >
      <div className="max-w-sm flex-col lg:flex-row lg:min-w-[50rem] lg:max-w-[60rem] lg:flex">
        <div className="h-48 lg:h-auto lg:min-w-[18rem] rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden relative bg-black">
          <Image
            objectFit="contain"
            layout="fill"
            src={item.imgUrl}
            alt={item.name}
            style={{ height: "100%" }}
          />
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-0">
              {item.name}
            </div>
            <p className="text-gray-700 text-base">{item.content}</p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p style={{ fontWeight: "700" }}>
                Contact: <br />
              </p>
              <p className="text-gray-900 leading-none">{item.contact}</p>
              <p className="text-gray-600">{item.number}</p>
              <p className="text-gray-600">{item.email}</p>
              <br />
            </div>
          </div>
          <div
            className="flex items-center text-md lg:text-lg"
            style={{
              textDecoration: "underline",
              fontWeight: "500",
              color: "#0000EE",
            }}
          >
            <a href={item.link}>Registration Link</a>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
});

function Gallery() {
  return (
    <Swiper
      spaceBetween={70}
      effect={"coverflow"}
      slidesPerView={"auto"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      height={"auto"}
      breakpoints={{
        600: {
          slidesPerView: "2",
          centeredSlides: true,
        },
      }}
      coverflowEffect={{
        slideShadows: false,
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 1,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      className="py-[3rem]"
    >
      {slides}
    </Swiper>
  );
}

export default Gallery;
