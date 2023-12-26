import React from "react";
import { Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Image from "next/image";

const speakers = [
  // {name:'Ashish Chauhan', designation:'MD and CEO Bombay Stock Exchange'},
  {
    name: "Devvrat Arya",
    designation: "VP of Technology, Pepperfry",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833558/ecell/speakers/Devvrat_Arya_-_VP_of_Technology_Pepperfry_lzztpf.png",
  },
  // {name:'Dr. Anurag Batra', designation:'Chairman & Editor-In-Chief, BW Businessworld'},
  {
    name: "Akhil Gupta",
    designation: "Founder, Nobroker",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833558/ecell/speakers/Akhil_Gupta_Founder_Nobroker_vf0ro7.png",
  },
  {
    name: "Pankaj Agarwal",
    designation: "Founder and CEO, Taghive",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833558/ecell/speakers/Pankaj_Agarwal_Founder_and_CEO_Taghive.jpg_zmxiir.png",
  },
  // {name:'Naga Bharath Daka', designation:'Co-Founder and COO at Skyroot Aerospace'},
  {
    name: "Tapan Mishra",
    designation: "Former Director, Space Applications Centre ISRO",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833559/ecell/speakers/Tapan_Misra_Former_Director_SAC_ISRO_ryyzhk.png",
  },
  // {name:'Hansal Mehta', designation:'Indian Film Director'},
  // {name:'Vaibhav Sisinty', designation:'Growth Strategist'},
  // {name:'TV Mohandas Pai ', designation:'Padma Shri Recipient'},
  {
    name: "TN Hari",
    designation: "HR Head, BigBasket",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833559/ecell/speakers/TN_Hari_-_HR_Head_BigBasket_zni0io.png",
  },
  // {name:'Jai Vijayan', designation:' Founder and CEO, Tekion Group'},
  // {name:'Kiran DM ', designation:'CEO, ONGC Foundation'},
  {
    name: "Dr. Onkar Rai",
    designation: "Director General, STPI",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833558/ecell/speakers/Dr._Onkar_Rai_-_Director_General_STPI_xri0c6.png",
  },
  // {name:'Aloknath De', designation:'CTO, Samsung R&D Institute'},
  {
    name: "Bhagwan Chowdary",
    designation: "Professor of Finance, ISB",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833558/ecell/speakers/Bhagwan_Chowdary_-_Professor_of_Finance_ISB_iyeal4.png",
  },
  {
    name: "Shashank Randev",
    designation: "Founder VC, 100X.VC",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833559/ecell/speakers/Shashank_Randev_-_Founder_VC_100X.VC_zftu1y.png",
  },
  {
    name: "V. Krishna Mohan",
    designation: "Executive Director, Bharat Biotech",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833559/ecell/speakers/V._Krishna_Mohan_-_Executive_Director_Bharat_Biotech_ijutbx.png",
  },
  {
    name: "SK Jana",
    designation: "Director R&D and Manufacturing, Serum Institute",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833559/ecell/speakers/SK_Jana_-_Director_R_D_and_Manufacturing_Serum_Institute_jwrjj2.png",
  },
  {
    name: "Padma Srivastava",
    designation: "Neurologist, AIIMS",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1670833558/ecell/speakers/Padma_Srivastava_-_Neurologist_AIIMS_iarlr2.png",
  },
];

const Div = styled.div`
  background-color: black;
  min-height: 16rem;
  max-height: 100%;
  width: 100vw;
  color: white;
`;

const Name = styled.h2`
  color: "white";
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0;

  @media screen and (min-width: 992px) {
    font-size: 2.8rem;
    text-align: left;
  }
`;

const Desgination = styled.h3`
  color: white;
  font-size: 1rem;
  text-align: center;
  font-weight: 400;
  margin-top: 0.05rem;
  @media screen and (min-width: 992px) {
    font-size: 1.5rem;
    text-align: left;
  }
`;

function SpeakerCarousel() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          fontSize: { xs: "1.2rem", lg: "2.5rem" },
          color: "transparent",
          background:
            "linear-gradient(93.82deg, rgba(56, 128, 231, 1) 0.01%, rgba(98, 215, 216, 1) 38.13%)",
          backgroundClip: "text",
          textAlign: "center",
        }}
      >
        <h2>PREVIOUS SPEAKERS</h2>
      </Grid>
      <Grid
        item
        xs={12}
        justifyContent="center"
        alignItems="center"
        sx={{ px: { lg: "10rem" } }}
      >
        <Carousel
          animation="slide"
          duration={900}
          navButtonsAlwaysVisible={true}
          autoPlay={true}
        >
          {speakers.map((item, i) => (
            <Div key={i}>
              <Grid container item xs={12}>
                <Grid item container xs={12} lg={4} justifyContent="center">
                  <Box
                    component="div"
                    sx={{
                      height: { xs: "15rem", lg: "25rem" },
                      width: { xs: "11.25rem", lg: "18.75rem" },
                      overflow: "hidden",
                      position: "relative",
                      borderRadius: { xs: "0.8rem", lg: "1rem" },
                      background: "#0b0b0b",
                    }}
                  >
                    <Image
                      objectFit="contain"
                      layout="fill"
                      priority
                      src={item.imgUrl}
                      alt={item.name}
                      style={{ height: "100%" }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} lg={8}>
                  <Name>{item.name}</Name>
                  <Desgination>{item.designation}</Desgination>
                </Grid>
              </Grid>
            </Div>
          ))}
        </Carousel>
        ``
      </Grid>
    </Grid>
  );
}

export default SpeakerCarousel;
