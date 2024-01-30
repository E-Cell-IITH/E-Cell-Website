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
          content="Join us for E-Summit 2024, the annual flagship event of Entrepreneurship Cell, IIT Hyderabad. 
          From February 1st to February 4th, experience an exhilarating journey featuring a Food Fair, inspiring talks by prominent speakers, 
          the exciting Golden Bird event, and much more. E-Summit is not just an event; it's a convergence of innovation, entrepreneurship, 
          and the spirit of achievement. Be part of this transformative experience, where ideas come to life, and aspirations take flight. 
          Unleash your creativity, engage with thought leaders, and make your mark at E-Summit 2024!"
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
