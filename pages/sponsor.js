import Image from 'next/image';
import Grid from '@mui/material/Grid';
import { style } from '@mui/system';
import styles from '../styles/sponsor.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React, { useRef, useEffect } from 'react';
import Navbar from '../components/first';
import { Box, Typography } from '@mui/material';
import style2 from '../styles/changesFirst.module.css';
import Managers from '../components/Managers';
import parallax from '../styles/team.module.css';
import Head from 'next/head';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Sponsor = () => {
  const parent = useRef();
  const tl = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: '#head',
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        })
        .fromTo(
          '#head > *',
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
            ease: 'power2.out',
            stagger: 0.3,
          }
        );

      const cards = gsap.utils.toArray('.card');
      console.log(cards);
      cards.forEach((card) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 50%',
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
              ease: 'power2.out',
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
        <title>Sponsors Entrepreneurship Cell IIT Hyderabad</title>
      </Head>
      <Navbar heading="COLLABORATIONS" desc={false} sponsors={true} />
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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
            '@media (max-width: 780px)':{
              marginBottom: 0,
              marginTop: 15,
            }
          }}
        >
          <div className="text-center uppercase border-b-2 mt-20 border-white md:w-[25rem] w-[15rem] mx-auto text-white text-xl md:text-3xl pb-2 mb-10  pt-40">
            Platinum Sponsor
          </div>

          <Card
            sx={{
              minWidth: 500,
              maxWidth: 500,
              minHeight: 250,
              maxHeight: 250,
              transition: 'transform .2s ease-in',
              '&:hover': {
                transform: 'scale(1.1)',
              },
              '@media (max-width: 780px)':{
                minWidth: 250,
                maxWidth: 250,
              }
            }}
          >
            <CardMedia
              sx={{
                width: 400,
                height: 170,
                marginTop: 6.25,
                marginLeft: 6.5,
                '@media (max-width: 780px)':{
                  width: 200,
                  height: 90,
                  marginLeft: 3,
                  marginTop: 9,
                }
              }}
              image="/servo.png"
              title="green iguana"
            />
          </Card>
        </Grid>
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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
              transition: 'transform .2s ease-in',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <CardMedia
              sx={{
                width: 200,
                height: 60,
                marginTop: 12.25,
                marginLeft: 2.57,
              }}
              image="/Amazon.png"
              title="green iguana"
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={7}
          sm={9}
          lg={3}
          sx={{
            spacing: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
              transition: 'transform .2s ease-in',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <CardMedia
              sx={{ width: 220, height: 60, marginTop: 12, marginLeft: 2.5 }}
              image="/groww.png"
              title="green iguana"
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={7}
          sm={9}
          lg={3}
          sx={{
            spacing: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
              transition: 'transform .2s ease-in',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <CardMedia
              sx={{ height: 225, marginTop: 3.6 }}
              image="/sttock_gro.png"
              title="green iguana"
            />
          </Card>
        </Grid>
      </Grid>
      <div className="text-center text-white text-3xl py-16"></div>
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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="flex flex-col mx-auto mt-20 justify-center items-center">
            <p
              className="text-white text-xl md:text-[1.5rem] uppercase py-2 border-b-2 border-white mb-6
          "
            >
              Learning partner
            </p>
            <Card
              sx={{
                minWidth: 250,
                maxWidth: 250,
                minHeight: 250,
                maxHeight: 250,
                transition: 'transform .2s ease-in',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <CardMedia
                sx={{
                  width: 210,
                  height: 20,
                  marginTop: 14.75,
                  marginLeft: 2.5,
                }}
                image="/i_school_connect.png"
                title="green iguana"
              />
            </Card>
          </div>
        </Grid>

        <Grid
          item
          xs={7}
          sm={9}
          lg={3}
          sx={{
            spacing: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="flex flex-col mx-auto mt-20 justify-center items-center">
            <p
              className="text-white text-xl md:text-[1.5rem] uppercase py-2 border-b-2 border-white mb-6
        "
            >
              education partner
            </p>
            <Card
              sx={{
                minWidth: 250,
                maxWidth: 250,
                minHeight: 250,
                maxHeight: 250,
                transition: 'transform .2s ease-in',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <CardMedia
                sx={{ width: 255, height: 150, marginTop: 6.2 }}
                image="/henry_harvin.png"
                title="green iguana"
              />
            </Card>
          </div>
        </Grid>
        <Grid
          item
          xs={7}
          sm={9}
          lg={3}
          sx={{
            spacing: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="flex flex-col mx-auto mt-20 justify-center items-center">
            <p
              className="text-white  text-xl md:text-[1.5rem]  uppercase py-2 border-b-2 border-white mb-6
        "
            >
              Internship partner
            </p>
            <Card
              sx={{
                minWidth: 250,
                maxWidth: 250,
                minHeight: 250,
                maxHeight: 250,
                transition: 'transform .2s ease-in',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <CardMedia
                sx={{ height: 150, marginTop: 5.7, marginRight: 1.5 }}
                image="/YHills.png"
                title="green iguana"
              />
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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="flex flex-col mx-auto mt-20 justify-center items-center">
            <p
              className="text-white text-[1rem] md:text-[1.5rem] uppercase text-xl py-2 border-b-2 mt-10 border-white mb-6
        "
            >
              powered by platform partner
            </p>
            <Card
              sx={{
                minWidth: 250,
                maxWidth: 250,
                minHeight: 250,
                maxHeight: 250,
                transition: 'transform .2s ease-in',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <CardMedia
                sx={{
                  width: 215,
                  height: 85,
                  marginTop: 9.25,
                  marginLeft: 1.8,
                }}
                image="/Unstop.jpg"
                title="green iguana"
              />
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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="flex flex-col mx-auto mt-20 justify-center items-center">
            <p
              className="text-white text-xl md:text-[1.5rem] uppercase py-2 border-b-2 mt-10 border-white mb-6
        "
            >
              Outreach Partner
            </p>
            <Card
              sx={{
                minWidth: 250,
                maxWidth: 250,
                minHeight: 250,
                maxHeight: 250,
                transition: 'transform .2s ease-in',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <CardMedia
                sx={{ width: 200, height: 65, marginTop: 11, marginLeft: 2.95 }}
                image="/talerang.jpg"
                title="green iguana"
              />
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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="flex flex-col mt-20 mx-auto justify-center items-center">
            <p
              className="text-white  text-[.9rem] md:text-[1.5rem] uppercase py-2 border-b-2 mt-10 border-white mb-6
    "
            >
              startUp Ecosystem Partner
            </p>
            <Card
              sx={{
                minWidth: 250,
                maxWidth: 250,
                minHeight: 250,
                maxHeight: 250,
                transition: 'transform .2s ease-in',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <CardMedia
                sx={{ width: 220, height: 85, marginTop: 9.25, marginLeft: 2 }}
                image="/Ivycamplogo.png"
                title="green iguana"
              />
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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="flex flex-col mx-auto mt-20 justify-center items-center">
            <p
              className="text-white  uppercase text-xl md:text-[1.5rem] py-2 border-b-2 mt-10 border-white mb-6
    "
            >
              Travel Partner
            </p>

            <Card
              sx={{
                minWidth: 250,
                maxWidth: 250,
                minHeight: 250,
                maxHeight: 250,
                transition: 'transform .2s ease-in',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <CardMedia
                sx={{ width: 190, height: 80, marginTop: 11, marginLeft: 2.95 }}
                image="/ease_my_trip.png"
                title="green iguana"
              />
            </Card>
          </div>
        </Grid>
      </Grid>
      <div className="text-center uppercase border-b-2 mt-20 border-white md:w-[25rem] w-[15rem] mx-auto text-white text-xl md:text-3xl pb-2 mb-10  pt-12">
        workshop Partner
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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
              transition: 'transform .2s ease-in',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <CardMedia
              sx={{ width: 190, height: 80, marginTop: 11, marginLeft: 3.3 }}
              image="/Techobyte.jpg"
              title="green iguana"
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={7}
          sm={9}
          lg={5}
          sx={{
            spacing: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
              transition: 'transform .2s ease-in',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <CardMedia
              sx={{ width: 190, height: 130, marginTop: 8, marginLeft: 3.7 }}
              image="/edufabrica.png"
              title="green iguana"
            />
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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <div className="text-center uppercase border-b-2 mt-20 border-white md:w-[25rem] w-[15rem] mx-auto text-white text-xl md:text-3xl pb-2 mb-10  pt-12">
            Certificate Partner
          </div>

          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
              transition: 'transform .2s ease-in',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <CardMedia
              sx={{
                width: 150,
                height: 170,
                marginTop: 6.25,
                marginLeft: 5.75,
              }}
              image="/give_my_certificate.png"
              title="green iguana"
            />
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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
              transition: 'transform .2s ease-in',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
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
          </Card>
        </Grid>
        <Grid
          item
          xs={7}
          sm={9}
          lg={3}
          sx={{
            spacing: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
              transition: 'transform .2s ease-in',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <CardMedia
              sx={{ width: 220, height: 30, marginTop: 13, marginLeft: 2.5 }}
              image="/global_hues_black.png"
              title="globacl hues"
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={7}
          sm={9}
          lg={3}
          sx={{
            spacing: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
              transition: 'transform .2s ease-in',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <CardMedia
              sx={{ width: 180, height: 80, marginTop: 10.6, marginLeft: 4 }}
              image="/Yi_New_Logo.png"
              title="green iguana"
            />
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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
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
              transition: 'transform .2s ease-in',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <CardMedia
              sx={{ width: 230, height: 40, marginTop: 13, marginLeft: 2.5 }}
              image="/BA_Logo.png"
              title="globacl hues"
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={7}
          sm={9}
          lg={3}
          sx={{
            spacing: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: { md: 10 },
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
              transition: 'transform .2s ease-in',
              '&:hover': {
                transform: 'scale(1.1)',
              },
              marginBottom: 10,
            }}
          >
            <CardMedia
              sx={{ width: 230, height: 120, marginTop: 9, marginLeft: 2.5 }}
              image="/ACN_Logo.jpg"
              title="globacl hues"
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Sponsor;
