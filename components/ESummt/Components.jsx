import React from "react";
import { Gentium_Plus } from "next/font/google";
import localFont from "next/font/local";
import { Button } from "@mui/material";

const gentium = Gentium_Plus({ subsets: ["latin"], weight: "700" });
const ananda = localFont({
  src: "../../public/fonts/ananda-neptouch-2.regular.ttf",
});

//TODO: Change most of the image into svg to improve performace idk if it will work
//TODO: if there are changes in reponsive design, change md, lg, 2xl in each className to the new responsive design, for now omitted side background images in mobile view
//TODO: Make text responsive

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
            We&apos;re the Entrepreneurship Cell at IIT Hyderabad, driven by passion,
            hard work, and a relentless pursuit of success. Our space is where
            ideas meet action—a hub where dreams become reality. We&apos;re
            enthusiasts who thrive on ideation, turning concepts into growing
            businesses.
          </p>

          <br />
          <p>
            Our aim is clear: to support entrepreneurship and innovation within
            and beyond our campus. We recognize the importance of new business
            ideas and guide students, providing market exposure and pathways for
            their startups. We&apos;re a platform that fosters collaboration between
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
            &quot;Unlocking the secrets of innovation – stay tuned as the theme for
              E-Summit will soon be unveiled!&quot;
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

const Competitions = () => {
  return (
    <section className="relative flex flex-row bg-[#042630]">
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
      <div className="flex flex-col h-full py-7 pl-[2rem] md:pl-[14rem] lg:pl-[18rem]">
        <div className="bg-[url('/about-bg.png')] h-full aspect-[783/1800] absolute bg-cover right-0 z-[-1]"></div>
        <h3
          className={`py-[2rem] tracking-widest text-[#FCBF5F] font-semibold text-center text-[2.4rem] max-[300px]:text-[2.75rem] md:font-bold md:text-[4.75rem] lg:text-[5rem] 2xl:text-[6rem] ${ananda.className}`}
        >
          Competitions{" "}
        </h3>
        <div className="h-[50rem]">
          <BorderCont height="20rem" width="60rem"/>
          <p color="white">Hello</p>
        </div>
      </div>
    </section>
  );
};

const BorderCont = ({ height = "15rem", width = "50rem", content }) => {
  return (
    <div className="relative">
      <div
        className={`absolute bg-cover w-[${width}]`}
        style={{
          backgroundImage: "url('/result.svg')",
          aspectRatio: 1117 / 47,
          width: width,
        }}
      ></div>
      <div
        className={`absolute bg-cover w-[${width}] mt-[${height}]`}
        style={{
          backgroundImage: "url('/result.svg')",
          aspectRatio: 1117 / 47,
          width: width,
          marginTop: height,
          rotate: '180deg'
        }}
      ></div>
      <div
        className={`absolute bg-cover h-[${height}] `}
        style={{
          backgroundImage: "url('/result1.svg')",
          aspectRatio: 70 / 574,
          height: height,
        }}
      ></div>
      <div
        className={`absolute bg-cover h-[${height}] rotate-[180deg] ml-[${width}]`}
        style={{
          backgroundImage: "url('/result1.svg')",
          aspectRatio: 70 / 574,
          height: height,
          marginLeft: width,
        }}
      ></div>
    </div>
  );
};

const BorderCont1 = ({ height = 200, width = 700, content }) => {
  return (
    <div className="relative">
      <svg
        width={width}
        height="56"
        style={{}}
        viewBox={`0 0 ${width} 56`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M563.292 52.222L491.28 17.7155L161.626 17.7155L104.017 49.2214L0 49.2214"
          stroke="#034646"
          strokeWidth="8"
        />
        <path
          d="M553.708 52.222L625.72 17.7155L955.374 17.7155L1012.98 49.2214L1117 49.2214"
          stroke="#034646"
          strokeWidth="8"
        />
        <path
          d="M1095.66 35.719L641.719 35.719L560.105 4.96313L481.693 35.719L21.1695 35.719"
          stroke="#B69439"
          strokeWidth="8"
        />
      </svg>
      <svg
        width="78"
        height={height}
        viewBox={`0 0 78 ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M75.4139 288.519L24.9785 323.03V481.014L71.0282 508.623V558.472"
          stroke="#034646"
          strokeWidth="8"
        />
        <path
          d="M75.4139 293.043L24.9785 258.531V100.548L71.0282 72.9387V23.0894"
          stroke="#034646"
          strokeWidth="8"
        />
        <path
          d="M51.2866 0.467896V251.57L6.33325 290.027L51.2866 326.975V578.077"
          stroke="#B69439"
          strokeWidth="8"
        />
        <path
          d="M75.4139 293.042L24.9785 259.109V103.773L71.0282 76.6271V27.6133"
          stroke="#034646"
          strokeWidth="8"
        />
        <path
          d="M51.2866 0.467896V251.57L6.33325 290.027L51.2866 326.975V578.077"
          stroke="#B69439"
          strokeWidth="8"
        />
      </svg>

      <svg
        width={width}
        height="57"
        viewBox={`0 0 ${width} 57`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M563.292 4.57184L491.28 39.0784L161.626 39.0784L104.017 7.57241L0 7.57241"
          stroke="#034646"
          strokeWidth="8"
        />
        <path
          d="M553.708 4.57184L625.72 39.0784L955.374 39.0784L1012.98 7.57241L1117 7.57241"
          stroke="#034646"
          strokeWidth="8"
        />
        <path
          d="M1095.66 21.0747L641.719 21.0747L560.105 51.8306L481.693 21.0747L21.1695 21.0747"
          stroke="#B69439"
          strokeWidth="8"
        />
      </svg>

      <svg
        width="78"
        height={height}
        viewBox={`0 0 78 ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.40109 287.021L52.8365 321.353V478.516L6.78678 505.981V555.572"
          stroke="#034646"
          strokeWidth="8"
        />
        <path
          d="M26.5284 0.466431V250.264L71.4818 288.521L26.5284 325.278V575.075"
          stroke="#B69439"
          strokeWidth="8"
        />
        <path
          d="M2.40109 291.522L52.8365 256.231V94.6778L6.78678 66.4452V15.4696"
          stroke="#034646"
          strokeWidth="8"
        />
        <path
          d="M26.5284 0.466431V250.264L71.4818 288.521L26.5284 325.278V575.075"
          stroke="#B69439"
          strokeWidth="8"
        />
      </svg>
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
            innovation. Whether it&apos;s tech, sustainability, healthcare, or any
            other niche, there&apos;s a track tailored precisely to your interests.
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
            E-cell IITH is excited to announce &quot;Fetching Fortunes,&quot; an exciting
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
            className={`bg-[#C39F3F] text-white font-bold border-[0.5rem] w-[fit-content] p-[0.5rem 1.5rem] rounded-[0.5rem] ${gentium.className}}`}
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
          GALLERY{" "}
        </h3>
      </section>
    </div>
  );
};

export { Competitions, StartupfairandGallery, AboutandTheme };
