import React from "react";
import { Josefin_Sans } from "next/font/google";
import { Box, Typography } from "@mui/material";
import speaker from "/public/speaker1.png";
import ESummit25 from "/public/ESummit25.png";
import Link from "next/link";

const josefinSans = Josefin_Sans({ subsets: ["latin"], display: "swap" });


//Would later remove the link from this
const sponsors = [
  { name: "Speaker", image: speaker.src, link: "https://example.com/speaker1" },
  { name: "Speaker", image: speaker.src, link: "https://example.com/speaker1" },
  { name: "Speaker", image: speaker.src, link: "https://example.com/speaker1" },
  { name: "Speaker", image: speaker.src, link: "https://example.com/speaker1" },
  { name: "Speaker", image: speaker.src, link: "https://example.com/speaker1" },
  { name: "Speaker", image: speaker.src, link: "https://example.com/speaker1" },
  { name: "Speaker", image: speaker.src, link: "https://example.com/speaker1" },
];

function Marquee({ sponsors, topPosition }) {
  return (
    <div
      style={{
        position: "absolute",
        top: topPosition,
        left: "214px",
        width: "1315px",
        height: "273px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          animation: "scrollLeft 20s linear infinite",
          gap: "0px",
          height: "100%",
        }}
      >
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "205.884px",
              height: "273px",
              flexShrink: 0,
              marginRight: "20px",
              border: "2px solid #FFF",
              background: "rgba(143, 135, 135, 0.10)",
              padding: "10px",
            }}
          >
            <div
              style={{
                width: "181px",
                height: "182px",
                flexShrink: 0,
                borderRadius: "4px",
                background: `url(${sponsor.image}) lightgray 50% / cover no-repeat`,
                marginBottom: "10px",
              }}
            ></div>
            <div
              style={{
                width: "160px",
                height: "24px",
                backgroundColor: "#FFFFFF",
                textAlign: "center",
                lineHeight: "24px",
                opacity: "0",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <span style={{ color: "#000", fontSize: "14px" }}>
                {sponsor.name}
              </span>
            </div>
          </div>
        ))}
        {sponsors.map((sponsor, index) => (
          <div
            key={index + sponsors.length}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "205.884px",
              height: "273px",
              flexShrink: 0,
              marginRight: "20px",
              border: "2px solid #FFF",
              background: "rgba(143, 135, 135, 0.10)",
              padding: "10px",
            }}
          >
            <div
              style={{
                width: "181px",
                height: "182px",
                flexShrink: 0,
                borderRadius: "4px",
                background: `url(${sponsor.image}) lightgray 50% / cover no-repeat`,
                marginBottom: "10px",
              }}
            ></div>
            <div
              style={{
                width: "160px",
                height: "24px",
                backgroundColor: "#FFFFFF",
                textAlign: "center",
                lineHeight: "24px",
                opacity: "0",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <span style={{ color: "#000", fontSize: "14px" }}>
                {sponsor.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        @media (max-width: 1200px) {
          div {
            left: 0;
            width: 100%;
          }

          div > div {
            width: 33.33%;
          }
        }

        @media (max-width: 768px) {
          div {
            left: 0px;
            width: 100%;
          }

          div > div {
            width: 50%;
          }
        }

        @media (max-width: 480px) {
          div {
            left: -50px;
            width: 100%;
          }

          div > div {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

function SponsorsMain() {
  const sponsors1 = [
    { name: "Speaker", image: speaker.src, link: "https://example.com/speaker1" },
    { name: "Speaker", image: speaker.src, link: "https://example.com/speaker1" },
    { name: "Speaker", image: speaker.src, link: "https://example.com/speaker1" },
    { name: "Speaker", image: speaker.src, link: "https://example.com/speaker1" },
    { name: "Speaker", image: speaker.src, link: "https://example.com/speaker1" },
    { name: "Speaker", image: speaker.src, link: "https://example.com/speaker1" },
    { name: "Speaker", image: speaker.src, link: "https://example.com/speaker1" },
  ];
  //Would edit the names and add text later when I would receive it.
  

  const sponsors2 = [
    { name: "Speaker", image: speaker.src, link: "https://example.com/speaker2" },
    { name: "Speaker", image: speaker.src, link: "https://example.com/speaker2" },
    { name: "Speaker", image: speaker.src, link: "https://example.com/speaker2" },
    { name: "Speaker", image: speaker.src, link: "https://example.com/speaker2" },
    { name: "Speaker", image: speaker.src, link: "https://example.com/speaker2" },
    { name: "Speaker", image: speaker.src, link: "https://example.com/speaker2" },
    { name: "Speaker", image: speaker.src, link: "https://example.com/speaker2" },
  ];

  return (
    <div
      suppressHydrationWarning
      suppressContentEditableWarning
      className={josefinSans.className}
      style={{
        position: "relative",
        backgroundImage: `url(${ESummit25.src})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        overflowY: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 10,
        }}
      ></Box>

      <div
        style={{
          position: "relative",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          overflowY: "auto",
          padding: "2rem 0",
          overflowX: "hidden",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            top: "230px",
            left: "214px",
            width: "165px",
            height: "32px",
            gap: "0px",
            fontFamily: "Josefin Sans",
            fontSize: "32px",
            fontWeight: 500,
            lineHeight: "32px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "#FFF",
          }}
        >
          SPEAKERS
        </Typography>

        <Marquee sponsors={sponsors1} topPosition="306px" />

        <div
          style={{
            height: "50px",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            top: "672px",
            left: "209px",
            width: "273px",
            height: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Josefin Sans",
              fontSize: "32px",
              fontWeight: 500,
              lineHeight: "32px",
              textAlign: "center",
              color: "#FFF",
              marginBottom: "30px",
            }}
          >
            PAST SPEAKERS
          </Typography>
        </div>

        <Marquee sponsors={sponsors2} topPosition="706px" />

        <div
          style={{
            position: "absolute",
            top: "746px",
            left: "209px",
            width: "1315px",
            height: "273px",
            gap: "0px",
            opacity: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      </div>
    </div>
  );
}

export default SponsorsMain;
