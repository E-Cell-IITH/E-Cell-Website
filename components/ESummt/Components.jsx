import React from "react";
import { Gentium_Plus } from "next/font/google";
import localFont from "next/font/local";
import { Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import BorderContainer from "./BorderContainer";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const gentium = Gentium_Plus({ subsets: ["latin"], weight: "700" });
const gentiumnormal = Gentium_Plus({ subsets: ["latin"], weight: "400" });

const ananda = localFont({
  src: "../../public/fonts/ananda-neptouch-2.regular.ttf",
});

//TODO: Change most of the image into svg to improve performace idk if it will work
//TODO: if there are changes in reponsive design, change md, lg, 2xl in each className to the new responsive design, for now omitted side background images in mobile view
//TODO: Make text responsive
<div className="navigation">…</div>;
const AboutandTheme = () => {
  return (
    <div className="bg-[#042630] relative">
      <div
        className="absolute bg-cover bg-contain h-full w-[0] md:w-[10rem] lg:w-[10rem] 2-xl:w-[15rem]"
        style={{
          backgroundImage: "url('/esummit-side1.jpeg')",
          aspectRatio: 1020 / 612,
        }}
      ></div>
      <div
        className="absolute bottom-0 bg-cover w-[0] md:w-[10rem] lg:w-[10rem]"
        style={{
          backgroundImage: "url('/about-bg2.png')",
          aspectRatio: 496 / 430,
        }}
      ></div>
      <section className="flex flex-col h-full relative w-full py-7 px-[2rem] md:px-[14rem] lg:px-[18rem]">
        <div className="bg-[url('/about-bg.png')] h-full aspect-[783/1800] absolute bg-cover right-0"></div>
        <h3
          className={`py-[2rem] tracking-widest text-[#FCBF5F] font-semibold text-[3rem] max-[300px]:text-[3rem] md:font-bold md:text-[4.75rem] lg:text-[5rem] 2xl:text-[6rem] ${ananda.className}`}
        >
          aBOUT US{" "}
        </h3>

        <div
          className={`text-[#FDE1BF] text-[1.5rem] tracking-wide ${gentium.className}`}
        >
          <p>
            We&apos;re the Entrepreneurship Cell at IIT Hyderabad, driven by
            passion, hard work, and a relentless pursuit of success. Our space
            is where ideas meet action—a hub where dreams become reality.
            We&apos;re enthusiasts who thrive on ideation, turning concepts into
            growing businesses.
          </p>

          <br />
          <p>
            Our aim is clear: to support entrepreneurship and innovation within
            and beyond our campus. We recognize the importance of new business
            ideas and guide students, providing market exposure and pathways for
            their startups. We&apos;re a platform that fosters collaboration
            between students and businesses, offering mentorship from idea
            conception to product completion.
          </p>
          <br />
          <p>
            Join us to <b>THINK</b> big, <b>BUILD</b> ambitiously, and{" "}
            <b>INSPIRE</b> change through entrepreneurship.
          </p>
        </div>
      </section>
      <section className="flex flex-col-reverse md:flex-row lg:flex-row">
        <div className="flex flex-col justify-center p-7 pl-[2rem] md:pl-[14rem] lg:pl-[18rem]">
          <div className="bg-[url('/about-bg.png')] aspect-[783/1800] absolute bg-cover right-0 z-[-1]"></div>
          <h3
            className={`py-[2rem] tracking-widest text-[#FCBF5F] font-semibold text-[2.4rem] max-[300px]:text-[2.75rem] md:font-bold md:text-[4.75rem] lg:text-[5rem] 2xl:text-[6rem] ${ananda.className}`}
          >
            Theme{" "}
          </h3>
          <div
            className={`flex flex-row text-[#FDE1BF] text-[1.5rem] tracking-wide ${gentium.className}`}
          >
            <p>
              &quot;Unlocking the secrets of innovation - stay tuned as the
              theme for E-Summit will soon be unveiled!&quot;
            </p>
          </div>
        </div>
        <img
          src="/theme.jpeg"
          className="w-[100%] md:w-[60%] lg:w-[60%] pt-[2rem]"
        />
      </section>
    </div>
  );
};

const StartupfairandGallery = () => {
  return (
    <div className="bg-[#042630] relative">
      <div
        className="absolute h-full bg-contain bottom-0 w-[0] md:w-[10rem] lg:w-[10rem]"
        style={{
          backgroundImage: "url('/remaining.png')",
          aspectRatio: 1020 / 612,
        }}
      ></div>
      <div
        className="absolute bg-cover z-[10] w-[0] md:w-[10rem] lg:w-[10rem]"
        style={{
          backgroundImage: "url('/about-bg3.png')",
          aspectRatio: 496 / 430,
        }}
      ></div>{" "}
      <div
        className="absolute h-[80%] right-0 bg-cover z-[10]"
        style={{
          backgroundImage: "url('/remaining-bg.png')",
          aspectRatio: 750 / 3307,
        }}
      ></div>
      <div className="bg-[url('/about-bg.png')] width-[10rem] aspect-[783/1800] absolute bg-cover right-0"></div>
      <section className="flex flex-col p-7 px-[2rem] md:px-[15rem] lg:px-[15rem]">
        <h3
          className={`py-[2rem] tracking-widest text-center text-[#FCBF5F] font-semibold text-[2.4rem] max-[300px]:text-[2.75rem] md:font-bold md:text-[4.75rem] lg:text-[5rem] 2xl:text-[6rem] ${ananda.className}`}
        >
          Startup fair
        </h3>
        <div
          className={`flex flex-row text-[#FDE1BF] text-[1.5rem] tracking-wide ${gentium.className} text-center`}
        >
          <p>
            StartupFair is a startup exhibition event, welcoming all the
            top-notch Startups, Investors, Speakers, Organizations, and
            attendees from all over India. What sets it apart is the inclusion
            of 14 specialized tracks, each dedicated to a unique sphere of
            innovation. Whether it&apos;s tech, sustainability, healthcare, or
            any other niche, there&apos;s a track tailored precisely to your
            interests. This event offers startups an unparalleled opportunity to
            showcase pioneering products and cultivate essential connections
            within a dynamic community.
          </p>
        </div>
        <div className="flex justify-center m-7">
          <Button
            className={`bg-[#C39F3F] text-[1.2rem] text-white font-bold border-[0.5rem] w-[fit-content] px-[1rem] py-[0.5rem] rounded-[0.5rem] ${gentium.className}}`}
            onClick={() => {
              window.open("/startupfair", "_blank");
            }}
          >
            REGISTER NOW
          </Button>
        </div>
      </section>
      <section className="flex flex-col p-7 px-[2rem] md:px-[18rem] lg:px-[18rem]">
        <h3
          className={`py-[2rem] text-center tracking-widest text-[#FCBF5F] font-semibold text-[2.4rem] max-[300px]:text-[2.75rem] md:font-bold md:text-[4.75rem] lg:text-[5rem] 2xl:text-[6rem] ${ananda.className}`}
        >
          fetching fortunes{" "}
        </h3>
        <div
          className={`flex flex-row text-[#FDE1BF] text-[1.5rem] tracking-wide ${gentium.className} text-center`}
        >
          <p>
            E-cell IITH is excited to announce &quot;Fetching Fortunes,&quot; an
            exciting startup pitch competition where aspiring entrepreneurs and
            innovative minds can present their startup ideas for a chance to
            secure investment and support to turn their dreams into reality.
            This event is designed to foster innovation, encourage
            entrepreneurship, and provide a platform for talented individuals to
            showcase their groundbreaking ideas.{" "}
          </p>
        </div>
        <div className="flex justify-center m-7">
          <Button
            className={`bg-[#C39F3F] text-[1.2rem] text-white font-bold border-[0.5rem] w-[fit-content] px-[1rem] py-[0.5rem] rounded-[0.5rem] ${gentiumnormal.className}}`}
            onClick={() => {
              window.open("/startupfair", "_blank");
            }}
          >
            REGISTER NOW
          </Button>
        </div>
      </section>
      <section className="flex flex-col p-7 px-[2rem] md:px-[18rem] lg:px-[18rem]">
        <h3
          className={`py-[2rem] tracking-widest text-[#FCBF5F] text-center font-semibold text-[2.4rem] max-[300px]:text-[2.75rem] md:font-bold md:text-[4.75rem] lg:text-[5rem] 2xl:text-[6rem] ${ananda.className}`}
        >
          GALLERY
        </h3>
        <div className="flex-1 h-[50rem]">
          <center>
            <BorderContainer
              heightcss="h-[30rem]"
              widthcss="w-[45rem]"
              marginleftcss="ml-[45rem]"
              margintopcss="mt-[30rem]"
            />
          </center>
        </div>
      </section>
    </div>
  );
};

export { StartupfairandGallery, AboutandTheme };
