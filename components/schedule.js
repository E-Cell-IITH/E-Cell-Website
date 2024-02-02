import React from "react";
import Image from "next/image";
import { Button, Grid, Typography } from "@mui/material";
import styles from "../styles/schedule.module.css";
import { Gentium_Plus } from "next/font/google";

const gentiumnormal = Gentium_Plus({ subsets: ["latin"], weight: "400" });

const Schedule = () => {
  return (
    <div>
      <div className="text-6xl flex justify-center font-sans pt-20 pb-10 text-blue">
        SCHEDULE
      </div>
      <div
        className={styles.img1}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          className={`bg-[#C39F3F] text-[1.2rem] text-white font-bold border-[0.5rem] w-[fit-content] px-[1rem] py-[0.5rem] mb-[5rem] rounded-[0.5rem] ${gentiumnormal.className}}`}
          onClick={() => {
            window.open(
              "https://ecell.iith.ac.in/E-Summit '24_Brochure.pdf",
              "_blank"
            );
          }}
        >
          Download Brochure
        </Button>
        <br />
        <Image
          src="/Shedule_1.png"
          height={1500}
          width={1000}
          alt="timetable"
        ></Image>
        <Image
          src="/Shedule_2.png"
          height={1500}
          width={1000}
          alt="timetable"
        ></Image>
      </div>
    </div>
  );
};

export default Schedule;
