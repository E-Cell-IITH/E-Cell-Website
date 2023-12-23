import { Gentium_Plus } from "next/font/google";
import localFont from "next/font/local";
import React from "react";
import Carousel from "react-material-ui-carousel";
import BorderContainer from "./BorderContainer";

const gentiumnormal = Gentium_Plus({ subsets: ["latin"], weight: "400" });

const ananda = localFont({
  src: "../../public/fonts/ananda-neptouch-2.regular.ttf",
});

const competitions = [
  {
    image: "/esummit/esummit-23.jpeg",
    title: "Venture Captital Challenge",
    content: `Join our immersive competition where top talents tackle
    real-life scenarios faced by VCs. From rigorous screening
    to problem-solving challenges mirroring industry dilemmas,
    participants vie for solutions vetted by an expert panel.
    Sharpen your skills and navigate the world of venture
    capital in this thrilling, hands-on experience.`,
  },
  {
    image: "/esummit/esummit-23.jpeg",
    title: "Venture Captital Challenge",
    content: `Join our immersive competition where top talents tackle
    real-life scenarios faced by VCs. From rigorous screening
    to problem-solving challenges mirroring industry dilemmas,
    participants vie for solutions vetted by an expert panel.
    Sharpen your skills and navigate the world of venture
    capital in this thrilling, hands-on experience.`,
  },
];

const Competitions = () => {
  return (
    <section className="relative w-full flex flex-row bg-[#042630]">
      <div
        className="absolute bg-cover bg-contain ml-[1rem] h-full w-[0] md:w-[3rem] lg:w-[3rem]"
        style={{
          backgroundImage: "url('/esummit-side2.png')",
          aspectRatio: 1020 / 612,
        }}
      ></div>
      <div
        className="absolute bg-cover right-[1rem] bg-contain ml-[1rem] rotate-[180deg] h-full w-[0] md:w-[3rem] lg:w-[3rem]"
        style={{
          backgroundImage: "url('/esummit-side2.png')",
          aspectRatio: 1020 / 612,
        }}
      ></div>
      <div
        className="absolute bg-cover z-[10] w-[0] md:w-[10rem] lg:w-[10rem]"
        style={{
          backgroundImage: "url('/about-bg3.png')",
          aspectRatio: 496 / 430,
        }}
      ></div>
      <div
        className="absolute bg-cover z-[10] bottom-0  w-[0] md:w-[10rem] lg:w-[10rem]"
        style={{
          backgroundImage: "url('/about-bg2.png')",
          aspectRatio: 496 / 430,
        }}
      ></div>
      <div
        className="absolute w-full h-[5rem] bg-cover bg-contain bottom-0"
        style={{
          backgroundImage: "url('/competition-comp.png')",
          aspectRatio: 198 / 200,
        }}
      ></div>
      <div className="flex flex-col w-full py-7 items-center">
        <h3
          className={`py-[2rem] tracking-widest text-[#FCBF5F] font-semibold text-center text-[2.4rem] max-[300px]:text-[2.75rem] md:font-bold md:text-[4.75rem] lg:text-[5rem] 2xl:text-[6rem] ${ananda.className}`}
        >
          Competitions{" "}
        </h3>
        <div className="mb-[5%] w-[80%] sm:w-[95%]">
          <Carousel animation="slide" duration={1000} autoPlay={false}>
            {competitions.map((competition, index) => {
              return (
                <center key={index}>
                  <BorderContainer
                    heightcss="h-[24rem] sm:h-[30rem] lg:h-[36rem]"
                    widthcss="w-[36rem] sm:w-[45rem] lg:w-[54rem]"
                    marginleftcss="ml-[36rem] sm:ml-[30rem] lg:ml-[54rem]"
                    margintopcss="mt-[24rem] sm:mt-[45rem] lg:mt-[36rem]"
                  >
                    <div className="flex flex-row gap-[2rem] align-center justify-center my-[auto] mx-[10%] relative w-full">
                      <div className="flex flex-[2] items-center">
                        <img src={competition.image} />
                      </div>
                      <div className="flex gap-[2rem] flex-col flex-[3]">
                        <h4
                          className={`text-[3rem] leading-[2.5rem] sm:text-[2.4rem] sm:leading-[1.8rem] lg:text-[2.5rem] lg:leading-[2rem] color-[white] text-[#FFE4C3] ${ananda.className}`}
                        >
                          {competition.title}
                        </h4>
                        <p
                          className={`tracking-wide text-[1.7rem] leading-[1.8rem] sm:text-[1.4rem] sm:leading-[1.2rem] lg:text-[1.5rem] lg:leading-[1.4rem] color-[white] text-[#FDE1BF] ${gentiumnormal.className}`}
                        >
                          {competition.content}
                        </p>
                      </div>
                    </div>
                  </BorderContainer>
                </center>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Competitions;
