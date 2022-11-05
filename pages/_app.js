import "../styles/globals.css";
import React from "react";
import Navbar from "../components/Navbar";
import Fifth from "../components/fifth";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import theme from "../theme/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta charset="utf-8" />
          </Head>
          <Navbar />
          <Component {...pageProps} />
          <Fifth />
        </ThemeProvider>
      </React.Fragment>
    </>
  );
}

export default MyApp;
