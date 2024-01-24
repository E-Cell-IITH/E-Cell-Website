import { Gentium_Plus } from "next/font/google";
import localFont from "next/font/local";
import React from "react";
import { useEffect, useState } from "react";
import BorderContainer from "./BorderContainer";
import { Button,Grid } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const gentium = Gentium_Plus({ subsets: ["latin"], weight: "700" });
const gentiumnormal = Gentium_Plus({ subsets: ["latin"], weight: "400" });
const ananda = localFont({
  src: "../../public/fonts/ananda-neptouch-2.regular.ttf",
});

const Competitions = () => {
  const [screenWidth, setScreenWidth] = useState(0);

const [s0,sets0] = useState(false);
const [s1,sets1] = useState(0);
const [s2,sets2] = useState(0);
const [s3,sets3] = useState(0);
const [s4,sets4] = useState(0);
const [s5,sets5] = useState(0);
const [s6,sets6] = useState(0);

const text = [
  <>Unleash your retail prowess at E-Summit 2024&#39;s Retail Challenge! Calling all teams of 4-6 members to set up and manage their booths, showcasing innovative displays, strategic pricing, and marketing brilliance to maximize sales. With a hypothetical product to sell and attendees acting as customers armed with virtual tokens, this competition is your chance to shine. Join the online preliminary round for a shot at the finals. Spread the word, gather your teams, and get ready for an offline showdown where the team with the highest sales takes home the crown. Register now and let your retail skills reign supreme! For more details and registration, visit <a href="https://unstop.com/competitions/retail-challenge-e-summit-2024-iit-hyderabad-846357"><b>link</b></a> or contact Devansh at +91 73399 56844.</>
  ,
  <>Join the Interview Challenge 2024! Calling all college students to step into the hiring hot seat in this dynamic competition. Take on the role of a company executive or entrepreneur, tasked with strategic hiring decisions critical for your organization&#39;s success. Engage with a pool of candidates, showcasing your interviewing finesse, decision-making prowess, and negotiation skills as you navigate discussions on salaries, perks, roles, and positions. With a focus on making astute hiring choices within specified budgets, this event challenges your adaptability and judgment. Register now for the online preliminary round, where your quiz skills can earn you a spot among the 25 finalists competing offline. Elevate your hiring game and register today! For details and registration, visit <a href="https://unstop.com/competitions/interview-challenge-e-summit-2024-iit-hyderabad-847514"><b>link</b></a>  or contact Devansh at +91 73399 56844..</>
  ,
  <>Startup Olympiad 2024: Igniting Innovation and Strategy! Calling all dynamic teams of 4-5 members to showcase their entrepreneurial brilliance in a multi-round challenge. Dive into a whirlwind of strategic thinking and creativity as you tackle a common startup problem statement across various challenges. From crafting detailed startup reports for investor pitches to devising comprehensive marketing and strategic plans, each round tests your skills and adaptability. Engage in head-to-head negotiation battles, showcasing your business acumen and negotiation prowess. Register now to compete, collaborate, and revolutionize the startup landscape. For registration and more information, visit <a href="https://unstop.com/competitions/start-up-olympiad-e-summit-2024-iit-hyderabad-867239"><b>link</b></a> or contact Dhruvin at +91 63533 54702. Don&#39;t miss your shot at Startup Olympiad 2024 - where innovation meets strategy!</>
  ,
  <>Debate Competition: Gear up for an exhilarating clash of corporate titans where strategic prowess reigns supreme! Teams delve into the heart of industry rivalry by analyzing, strategizing, and debating the fate of two competing companies. From dissecting historical trajectories to crafting meticulous strategic roadmaps and crisis management plans, each facet of business acumen will be put to the test. Dive into financial analyses, foreseeing future scenarios, and crafting comprehensive marketing campaigns tailored to target audiences. In a riveting structured debate format, defend your chosen company&#39;s superiority, backed by compelling arguments spanning business models, marketing strategies, financial robustness, and crisis management finesse. Don&#39;t miss the chance to showcase your strategic acumen! Register your team now for the ultimate corporate showdown. For registrations and further details, visit <a href="https://unstop.com/competitions/debate-competition-e-summit-2024-iit-hyderabad-863236"><b>link</b></a> or connect with Rishi at +91 99087 35687.</>
  ,
  <>&#34;Ceo Summit&#34; - Step into the CEO&#39;s Shoes! Are you ready to navigate the intricate world of company leadership and decision-making? This unique event offers an immersive experience for participants to embody a CEO&#39;s role, facing real-world scenarios and making critical choices. The competition unfolds in two stages, starting with an online quiz and culminating in an offline showdown during the campus startup fair. Engage with a variety of business challenges, from market disruptions to internal dilemmas, mirroring the everyday encounters of venture capitalists. With a focus on strategic decision-making and industry insights, participants must weigh risks, assess perspectives, and chart the best paths to drive their companies forward. Seasoned industry judges will determine the winners, welcoming all participants with knowledge of the CEO role. Join us for this exhilarating journey into the CEO&#39;s realm. Register now at <a href="https://unstop.com/competitions/be-a-ceo-e-summit-2024-iit-hyderabad-847536"><b>link</b></a> or contact Karthik at +91 70328 94896. Don&#39;t miss your chance to &#34;Be a CEO&#34; and lead with strategic brilliance!</>
  ,
  <>Product Review Showdown: From Dumb to Viable! Calling all marketing and entrepreneurship enthusiasts to dissect startup ideas in this thrilling offline event. Get ready to dive deep into random startup concepts, analyzing their flaws and why they&#39;re destined to fail. With technical precision, participants will unveil why these ideas won&#39;t work, citing specific aspects that hinder their success. But it doesn&#39;t end there! Showcase your strategic brilliance by proposing changes and additions to transform these flawed concepts into viable ventures. The judges will evaluate your arguments, seeking agreement on the flaws and the suggested solutions. Whether solo or in teams of 3 or 2. Join us for this eye-opening session and turn &#34;dumb&#34; into a viable startup gem! Register now at <a href="https://unstop.com/competitions/product-review-e-summit-2024-iit-hyderabad-847481"><b>link</b></a> or connect with Divyansh at +91 86026 50548</>
  ,
  <>Business Quiz: Test Your Acumen! Dive into the world of business knowledge and strategy in this engaging and competitive event! Perfect for those with an eye for entrepreneurship or an interest in marketing, this quiz offers a platform to showcase your acumen. With multiple rounds blending online and offline challenges - from multiple-choice questions to intense case studies and rapid-fire rounds - participants will navigate various business domains. Join us for exhilarating debates, strategic solutions, and quick-witted responses. Secure your spot among the top performers by registering your team of 2-4 members. For details and registration, visit <a href="https://unstop.com/competitions/biz-quiz-e-summit-2024-iit-hyderabad-862941"><b>link</b></a> or reach out to Dhruvin at +91 63533 5470. Get ready to test your business prowess and vie for the top spot in this thrilling quiz!</>
  ,
]

const competitions = [
  {
    title: "Retail Challenge",
    content:
      <>
      {s0 ? text[0] : text[0].props.children[0].slice(0,300)+"..."}
      <br/><br/>
      <Button
            className={`bg-[#C39F3F] text-[1.2rem] text-white font-bold border-[0.5rem] w-[fit-content] px-[1rem] py-[0.5rem] rounded-[0.5rem] ${gentium.className}}`}
            onClick={() => {
              sets0(!s0);
            }}
          >
            {s0 ? "Know Less" : "Know More"}
          </Button>
      </>,
  },
  {
    title: "Interview Challenge:",
    content:      
    <>
      {s1 ? text[1] : text[1].props.children[0].slice(0,300)+"..."}
      <br/><br/>
      <Button
        className={`bg-[#C39F3F] text-[1.2rem] text-white font-bold border-[0.5rem] w-[fit-content] px-[1rem] py-[0.5rem] rounded-[0.5rem] ${gentium.className}}`}
        onClick={() => {
          sets1(!s1);
        }}
      >
        {s1 ? "Know Less" : "Know More"}
      </Button>
    </>
  },
  {
    title: "Startup Olympiad",
    content:
    <>
      {s2 ? text[2] : text[2].props.children[0].slice(0,300)+"..."}
      <br/><br/>
      <Button
        className={`bg-[#C39F3F] text-[1.2rem] text-white font-bold border-[0.5rem] w-[fit-content] px-[1rem] py-[0.5rem] rounded-[0.5rem] ${gentium.className}}`}
        onClick={() => {
          sets2(!s2);
        }}
      >
        {s2 ? "Know Less" : "Know More"}
      </Button>
    </>
  },
  {
    title: "Debate Competition",
    content:
    <>
      {s3 ? text[3] : text[3].props.children[0].slice(0,300)+"..."}
      <br/><br/>
      <Button
        className={`bg-[#C39F3F] text-[1.2rem] text-white font-bold border-[0.5rem] w-[fit-content] px-[1rem] py-[0.5rem] rounded-[0.5rem] ${gentium.className}}`}
        onClick={() => {
          sets3(!s3);
        }}
      >
        {s3 ? "Know Less" : "Know More"}
      </Button>
    </>
  },
  {
    title: "CEO Summit",
    content:
    <>
      {s4 ? text[4] : text[4].props.children[0].slice(0,300)+"..."}
      <br/><br/>
      <Button
        className={`bg-[#C39F3F] text-[1.2rem] text-white font-bold border-[0.5rem] w-[fit-content] px-[1rem] py-[0.5rem] rounded-[0.5rem] ${gentium.className}}`}
        onClick={() => {
          sets4(!s4);
        }}
      >
        {s4 ? "Know Less" : "Know More"}
      </Button>
    </>
  },
  {
    title: "Product Review",
    content:
    <>
      {s5 ? text[5] : text[5].props.children[0].slice(0,300)+"..."}
      <br/><br/>
      <Button
        className={`bg-[#C39F3F] text-[1.2rem] text-white font-bold border-[0.5rem] w-[fit-content] px-[1rem] py-[0.5rem] rounded-[0.5rem] ${gentium.className}}`}
        onClick={() => {
          sets5(!s5);
        }}
      >
        {s5 ? "Know Less" : "Know More"}
      </Button>
    </>

  },
  {
    title: "Business Quiz",
    content:
    <>
      {s6 ? text[6] : text[6].props.children[0].slice(0,300)+"..."}
      <br/><br/>
      <Button
        className={`bg-[#C39F3F] text-[1.2rem] text-white font-bold border-[0.5rem] w-[fit-content] px-[1rem] py-[0.5rem] rounded-[0.5rem] ${gentium.className}}`}
        onClick={() => {
          sets6(!s6);
        }}
      >
        {s6 ? "Know Less" : "Know More"}
      </Button>
    </>
  },
];

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    setScreenWidth(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getCenterSlidePercentage = () => {
    const [centerSlidePercentage, centerMode, swipeable] = (() => {
      switch (true) {
        case screenWidth < 768:
          return [100, false, false];
        case screenWidth < 1024:
          return [90, true, false];
        case screenWidth < 1400:
          return [80, true, true];
        default:
          return [65, true, true];
      }
    })();

    return { centerSlidePercentage, centerMode, swipeable };
  };

  const { centerSlidePercentage, centerMode, swipeable } =
    getCenterSlidePercentage();
  useEffect(() => {
    console.log("Swipe", swipeable);
  }, [swipeable]);

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
        {/* <Grid container direction="column" alignContent="center">
          <Grid item>
              <img src="/esummit/bordercontainer/top.svg" />
          </Grid>
        </Grid> */}
        <div className="w-full mb-[5%] sm:w-[95%]">
          <Carousel
            showArrows={true}
            centerSlidePercentage={centerSlidePercentage}
            autoPlay={false}
            centerMode={centerMode}
            swipeable={swipeable}
            emulateTouch={true}
            // stopOnHover={true}
            showThumbs={false}
            interval={3000}
            showStatus={false}
            infiniteLoop={true}
          >
            {competitions.map((competition, index) => {
              return (
                <center key={index} className="my-[3rem]">
                  {/* <SwiperSlide
                  key={index}
                  // style={{ width: 'auto', marginRight: 'auto'}}
                  className="w-[54rem] m-0 flex items-center justify-center"
                > */}
                  <BorderContainer
                    heightcss="h-[50rem] sm:h-[50rem] lg:h-[36rem]"
                    widthcss="w-[25rem] sm:w-[40rem] lg:w-[54rem]"
                    marginleftcss="ml-[10rem] sm:ml-[50rem] lg:ml-[54rem]"
                    margintopcss="mt-[20rem] sm:mt-[40rem] lg:mt-[36rem]"
                    // heightcss="h-[50rem] sm:h-[50rem] lg:h-[36rem]"
                    // widthcss="w-[30rem] sm:w-[40rem] lg:w-[54rem]"
                    // marginleftcss="ml-[50rem] sm:ml-[50rem] lg:ml-[54rem]"
                    // margintopcss="mt-[22rem] sm:mt-[40rem] lg:mt-[36rem]"
                  >
                    <div className="flex flex-row gap-[2rem] align-center justify-center my-[auto] mx-[1%] sm:mx-[10%] relative w-full select-none	">
                      {/* <div className="flex flex-[2] items-center">
                        <img src={competition.image} />
                      </div> */}
                      <div className="flex gap-[2rem] flex-col flex-[3]">
                        <h4
                          className={`text-[2.4rem] leading-[2.5rem]  sm:text-[2.4rem] sm:leading-[1.8rem] lg:text-[2.5rem] lg:leading-[2.5rem] color-[white] text-[#FFE4C3] ${ananda.className}`}
                        >
                          {competition.title}
                        </h4>
                        <p
                          className={`tracking-wide text-[1rem] leading-[1.2rem] sm:text-[1rem] sm:leading-[1.2rem] lg:text-[1.3rem] lg:leading-[2rem] color-[white] text-[#FDE1BF] ${gentiumnormal.className} mx-11 sm:mx-0`}
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
          <div className="md:hidden my-10 md:my-0 ">
            {<img src="/edge_design3.png" alt="Small Screen Image" />}
          </div>
        </div>
      </div>
      <h1 style={{color:"white"}}>hell</h1>
    </section>
  );
};

export default Competitions;
