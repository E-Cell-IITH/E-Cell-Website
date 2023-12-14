import React from "react";
import { Gentium_Plus } from "next/font/google";
import localFont from "next/font/local";

const gentium = Gentium_Plus({ subsets: ["latin"], weight: "700" });
const ananda = localFont({
  src: "../../public/fonts/ananda-neptouch-2.regular.ttf",
});

const Theme = () => {
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
          <p>
            Our aim is clear: to support entrepreneurship and innovation within
            and beyond our campus. We recognize the importance of new business
            ideas and guide students, providing market exposure and pathways for
            their startups. We're a platform that fosters collaboration between
            students and businesses, offering mentorship from idea conception to
            product completion.
          </p>
          <p>
            Join us to <b>THINK</b> big, <b>BUILD</b> ambitiously, and{" "}
            <b>INSPIRE</b> change through entrepreneurship.
          </p>
        </div>
        
      </section>
    </div>
  );
};

export default About;
