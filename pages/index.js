import First from "../components/first.js";
import Second from "../components/second";
import Third from "../components/third";
import Fourth from "../components/fourth";
import Fifth from "../components/fifth";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

export default function Home() {
  // const [loading, setLoading] = useState(false);
  // useEffect
  return (
    <>
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
