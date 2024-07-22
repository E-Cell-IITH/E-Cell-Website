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
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

const heads = [
  {
    domain: "Operations",
    heads: [
      {
        name: "Dasari Ram Vasanth",
        imgUrl:
          "/team24/dasari_ram.png",
        email: "ms22btech11011@iith.ac.in",
        linkedIN: "http://www.linkedin.com/in/ram-vasanth-dasari-2852b4265",
      },
    ],
  },
  {
    domain: "Web",
    heads: [
      {
        name: "Bhaskar Mandal",
        imgUrl:"/team24/Bhaskar_Mandal.png",
        email: "ms22btech11010@iith.ac.in",
        linkedIN: "http://linkedin.com/in/bhaskaraa45",
      },
    ],
  },
  {
    domain: "Ideation",
    heads: [
      {
        name: "Divya Rajparia",
        imgUrl:
          "/team24/divya_rajparya.png",
        email: "es22btech11013@iith.ac.in",
        linkedIN: "https://www.linkedin.com/in/divya-rajparia-237786205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Jyothir Vishnu Bharadwaja Perugu",
        imgUrl:
        "/team24/jyothir_idea.png",
        email:"mi23mtech14003@iith.ac.in",
        linkedIN:"https://www.linkedin.com/in/jyothir-vishnu-bharadwaja-perugu-8401091a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      },
    ],
  },
  {
    domain: "Events & Competitions",
    heads: [
      {
        name: "Devansh Jain",
        imgUrl:
          "/team24/devansh_jain.png",
        email: "ee22btech11018@iith.ac.in",
        linkedIN: "https://www.linkedin.com/in/devansh-jain-072a5428a",
      },
    ],
  },
  {
    domain: "Corporate Relations & Finance",
    heads: [
      {
        name: "Avantika Nair",
        imgUrl:
          "/team24/avantika_nair.png",
        email: "ms22btech11008@iith.ac.in",
        linkedIN: "https://www.linkedin.com/in/avantika-nair-523a94254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
    ],
  },
  {
    domain: "Design and Creatives",
    heads: [
      {
        name: "Vyom Chauhan",
        imgUrl:
          "/team24/vyom.png",
        email: "bd22bdes11019@iith.ac.in",
        linkedIN: "https://www.linkedin.com/in/vyom-chauhan-11b7892b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ],
  },
  {
    domain: "PR & Networking",
    heads: [
      {
        name: "Swapnil Rawal ",
        imgUrl:
          "/team24/swapnil_rawal.png",
        email: "ce22btech11047@iith.ac.in",
        linkedIN: "https://www.linkedin.com/in/swapnil-rawal-b91460252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Tejasri Relangi ",
        imgUrl:
          "/team24/relangi.png",
        email: "ms22btech11020@iith.ac.in",
        linkedIN: "http://linkedin.com/in/rtejasri",
      },
    ],
  },
  {
    domain: "Media and Outreach",
    heads: [
      {
        name: "Aditya Heshi",
        imgUrl:
          "/team24/aditya_heishi.png",
        email: "bd22bdes11020@iith.ac.in",
        linkedIN: "https://www.linkedin.com/in/adityaheshi/",
      },
    ],
  },
  {
    domain: "Marketing",
    heads: [
      {
        name: "Sripadmanabha S",
        imgUrl:
          "/team24/sripa.png",
        email: "bd22bdes11016@iith.ac in",
        linkedIN: "https://www.linkedin.com/in/sripadmanabha-s-30a609273/",
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
        <meta
          name="google-site-verification"
          content="agHaKoDcApHadKU7BhRCOJK0w5SRZtQCG9YxNKZBGvc"
        />
      </Head>
      <Navbar heading="Team E-Cell" desc={false} />
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
        OVERALL HEAD
      </Typography>
      <div>
        <Card
          id="head"
          notCard={true}
          imgUrl={
            "/team24/AdityaGupta.jpg"
          }
          isFlip={true}
          email="bt22btech11001@iith.ac.in"
          linkedIN="https://www.linkedin.com/in/guptaaditya2004/"
          name="Aditya Gupta"
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
          mb: 5,
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
        // xs={12}
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
        rowSpacing={{ xs: 1, sm: 3, md: 7 }}
        className={style2.gap}
      >
        {heads.map((domainInfo) => (
          <Grid
            container
            item
            key={domainInfo}
            lg={4}
            sm={12}
            sx={{
              mt: "1rem",
            }}
          >
            <Grid item xs={12} justifyContent="space-between">
              {/* Domain Title */}
              <div>
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
              </div>
              {/* Cards of heads */}
              <div>
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
                          isFlip={true}
                          linkedIN={head.linkedIN}
                          email={head.email}
                          name={head.name}
                          imgUrl={head.imgUrl}
                        />
                      </Grid>
                    </React.Fragment>
                  ))}
                </Grid>
              </div>
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
