import React from "react";
import First from "../components/first.js";
import Second from "../components/second";
import Third from "../components/third";
import Fourth from "../components/fourth.js";
import useMediaQuery from "@mui/material/useMediaQuery";
import Head from "next/head";

import { BounceLoader } from "react-spinners";
import { Box } from "@mui/system";
import SpeakerCarousel from "../components/SpeakerCarousel.jsx";
import Navbar from "../components/Navbar.jsx";

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  const [load_display, setload_display] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
    setTimeout(() => setload_display(1), 0);
    window.history.scrollRestoration = "manual";
  }, []);

  const matches = useMediaQuery("(max-width:500px)");

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
        <title>Ecell IIT Hyderabad | THINK BUILD INSPIRE</title>
        <meta
          name="google-site-verification"
          content="agHaKoDcApHadKU7BhRCOJK0w5SRZtQCG9YxNKZBGvc"
        />
        <link rel="canonical" href="https://ecell.iith.ac.in" />
      </Head>
      <Box
        sx={{
          opacity: load_display,
        }}
      >
        <First heading={matches ? "E-CELL" : "ENTREPRENEURSHIP CELL"} />
        <Navbar/>
        <Second />
        <Third />
        <br />
        <br />
        <SpeakerCarousel />
        <Fourth />
        <br />
      </Box>
    </>
  );
}
