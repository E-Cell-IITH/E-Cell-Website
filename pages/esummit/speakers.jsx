import React from "react";
import { Josefin_Sans, Inter } from "next/font/google";
import { Box, Typography } from "@mui/material";
import speaker from "/public/speaker1.png";
import ESummit25 from "/public/ESummit25.png";
import EsummitNavbar from "../../components/ESummt/navbar";
import { useMediaQuery } from "@mui/material";
import Head from "next/head";

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
    image:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833558/ecell/speakers/Dr._Onkar_Rai_-_Director_General_STPI_xri0c6.png",
  },
  {
    name: "Bhagwan Chowdary",
    designation: "Professor of Finance, ISB",
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

// function Marquee({ sponsors, topPosition }) {
//   // Hardcoded it to make it endless
//   const extendedSponsors = [...sponsors, ...sponsors, ...sponsors, ...sponsors];

//   return (
//     <div
//     style={{
//       position: "absolute",
//       top: topPosition,
//       left: "0", // Start from the left edge of the parent
//       right: "0", // Extend to the right edge of the parent
//       margin: "0 auto", // Center horizontally within the parent
//       width: "100%", // Make it span the width of its parent
//       maxWidth: "100%", // Constrain it to the parent's maxWidth
//       height: "273px",
//       boxSizing: "border-box",
//       overflow: "hidden",
//     }}
//   >
//       <div
//         style={{
//           display: "flex",
//           animation: "scrollLeft 70s linear infinite", // Keep the speed same for both marquees
//           gap: "0px",
//           height: "100%",
//           width: "max-content",
//         }}
//       >
//         {extendedSponsors.map((sponsor, index) => (
//           <div
//             key={index}
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               width: "205.884px",
//               height: "273px",
//               flexShrink: 0,
//               marginRight: "20px",
//               border: "2px solid #FFF",
//               background: "rgba(143, 135, 135, 0.10)",
//               padding: "10px",
//             }}
//           >
//             <div
//               style={{
//                 width: "181px",
//                 height: "182px",
//                 flexShrink: 0,
//                 borderRadius: "4px",
//                 background: `url(${sponsor.image}) lightgray 50% / cover no-repeat`,
//                 marginBottom: "10px",
//               }}
//             ></div>

//             {/* Text Box Section */}
//             <div
//               style={{
//                 width: "151px",
//                 height: "48px",
//                 margin: "0 auto",
//                 textAlign: "center",
//                 borderRadius: "4px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontFamily: "Inter",
//                   fontSize: "18px",
//                   fontWeight: 400,
//                   lineHeight: "24.2px",
//                   color: "#FFFFFF",
//                 }}
//               >
//                 {sponsor.name}
//               </Typography>
//             </div>

//             <div
//               style={{
//                 width: "96px",
//                 height: "19px",
//                 gap: "0px",
//                 backgroundColor: "transparent",
//                 marginTop: "10px",
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontFamily: "Inter",
//                   fontSize: "13px",
//                   fontWeight: 200,
//                   lineHeight: "normal",
//                   whiteSpace: "nowrap",
//                   fontStyle: "normal",
//                   color: "#FFFFFF",
//                 }}
//               >
//                 {sponsor.designation}
//               </Typography>
//             </div>
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         @keyframes scrollLeft {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-100%);
//           }
//         }

//         div {
//           will-change: transform;
//         }

//         @media (max-width: 1200px) {
//           div {
//             left: 0;
//             width: 100%;
//           }

//           div > div {
//             width: 33.33%;
//           }
//         }

//         @media (max-width: 768px) {
//           div {
//             left: 0px;
//             width: 100%;
//           }

//           div > div {
//             width: 50%;
//           }
//         }

//         @media (max-width: 480px) {
//           div {
//             left: -50px;
//             width: 100%;
//           }

//           div > div {
//             width: 100%;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

function Marquee({ sponsors, topPosition }) {
  const extendedSponsors = [...sponsors, ...sponsors, ...sponsors, ...sponsors];

  return (
    <div
      className="marquee-container"
      style={{
        position: "absolute",
        top: topPosition,
        left: "0",
        right: "0",
        margin: "0 auto",
        width: "100%",
        maxWidth: "100%",
        height: "273px",
        boxSizing: "border-box",
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <div
        className="marquee-content"
        style={{
          display: "inline-flex",
          animation: "scrollLeft 70s linear infinite",
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
                width: "100%", // Take full width of the container
                display: "flex",
                justifyContent: "center", // Center horizontally
                alignItems: "center", // Center vertically (optional if needed)
                marginTop: "10px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "13px",
                  fontWeight: 200,
                  lineHeight: "normal",
                  fontStyle: "normal",
                  color: "#FFFFFF",
                  textAlign: "center", // Center text inside Typography
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

        .marquee-container:hover .marquee-content {
          animation-play-state: paused; // Pause animation on hover
        }

        .marquee-container {
          scrollbar-width: thin; // Show thin scrollbar
          scrollbar-color: lightgray transparent;
        }

        .marquee-container::-webkit-scrollbar {
          height: 8px; // Horizontal scrollbar height
        }

        .marquee-container::-webkit-scrollbar-thumb {
          background: lightgray; // Scrollbar color
          border-radius: 4px;
        }

        .marquee-container::-webkit-scrollbar-thumb:hover {
          background: darkgray; // Scrollbar color on hover
        }
      `}</style>
    </div>
  );
}

function SponsorsMain() {
  const isXs = useMediaQuery("(max-width: 480px)");
  const isSm = useMediaQuery("(max-width: 768px)");

  const topPosition = isXs ? "80px" : isSm ? "60px" : "60px"; // Changed here

  return (
    <div
      suppressHydrationWarning
      suppressContentEditableWarning
      className={josefinSans.className}
      style={{
        position: "relative",
        backgroundImage: "url(/esummit25/bg.png)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        overflowY: "hidden",
      }}
    >
       <Head>
        <title>E-Summit Speakers </title>
        <meta
          name="google-site-verification"
          content="agHaKoDcApHadKU7BhRCOJK0w5SRZtQCG9YxNKZBGvc"
        />
        <link rel="canonical" href="https://ecell.iith.ac.in/esummit" />
      </Head>

      <Box
        sx={{
          position: "relative",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 10,
        }}
      >
        <EsummitNavbar />
      </Box>

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
            top: { xs: "30px", sm: "5px" },
            left: { xs: "50%", sm: "214px" },
            transform: { xs: "translateX(-50%)", sm: "none" },
            width: { xs: "auto", sm: "165px" },
            height: "32px",
            gap: "0px",
            fontFamily: "Josefin Sans",
            fontSize: { xs: "20px", sm: "32px" },
            whiteSpace: "nowrap",
            fontWeight: 500,
            lineHeight: "32px",
            color: "#FFF",
            textAlign: "center",
          }}
        >
          PAST SPEAKERS
        </Typography>

        <Box
          sx={{
            maxWidth: "85%",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <Marquee sponsors={sponsors2} topPosition={topPosition} />
        </Box>
      </div>
    </div>
  );
}

export default SponsorsMain;
