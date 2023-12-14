import React from "react";
import { Gentium_Plus } from "next/font/google";
import localFont from "next/font/local";
import { Button } from "@mui/material";

const gentium = Gentium_Plus({ subsets: ["latin"], weight: "700" });
const ananda = localFont({
  src: "../../public/fonts/ananda-neptouch-2.regular.ttf",
});

//TODO: Combine About and Theme into one component as left background will break
//TODO: Change most of the image into svg to improve performace
//TODO: Convert styles into tailwind CSS

const About = () => {
  return (
    <div
      style={{
        position: "relative",
        // display: "flex", flexDirection:'column', position: 'relative'
      }}
    >
      <div
        style={{
          backgroundImage: "url('/esummit-side1.jpeg')",
          backgroundRepeat: "repeat-y",
          aspectRatio: 1020 / 612,
          width: "10rem",
          backgroundSize: "contain",
          position: "absolute",
          minHeight: "100%",
          //   flex: 1,
        }}
      ></div>{" "}
      <section className="flex flex-col w-full py-7 px-[18rem] bg-[#042630]">
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
    </div>
  );
};

const Theme = () => {
  return (
    <div
      className="bg-[#042630]"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        position: "relative",
      }}
    >
      <div>
        <div
          style={{
            backgroundImage: "url('/esummit-side1.jpeg')",
            backgroundRepeat: "repeat-y",
            aspectRatio: 1020 / 612,
            width: "10rem",
            backgroundSize: "contain",
            position: "absolute",
            minHeight: "100%",
            //   flex: 1,
          }}
        ></div>
        <div
          style={{
            backgroundImage: "url('/about-bg2.png')",
            backgroundRepeat: "repeat-y",
            width: "10rem",
            aspectRatio: 496 / 430,
            backgroundSize: "cover",
            zIndex: 10,
            position: "absolute",
            bottom: 0,
            left: 0,
          }}
        ></div>{" "}
        <section className="flex flex-col h-full p-7 pl-[18rem] ">
          <div className="bg-[url('/about-bg.png')] h-full aspect-[783/1800] absolute bg-cover right-0 z-[-1]"></div>
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
      </div>
      <img
        src="/theme.jpeg"
        className="w-[60%] pt-[2rem]"
        // style={{ boxShadow: "5rem 0px 53.9px 0px rgba(0, 0, 0, 0.35) inset" }}
      />
    </div>
  );
};

const Competitions = () => {
  return (
    <section
      className="bg-[#042630]"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundImage: "url('/esummit-side2.png')",
          backgroundRepeat: "repeat-y",
          aspectRatio: 1020 / 612,
          marginLeft: "1rem",
          width: "3rem",
          backgroundSize: "contain",
          position: "absolute",
          minHeight: "100%",
        }}
      ></div>
      <div
        style={{
          backgroundImage: "url('/esummit-side2.png')",
          backgroundRepeat: "repeat-y",
          aspectRatio: 1020 / 612,
          marginRight: "1rem",
          rotate: "180deg",
          width: "3rem",
          backgroundSize: "contain",
          position: "absolute",
          right: 0,
          minHeight: "110%",
        }}
      ></div>
      <div
        style={{
          backgroundImage: "url('/about-bg2.png')",
          backgroundRepeat: "repeat-y",
          width: "10rem",
          aspectRatio: 496 / 430,
          backgroundSize: "cover",
          zIndex: 10,
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      ></div>{" "}
      <div
        style={{
          backgroundImage: "url('/about-bg3.png')",
          backgroundRepeat: "repeat-y",
          width: "10rem",
          aspectRatio: 496 / 430,
          backgroundSize: "cover",
          zIndex: 10,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></div>
      <div
        style={{
          backgroundImage: "url('/competition-comp.png')",
          backgroundRepeat: "repeat-x",
          height: "5rem",
          width: "100%",
          aspectRatio: 198 / 200,
          backgroundSize: "contain",
          zIndex: 1,
          position: "absolute",
          bottom: 0,
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

//FIXME: change my name
const Remaining = () => {
  return (
    <div className="bg-[#042630] relative">
      <div
        style={{
          backgroundImage: "url('/remaining.png')",
          backgroundRepeat: "repeat-y",
          aspectRatio: 1020 / 612,
          width: "10rem",
          backgroundSize: "contain",
          position: "absolute",
          minHeight: "100%",
          //   flex: 1,
        }}
      ></div>
      <div
        style={{
          backgroundImage: "url('/about-bg3.png')",
          backgroundRepeat: "repeat-y",
          width: "10rem",
          aspectRatio: 496 / 430,
          backgroundSize: "cover",
          zIndex: 10,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></div>
      <div className="bg-[url('/about-bg.png')] width-[10rem] aspect-[783/1800] absolute bg-cover right-0"></div>

      <section className="flex flex-col p-7 px-[18rem] ">
        <h3
          className={`py-[2rem] tracking-widest text-[#FCBF5F] font-semibold text-[2.4rem] max-[300px]:text-[2.75rem] md:font-bold md:text-[4.75rem] lg:text-[5rem] 2xl:text-[6rem] ${ananda.className}`}
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
              console.log("Hello");
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
              console.log("Hello");
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

export { About, Theme, Competitions, Remaining };
