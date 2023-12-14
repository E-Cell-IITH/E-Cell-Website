import React from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { Gentium_Plus } from "next/font/google";

const ananda = localFont({
  src: "../public/fonts/ananda-neptouch-2.regular.ttf",
});

const gentium = Gentium_Plus({ subsets: ["latin"], weight: "700" });

const First = () => {
  return (
    <div>
      <section className="flex flex-col w-full h-[100vh] py-5 px-5" >
        <div className="absolute inset-0">
          <img draggable={false} src="/esummit-bg.jpeg" className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-between">
          {/* logo */}
          <div>
            <div className=" h-[3rem] w-[6.5rem] relative">
              <Image
                src="/ecellLogo.png"
                style={{ filter: "brightness(0%)" }}
                layout="fill"
                objectFit="contain"
                alt="E-cell IIT Hyderabad Logo"
              />
            </div>
          </div>
          {/* menu icon */}
          <div className=""></div>
        </div>
        <div className="flex-grow flex justify-center items-center flex-col">
          <img src="/esummitLogo.png" className="relative max-[300px]:h-[5rem] h-[9rem] lg:h-[11rem]" />
          <div className="text-center relative">
            <h2 className="text-black font-bold text-[2rem] max-[300px]:text-[1.5rem] lg:text-[3rem] 2xl:text-[3.25rem]">
              <div className={gentium.className}>E-Cell, IIT Hyderabad’s</div>
            </h2>{" "}
            <div>
              <h2 className="text-black text-[5rem] leading-none max-[300px]:text-[3rem] lg:text-[7.25rem] 2xl:text-[10rem]">
                <div className={ananda.className}>E-SUMMIT 2024</div>
              </h2>
            </div>
            <div>
              <h3
                className={`text-[#FFE4C3] font-semibold text-[2.4rem] max-[300px]:text-[1.75rem] md:font-bold md:text-[3.75rem] lg:text-[4rem] 2xl:text-[6rem] ${gentium.className}`}
              >
                February 1st to 4th{" "}
              </h3>
              <h3
                className={`text-white font-semibold text-[1.5rem] max-[300px]:text-[1rem] md:font-bold md:text-[2.25rem] lg:text-[2.5rem] 2xl:text-[3rem] ${gentium.className}`}
              >
                <span className="text-[#FFE4C3]">THINK</span> .{" "}
                <span className="text-[#FCBA51]">BUILD</span> .{" "}
                <span className="text-[#F77B4E]">INSPIRE</span>
              </h3>
            </div>
          </div>
        </div>
        {/* sm section */}
        <div className="flex flex-row justify-end align-end z-10">
          {/* icons */}
          <div className="flex flex-row gap-4 justify-center  items-center">
            <div>
              <Link
                href="https://www.instagram.com/ecell_iith"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/instagram0icon.svg"
                  alt="instagram"
                  width={31}
                  height={31}
                ></Image>
              </Link>
            </div>
            <div>
              <Link
                href="https://www.linkedin.com/company/ecell-iith/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/linkedin-icon.svg"
                  alt="linkedin"
                  width={27}
                  height={27}
                ></Image>
              </Link>
            </div>
            <div>
              <Link
                href="https://twitter.com/ecell_iith"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/twitter-icon.svg"
                  alt="twitter"
                  width={27}
                  height={23}
                ></Image>
              </Link>
            </div>
            <div>
              <Link
                href="https://www.facebook.com/ecell.iithyd/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/facebook-icon.svg"
                  alt="facebook"
                  width={28}
                  height={28}
                ></Image>
              </Link>
            </div>
            <div>
              <Link
                href="https://www.youtube.com/@ecelliith"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/youtube-icon.svg"
                  alt="youtube"
                  width={35}
                  height={35}
                ></Image>
              </Link>
            </div>
          </div>
          {/* go down button */}
          <div></div>
        </div>
      </section>
      {/* <section className="text-white flex flex-col justify-center items-center px-[3rem] lg:px-0 lg:pb-[4rem]">
        <div className="max-w-[48.75rem] py-[7rem] lg:py-[5rem]">
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-center font-medium text-5xl text-blue">
                ABOUT US
              </h2>
            </div>
            <div>
              <p className="text-offwhite font-medium text-center text-lg lg:text-[1.25rem] leading-8">
                E-Summit aims to bring early entrepreneurs, students,
                corporates, venture capitalists and start-ups with burgeoning
                ideas from all over the country to one platform <br /> <br />
                This summit is a medium for healthy discussions and inculcates
                an entrepreneurial mindset through a set of diverse
                competitions, Keynote talks and Panel Discussions.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 py-[7rem] lg:py-[10rem] lg:pb-0">
            <div>
              <h2 className="text-center font-medium text-5xl text-blue">
                THEME
              </h2>
            </div>
            <div>
              <h1 className="text-center text-4xl py-5">
                &ldquo;An Arduous Carrefour&rdquo;
              </h1>
              <p className="text-offwhite font-medium text-center text-lg lg:text-[1.25rem] leading-8">
                With the looming recession and the funding winter, the last year
                has been a rough one for startups. There has been a significant
                fall in funding compared to the previous year. After a
                triumphant revival in 2021, the Indian startup ecosystem faces
                multiple challenges again in today&#39;s market. With{" "}
                <b>&ldquo;An Arduous Carrefour&rdquo;</b> as the theme, our
                objective is to explore the difficulties, setbacks, challenges
                and opportunities that lie at this crossroads for entrepreneurs
                and entrepreneurship and how more effort is required to excel
                and succeed.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default First;
