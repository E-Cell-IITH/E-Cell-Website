import React from "react";
import { Gentium_Plus } from "next/font/google";
import localFont from "next/font/local";
import { Button } from "@mui/material";

const gentium = Gentium_Plus({ subsets: ["latin"], weight: "700" });
const ananda = localFont({
  src: "../../public/fonts/ananda-neptouch-2.regular.ttf",
});

//TODO: Change most of the image into svg to improve performace idk if it will work

const AboutandTheme = () => {
  return (
    <div className="bg-[#042630] relative">
      <div
        className="absolute w-40 h-full bg-cover bg-contain"
        style={{
          backgroundImage: "url('/esummit-side1.jpeg')",
          aspectRatio: 1020 / 612,
        }}
      ></div>
      <div
        className="absolute bottom-0 bg-cover w-[10rem] "
        style={{
          backgroundImage: "url('/about-bg2.png')",
          aspectRatio: 496 / 430,
        }}
      ></div>
      <section className="flex flex-col h-full relative w-full py-7 px-[18rem]">
        <div className="bg-[url('/about-bg.png')] h-full aspect-[783/1800] absolute bg-cover right-0"></div>
        <h3
          className={`py-[2rem] tracking-widest text-[#FCBF5F] font-semibold text-[2.4rem] max-[300px]:text-[2.75rem] md:font-bold md:text-[4.75rem] lg:text-[5rem] 2xl:text-[6rem] ${ananda.className}`}
        >
          aBOUT US{" "}
        </h3>

        <div
          className={`text-[#FDE1BF] text-[1.5rem] tracking-wide ${gentium.className}`}
        >
          <p>
            We're the Entrepreneurship Cell at IIT Hyderabad, driven by passion,
            hard work, and a relentless pursuit of success. Our space is where
            ideas meet action—a hub where dreams become reality. We're
            enthusiasts who thrive on ideation, turning concepts into growing
            businesses.
          </p>

          <br />
          <p>
            Our aim is clear: to support entrepreneurship and innovation within
            and beyond our campus. We recognize the importance of new business
            ideas and guide students, providing market exposure and pathways for
            their startups. We're a platform that fosters collaboration between
            students and businesses, offering mentorship from idea conception to
            product completion.
          </p>
          <br />
          <p>
            Join us to <b>THINK</b> big, <b>BUILD</b> ambitiously, and{" "}
            <b>INSPIRE</b> change through entrepreneurship.
          </p>
        </div>
      </section>
      <div className="flex flex-row ">
        <section className="flex flex-col justify-center p-7 pl-[18rem] ">
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
              "Unlocking the secrets of innovation – stay tuned as the theme for
              E-Summit will soon be unveiled!”
            </p>
          </div>
          <div
            className={`text-[#FDE1BF] text-[1.5rem] tracking-wide ${gentium.className}`}
          ></div>
        </section>
        <img src="/theme.jpeg" className="w-[60%] pt-[2rem]" />
      </div>
    </div>
  );
};

const Competitions = () => {
  return (
    <section
      className="relative flex flex-row bg-[#042630]"
    >
      <div
        className="absolute w-[3rem] h-full bg-cover bg-contain ml-[1rem]"
        style={{
          backgroundImage: "url('/esummit-side2.png')",
          aspectRatio: 1020 / 612,
        }}
      ></div>
      <div
        className="absolute w-[3rem] h-full bg-cover right-[1rem] bg-contain ml-[1rem] rotate-[180deg]"
        style={{
          backgroundImage: "url('/esummit-side2.png')",
          aspectRatio: 1020 / 612,
        }}
      ></div>
      <div
        className="absolute w-[10rem] bg-cover z-[10]"
        style={{
          backgroundImage: "url('/about-bg3.png')",
          aspectRatio: 496 / 430,
        }}
      ></div>
      <div
        className="absolute w-[10rem] bg-cover z-[10] bottom-0"
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
      <div className="flex flex-col h-full py-7 pl-[18rem] ">
        <div className="bg-[url('/about-bg.png')] h-full aspect-[783/1800] absolute bg-cover right-0 z-[-1]"></div>
        <h3
          className={`py-[2rem] tracking-widest text-[#FCBF5F] font-semibold text-center text-[2.4rem] max-[300px]:text-[2.75rem] md:font-bold md:text-[4.75rem] lg:text-[5rem] 2xl:text-[6rem] ${ananda.className}`}
        >
          Competitions{" "}
        </h3>
        <div className="h-[20rem]"></div>
      </div>
    </section>
  );
};

const StartupfairandGallery = () => {
  return (
    <div className="bg-[#042630] relative">
      <div
        className="absolute w-[10rem] h-full bg-contain bottom-0"
        style={{
          backgroundImage: "url('/remaining.png')",
          aspectRatio: 1020 / 612,
        }}
      ></div>
      <div
        className="absolute w-[10rem] bg-cover z-[10]"
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
      <section className="flex flex-col p-7 px-[15rem] ">
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
            innovation. Whether it's tech, sustainability, healthcare, or any
            other niche, there's a track tailored precisely to your interests.
            This event offers startups an unparalleled opportunity to showcase
            pioneering products and cultivate essential connections within a
            dynamic community.
          </p>
        </div>
        <div className="flex justify-center m-7">
          <Button
          className={`bg-[#C39F3F] text-white font-bold border-[0.5rem] w-[fit-content] p-[0.5rem 1.5rem] rounded-[0.5rem] ${gentium.className}}`}
            onClick={() => {
              window.open("/startupfair", "_blank");
            }}
          >
            REGISTER NOW
          </Button>
        </div>
      </section>
      <section className="flex flex-col p-7 px-[18rem] ">
        <h3
          className={`py-[2rem] text-center tracking-widest text-[#FCBF5F] font-semibold text-[2.4rem] max-[300px]:text-[2.75rem] md:font-bold md:text-[4.75rem] lg:text-[5rem] 2xl:text-[6rem] ${ananda.className}`}
        >
          fetching fortunes{" "}
        </h3>
        <div
          className={`flex flex-row text-[#FDE1BF] text-[1.5rem] tracking-wide ${gentium.className} text-center`}
        >
          <p>
            E-cell IITH is excited to announce "Fetching Fortunes," an exciting
            startup pitch competition where aspiring entrepreneurs and
            innovative minds can present their startup ideas for a chance to
            secure investment and support to turn their dreams into reality.
            This event is designed to foster innovation, encourage
            entrepreneurship, and provide a platform for talented individuals to
            showcase their groundbreaking ideas.{" "}
          </p>
        </div>
        <div className="flex justify-center m-7">
          <Button
            style={{
              backgroundColor: "#C39F3F",
              color: "white",
              fontFamily: "Gentium Plus",
              fontWeight: 700,
              borderRadius: "0.5rem",
              width: "fit-content",
              padding: "0.5rem 1.5rem",
            }}
            onClick={() => {
              window.open("/startupfair", "_blank");
            }}
          >
            REGISTER NOW
          </Button>
        </div>
      </section>
      <section className="flex flex-col p-7 px-[18rem] ">
        <h3
          className={`py-[2rem] tracking-widest text-[#FCBF5F] font-semibold text-[2.4rem] max-[300px]:text-[2.75rem] md:font-bold md:text-[4.75rem] lg:text-[5rem] 2xl:text-[6rem] ${ananda.className}`}
        >
          GALLERY{" "}
        </h3>
      </section>
    </div>
  );
};

export { Competitions, StartupfairandGallery, AboutandTheme };
