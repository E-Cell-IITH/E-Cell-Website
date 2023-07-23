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
        name: "Asit Desai",
        imgUrl:
          "https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Operations/Asit%20Desai/e-cell%20photo.jpg",
        email:"ch21btech11012@iith.ac.in",
        linkedIN:"https://www.linkedin.com/in/asit-desai-02493a248/"
      },
      
    ],
  },
  {
    domain: "Web",
    heads: [
      {
        name: "Maharshi Kadeval",
        imgUrl:
          "https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/Web/MaharshiKadeval/Maharshi.jpg",
        email:"cs21btech11027@iith.ac.in",
        linkedIN:""
      },
    ],
  }, 
  {
    domain: "Events & Competitions",
    heads: [
      {
        name: "Manas Bhargava",
        imgUrl:
          "https://res.cloudinary.com/ds5dhpt5o/image/upload/v1686591641/E%20Cell/Manas_Bhargava_krmwwr.jpg",
        email:"ch21btech11019@iith.ac.in",
        linkedIN:"https://www.linkedin.com/in/manas-bhargava-44b156243"
      },
    ],
  },
  {
    domain: "Ideation",
    heads: [
      {
        name: "Pranadipan Sahoo",
        imgUrl:
          "https://res.cloudinary.com/ds5dhpt5o/image/upload/v1686591931/E%20Cell/Pranadipan_Sahoo_z8dore.jpg",
        email:"ms21btech11021@iith.ac.in",
        linkedIN:"https://www.linkedin.com/in/pranadipan-sahoo-361946246/"
      },
      {
        name: "Sanika Karmore",
        imgUrl:
          "https://res.cloudinary.com/ds5dhpt5o/image/upload/v1686592075/E%20Cell/Sanika_Karmore_yuvw9b.jpg",
        email:"ideation.ecell@campus.iith.ac.in",
        linkedIN:"https://www.linkedin.com/in/sanika-karmore-22aab6228"
      },
    ],
  },
  {
    domain: "PR & Networking",
    heads: [
      {
        name: "Shubham Mohanty",
        imgUrl:
          "https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/PR-Networking/SubhamMohanty/Subham.jpg",
        email:"pr.ecell@campus.iith.ac.in",
        linkedIN:"https://www.linkedin.com/in/subham-mohanty-a0589a229/"
      },
    ],
  },
  {
    domain: "Design and Multimedia",
    heads: [
      {
        name: "Samyak Jain",
        imgUrl:
          "https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Design%20%26%20Multimedia/Samyak%20Jain/Samyak%20Jain%20E.jpg",
        email:"bd21bdes11016@iith.ac.in",
        linkedIN:"https://www.linkedin.com/in/-samyakjain"
      },
    ],
  },
  {
    domain: "Corporate Relations & Marketing",
    heads: [
      {
        name: "Aman Jagtap",
        imgUrl:
          "https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Corporate%20Relations%20%26%20Marketing/Aman%20Jagtap/Aman_Jagtap.JPG",
        email:"sponsorship.ecell@campus.iith.ac.in",
        linkedIN:"https://www.linkedin.com/in/aman-jagtap-a29773194"
      },
    ],
  },
  {
    domain: "Media and Publicity",
    heads: [
      {
        name: "Manasi Pasekar",
        imgUrl:
          "https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Media%20%26%20Publicity/Manasi/IMG20230219023159.jpg",
        email:"bd21bdes11013@iith.ac.in",
        linkedIN:"https://www.linkedin.com/in/manasi-pasekar-4a67a9241"
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
            "https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/ECellHEAD/Srijan_sponsorship_s9ousy_1_ebgjrd.jpeg"
          }
          isFlip={true}
          email="head.ecell@campus.iith.ac.in"
          linkedIN="https://www.linkedin.com/in/srijan-shahi-1b6009278"
          name="Srijan Shahi"
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
          mb:5,
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
        rowSpacing={{xs:1, sm:3, md:7}}
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
              <Grid container item spacing={5} justifyContent="center"  >
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
                        isFlip = {true}
                        linkedIN={head.linkedIN}
                        email={head.email}
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
