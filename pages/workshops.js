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
      title: "TECHGYAN TECHNOLOGIES WORKSHOP SERIES<br/> VENUE: IIT HYDERABAD", //HTML code works here
      description: "", //can even give description
      image:
        "/image.png",
      link: "https://tech-gyan.in/workshop-iit-hyderabad-checkout/", // registration link
      height: 450, //height and width of image
      width: 536,
    },
    // {
    //   title: "REMARKSKILL WORKSHOP SERIES<br/> VENUE: IIT HYDERABAD", //HTML code works here
    //   description: "", //can even give description
    //   image:
    //     "https://res.cloudinary.com/dn8obuhkt/image/upload/v1701162533/PHOTO-2023-11-28-12-53-29_nb7rel.jpg",
    //   link: "https://tbytes.mojo.page/iith40", // registration link
    //   height: 450, //height and width of image
    //   width: 536,
    // },
    // {
    //   title: "REMARKSKILL WORKSHOP SERIES<br/> VENUE: IIT HYDERABAD", //HTML code works here
    //   description: "", //can even give description
    //   image:
    //     "https://res.cloudinary.com/dboy04n6m/image/upload/v1702277876/IIT_HYD_AD_2024_1_gmwpi9.jpg",
    //   link: "http://www.remarkskill.com/hyderabad", // registration link
    //   height: 450, //height and width of image
    //   width: 536,
    // },
  ];

  return <>
    <Head>
      <title>Workshops</title>
      <link rel="canonical" href="https://ecell.iith.ac.in/workshops" />
    </Head>

    <Navbar heading={'WORKSHOPS'} desc={false}/>

    <div>
      <Grid container display="flex" alignItems="center" justifyContent="center" columnGap={7} rowGap={4}>
        {workshopslist.map((workshop,key) => {
          return (
            <Grid item lg={3} md={4} sm={6.3} xs={7} className={styles.workshop} key={key} style={{zIndex:"1"}}>
              <div className={styles.try} style={{ color: 'white' }}>
                <Image alt={workshop.title.replace("<br/>", "")} src={workshop.image} height={workshop.height} width={workshop.width} />
                <div style={{ position: 'relative', bottom: 0, display: 'flex', justifyContent: 'center' }}>
                  <button
                    className="text-white border-blue border-2 px-3 md:px-5
                      py-5 relative rounded-lg leading-5"
                  >
                    <Link href={workshop.link} className="text-md md:text-xl " target="_blank">
                      Register Now
                    </Link>
                  </button>
                </div>
                <br />
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
        <div className="text-white text-center text-xl">For any queries regarding legitimacy of any program please contact - Shikhar Kansal +91 62030 42129</div>
    <br />
    <br />
    <br />
    <br />
  </>;
}
