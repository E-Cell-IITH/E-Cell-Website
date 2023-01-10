// import React from 'react'

// function Card (){
//     return <div className='h-[35rem] w-[25rem] bg-[#191E32] rounded-2xl'></div>
// }

// function Speakers() {
//   return (
//     <section className=' py-5 px-5'>
//         <div>
//             <h2 className="text-center font-medium text-5xl text-blue ">
//                 SPEAKERS
//             </h2>
//         </div>
//         <div className='flex flex-row gap-6 py-8 justify-evenly'>
//             <Card/> 
//             <Card/> 
//             <Card/> 
//         </div>
//     </section>
//   )
// }

// export default Speakers

import React from "react";
import { Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Image from "next/image";

const speakers = [
  // {name:'Ashish Chauhan', designation:'MD and CEO Bombay Stock Exchange'},
  {
    name: "Saumya Ranjan Pradhan",
    designation: "Sr. Director, Industry and Innovation - Capgemini",
    imgUrl:
      "https://res.cloudinary.com/dboy04n6m/image/upload/v1673372035/Saumya_Ranjan_Pradhan_pmyqhx.jpg",
  },
  // {name:'Dr. Anurag Batra', designation:'Chairman & Editor-In-Chief, BW Businessworld'},
  {
    name: "Hussaini S F",
    designation: "Executive Director - JPMorgan & Chase",
    imgUrl:
      "https://res.cloudinary.com/dboy04n6m/image/upload/v1673372191/Hussaini_S_F_vsqlzz.jpg",
  },
  {
    name: "N. Srinivasan",
    designation: "Sr. Executive Vice President at HDFC Bank.",
    imgUrl:
      "https://res.cloudinary.com/dboy04n6m/image/upload/v1673372237/N._Srinivasan_rrkr1w.jpg",
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
    font-size: 2.5rem;
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
        <h2>SPEAKERS</h2>
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
            <Div key={item.name}>
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
