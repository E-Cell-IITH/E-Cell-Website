import Image from "next/image";
import React from "react";
import style from "../../styles/workshops.module.css";
import Link from "next/link";

const speakers = [
  {
    name: "Dr Ravishankar Polisetty",
    designation: "MD, CEO, Director R&D - Sai Ganga Panakeia Pvt. Ltd",
    imgUrl:
      "https://res.cloudinary.com/dbmw0xoar/image/upload/v1673641231/ecell/Dr_Ravishankar_Polisetty_MD_CEO_Director_R_D_-_Sai_Ganga_Panakeia_Pvt._Ltd_fai7su.jpg",
  },
  {
    name: "Sandip Poddar",
    designation: "Co-Founder and Director Navikarna Ventures",
    imgUrl:
      "https://res.cloudinary.com/dbmw0xoar/image/upload/v1673641283/ecell/Sandip_Poddar_-_Co-Founder_and_Director_Navikarna_Ventures_cqkeev.jpg",
  },
  {
    name: "Udaya Kumar Dintyala",
    designation:
      "Ex. Exec. Director - ITO at AT&T Global Business Services India",
    imgUrl:
      "https://res.cloudinary.com/dbmw0xoar/image/upload/v1673641349/ecell/Udaya_Kumar_Dintyala_Ex._Exec._Director_-_ITO_at_AT_T_Global_Business_Services_India_pyjzwt.jpg",
  },
];

const KeySpeakers = () => {
  return (
    <section className="text-white flex flex-col justify-center items-center px-[3rem] lg:px-0 lg:pb-[3rem] mb-[4rem]">
      <div className="text-5xl text-center text-blue mb-16">KEYNOTE SPEAKERS</div>
      <div className="w-[80%] sm:max-w-[49.75rem] py-[2rem] lg:py-[0rem] grid lg:grid-cols-3 mx-auto gap-10 md:grid-cols-2 grid-cols-1">
        {speakers.map((item, i) => (
          <div
            className="flex flex-col gap-5 text-center rounded-md p-1 hover:scale-105 transition-all  items-center"
            key={`${item} ${i}`}
          >
            <Image
              height="200"
              width="200"
              src={item.imgUrl}
              alt={item.name}
              className="rounded-sm"
            />
            <p className="font-normal">{item.name}</p>
            <p className="font-normal">{item.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeySpeakers;
