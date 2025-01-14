import React from "react";
import EsummitNavbar from "../../components/esummit25/navbar";
import { Josefin_Sans } from "next/font/google";
import { Tilt } from "react-next-tilt";
import PASSDATA from "./passdata";
import Link from "next/link";

import Device from "./Device/Device";
import { isMobile } from "react-device-detect";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const josefinSans = Josefin_Sans({ subsets: ["latin"], display: "swap" });

const Card = ({
  titlecolor,
  title,
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  price,
  cardcolor,
  cl1,
  cl2,
  cl3,
  cl4,
  cl5,
  cl6,
  cl7,
  td4,
  td5,
  td6,
  td7,
  bw,
}) => {
  return (
    <Tilt
      scale={1.05}
      tiltMaxAngleX={0}
      tiltMaxAngleY={0}
      style={{ borderRadius: "12px" }}
    >
      <Box
        sx={{
          //   width: {lg:`calc(25vw + ${bw})`},
          background: cardcolor,
          paddingTop: "3rem",
          paddingLeft: "3rem",
          paddingRight: "3rem",
          paddingBottom: "1rem",
          margin: "0.5rem",
          minWidth: "20vw",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderWidth: bw,
          borderColor: "#d3d3d3",
        }}
      >
        <div>
          <div
            style={{
              color: titlecolor,
              fontSize: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            {title}
          </div>
          <br />
          <div style={{ fontSize: "1.3rem" }}>
            <div style={{ color: cl1 }}>{c1}</div>
            <div style={{ color: cl2 }}>{c2}</div>
            <div style={{ color: cl3 }}>{c3}</div>
            <div
              style={{
                color: cl4,
                textDecoration: td4,
                fontWeight: td4 === "line-through" ? "lighter" : "normal",
              }}
            >
              {c4}
            </div>
            <div
              style={{
                color: cl5,
                textDecoration: td5,
                fontWeight: td5 === "line-through" ? "lighter" : "normal",
              }}
            >
              {c5}
            </div>
            <div
              style={{
                color: cl6,
                textDecoration: td6,
                fontWeight: td6 === "line-through" ? "lighter" : "normal",
              }}
            >
              {c6}
            </div>
            <div
              style={{
                color: cl7,
                textDecoration: td7,
                fontWeight: td7 === "line-through" ? "lighter" : "normal",
              }}
            >
              {c7}
            </div>
          </div>

          <br />
          <div
            className="flex flex-wrap space-x-5"
            style={{
              marginTop: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontWeight: "normal" }}>
              {String.fromCharCode(0x20b9)}
              {price}
            </div>

            <Button
              variant="contained"
              sx={{
                borderRadius: "0",
                color: "white",
                fontFamily: "Josefin Sans",
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1.2rem" },
                fontWeight: "700",
                textTransform: "none",
                "&.MuiButton-contained": {
                  backgroundColor: "#FF5100",
                },
                "&:hover": {
                  backgroundColor: "#B73A00",
                },
              }}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </Box>
    </Tilt>
  );
};

const Panel = () => {
  return (
    <div
      style={{
        color: "white",
        fontSize: "24px",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "95%",
        height: "auto",
        margin: "0 auto",
      }}
    >
      {/* <br /> */}
      <div
        className="flex flex-wrap justify-center"
        style={{
          fontSize: "1.7rem",
          fontWeight: "500",
          textAlign: "center",
          marginBottom: "2rem",
          letterSpacing: "0.5rem",
        }}
      >
        BUY&nbsp;ESUMMIT&nbsp;PASS
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {PASSDATA.map((pass, index) => (
          <Card
            key={index}
            titlecolor={pass.titlecolor}
            title={pass.title}
            c1={pass.co1}
            c2={pass.co2}
            c3={pass.co3}
            c4={pass.co4}
            c5={pass.co5}
            c6={pass.co6}
            c7={pass.co7}
            price={pass.price}
            cardcolor={pass.cardcolor}
            cl1={pass.cl1}
            cl2={pass.cl2}
            cl3={pass.cl3}
            cl4={pass.cl4}
            cl5={pass.cl5}
            cl6={pass.cl6}
            cl7={pass.cl7}
            td4={pass.td4}
            td5={pass.td5}
            td6={pass.td6}
            td7={pass.td7}
            bw={pass.bw}
          />
        ))}
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

function MainPasses() {
  return (
    <div
      suppressHydrationWarning
      suppressContentEditableWarning
      className={josefinSans.className}
      style={{
        position: "relative",
        backgroundImage: "url('/esummit25/bg.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // width: "100vw",
        height: "100vh",
        // overflowX: "hidden",
        // overflowY: "hidden",
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
      >
        <EsummitNavbar />
      </Box>

      <div
        style={{
          position: "relative",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflowY: "scroll", // Make content scrollable
          padding: "2rem 0",
          overflowX: "hidden",
        }}
      >
        <Panel />
      </div>
    </div>
  );
}

export default MainPasses;
