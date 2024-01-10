import { Gentium_Plus } from "next/font/google";
import localFont from "next/font/local";
import React, { useEffect, useState } from "react";
import BorderContainer from "./BorderContainer";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const gentiumnormal = Gentium_Plus({ subsets: ["latin"], weight: "400" });

const ananda = localFont({
  src: "../../public/fonts/ananda-neptouch-2.regular.ttf",
});

const competitions = [
  {
    title: "Corporate Summit: Boardroom MUN/ BizBoard Diplomacy",
    content:
      "Join us at E-Summit 2023's Corporate Summit! College students step into a simulated corporate boardroom in Hyderabad, embodying executive roles or board memberships in fictional companies to address real-world agendas crucial to business success. Engage in strategic debates, negotiation, and alliance-building to craft resolutions on market strategies, mergers, and crises. With five different corporate scenarios, 35-40 participants per board, and a focus on honing negotiation and decision-making skills, this offline event promises a dynamic platform for undergraduate/postgraduate students. Don't miss your chance to register and navigate the complexities of business diplomacy! For registration and details, visit [Event Website] or contact Devansh at +91 73399 56844.",
  },
  {
    title: "Retail Challenge",
    content:
      "Unleash your retail prowess at E-Summit 2023's Retail Challenge! Calling all teams of 4-6 members to set up and manage their booths, showcasing innovative displays, strategic pricing, and marketing brilliance to maximize sales. With a hypothetical product to sell and attendees acting as customers armed with virtual tokens, this competition is your chance to shine. Join the online preliminary round for a shot at the finals. Spread the word, gather your teams, and get ready for an offline showdown where the team with the highest sales takes home the crown. Register now and let your retail skills reign supreme! For more details and registration, visit [Event Website] or contact Devansh at +91 73399 56844.",
  },
  {
    title: "Interview Challenge:",
    content:
      "Join the Interview Challenge 2023! Calling all college students to step into the hiring hot seat in this dynamic competition. Take on the role of a company executive or entrepreneur, tasked with strategic hiring decisions critical for your organization's success. Engage with a pool of candidates, showcasing your interviewing finesse, decision-making prowess, and negotiation skills as you navigate discussions on salaries, perks, roles, and positions. With a focus on making astute hiring choices within specified budgets, this event challenges your adaptability and judgment. Register now for the online preliminary round, where your quiz skills can earn you a spot among the 25 finalists competing offline. Elevate your hiring game and register today! For details and registration, visit [Event Website] or contact Devansh at +91 73399 56844..",
  },
  {
    title: "Startup Olympiad",
    content:
      "Startup Olympiad 2023: Igniting Innovation and Strategy! Calling all dynamic teams of 4-5 members to showcase their entrepreneurial brilliance in a multi-round challenge. Dive into a whirlwind of strategic thinking and creativity as you tackle a common startup problem statement across various challenges. From crafting detailed startup reports for investor pitches to devising comprehensive marketing and strategic plans, each round tests your skills and adaptability. Engage in head-to-head negotiation battles, showcasing your business acumen and negotiation prowess. Register now to compete, collaborate, and revolutionize the startup landscape. For registration and more information, visit [Event Website] or contact Dhruvin at +91 63533 54702. Don't miss your shot at Startup Olympiad 2023 - where innovation meets strategy!",
  },
  {
    title: "Debate Competition",
    content:
      "Debate Competition: Gear up for an exhilarating clash of corporate titans where strategic prowess reigns supreme! Teams delve into the heart of industry rivalry by analyzing, strategizing, and debating the fate of two competing companies. From dissecting historical trajectories to crafting meticulous strategic roadmaps and crisis management plans, each facet of business acumen will be put to the test. Dive into financial analyses, foreseeing future scenarios, and crafting comprehensive marketing campaigns tailored to target audiences. In a riveting structured debate format, defend your chosen company's superiority, backed by compelling arguments spanning business models, marketing strategies, financial robustness, and crisis management finesse. Don't miss the chance to showcase your strategic acumen! Register your team now for the ultimate corporate showdown. For registrations and further details, visit [Event Website] or connect with Rishi at +91 99087 35687.",
  },
  {
    title: "Be a CEO",
    content:
      "\"Be a CEO\" - Step into the CEO's Shoes! Are you ready to navigate the intricate world of company leadership and decision-making? This unique event offers an immersive experience for participants to embody a CEO's role, facing real-world scenarios and making critical choices. The competition unfolds in two stages, starting with an online quiz and culminating in an offline showdown during the campus startup fair. Engage with a variety of business challenges, from market disruptions to internal dilemmas, mirroring the everyday encounters of venture capitalists. With a focus on strategic decision-making and industry insights, participants must weigh risks, assess perspectives, and chart the best paths to drive their companies forward. Seasoned industry judges will determine the winners, welcoming all participants with knowledge of the CEO role. Join us for this exhilarating journey into the CEO's realm. Register now at [Event Website] or contact Karthik at +91 70328 94896. Don't miss your chance to \"Be a CEO\" and lead with strategic brilliance!",
  },
  {
    title: "Product Review",
    content:
      "Product Review Showdown: From Dumb to Viable! Calling all marketing and entrepreneurship enthusiasts to dissect startup ideas in this thrilling offline event. Get ready to dive deep into random startup concepts, analyzing their flaws and why they're destined to fail. With technical precision, participants will unveil why these ideas won't work, citing specific aspects that hinder their success. But it doesn't end there! Showcase your strategic brilliance by proposing changes and additions to transform these flawed concepts into viable ventures. The judges will evaluate your arguments, seeking agreement on the flaws and the suggested solutions. Whether solo or in teams of 3 or 2. Join us for this eye-opening session and turn \"dumb\" into a viable startup gem! Register now at [Event Website] or connect with Divyansh at +91 86026 50548",
  },
  {
    title: "Business Quiz",
    content:
      "Business Quiz: Test Your Acumen! Dive into the world of business knowledge and strategy in this engaging and competitive event! Perfect for those with an eye for entrepreneurship or an interest in marketing, this quiz offers a platform to showcase your acumen. With multiple rounds blending online and offline challenges - from multiple-choice questions to intense case studies and rapid-fire rounds - participants will navigate various business domains. Join us for exhilarating debates, strategic solutions, and quick-witted responses. Secure your spot among the top performers by registering your team of 2-4 members. For details and registration, visit [Event Website] or reach out to Dhruvin at +91 63533 5470. Get ready to test your business prowess and vie for the top spot in this thrilling quiz!",
  },
  {
    title: "Stock Competition",
    content:
      "Stock Competition: Trade Your Way to Success! Are you ready to take on the stock market challenge? Join us for an exhilarating competition where finance enthusiasts showcase their investment prowess! From crafting investment strategies to live trading simulations, this event offers a platform to exhibit your financial acumen. With rounds ranging from online portfolio submissions to live trading simulations and final presentations, participants navigate real-time market challenges. Whether you're a local team from Hyderabad or joining from across the nation, this competition promises a platform for diverse perspectives and intense trading action. Register your team or join individually for a chance to make it to the top 5-10 teams and present your winning portfolio. For details and registration, visit [Event Website] or contact Rishi at +91 99087 35687. Get ready to trade, strategize, and compete in this thrilling stock competition!",
  },
];

const Competitions = () => {
  const [screenWidth, setScreenWidth] = useState(0);

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
                    widthcss="w-[30rem] sm:w-[40rem] lg:w-[54rem]"
                    marginleftcss="ml-[50rem] sm:ml-[50rem] lg:ml-[54rem]"
                    margintopcss="mt-[22rem] sm:mt-[40rem] lg:mt-[36rem]"
                  >
                    <div className="flex flex-row gap-[2rem] align-center justify-center my-[auto] mx-[10%] relative w-full select-none	">
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
                          className={`tracking-wide text-[1.3rem] leading-[1.2rem] sm:text-[1.4rem] sm:leading-[1.2rem] lg:text-[1.3rem] lg:leading-[2rem] color-[white] text-[#FDE1BF] ${gentiumnormal.className}`}
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
