import React from "react";
import style from "../styles/third.module.css";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import { useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { useRef, createRef } from "react";

const TextButton = (props) => {
  return (
    <Button
      onClick={props.onClick}
      variant="text"
      sx={{
        textAlign: "left",
        color: "white",
        fontSize: { xs: "2.6vw", sm: "1.9vw", md: "1.65vw" },
        fontFamily: "Montserrat",
      }}
    >
      {props.children}
    </Button>
  );
};

const eventsData = [
  {
    name: "E-SUMMIT",
    description: [
      "E-Summit is the flagship event of E-Cell IITH which aims to bring early entrepreneurs, students, corporates, venture capitalists and start-ups with burgeoning ideas from all over the country to one platform to share their entrepreneur ventures and wisdom.",
      "This summit provides a medium for healthy discussions and inculcates an entrepreneurial mindset into minds through a plethora of events like debates and panel discussions. We aim to provide a competitive environment for start-ups via events like Elevator Pitch, Pitch Showdown and many more events to commemorate the spirit of entrepreneurship.",
    ],
  },
  {
    name: "STARTUP FAIR",
    description: [
      "An initiative to serve as a platform at IIT Hyderabad for bringing together budding entrepreneurs, venture capitalists, investors, and start-ups. It creates a networking hub for people from various domains by involving corporations, working professionals, and students of IIT Hyderabad and across the nation at our very own institute. We aim to promote entrepreneurial spirit among students of IIT Hyderabad with this event.",
    ],
  },
  {
    name: "E-NETWORKING",
    description: [
      "We at E-Cell IIT Hyderabad firmly believe in growing together. E-Networking aims to provide a bridge to all the E-Cells in our country where they can communicate, learn and solve problems together. Currently, the E-Networking family consists of 52 E-Cells. The official meeting of all the member E-Cells is known as the E-Connect. In E-Connect, fellow E-Cell members can share their concerns, pitch initiatives, and help other E-Cells solve their problems. ",
    ],
  },
  {
    name: "POWERTALKS & PANEL DISCUSSIONS",
    description: [
      "E-Summit brings a series of talks and panel discussions from the best minds in business and entrepreneurship, from the top-tier leagues, and question the most critical issues. We conduct power talk sessions by some of the most esteemed and experienced personalities of the field- ranging from entrepreneurs to influencers throughout the year. The sessions are interactive as well as entertaining.",
    ],
  },
  {
    name: "CAMPUS AMBASSADOR PROGRAM",
    description: [
      "ECell of IIT Hyderabad hosts a Campus Ambassador program for students outside of IIT Hyderabad looking to inculcate entrepreneurial ideas within them and spread such ideas at their campus. This program usually starts around 1.5-2 months before the E-Summit. In 2022, we had around 800 Campus Ambassadors as a part of the ECell IIT Hyderabad family. Each CA has a chance to learn effective communication through engaging events and various tasks. You will be awarded points based on the events and games you complete. These points decide your position on the overall leaderboard. The toppers of the leaderboard win exciting prizes!",
    ],
  },
];

const competitionData = [
  {
    name: "IDEA VALIDATION CAMP",
    description: [
      "A platform for budding entrepreneurs to get their innovative ideas evaluated by successful entrepreneurs, VCs, and market leaders. It is a one week long event where students pitch tier ideas and seek experts opinion and validation. The winner of this competition receive prize money and mentorship from VC’s to develop their idea.",
    ],
  },
  {
    name: "BIZ QUIZ",
    description: [
      "Biz-Quiz, is a competition with the theme of business and entrepreneurship. The quiz tests the knowledge of the participants in business, economics, entrepreneurship, startups, etc. Biz-Quiz has one of the highest participation in all the competitions conducted by E-Summit. Biz-Quiz, following the norms of a usual quiz, has two rounds, the Preliminary and the Finals.",
    ],
  },
  {
    name: "E-PIC",
    description: [
      "An integral part of inducting an idea into a startup is to present it to your clients and sponsors. Time is of the essence here, even more so if you are meeting them in an elevator.That's where pitching skills are put to the test. Elevator pitch or E-Pic for short is a competition where you and your team needs to pitch your startup idea under time limit. The most creative of those stand to win goodies and cash prizes along with certificates and much more.",
    ],
  },
  {
    name: "TRADEPOINT",
    description: [
      "It is a 5-day live league where you will be given some virtual money to create your own portfolio. You will get a chance to showcase your trading skills with real-time market analysis, following the experts, and applying new strategies, all tis will be done on a platform. A portfolio with the maximum profit will be declared as the winner!",
    ],
  },
  {
    name: "THE PITCH SHOWDOWN",
    description: [
      "The Pitch Showdown competition provides a platform of the entrepreneurship enthusiasts out there to showcase their skills of creativity and spontaneity (PS: you can include these also: market understanding and business strategy). In this competition, participants will pitch on a startup idea that we provide in front of a group of other participants and have a debate amongst themselves regarding their solution. The main evaluation criteria is their business strategy, market analysis, presentation skills and participation in the debate. This competition helps the participants in putting their entrepreneurship skills to the test and in the end enhance their market understanding and thinking strategy to face real world problems in this growing era.",
    ],
  },
  {
    name: "CASE STUDY CHALLENGE",
    description: [
      "Case studies are one of the best teaching tools for enhancing business acumen and testing practical knowledge. It asks for a quick and detailed analysis of a market situation or any organization, and the participants are required to use their problem-solving skills combined with structured thinking to rectify the complications in it.",
    ],
  },
];

export default function Third() {
  const [eventIndex, setEventIndex] = useState(0);
  const [competitionIndex, setCompetitionIndex] = useState(0);
  const compRef = useRef(null);
  const nodeRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      nodeRef.current,
      { x: -15, autoAlpha: 0.09 },
      { x: 0, autoAlpha: 1, duration: 0.3 }
    );
    gsap.fromTo(
      compRef.current,
      { x: -15, autoAlpha: 0.09 },
      { x: 0, autoAlpha: 1, duration: 0.3, ease: "power0.inOut" }
    );
  }, [competitionIndex, eventIndex]);

  return (
    <div>
      <div className={style.container} id="events">
        <Grid container className={style.grid}>
          <Grid item xs={12}>
            <h2 className={style.events}>EVENTS</h2>
          </Grid>
          <ul className={style.head}>{eventsData[eventIndex].name}</ul>
          <Grid item container xs={12}>
            <Grid item xs={12} md={6}>
              <ul className={style.list}>
                <li className="power">
                  <TextButton
                    onClick={() => {
                      setEventIndex(0);
                    }}
                  >
                    E-SUMMIT
                  </TextButton>
                </li>
                <li className="power">
                  <TextButton
                    onClick={() => {
                      setEventIndex(1);
                    }}
                  >
                    START-UP FAIR
                  </TextButton>
                </li>
                {/* <br /> */}
                <li className="power">
                  <TextButton
                    variant="text"
                    onClick={() => {
                      setEventIndex(2);
                    }}
                  >
                    E-NETWORKING
                  </TextButton>
                </li>
                {/* <br /> */}
                <li className="power">
                  <TextButton
                    variant="text"
                    onClick={() => {
                      setEventIndex(3);
                    }}
                  >
                    POWERTALKS & PANEL DISCUSSIONS
                  </TextButton>
                </li>
                {/* <br /> */}
                <li className="power">
                  <TextButton
                    variant="text"
                    onClick={() => {
                      setEventIndex(4);
                    }}
                  >
                    CAMPUS AMBASSADOR PROGRAM
                  </TextButton>
                </li>
              </ul>
            </Grid>
            <Grid
              item
              container
              xs={12}
              md={6}
              justifyContent="center"
              alignItems="center"
              className={style.content}
              ref={nodeRef}
            >
              {eventsData[eventIndex].description.map((desc, idx) => (
                <Box
                  className={style.box}
                  sx={{
                    textAlign: { lg: "left", xs: "left" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: { xs: "1rem", md: "0rem" },
                  }}
                  key={idx}
                >
                  <>{desc}</>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Grid item xs={12}>
          <h2 className={style.events}>COMPETITIONS</h2>
        </Grid>
        <Grid container className={style.grid} id="competitions">
          <ul className={style.head}>
            {competitionData[competitionIndex].name}
          </ul>
          <Grid item container xs={12}>
            <Grid item xs={12} md={6}>
              <ul className={style.list}>
                <li>
                  <TextButton
                    onClick={() => {
                      setCompetitionIndex(0);
                    }}
                  >
                    IDEA VALIDATION CAMP
                  </TextButton>
                </li>
                <li>
                  <TextButton
                    onClick={() => {
                      setCompetitionIndex(1);
                    }}
                  >
                    BIZ-QUIZ
                  </TextButton>
                </li>
                <li>
                  <TextButton
                    onClick={() => {
                      setCompetitionIndex(2);
                    }}
                  >
                    E-PIC
                  </TextButton>
                </li>
                <li>
                  <TextButton
                    onClick={() => {
                      setCompetitionIndex(3);
                    }}
                  >
                    TRADEPOINT
                  </TextButton>
                </li>
                <li>
                  <TextButton
                    onClick={() => {
                      setCompetitionIndex(4);
                    }}
                  >
                    THE PITCH SHOWDOWN
                  </TextButton>
                </li>
                <li>
                  <TextButton
                    onClick={() => {
                      setCompetitionIndex(5);
                    }}
                  >
                    CASE STUDY CHALLENGE
                  </TextButton>
                </li>
              </ul>
            </Grid>
            <Grid
              item
              container
              xs={12}
              md={6}
              justifyContent="center"
              alignContent="center"
              className={style.content}
              ref={compRef}
              id="#ref"
            >
              {competitionData[competitionIndex].description.map((desc, idx) => (
                <Box
                  key={idx}
                  className={`${style.box} text`}
                  sx={{ textAlign: "left" }}
                >
                  <>{desc}</>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
