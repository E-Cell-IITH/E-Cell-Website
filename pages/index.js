import React from "react";
import First from "../components/first.js";
import Second from "../components/second";
import Third from "../components/third";
import Fourth from "../components/fourth";
import Fifth from "../components/fifth";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { BounceLoader } from "react-spinners";
import { Box } from "@mui/system";

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  const [load_display, setload_display] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
    setTimeout(() => setload_display(1), 1000);
    window.history.scrollRestoration = "manual";
  }, []);

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
      <Head>
        <link rel="shortcut icon" href="/static/Ecell_logo.png" />
      </Head>
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
      <Box
        sx={{
          opacity: load_display,
        }}
      >
        <First />
        <Second />
        <Third />
        <br />
        <br />
        <Fourth />
        <br />
        <Fifth />
      </Box>
    </>
  );
}
