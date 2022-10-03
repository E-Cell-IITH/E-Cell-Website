import React from "react";
import style from "../styles/third.module.css";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { useState } from "react";

const TextButton = (props) => {
  return (
    <Button
      onClick={props.onClick}
      variant="text"
      sx={{
        color: "white",
        fontSize: "1.5vw",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a?",
    ],
  },
  {
    name: "E-NETWORKING",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a?",
    ],
  },
  {
    name: "POWERTALKS & PANEL",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a?",
    ],
  },
  {
    name: "DISCUSSION",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a?",
    ],
  },
  {
    name: "CAMPUS AMBASSADOR",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a?",
    ],
  },
  {
    name: "PROGRAM",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a?",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aperiam voluptatem pariatur harum dolor labore, quod libero expedita quis, voluptates ratione atque eum recusandae distinctio. Tenetur quam, optio maiores cupiditate unde, culpa tempora fugiat corrupti vitae ducimus doloremque. Eum est autem, voluptatum atque nobis eius id voluptatibus. Est, architecto at.",
    ],
  },
  {
    name: "E-PIC",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aperiam voluptatem pariatur harum dolor labore, quod libero expedita quis, voluptates ratione atque eum recusandae distinctio. Tenetur quam, optio maiores cupiditate unde, culpa tempora fugiat corrupti vitae ducimus doloremque. Eum est autem, voluptatum atque nobis eius id voluptatibus. Est, architecto at.",
    ],
  },
  {
    name: "TRADEPOINT",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aperiam voluptatem pariatur harum dolor labore, quod libero expedita quis, voluptates ratione atque eum recusandae distinctio. Tenetur quam, optio maiores cupiditate unde, culpa tempora fugiat corrupti vitae ducimus doloremque. Eum est autem, voluptatum atque nobis eius id voluptatibus. Est, architecto at.",
    ],
  },
  {
    name: "THE PITCH SHOWDOWN",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aperiam voluptatem pariatur harum dolor labore, quod libero expedita quis, voluptates ratione atque eum recusandae distinctio. Tenetur quam, optio maiores cupiditate unde, culpa tempora fugiat corrupti vitae ducimus doloremque. Eum est autem, voluptatum atque nobis eius id voluptatibus. Est, architecto at.",
    ],
  },
  {
    name: "CASE STUDY CHALLENGE",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aperiam voluptatem pariatur harum dolor labore, quod libero expedita quis, voluptates ratione atque eum recusandae distinctio. Tenetur quam, optio maiores cupiditate unde, culpa tempora fugiat corrupti vitae ducimus doloremque. Eum est autem, voluptatum atque nobis eius id voluptatibus. Est, architecto at.",
    ],
  },
];

