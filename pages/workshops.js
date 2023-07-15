import Grid from "@mui/material/Grid";
import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import Navbar from "../components/first";
import styles from '../styles/workshoppage.module.css';

export default function Home() {
  const workshopslist = [
    {
      key: 1,
      title: 'REMARKSKILL WORKSHOP SERIES<br/> VENUE: IIT HYDERABAD', //HTML code works here
      description: '', //can even give description
      image: 'https://res.cloudinary.com/dkqekbvpg/image/upload/v1689402956/remarkskill_uq6xie.png',
      link: 'https://remarkskill.com/iithyderabad/', // registration link
      height: 400, //height and width of image
      width: 536
    },
  ]

  return (
    <>
      <Head>
        <title>Workshops</title>
      </Head>

      <Navbar heading={'WORKSHOPS'} desc={false}/>

      <div>
        <Grid container justifyContent="center" columnGap={7} rowGap={4}>
          {workshopslist.map(workshop => {
            return (<Grid item md={4} sm={10} xs={10} className={styles.workshop} key={workshop.key}>
              <div className={styles.try} style={{ color: 'white' }}>
                <Image src={workshop.image} height={workshop.height} width={workshop.width} />
                <div style={{ position: 'relative', bottom: 0, width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <button
                    className="text-white border-blue border-2 px-10
                      py-5 relative rounded-lg leading-5"
                  >
                    <Link href={workshop.link} >
                      <a className="text-2xl" target="_blank">Register Now</a>
                    </Link>
                  </button>
                </div>
                <br />
              </div>
            </Grid>)
          })}
        </Grid>
      </div>

      <br />
      <br />
      <br />
      <br />
    </>
  );
}
