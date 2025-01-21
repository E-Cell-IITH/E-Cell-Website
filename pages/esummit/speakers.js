import React from "react";
import { Josefin_Sans } from "next/font/google";
import { Box, Typography } from "@mui/material";
import speaker from "/public/speaker1.png";
import ESummit25 from "/public/ESummit25.png";

const josefinSans = Josefin_Sans({ subsets: ["latin"], display: "swap" });

const sponsors1 = [
  { name: "Speaker", image: speaker.src, link: "https://example.com/speaker1" },
  { name: "Speaker", image: speaker.src, link: "https://example.com/speaker2" },
  { name: "Speaker", image: speaker.src, link: "https://example.com/speaker3" },
  { name: "Speaker", image: speaker.src, link: "https://example.com/speaker4" },
  { name: "Speaker", image: speaker.src, link: "https://example.com/speaker5" },
  { name: "Speaker", image: speaker.src, link: "https://example.com/speaker6" },
  { name: "Speaker", image: speaker.src, link: "https://example.com/speaker7" },
];

const sponsors2 = [
  {
    name: "Devvrat Arya",
    designation: "VP of Technology, Pepperfry",
    image:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833558/ecell/speakers/Devvrat_Arya_-_VP_of_Technology_Pepperfry_lzztpf.png",
  },
  {
    name: "Akhil Gupta",
    designation: "Founder, Nobroker",
    image:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833558/ecell/speakers/Akhil_Gupta_Founder_Nobroker_vf0ro7.png",
  },
  {
    name: "Pankaj Agarwal",
    designation: "Founder and CEO, Taghive",
    image:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833558/ecell/speakers/Pankaj_Agarwal_Founder_and_CEO_Taghive.jpg_zmxiir.png",
  },
  {
    name: "Tapan Mishra",
    designation: "Former Director, SAC ISRO",
    image:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833559/ecell/speakers/Tapan_Misra_Former_Director_SAC_ISRO_ryyzhk.png",
  },
  {
    name: "TN Hari",
    designation: "HR Head, BigBasket",
    image:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833559/ecell/speakers/TN_Hari_-_HR_Head_BigBasket_zni0io.png",
  },
  {
    name: "Dr. Onkar Rai",
    designation: "Director General, STPI",
    description: "Speaker Description here",
    image:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833558/ecell/speakers/Dr._Onkar_Rai_-_Director_General_STPI_xri0c6.png",
  },
  {
    name: "Bhagwan Chowdary",
    designation: "Professor of Finance, ISB",
    description: "Speaker Description here",
    image:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833558/ecell/speakers/Bhagwan_Chowdary_-_Professor_of_Finance_ISB_iyeal4.png",
  },
  {
    name: "Shashank Randev",
    designation: "Founder VC, 100X.VC",
    image:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833559/ecell/speakers/Shashank_Randev_-_Founder_VC_100X.VC_zftu1y.png",
  },
  {
    name: "V. Krishna Mohan",
    designation: "Executive Director, Bharat Biotech",
    image:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833559/ecell/speakers/V._Krishna_Mohan_-_Executive_Director_Bharat_Biotech_ijutbx.png",
  },
  {
    name: "SK Jana",
    designation: "Director R&D, Serum Institute",
    image:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833559/ecell/speakers/SK_Jana_-_Director_R_D_and_Manufacturing_Serum_Institute_jwrjj2.png",
  },
  {
    name: "Padma Srivastava",
    designation: "Neurologist, AIIMS",
    image:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833558/ecell/speakers/Padma_Srivastava_-_Neurologist_AIIMS_iarlr2.png",
  },
];

function Marquee({ sponsors, topPosition }) {
  // Hardcoded it to make it endless
  const extendedSponsors = [...sponsors, ...sponsors, ...sponsors, ...sponsors];

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
          animation: "scrollLeft 60s linear infinite", // Keep the speed same for both marquees
          gap: "0px",
          height: "100%",
          width: "max-content",
        }}
      >
        {extendedSponsors.map((sponsor, index) => (
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
                width: "151px",
                height: "48px",
                margin: "0 auto",
                textAlign: "center",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "24.2px",
                  color: "#FFFFFF",
                }}
              >
                {sponsor.name}
              </Typography>
            </div>

            <div
              style={{
                width: "96px",
                height: "19px",
                gap: "0px",
                backgroundColor: "transparent",
                marginTop: "10px", 
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "13px",
                  fontWeight: 200,
                  lineHeight: "normal",
                  whiteSpace: "nowrap", 
                  fontStyle: "normal",
                  color: "#FFFFFF",
                }}
              >
                {sponsor.designation}
              </Typography>
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

        div {
          will-change: transform;
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
              color: "#FFF",
            }}
          >
            PAST SPEAKERS
          </Typography>
        </div>

        <Marquee sponsors={sponsors2} topPosition="738px" />
      </div>
    </div>
  );
}

export default SponsorsMain;
