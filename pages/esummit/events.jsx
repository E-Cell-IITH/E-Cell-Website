import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { Josefin_Sans } from "next/font/google";
import EventsCard from "../../components/ESummt/evenetsCard";
import EsummitNavbar from "../../components/ESummt/navbar";
import Image from "next/image";
import Head from "next/head";

const josefinSans = Josefin_Sans({ subsets: ["latin"], display: "swap" });

const EventsSection = () => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  const events = [
    {
      title: "Speed Networking",
      description:
        "It’s an exciting single-round competition where teams of 1-5 unleash their creativity and marketing skills. Given a random product from a pre-selected list, teams have five minutes to craft an unforgettable commercial or skit.",
      image: "/esummit25/speed-networking.png",
    },
    {
      title: "Startup Olympiad",
      description:
        "A Product Management Competition in collaboration with The Product Folks, where participants get to solve real-world challenges by showcasing their creativity, problem-solving, and strategic thinking. This is a great opportunity to learn the basics of product management.",
      image: "/esummit25/startup-olympiad.png",
    },
    {
      title: "Mad Over Marketing",
      description:
        "It’s an exciting single-round competition where teams of 1-5 unleash their creativity and marketing skills. Given a random product from a pre-selected list, teams have five minutes to craft an unforgettable commercial or skit.",
      image: "/esummit25/mad-over-marketing.png",
    },
    {
      title: "Scavenger Hunt",
      description:
        "event details -This startup exhibition bridges academia, venture capitalists, and entrepreneurs. It offers startups a chance to showcase their products and network with industry leaders. An unparalleled platform to build connections and gain visibility.",
      image: "/esummit25/scavenger-hunt.png",
    },
  ];

  const bigEvents = [
    {
      title: "CEO's Summit",
      description:
        "is a premier case study competition that tests leadership, decision-making, and strategic skills through real-world business challenges. Compete with brilliant minds and showcase your potential to lead companies to success.",
      image: "/esummit25/ceo-summit.png",
      date: "12/17/1777",
    },
    // {
    //   title: "The Stock Simulation Challenge",
    //   description:
    //     "In collaboration with Stockpro, this competition tests participants' understanding of financial markets and investment skills.",
    //   image: "/esummit25/stock.png",
    //   date: "12/17/1777",
    // },
  ];

  return (
    <div
      className={josefinSans.className}
      style={{
        position: "relative",
        backgroundImage: "url('/esummit25/bg.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        overflowY: "auto",
      }}
    >
      <Head>
        <title>E-Summit 2025 Events</title>
        <meta
          name="google-site-verification"
          content="agHaKoDcApHadKU7BhRCOJK0w5SRZtQCG9YxNKZBGvc"
        />
        <link rel="canonical" href="https://ecell.iith.ac.in/esummit/events" />
      </Head>

      {/* Navbar */}
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

      {/* Events Section */}
      <Box
        sx={{
          width: { base: "95vw", xs: "100vw" },
          maxWidth: "95vw",
          margin: "0 auto",
        }}
      >
        <Typography
          className="flex flex-wrap justify-center"
          color={"white"}
          sx={{
            fontSize: { md: "1.7rem", sm: "1.5rem", xs: "1.2rem" },
            fontWeight: "500",
            textAlign: "center",
            marginBottom: "2rem",
            letterSpacing: { md: "0.5rem", sm: "0.4rem", xs: "0.3rem" },
          }}
        >
          EVENTS
        </Typography>
        {/* <Typography
          sx={{
            width: { xs: "auto", sm: "165px" },
            height: "32px",
            // gap: "0px",
            fontFamily: "Josefin Sans",
            fontSize: { xs: "20px", sm: "32px" },
            whiteSpace: "nowrap",
            fontWeight: 500,
            lineHeight: "32px",
            color: "#FFF",
            textAlign: "center",
            marginLeft: "56px",
            marginBottom: "10px",
            justifyContent: "center",
            display: "flex",


          }}
        >
          EVENTS
        </Typography> */}

        <Grid container spacing={4} justifyContent="center">
          {isSmallScreen ? (
            // Single Column Layout for Small Screens
            <>
              {events.map((event, index) => (
                <Grid
                  item
                  xs={12}
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <EventsCard
                    url={event.image}
                    title={event.title}
                    description={event.description}
                    redirectionUrl={`/esummit25/${event.title.replace(
                      /\s+/g,
                      "-"
                    )}.pdf`}
                  />
                </Grid>
              ))}

              {bigEvents.map((event, index) => (
                <Grid
                  item
                  xs={12}
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <EventsCard
                    url={event.image}
                    title={event.title}
                    description={event.description}
                    redirectionUrl={`/esummit25/${event.title.replace(
                      /\s+/g,
                      "-"
                    )}.pdf`}
                  />
                </Grid>
              ))}
            </>
          ) : (
            // Desktop View with Grid Layout
            <>
              {/* First Column (Events 1 & 2) */}
              <Grid
                item
                md={4}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <EventsCard
                  url={events[0].image}
                  title={events[0].title}
                  description={events[0].description}
                  redirectionUrl={`/esummit25/${events[0].title.replace(
                    /\s+/g,
                    "-"
                  )}.pdf`}
                />
                <EventsCard
                  url={events[1].image}
                  title={events[1].title}
                  description={events[1].description}
                  redirectionUrl={`/esummit25/${events[1].title.replace(
                    /\s+/g,
                    "-"
                  )}.pdf`}
                />
              </Grid>

              <Grid
                mt={"40px"}
                item
                xs={12}
                md={4}
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
              >
                <Box
                  onClick={() => {
                    window.open(
                      `/esummit25/${bigEvents[0].title.replace(
                        /\s+/g,
                        "-"
                      )}.pdf`,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      width: 450,
                      display: "flex",
                      flexDirection: "row", // Ensure content is in a row
                      alignItems: "start",
                      justifyContent: "space-between",
                      color: "white",
                      backgroundColor: "#181828",
                      borderRadius: 0,
                      // border: "1px solid #8A6BE6",
                      background: "rgba(143, 135, 135, 0.10)",
                      borderTop: "1.8px solid rgba(255, 255, 255, 0.79)",
                      borderBottom: "1.2px solid rgb(197, 197, 197)",
                      borderLeft: "1px solid rgba(255, 255, 255, 0.3)",
                      borderRight: "1px solid rgba(255, 255, 255, 0.3)",
                      padding: 2,
                      fontFamily: "Inter",
                    }}
                  >
                    {/* Image and Title */}
                    <Grid
                      item
                      xs={6}
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <Image
                        src={bigEvents[0].image}
                        alt={bigEvents[0].title}
                        width={200}
                        height={140}
                        sx={{
                          backgroundColor: "#E0E0E0",
                          borderRadius: 1,
                          width: "216px",
                        }}
                      />
                      <Typography
                        mt={"16px"}
                        ml={"8px"}
                        sx={{
                          fontSize: "22px",
                        }}
                        variant="body1"
                      >
                        {bigEvents[0].title}
                      </Typography>
                    </Grid>

                    {/* Description */}
                    <Grid
                      item
                      xs={6}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ ml: 2, fontSize: "16px", fontWeight: 200 }}
                      >
                        {bigEvents[0].description}
                      </Typography>
                    </Grid>
                  </Box>
                </Box>

                {/* <Box>
                  <Box
                    sx={{
                      width: 450,
                      display: "flex",
                      flexDirection: "row", // Ensure content is in a row
                      alignItems: "start",
                      justifyContent: "space-between",
                      color: "white",
                      backgroundColor: "#181828",
                      borderRadius: 0,
                      // border: "1px solid #8A6BE6",
                      background: "rgba(143, 135, 135, 0.10)",
                      borderTop: "1.8px solid rgba(255, 255, 255, 0.79)",
                      borderBottom: "1.2px solid rgb(197, 197, 197)",
                      borderLeft: "1px solid rgba(255, 255, 255, 0.3)",
                      borderRight: "1px solid rgba(255, 255, 255, 0.3)",
                      padding: 2,
                      fontFamily: "Inter",
                    }}
                  >
                    <Image
                      src={bigEvents[1].image}
                      alt={bigEvents[1].title}
                      width={168}
                      height={140}
                      sx={{
                        backgroundColor: "#E0E0E0",
                        borderRadius: 1,
                      }}
                    />
                    <Grid
                      ml={2}
                      item
                      sx={{
                        flexDirection: "column",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "22px",
                        }}
                        variant="body1"
                      >
                        {bigEvents[1].title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{ fontSize: "14px", fontWeight: 100 }}
                      >
                        {bigEvents[1].description}
                      </Typography>
                    </Grid>
                  </Box>
                </Box> */}
              </Grid>

              {/* Third Column (Events 3 & 4) */}
              {/* <div
                      
                      style={{
                      maxWidth: "331px",
                      }}
                      > */}

              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <EventsCard
                  url={events[2].image}
                  title={events[2].title}
                  description={events[2].description}
                  redirectionUrl={`/esummit25/${events[2].title.replace(
                    /\s+/g,
                    "-"
                  )}.pdf`}
                />
                <EventsCard
                  url={events[3].image}
                  title={events[3].title}
                  description={events[3].description}
                  redirectionUrl={`/esummit25/${events[3].title.replace(
                    /\s+/g,
                    "-"
                  )}.pdf`}
                />
              </Grid>
              {/* </div> */}
            </>
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default EventsSection;
