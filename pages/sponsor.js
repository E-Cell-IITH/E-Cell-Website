import Image from "next/image";
import Grid from "@mui/material/Grid";
import { style } from "@mui/system";
import styles from "../styles/sponsor.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React, { useRef, useEffect } from "react";
import Navbar from "../components/first";
import { Box, CardActionArea, Typography } from "@mui/material";
import style2 from "../styles/changesFirst.module.css";
import Managers from "../components/Managers";
import parallax from "../styles/team.module.css";
import Head from "next/head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const Sponsor = () => {
  const router = useRouter();
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
        <title>Sponsors | Entrepreneurship Cell IIT Hyderabad</title>
        <meta
          name="google-site-verification"
          content="agHaKoDcApHadKU7BhRCOJK0w5SRZtQCG9YxNKZBGvc"
        />
      </Head>
      <Navbar
        heading={`COLLABORATIONS`}
        subheading={"2023-2024"}
        desc={false}
        sponsors={true}
      />
      <Grid
        container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        rowSpacing={2}
        gap={0}
      >
        <Grid
          item
          xs={7}
          sm={9}
          lg={5}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
            "@media (max-width: 780px)": {
              marginBottom: 0,
              marginTop: 15,
            },
          }}
        >
          <div className="text-center uppercase border-b-2 mt-20 border-white md:w-[25rem] w-[15rem] mx-auto text-white text-xl md:text-3xl pb-2 mb-10  pt-40">
            Title Sponsor
          </div>

          <Card
            sx={{
              minWidth: 500,
              maxWidth: 500,
              minHeight: 250,
              maxHeight: 250,
              transition: "transform .2s ease-in",
              "&:hover": {
                transform: "scale(1.1)",
              },
              "@media (max-width: 780px)": {
                minWidth: 250,
                maxWidth: 250,
              },
            }}
          >
            <CardActionArea
              href="https://www.linkedin.com/showcase/bvr-mohan-reddy-school-of-innovation-and-entrepreneurship-bvr-scient/"
              target="_blank"
            >
              <CardMedia
                sx={{
                  width: 450,
                  height: 120,
                  justifyContent: "center",
                  marginTop: 7.25,
                  marginLeft: 2.5,
                  "@media (max-width: 780px)": {
                    width: 200,
                    height: 90,
                    marginLeft: 3,
                    marginTop: 9,
                  },
                }}
                image="/sponsors/scient2.jpeg"
                title="Scient"
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        rowSpacing={2}
        gap={0}
      >
        <Grid
          item
          xs={7}
          sm={9}
          lg={5}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
            "@media (max-width: 780px)": {
              marginBottom: 0,
              marginTop: 15,
            },
          }}
        >
          <div className="text-center uppercase border-b-2  border-white md:w-[25rem] w-[15rem] mx-auto text-white text-xl md:text-3xl pb-2 mb-10  pt-10">
            Co-Title Sponsor
          </div>

          <Card
            sx={{
              minWidth: 500,
              maxWidth: 500,
              minHeight: 250,
              maxHeight: 250,
              transition: "transform .2s ease-in",
              "&:hover": {
                transform: "scale(1.1)",
              },
              "@media (max-width: 780px)": {
                minWidth: 250,
                maxWidth: 250,
              },
            }}
          >
            <CardActionArea href="https://www.npci.org.in/" target="_blank">
              <CardMedia
                sx={{
                  width: 450,
                  height: 170,
                  marginTop: 6.25,
                  marginLeft: 2.5,
                  "@media (max-width: 780px)": {
                    width: 200,
                    height: 90,
                    marginLeft: 3,
                    marginTop: 9,
                  },
                }}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/NPCI-Logo.png/640px-NPCI-Logo.png"
                title="NPCI"
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Grid
        item
        xs={7}
        sm={9}
        lg={5}
        sx={{
          spacing: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
          "@media (max-width: 780px)": {
            marginBottom: 0,
            marginTop: 15,
          },
        }}
      >
        <div className="text-center uppercase border-b-2  border-white md:w-[25rem] w-[15rem] mx-auto text-white text-xl md:text-3xl pb-2 mb-10  pt-10">
          Silver Sponsor
        </div>

        <Card
          sx={{
            minWidth: 500,
            maxWidth: 500,
            minHeight: 250,
            maxHeight: 250,
            transition: "transform .2s ease-in",
            "&:hover": {
              transform: "scale(1.1)",
            },
            "@media (max-width: 780px)": {
              minWidth: 250,
              maxWidth: 250,
            },
          }}
        >
          <CardActionArea href="https://www.icicibank.com/" target="_blank">
            <CardMedia
              sx={{
                width: 450,
                height: 170,
                marginTop: 6.25,
                marginLeft: 2.5,
                "@media (max-width: 780px)": {
                  width: 200,
                  height: 90,
                  marginLeft: 3,
                  marginTop: 9,
                },
              }}
              image="https://getvectorlogo.com/wp-content/uploads/2018/12/icici-bank-vector-logo.png"
              title="ICICI Bank"
            />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid
        item
        xs={7}
        sm={9}
        lg={5}
        sx={{
          spacing: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
          "@media (max-width: 780px)": {
            marginBottom: 0,
            marginTop: 15,
          },
        }}
      >
        <div className="text-center uppercase border-b-2  border-white md:w-[25rem] w-[15rem] mx-auto text-white text-xl md:text-3xl pb-2 mb-10  pt-10">
          Development Partner
        </div>

        <Card
          sx={{
            minWidth: 500,
            maxWidth: 500,
            minHeight: 250,
            maxHeight: 250,
            transition: "transform .2s ease-in",
            "&:hover": {
              transform: "scale(1.1)",
            },
            "@media (max-width: 780px)": {
              minWidth: 250,
              maxWidth: 250,
            },
          }}
        >
          <CardActionArea href="https://www.sidbi.in" target="_blank">
            <CardMedia
              sx={{
                width: 450,
                height: 170,
                marginTop: 6.25,
                marginLeft: 2.5,
                "@media (max-width: 780px)": {
                  width: 200,
                  height: 90,
                  marginLeft: 3,
                  marginTop: 9,
                },
              }}
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/SIDBI_LOGO.png/1200px-SIDBI_LOGO.png"
              title="SIDBI"
            />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid
        item
        xs={7}
        sm={9}
        lg={5}
        sx={{
          spacing: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
          "@media (max-width: 780px)": {
            marginBottom: 0,
            marginTop: 15,
          },
        }}
      >
        <div className="text-center uppercase border-b-2  border-white md:w-[25rem] w-[15rem] mx-auto text-white text-xl md:text-3xl pb-2 mb-10  pt-10">
          Enery Partner
        </div>

        <Card
          sx={{
            minWidth: 500,
            maxWidth: 500,
            minHeight: 250,
            maxHeight: 250,
            transition: "transform .2s ease-in",
            "&:hover": {
              transform: "scale(1.1)",
            },
            "@media (max-width: 780px)": {
              minWidth: 250,
              maxWidth: 250,
            },
          }}
        >
          <CardActionArea href="https://www.iocl.com" target="_blank">
            <CardMedia
              sx={{
                width: 450,
                height: 140,
                marginTop: 6.25,
                marginLeft: 2.5,
                "@media (max-width: 780px)": {
                  width: 200,
                  height: 90,
                  marginLeft: 3,
                  marginTop: 9,
                },
              }}
              image="https://logowiki.net/wp-content/uploads/imgp/Servo-Logo-1-6780.jpg"
              title="SERVO"
            />
          </CardActionArea>
        </Card>
      </Grid>{" "}
      <Grid
        item
        xs={7}
        sm={9}
        lg={5}
        sx={{
          spacing: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
          "@media (max-width: 780px)": {
            marginBottom: 0,
            marginTop: 15,
          },
        }}
      >
        <div className="text-center uppercase border-b-2  border-white md:w-[25rem] w-[15rem] mx-auto text-white text-xl md:text-3xl pb-2 mb-10  pt-10">
          Consulting Parnter
        </div>

        <Card
          sx={{
            minWidth: 500,
            maxWidth: 500,
            minHeight: 250,
            maxHeight: 250,
            transition: "transform .2s ease-in",
            "&:hover": {
              transform: "scale(1.1)",
            },
            "@media (max-width: 780px)": {
              minWidth: 250,
              maxWidth: 250,
            },
          }}
        >
          <CardActionArea
            href="https://www.capgemini.com/in-en/"
            target="_blank"
          >
            <CardMedia
              sx={{
                width: 450,
                height: 170,
                marginTop: 6.25,
                marginLeft: 2.5,
                "@media (max-width: 780px)": {
                  width: 200,
                  height: 90,
                  marginLeft: 3,
                  marginTop: 9,
                },
              }}
              image="https://www.drupal.org/files/Capgemini_Logo_2COL_RGB.png"
              title="Capgemini"
            />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid
        item
        xs={7}
        sm={9}
        lg={5}
        sx={{
          spacing: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
          "@media (max-width: 780px)": {
            marginBottom: 0,
            marginTop: 15,
          },
        }}
      >
        <div className="text-center uppercase border-b-2  border-white md:w-[25rem] w-[15rem] mx-auto text-white text-xl md:text-3xl pb-2 mb-10  pt-10">
          Sporting Partner
        </div>

        <Card
          sx={{
            minWidth: 500,
            maxWidth: 500,
            minHeight: 250,
            maxHeight: 250,
            transition: "transform .2s ease-in",
            "&:hover": {
              transform: "scale(1.1)",
            },
            "@media (max-width: 780px)": {
              minWidth: 250,
              maxWidth: 250,
            },
          }}
        >
          <CardActionArea href="https://www.decathlon.in/" target="_blank">
            <CardMedia
              sx={{
                width: 450,
                height: 170,
                marginTop: 6.25,
                marginLeft: 2.5,
                "@media (max-width: 780px)": {
                  width: 200,
                  height: 90,
                  marginLeft: 3,
                  marginTop: 9,
                },
              }}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIdUA2jIUT3rOX4P5zjZhwsrhZ35M9hUyK9Zf4DO7ag&s"
              title="Decathlon"
            />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid
        item
        xs={7}
        sm={9}
        lg={5}
        sx={{
          spacing: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
          "@media (max-width: 780px)": {
            marginBottom: 0,
            marginTop: 15,
          },
        }}
      >
        <div className="text-center uppercase border-b-2  border-white md:w-[25rem] w-[15rem] mx-auto text-white text-xl md:text-3xl pb-2 mb-10  pt-10">
          Lodging Partner
        </div>

        <Card
          sx={{
            minWidth: 500,
            maxWidth: 500,
            minHeight: 250,
            maxHeight: 250,
            transition: "transform .2s ease-in",
            "&:hover": {
              transform: "scale(1.1)",
            },
            "@media (max-width: 780px)": {
              minWidth: 250,
              maxWidth: 250,
            },
          }}
        >
          <CardActionArea href="https://www.oyorooms.com/" target="_blank">
            <CardMedia
              sx={{
                width: 450,
                height: 170,
                marginTop: 6.25,
                marginLeft: 2.5,
                "@media (max-width: 780px)": {
                  width: 200,
                  height: 90,
                  marginLeft: 3,
                  marginTop: 9,
                },
              }}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6VnV3IUmBYmmVWK-S0n7K3WEadcY2mnJsbqLXF6ZZg&s"
              title="Oyo Hotels"
            />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid
        item
        xs={7}
        sm={9}
        lg={5}
        sx={{
          spacing: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
          "@media (max-width: 780px)": {
            marginBottom: 0,
            marginTop: 15,
          },
        }}
      >
        <div className="text-center uppercase border-b-2  border-white md:w-[25rem] w-[15rem] mx-auto text-white text-xl md:text-3xl pb-2 mb-10  pt-10">
          Moving Partner
        </div>

        <Card
          sx={{
            minWidth: 500,
            maxWidth: 500,
            minHeight: 250,
            maxHeight: 250,
            transition: "transform .2s ease-in",
            "&:hover": {
              transform: "scale(1.1)",
            },
            "@media (max-width: 780px)": {
              minWidth: 250,
              maxWidth: 250,
            },
          }}
        >
          <CardActionArea href="https://porter.in/" target="_blank">
            <CardMedia
              sx={{
                width: 450,
                height: 170,
                marginTop: 6.25,
                marginLeft: 2.5,
                "@media (max-width: 780px)": {
                  width: 200,
                  height: 90,
                  marginLeft: 3,
                  marginTop: 9,
                },
              }}
              image="https://cdn.i.haymarketmedia.asia/?n=campaign-india%2Fcontent%2F20230412125221_porter.png&h=630&w=1200&q=75&v=20170226&c=1"
              title="Porter"
            />
          </CardActionArea>
        </Card>
      </Grid>
      <div className="text-center text-white text-2xl md:text-3xl md:w-[20rem] mx-auto mt-[15rem] w-[15rem] sm:mt-[15rem] lg:-mt-[5rem] my-10 p-2 uppercase  border-b-2 border-white ">
        Event Partners
      </div>
      <Grid
        container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        rowSpacing={2}
        gap={0}
      >
        <Grid
          item
          xs={7}
          sm={9}
          lg={3}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
              transition: "transform .2s ease-in",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <CardActionArea href="https://www.amazon.in/" target="_blank">
              <CardMedia
                sx={{
                  width: 200,
                  height: 60,
                  marginTop: 12.25,
                  marginLeft: 2.57,
                }}
                image="/Amazon.png"
                title="amazon"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid
          item
          xs={7}
          sm={9}
          lg={3}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
              transition: "transform .2s ease-in",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <CardActionArea href="https://funzippy.com/" target="_blank">
              <CardMedia
                sx={{ width: 220, height: 100, marginTop: 8, marginLeft: 2.5 }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTkCZesRXWT73G-RogzO8DltRS9WHMvqI9QcCFiTZNNA&s"
                title="Funzippy"
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        rowSpacing={2}
        gap={0}
      >
        <Grid
          item
          xs={7}
          sm={9}
          lg={5}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex flex-col mx-auto mt-20 justify-center items-center">
            <p
              className="text-white text-[1rem] md:text-[1.5rem] uppercase text-xl py-2 border-b-2 mt-10 border-white mb-6
        "
            >
              Travel Partner{" "}
            </p>
            <Card
              sx={{
                minWidth: 250,
                maxWidth: 250,
                minHeight: 250,
                maxHeight: 250,
                transition: "transform .2s ease-in",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <CardActionArea href="https://abhibus.com/" target="_blank">
                <CardMedia
                  sx={{
                    width: 220,
                    height: 50,
                    marginTop: 12,
                    marginLeft: 1.8,
                  }}
                  image="https://res.cloudinary.com/admitad-gmbh/image/upload/v1661334998/oimwao7nuzcevsijxhy1.png"
                  title="Abhibus"
                />
              </CardActionArea>
            </Card>
          </div>
        </Grid>
        <Grid
          item
          xs={7}
          sm={9}
          lg={5}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex flex-col mx-auto mt-20 justify-center items-center">
            <p
              className="text-white text-xl md:text-[1.5rem] uppercase py-2 border-b-2 mt-10 border-white mb-6
        "
            >
              Platform Partner{" "}
            </p>
            <Card
              sx={{
                minWidth: 250,
                maxWidth: 250,
                minHeight: 250,
                maxHeight: 250,
                transition: "transform .2s ease-in",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <CardActionArea href="https://unstop.com/" target="_blank">
                <CardMedia
                  sx={{
                    width: 210,
                    height: 83,
                    marginTop: 11,
                    marginLeft: 2.95,
                  }}
                  image="/Unstop.jpg"
                  title="unstop"
                />
              </CardActionArea>
            </Card>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        rowSpacing={2}
        gap={0}
      >
        <Grid
          item
          xs={7}
          sm={9}
          lg={5}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex flex-col mt-20 mx-auto justify-center items-center">
            <p
              className="text-white  text-[.9rem] md:text-[1.5rem] uppercase py-2 border-b-2 mt-10 border-white mb-6
    "
            >
              Education Partner{" "}
            </p>
            <Card
              sx={{
                minWidth: 250,
                maxWidth: 250,
                minHeight: 250,
                maxHeight: 250,
                transition: "transform .2s ease-in",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <CardActionArea href="https://henyharvin.com/" target="_blank">
                <CardMedia
                  sx={{
                    width: 220,
                    height: 130,
                    marginTop: 7,
                    marginLeft: 2,
                  }}
                  image="/henry_harvin.png"
                  title="Henry Harvin"
                />
              </CardActionArea>
            </Card>
          </div>
        </Grid>
        <Grid
          item
          xs={7}
          sm={9}
          lg={5}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex flex-col mx-auto mt-20 justify-center items-center">
            <p
              className="text-white  uppercase text-xl md:text-[1.5rem] py-2 border-b-2 mt-10 border-white mb-6
    "
            >
              Merchandise Partner{" "}
            </p>

            <Card
              sx={{
                minWidth: 250,
                maxWidth: 250,
                minHeight: 250,
                maxHeight: 250,
                transition: "transform .2s ease-in",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <CardActionArea href="https://www.weezy.in/" target="_blank">
                <CardMedia
                  sx={{
                    width: 210,
                    height: 130,
                    marginTop: 7,
                    marginLeft: 2,
                  }}
                  image="https://weezy.in/cdn/shop/files/Weezy_Logo.jpg?v=1673328745"
                  title="Weezy"
                />
              </CardActionArea>
            </Card>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        rowSpacing={2}
        gap={0}
      >
        <Grid
          item
          xs={7}
          sm={9}
          lg={5}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex flex-col mx-auto mt-20 justify-center items-center">
            <p
              className="text-white  uppercase text-xl md:text-[1.5rem] py-2 border-b-2 mt-10 border-white mb-6"
            >
              Training Partner{" "}
            </p>
            <Card
              sx={{
                minWidth: 250,
                maxWidth: 250,
                minHeight: 250,
                maxHeight: 250,
                transition: "transform .2s ease-in",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <CardActionArea
                href="https://tech-gyan.in/"
                target="_blank"
              >
                <CardMedia
                  sx={{
                    width: 220, height: 40, marginTop: 13, marginLeft: 2.5 
                  }}
                  image="https://tech-gyan.in/wp-content/uploads/2021/02/Untitled-7sdx-1024x199.png"
                  title="RemarkSkill"
                />
              </CardActionArea>
            </Card>
          </div>
        </Grid>
      </Grid>
      <div className="text-center uppercase border-b-2 mt-20 border-white md:w-[25rem] w-[15rem] mx-auto text-white text-xl md:text-3xl pb-2 mb-10  pt-12">
        Internship Partner{" "}
      </div>
      <Grid
        container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        rowSpacing={2}
        gap={0}
      >
        <Grid
          item
          xs={7}
          sm={9}
          lg={5}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
              transition: "transform .2s ease-in",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <CardActionArea href="https://makeintern.com/" target="_blank">
              <CardMedia
                sx={{
                  width: 220,
                  height: 130,
                  marginTop: 7,
                  marginLeft: 2,
                }}
                image="https://www.makeintern.com/images/makeintern_l_logo.png"
                title="Make Intern"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid
          item
          xs={7}
          sm={9}
          lg={5}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
              transition: "transform .2s ease-in",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <CardActionArea href="https://skilldunia.co.in/" target="_blank">
              <CardMedia
                sx={{
                  width: 180,
                  height: 180,
                  marginTop: 3,
                  marginLeft: 4,
                  borderRadius: 3,
                }}
                image="https://res.cloudinary.com/dqyxqfvnv/image/upload/v1717323500/sponsers/c4acp4og8brjymynuu1i.png"
                title="skilldunia"
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <div className="text-center uppercase border-b-2 mt-20 border-white md:w-[25rem] w-[15rem] mx-auto text-white text-xl md:text-3xl pb-2 mb-10  pt-12">
        Workshop Partner{" "}
      </div>
      <Grid
        container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        rowSpacing={2}
        gap={0}
      >
        <Grid
          item
          xs={7}
          sm={9}
          lg={5}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
              transition: "transform .2s ease-in",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <CardActionArea href="https://techobytes.com" target="_blank">
              <CardMedia
                sx={{ width: 220, height: 80, marginTop: 11, marginLeft: 2 }}
                image="/Techobyte.jpg"
                title="Technobytes"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid
          item
          xs={7}
          sm={9}
          lg={5}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
              transition: "transform .2s ease-in",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <CardActionArea href="https://www.edufabrica.net/" target="_blank">
              <CardMedia
                sx={{
                  width: 220,
                  height: 130,
                  marginTop: 8,
                  marginLeft: 2,
                  borderRadius: 3,
                }}
                image="/edufabrica.png"
                title="edufabrica"
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <div className="text-center text-white md:text-3xl md:w-[20rem] mx-auto w-[15rem] text-xl  my-10 p-2 uppercase  border-b-2 border-white ">
        media Partners
      </div>
      <Grid
        container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        rowSpacing={2}
        gap={0}
      >
        <Grid
          item
          xs={7}
          sm={9}
          lg={3}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
              transition: "transform .2s ease-in",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <CardActionArea href="https://edtimes.in/?amp" target="_blank">
              <CardMedia
                sx={{
                  width: 190,
                  height: 145,
                  marginTop: 7,
                  marginLeft: 2.57,
                }}
                image="/ed_times.png"
                title="ed_times"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid
          item
          xs={7}
          sm={9}
          lg={3}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
              transition: "transform .2s ease-in",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <CardActionArea href="https://theglobalhues.com/" target="_blank">
              <CardMedia
                sx={{ width: 220, height: 30, marginTop: 13, marginLeft: 2.5 }}
                image="/global_hues_black.png"
                title="globacl hues"
              />
            </CardActionArea>
          </Card>
        </Grid>

      </Grid>
      <Grid
        container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        rowSpacing={2}
        gap={0}
      >
        <Grid
          item
          xs={7}
          sm={9}
          lg={3}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
              transition: "transform .2s ease-in",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <CardActionArea href="https://youthincmag.com/" target="_blank">
              <CardMedia
                sx={{ width: 180, height: 80, marginTop: 10.6, marginLeft: 4 }}
                image="/Yi_New_Logo.png"
                title="ED Times"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid
          item
          xs={7}
          sm={9}
          lg={3}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: { md: 10, xs: 2 },
            marginBottom: { md: 10 },
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
              transition: "transform .2s ease-in",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <CardActionArea
              href="https://startupstorymedia.com"
              target="_blank"
            >
              <CardMedia
                sx={{
                  width: 250,
                  height: 145,
                  marginTop: 7,
                  marginLeft: -0.6,
                }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSYhEU26JaVO3e3dnsnRB_-Nr0vKSUnJPb7wpKRQCAQ&s"
                title="Startup Story"
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Sponsor;
