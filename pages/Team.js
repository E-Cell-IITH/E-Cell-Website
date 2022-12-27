import React, { useRef, useEffect } from "react";
import Navbar from "../components/first";
import Card from "../components/Card";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import style2 from "../styles/changesFirst.module.css";
import Managers from "../components/Managers";
import parallax from "../styles/team.module.css";
import Head from "next/head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const heads = [
  {
    domain: "Operations",
    heads: [
      {
        name: "Anish Ambavat",
        imgUrl:
          "https://res.cloudinary.com/dwsverefw/image/upload/v1665876113/ecell/team/Anish_Ambavat_Operations_Head_1_dioism.jpg",
      },
      {
        name: "Yash Sharma",
        imgUrl:
          "https://res.cloudinary.com/dwsverefw/image/upload/v1665876113/ecell/team/Yash_Sharma_Operations_Head_1_pr9bwl.jpg",
      },
    ],
  },
  {
    domain: "Web",
    heads: [
      {
        name: "Anuj Pandey",
        imgUrl:
          "https://res.cloudinary.com/dwsverefw/image/upload/v1665876114/ecell/team/Anuj_Pandey_WebHead_1_mrhxks.jpg",
      },
    ],
  },
  {
    domain: "Ideation",
    heads: [
      {
        name: "Yashas Yajur",
        imgUrl:
          "https://res.cloudinary.com/dwsverefw/image/upload/v1665876113/ecell/team/Yashas_Ideation_1_k4xjd1.jpg",
      },
      {
        name: "Nandita Lakshmi",
        imgUrl:
          "https://res.cloudinary.com/dwsverefw/image/upload/v1665876114/ecell/team/Nandita_Ideation_1_qdovck.jpg",
      },
    ],
  },
  {
    domain: "Sponsorship",
    heads: [
      {
        name: "Tanay Shah",
        imgUrl:
          "https://res.cloudinary.com/dwsverefw/image/upload/v1665876488/ecell/team/TanmayShah_SponHead_1_apyqpk.png",
      },
    ],
  },
  {
    domain: " PR & Networking",
    heads: [
      {
        name: "Tanay Yadav",
        imgUrl:
          "https://res.cloudinary.com/dwsverefw/image/upload/v1665876488/ecell/team/IMG_20220815_141142_Bokeh__01_1_it1j2m.jpg",
      },
    ],
  },
  {
    domain: "Design",
    heads: [
      {
        name: "Viren Soni",
        imgUrl:
          "https://res.cloudinary.com/dwsverefw/image/upload/v1665876488/ecell/team/Viren_Design_1_vvcrml.png",
      },
    ],
  },
];

function Team() {
  const parent = useRef();
  const tl = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#head",
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          "#head > *",
          {
            y: 20,
            autoAlpha: 0.2,
            scale: 0.9,
          },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.3,
          }
        );

      const cards = gsap.utils.toArray(".card");
      console.log(cards);
      cards.forEach((card) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 50%",
            },
          })
          .fromTo(
            card.children,
            {
              y: 20,
              autoAlpha: 0,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
              stagger: 0.3,
            }
          );
      });
    }, parent);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={parent}>
      <Head>
        <title>Team Entrepreneurship Cell IIT Hyderabad</title>
      </Head>
      <Navbar heading="Team E-Cell" desc={false} />
      <div>
        <Card
          id="head"
          notCard={true}
          imgUrl={
            "https://res.cloudinary.com/dwsverefw/image/upload/v1665868302/ecell/team/Shreyansh_Agarwal_Overall_Head_1_bi10yy.jpg"
          }
          name="Shreyansh Agarwal"
          position="Overall Head"
          sx={{ py: 5 }}
          bold
        />
      </div>
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontFamily: "Montserrat",
          mt: 6,
          fontSize: {
            xs: "2rem",
            md: "3rem",
          },
          textAlign: "center",
          fontWeight: 400,
          textAlignLast: "center",
          fontWeight: 600,
          position: "relative",
          zIndex: 20,
        }}
      >
        DOMAIN HEADS
      </Typography>
      <Grid
        container
        alignSelf={"center"}
        id="heads"
        xs={12}
        sx={{
          position: "relative",
          zIndex: 30,
          justifyContent: "center",
          mt: 2,
          px: {
            lg: "10vw",
          },
        }}
        spacing={0}
        className={style2.gap}
      >
        {heads.map((domainInfo) => (
          <Grid
            container
            item
            key={domainInfo}
            lg={4}
            sm={12}
            sx={{ mt: "1rem" }}
          >
            {/* Domain Title */}
            <Grid item xs={12} justifyContent="center">
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontSize: {
                    sm: "2.5rem",
                    md: "2rem",
                    xxl: "2.5rem",
                  },
                  textAlign: "center",
                  fontWeight: 400,
                  textAlignLast: "center",
                  fontWeight: 600,
                }}
              >
                {domainInfo.domain}
              </Typography>
              {/* Cards of heads */}
              <Grid container item spacing={5} justifyContent="center">
                {domainInfo.heads.map((head, index) => (
                  <React.Fragment key={head}>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      sx={{ marginTop: { md: "2rem", xs: "1.325rem" } }}
                    >
                      <Card
                        className="card"
                        name={head.name}
                        imgUrl={head.imgUrl}
                      />
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>

      {/* ------------------------------------------------------ */}
      {/* Managers section */}
      <Managers />
    </div>
  );
}

export default Team;