export default function Third() {
  const [eventIndex, setEventIndex] = useState(0);
  const [competitionIndex, setCompetitionIndex] = useState(0);
  return (
    <div>
      <div className={style.container} id="events">
        <Grid container className={style.grid}>
          <Grid item xs={1.6}></Grid>
          <Grid item xs={8}>
            <div className={style.events}>EVENTS</div>
          </Grid>
          <Grid item xs={2.2}></Grid>
          <Grid item xs={1.4}></Grid>
          <Grid item xs={4}>
            <ul className={style.head}>{eventsData[eventIndex].name}</ul>
            <ul className={style.list}>
              <li className="power">
                {eventIndex !== 0 && (
                  <TextButton
                    onClick={() => {
                      setEventIndex(0);
                    }}
                  >
                    E-SUMMIT
                  </TextButton>
                )}
              </li>
              <li className="power">
                {eventIndex !== 1 && (
                  <TextButton
                    onClick={() => {
                      setEventIndex(1);
                    }}
                  >
                    START-UP FAIR
                  </TextButton>
                )}
              </li>
              {/* <br /> */}
              <li className="power">
                {eventIndex !== 2 && (
                  <TextButton
                    variant="text"
                    onClick={() => {
                      setEventIndex(2);
                    }}
                  >
                    E-NETWORKING
                  </TextButton>
                )}
              </li>
              {/* <br /> */}
              <li className="power">
                {eventIndex !== 3 && (
                  <TextButton
                    variant="text"
                    onClick={() => {
                      setEventIndex(3);
                    }}
                  >
                    POWERTALKS & PANEL
                  </TextButton>
                )}
              </li>
              <li className="power">
                {eventIndex !== 4 && (
                  <TextButton
                    variant="text"
                    onClick={() => {
                      setEventIndex(4);
                    }}
                  >
                    DISCUSSIONS
                  </TextButton>
                )}
              </li>
              {/* <br /> */}
              <li className="power">
                {eventIndex !== 5 && (
                  <TextButton
                    variant="text"
                    onClick={() => {
                      setEventIndex(5);
                    }}
                  >
                    CAMPUS AMBASSADOR
                  </TextButton>
                )}
              </li>
              <li className="power">
                {eventIndex !== 6 && (
                  <TextButton
                    variant="text"
                    onClick={() => {
                      setEventIndex(6);
                    }}
                  >
                    PROGRAM
                  </TextButton>
                )}
              </li>
            </ul>
          </Grid>
          <Grid item xs={0.1} className={style.border}></Grid>
          <Grid item xs={4.5} justifyContent="center" className={style.content}>
            <div className={style.box}>
              {eventsData[eventIndex].description.map((desc) => (
                <>
                  {desc} <br />
                  <br />
                </>
              ))}
            </div>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Grid container className={style.grid} id="competitions">
          <Grid item xs={1.6}></Grid>
          <Grid item xs={8}>
            <div className={style.events}>COMPETITIONS</div>
          </Grid>
          <Grid item xs={2.2}></Grid>
          <Grid item xs={1.4}></Grid>
          <Grid item xs={4}>
            <ul className={style.head}>
              {competitionData[competitionIndex].name}
            </ul>
            <ul className={style.list}>
              <li>
                {competitionIndex !== 0 && (
                  <TextButton
                    onClick={() => {
                      setCompetitionIndex(0);
                    }}
                  >
                    IDEA VALIDATION CAMP
                  </TextButton>
                )}
              </li>
              <li>
                {competitionIndex !== 1 && (
                  <TextButton
                    onClick={() => {
                      setCompetitionIndex(1);
                    }}
                  >
                    BIZ-QUIZ
                  </TextButton>
                )}
              </li>
              <li>
                {competitionIndex !== 2 && (
                  <TextButton
                    onClick={() => {
                      setCompetitionIndex(2);
                    }}
                  >
                    E-PIC
                  </TextButton>
                )}
              </li>
              <li>
                {competitionIndex !== 3 && (
                  <TextButton
                    onClick={() => {
                      setCompetitionIndex(3);
                    }}
                  >
                    TRADEPOINT
                  </TextButton>
                )}
              </li>
              <li>
                {competitionIndex !== 4 && (
                  <TextButton
                    onClick={() => {
                      setCompetitionIndex(4);
                    }}
                  >
                    THE PITCH SHOWDOWN
                  </TextButton>
                )}
              </li>
              <li>
                {competitionIndex !== 5 && (
                  <TextButton
                    onClick={() => {
                      setCompetitionIndex(5);
                    }}
                  >
                    CASE STUDY CHALLENGE
                  </TextButton>
                )}
              </li>
            </ul>
          </Grid>
          <Grid item xs={0.1} className={style.border1}></Grid>
          <Grid
            item
            xs={4.5}
            justifyContent="center"
            alignContent="center"
            className={style.content}
          >
            <div className={style.box2}>
              {competitionData[competitionIndex].description.map((desc) => (
                <>
                  {desc} <br />
                  <br />
                </>
              ))}
            </div>
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
