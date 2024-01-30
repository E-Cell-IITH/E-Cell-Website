import Head from "next/head";
import Competitions from "../components/ESummt/Competitions";
import {
  AboutandTheme,
  StartupfairandGallery,
} from "../components/ESummt/Components";
import First from "../components/esummit";

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Summit 2024 | Innovation, Entrepreneurship, and Inspiration</title>
        <meta
          property="og:description"
          name="description"
          content="E-Summit 2024: Feb 1-4 at IIT Hyderabad by Entrepreneurship Cell. Innovation, talks, Golden Bird event & more. Unleash creativity!"
        />
      </Head>
      <div className="bg-dark">
        <First />
        <AboutandTheme />
        <Competitions />
        <StartupfairandGallery />
      </div>
    </>
  );
}
