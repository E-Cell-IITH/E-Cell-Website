import "../styles/globals.css";
import React from "react";
import Navbar from "../components/Navbar";
import Fifth from "../components/fifth";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import { useRouter } from "next/router";
import theme from "../theme/theme";
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-6VNW4WYT0W"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-6VNW4WYT0W');
            </script> */}
            <meta
              name="google-site-verification"
              content="agHaKoDcApHadKU7BhRCOJK0w5SRZtQCG9YxNKZBGvc"
            />
          </Head>
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-6VNW4WYT0W"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-6VNW4WYT0W');
              `,
            }}
          />
          <Navbar esummit={router.pathname.startsWith("/esummit")} />
          <Component {...pageProps} />
          <Fifth esummit={router.pathname.startsWith("/esummit")} />
        </ThemeProvider>
      </React.Fragment>
    </>
  );
}

export default MyApp;
