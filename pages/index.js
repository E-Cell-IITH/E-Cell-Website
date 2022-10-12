import First from "../components/first.js";
import Second from "../components/second";
import Third from "../components/third";
import Fourth from "../components/fourth";
import Fifth from "../components/fifth";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import Head from 'next/head'

export default function Home() {
  // const [loading, setLoading] = useState(false);
  // useEffect
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="/static/Ecell_logo.png" />
    </Head>
      <Navbar />
      <First />
      <Second />
      <Third />
      <br />
      <br />
      <Fourth />
      <br />
      <Fifth />
    </>
  );
}
