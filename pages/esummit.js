import Head from "next/head";
import Competitions from "../components/ESummt/Competitions";
import { AboutandTheme, StartupfairandGallery } from "../components/ESummt/Components";
import First from "../components/esummit";

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
