import First from "../components/esummit";
import Events from "../components/Events/Events";
import Keynote from "../components/Events/Keynote";
import KeySpeakers from "../components/Events/KeySpeakers";
import Speakers from "../components/Events/Speakers";
import Workshops from "../components/workshops";
import Panel from "../components/Panel";
import { Competitions, StartupfairandGallery, AboutandTheme } from "../components/ESummt/Components";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>E-Summit 2024</title>
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
