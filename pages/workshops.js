import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import { BounceLoader } from "react-spinners";
import Navbar from "../components/first";
import styles from '../styles/workshoppage.module.css';

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  const [load_display, setload_display] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
    setTimeout(() => setload_display(1), 0);
    window.history.scrollRestoration = "manual";
  }, []);

  const workshopslist = [
    {
      title: 'REMARKSKILL WORKSHOP SERIES<br/> VENUE: IIT HYDERABAD', //HTML code works here
      description: '', //can even give description
      image: '/remarkskill.png',
      link: 'https://remarkskill.com/iithyderabad/', // registration link
      height: 400, //height and width of image
      width: 536
    },
  ]

  const override = {
    display: "block",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderColor: "red",
  };

  return (
    <>
      {loading ? (
        <BounceLoader
          color={"#7a4daf"}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <></>
      )}
      <Head>
        <title>Workshops</title>
      </Head>
      <Box
        sx={{
          opacity: load_display,
        }}
      >
        <Navbar heading={'WORKSHOPS'} desc={false} sponsors={true} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Grid container justifyContent="center" columnGap={7} rowGap={4}>
          {workshopslist.map(workshop => {
            return <Grid md={9} sm={12} xs={12} item className={styles.workshop}>
              <div className={styles.try} style={{ color: 'white' }}>
                <Grid container justifyContent='center'>
                  <Image src={workshop.image} height={workshop.height} width={workshop.width} />

                  <Grid item alignItems="center" alignContent='center' justifyContent='center'>
                    <div style={{ fontWeight: 700, display: 'block' }} dangerouslySetInnerHTML={{ __html: workshop.title }}>
                    </div>
                    <br />

                    <div style={{ textIndent: 24 }} dangerouslySetInnerHTML={{ __html: workshop.description }} >
                    </div>

                    <br />

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
                  </Grid>

                </Grid>
                <br />
              </div>
            </Grid>
          })}

        </Grid>


        <br />
        <br />
        <br />
        <br />

      </Box>
    </>
  );
}
