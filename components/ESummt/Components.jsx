import React from "react";
import { Gentium_Plus } from "next/font/google";
import localFont from "next/font/local";
import { Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import BorderContainer from "./BorderContainer";
import style from "../../styles/fifth.module.css";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const gentium = Gentium_Plus({ subsets: ["latin"], weight: "700" });
const gentiumnormal = Gentium_Plus({ subsets: ["latin"], weight: "400" });

const gallery = [
  "esummit/gallery/20231105_113737.jpg",
  "esummit/gallery/20231105_114219.jpg",
  "esummit/gallery/20231105_130848.jpg",
  "esummit/gallery/Copy of 20220929_122820.jpg",
  "esummit/gallery/DJI_20231105_162001_538.jpg",
  "esummit/gallery/DSC02192.jpg",
  "esummit/gallery/DSC02197.jpg",
  "esummit/gallery/DSC02199.jpg",
  "esummit/gallery/DSC02200.jpg",
  "esummit/gallery/DSC02202.jpg",
  "esummit/gallery/DSC02211.jpg",
  "esummit/gallery/DSC02219.jpg",
  "esummit/gallery/IMG_2679.jpg",
  "esummit/gallery/IMG_2696.jpg",
  "esummit/gallery/IMG_2802.jpg",
];

const hotel = [
  "h1.jpeg",
  "h2.jpeg",
  "h3.jpeg"
]

const merchandise = [
  "esummit/merch/s4.png",
  "esummit/merch/s5.png",
  "esummit/merch/s3.png",
  "esummit/merch/s6.png",
];

const ananda = localFont({
  src: "../../public/fonts/ananda-neptouch-4.ttf",
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
      <div className="md:hidden">
        {<img src="/edge_design.png" alt="Small Screen Image" />}
      </div>
      <section className="flex flex-col h-full relative w-full py-7 px-[2rem] md:px-[14rem] lg:px-[18rem]">
        <div className="bg-[url('/about-bg.png')] h-full aspect-[783/1800] absolute bg-cover right-0"></div>
        <h3
          className={`py-[2rem] tracking-widest text-[#FCBF5F] font-semibold text-[3rem] max-[300px]:text-[3rem] md:font-bold md:text-[4.75rem] lg:text-[5rem] 2xl:text-[6rem] text-center ${ananda.className}`}
        >
          About Us{" "}
        </h3>

        <div
          className={`text-[#FDE1BF] text-[1.5rem] tracking-wide ${gentiumnormal.className}`}
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
      <section className="flex flex-col h-full relative w-full py-7 px-[2rem] md:px-[14rem] lg:px-[18rem]">
        <div className="bg-[url('/about-bg.png')] h-full aspect-[783/1800] absolute bg-cover right-0"></div>
        <h3
          className={`py-[2rem] tracking-widest text-[#FCBF5F] font-semibold text-[3rem] max-[300px]:text-[3rem] md:font-bold md:text-[4.75rem] lg:text-[5rem] 2xl:text-[6rem] text-center ${ananda.className}`}
        >
          Theme{" "}
        </h3>

        <div
          className={`text-[#FDE1BF] text-[1.5rem] tracking-wide ${gentiumnormal.className}`}
        >
            <p>
              Aarohati is a sanskrit word that signifies <b>&quot;The Ascent&quot;</b> or the verb <b>&quot;Climbing Up&quot;</b>.Aarohati signifies the act of rising, often in a spiritual sense.
            </p>
            <br/>
            <p>
              Start-ups are like rockets. Aarohati symbolizes the metaphorical climb, emphasizing the growth and progress that startups aim for. This theme encourages startups to embrace their journey and find inspiration in their ascent. The ascent signifies determination, resilience and the ability to overcome obstacles. Thes qualities are crucial for the startups to navigate the competitive business landscape.
            </p>
        </div>
        <div className="flex justify-center m-7">
          <Button
            className={`bg-[#C39F3F] text-[1.2rem] text-white font-bold border-[0.5rem] w-[fit-content] px-[1rem] py-[0.5rem] rounded-[0.5rem] ${gentiumnormal.className}}`}
            onClick={() => {
              window.open(
                "https://unstop.com/p/e-summit-2024-iit-hyderabad-875539",
                "_blank"
              );
            }}
          >
            REGISTER NOW
          </Button>
        </div>
        <div className="md:hidden">
          {<img src="/edge_design2.png" alt="Small Screen Image" />}
        </div>
      </section>
      
      {/* <section className="flex flex-col md:flex-row lg:flex-row">
        <div className="flex flex-col justify-center p-7 pl-[2rem] md:pl-[14rem] lg:pl-[18rem]">
          <div className="bg-[url('/about-bg.png')] aspect-[783/1800] absolute bg-cover right-0 z-[-1]"></div>
          <h3
            className={`py-[2rem] tracking-widest text-[#FCBF5F] font-semibold text-[2.4rem] max-[300px]:text-[2.75rem] md:font-bold md:text-[4.75rem] lg:text-[5rem] 2xl:text-[6rem] ${ananda.className}`}
          >
            Theme{" "}
          </h3>
          <div
            className={`flex flex-row text-[#FDE1BF] text-[1.5rem] tracking-wide ${gentiumnormal.className}`}
          >
            <p>
              &quot;Unlocking the secrets of innovation - stay tuned as the
              theme for E-Summit will soon be unveiled!&quot;
            </p>
          </div>
        </div>

          <img
            src="/theme.jpeg"
            className="w-[100%] md:w-[60%] lg:w-[60%] pt-[2rem] sm:mx-4"
          />
      </section> */}
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
      {/* <div
        className="absolute h-[80%] right-0 bg-cover z-[10]"
        style={{
          backgroundImage: "url('/remaining-bg.png')",
          aspectRatio: 750 / 3307,
        }}
      ></div> */}
      <div className="bg-[url('/about-bg.png')] width-[10rem] aspect-[783/1800] absolute bg-cover right-0"></div>
      <section className="flex flex-col p-7 px-[2rem] md:px-[15rem] lg:px-[15rem]">
      <div
        className="absolute h-[50%] right-0 bg-cover z-[10]"
        style={{
          backgroundImage: "url('/remaining-bg.png')",
          aspectRatio: 750 / 3307,
        }}
      ></div>
        <h3
          className={`py-[2rem] tracking-widest text-center text-[#FCBF5F] font-semibold text-[2.4rem] max-[300px]:text-[2.75rem] md:font-bold md:text-[4.75rem] lg:text-[5rem] 2xl:text-[6rem] ${ananda.className}`}
        >
          Startup fair
        </h3>
        <div
          className={`flex flex-row text-[#FDE1BF] text-[1.5rem] tracking-wide ${gentiumnormal.className} text-center`}
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
          Fetching fortunes{" "}
        </h3>
        <div
          className={`flex flex-row text-[#FDE1BF] text-[1.5rem] tracking-wide ${gentiumnormal.className} text-center`}
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
              window.open(
                "https://unstop.com/competitions/fetching-fortunes-iit-hyderabad-814341",
                "_blank"
              );
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
          Hotel Accomodation{" "}
        </h3>
        <div className="flex-1 h-[50rem]">
          <center>
            <Carousel
              animation="fade"
              duration={10}
              autoPlay={true}
              navButtonsAlwaysInvisible={true}
              infiniteLoop={true}
            >
              {hotel.map((i, index) => {
                return (
                  <center key={index}>
                    <BorderContainer
                      heightcss="h-[14rem] sm:h-[30rem] lg:h-[32rem] 2xl:h-[36rem]"
                      widthcss="w-[21rem] sm:w-[45rem] lg:w-[48rem] 2xl:w-[54rem]"
                      marginleftcss="ml-[14rem] sm:ml-[45rem] lg:ml-[48rem] 2xl:ml-[54rem]"
                      margintopcss="mt-[21rem] sm:mt-[30rem] lg:mt-[32rem] 2xl:mt-[36rem] "
                    >
                      <div className="flex flex-row gap-[2rem] align-center justify-center my-[auto] mx-[30%] relative w-full z-[-12]">
                        <div className="flex flex-[2] items-center">
                          <img width={350} src={i} />
                        </div>
                      </div>
                    </BorderContainer>
                  </center>
                );
              })}
            </Carousel>
          </center>
        </div>
        <div className="flex justify-center m-7 cursor-pointer" >
          <img className="w-[200px] h-[200px]" onClick={()=>{
          window.open("https://forms.office.com/r/Ts56sycZPU", "_blank")
        }} src="qr.png"></img>
        </div>
      </section>
      <section className="flex flex-col p-7 px-[2rem] md:px-[18rem] lg:px-[18rem]">
        <h3
          className={`py-[2rem] text-center tracking-widest text-[#FCBF5F] font-semibold text-[2.4rem] max-[300px]:text-[2.75rem] md:font-bold md:text-[4.75rem] lg:text-[5rem] 2xl:text-[6rem] ${ananda.className}`}
        >
          E-summit &#39;24 official merchandise{" "}
        </h3>
        <div className="flex-1 h-[50rem]">
          <center>
            <Carousel
              animation="fade"
              duration={10}
              autoPlay={true}
              navButtonsAlwaysInvisible={true}
              infiniteLoop={true}
              autoPlayInterval={1000}
            >
              {merchandise.map((i, index) => {
                return (
                  <center key={index}>
                    <BorderContainer
                      heightcss="h-[14rem] sm:h-[30rem] lg:h-[32rem] 2xl:h-[36rem]"
                      widthcss="w-[21rem] sm:w-[45rem] lg:w-[48rem] 2xl:w-[54rem]"
                      marginleftcss="ml-[14rem] sm:ml-[45rem] lg:ml-[48rem] 2xl:ml-[54rem]"
                      margintopcss="mt-[21rem] sm:mt-[30rem] lg:mt-[32rem] 2xl:mt-[36rem] "
                    >
                      <div className="flex flex-row gap-[2rem] align-center justify-center my-[auto] mx-[22%] relative w-full z-[-12]">
                        <div className="flex flex-[2] items-center">
                          <img src={i} />
                        </div>
                      </div>
                    </BorderContainer>
                  </center>
                );
              })}
            </Carousel>
          </center>
        </div>
        <div className="flex justify-center m-7">
          <Button
            className={`bg-[#C39F3F] text-[1.2rem] text-white font-bold border-[0.5rem] w-[fit-content] px-[1rem] py-[0.5rem] rounded-[0.5rem] ${gentiumnormal.className}}`}
            onClick={() => {
              window.open("https://forms.gle/gm95mxXZyWe7kV2y9", "_blank");
            }}
          >
            BUY NOW
          </Button>
        </div>
      </section>
      <section className="flex flex-col md:p-7 sm:px-[2rem] md:px-[18rem] lg:px-[18rem]">
        <h3
          className={`py-[2rem] tracking-widest text-[#FCBF5F] text-center font-semibold text-[2.4rem] max-[300px]:text-[2.75rem] md:font-bold md:text-[4.75rem] lg:text-[5rem] 2xl:text-[6rem] ${ananda.className}`}
        >
          Gallery
        </h3>
        <div className="flex-1 h-[50rem]">
          <center>
            <Carousel
              animation="fade"
              duration={10}
              autoPlay={true}
              navButtonsAlwaysInvisible={true}
              infiniteLoop={true}
            >
              {gallery.map((i, index) => {
                return (
                  <center key={index}>
                    <BorderContainer
                      heightcss="h-[14rem] sm:h-[30rem] lg:h-[32rem] 2xl:h-[36rem]"
                      widthcss="w-[21rem] sm:w-[45rem] lg:w-[48rem] 2xl:w-[54rem]"
                      marginleftcss="ml-[14rem] sm:ml-[45rem] lg:ml-[48rem] 2xl:ml-[54rem]"
                      margintopcss="mt-[21rem] sm:mt-[30rem] lg:mt-[32rem] 2xl:mt-[36rem] "
                    >
                      <div className="flex flex-row gap-[2rem] align-center justify-center my-[auto] mx-[8%] relative w-full z-[-12]">
                        <div className="flex flex-[2] items-center">
                          <img src={i} />
                        </div>
                      </div>
                    </BorderContainer>
                  </center>
                );
              })}
            </Carousel>
          </center>
        </div>
      </section>
      {/* <section className="flex flex-col md:p-7 sm:px-[2rem] md:px-[18rem] lg:px-[18rem]">
        <div className="flex">
          <div className="flex flex-col">
            <div
              className={`py-[2rem] text-center text-[#FCBF5F] text-[2.4rem] max-[400px]:text-[1rem] md:text-[2rem] lg:text-[2rem] 2xl:text-[3rem] ${ananda.className}`}
            >
              <span className="py-[2rem] text-center text-[#FCBF5F] text-[2.4rem] max-[400px]:text-[1rem] md:text-[2rem] lg:text-[2rem] 2xl:text-[4.3rem] ${ananda.className}">
                C
              </span>
              ontact us
            </div>
            <div>
              <div className="my-[1rem] flex gap-[1rem] items-center">
                <img
                  src="esummit/gallery/location.png"
                  alt="location"
                  width={"20px"}
                />
                <div className={`${gentium.className} text-[#FCBF5F]`}>
                  E-Cell Office
                  <br />
                  C-714, Academic block C,
                  <br />
                  IIT Hyderabad
                </div>
              </div>
              <div className="my-[1rem] flex gap-[1rem] items-center">
                <img src="esummit/gallery/email.png" alt="location" />
                <div className={`${gentium.className} text-[#FCBF5F]`}>
                  ecell@iith.ac.in
                </div>
              </div>
              <div className="my-[1rem] flex gap-[1rem] items-center">
                <img
                  src="esummit/gallery/location.png"
                  alt="location"
                  width={"20px"}
                />
                <div className={`${gentium.className} text-[#FCBF5F]`}>
                  +91 7023425801
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
    </div>
  );
};

export { StartupfairandGallery, AboutandTheme };
