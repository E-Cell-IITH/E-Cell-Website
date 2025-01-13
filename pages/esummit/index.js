import Head from "next/head";
import Competitions from "../../components/ESummt/Competitions";
import {
  AboutandTheme,
  StartupfairandGallery,
} from "../../components/ESummt/Components";
import First from "../../components/esummit";


export default function Home() {
  return (
    <>
      <Head>
        <title>
          E-Summit 2025 | BE THE CHANGE THE WORLD NEEDS
        </title>
        <meta
          property="og:description"
          name="description"
          content="E-Summit 2025: Feb 8-9 at IIT Hyderabad by Entrepreneurship Cell. Innovation, talks, Golden Bird event & more. Unleash creativity!"
        />
        <meta
          name="google-site-verification"
          content="agHaKoDcApHadKU7BhRCOJK0w5SRZtQCG9YxNKZBGvc"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"></link>
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
