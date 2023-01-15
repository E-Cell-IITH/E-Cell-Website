import First from "../components/esummit";
import Events from "../components/Events/Events";
import Keynote from "../components/Events/Keynote";
import Speakers from "../components/Events/Speakers";
import Workshops from "../components/workshops";


export default function Home() {
  return (
    <div className="bg-dark">
      <First />
      {/* <Keynote/> */}
      <Workshops />
      <Events />
      <Speakers />
    </div>
  );
}
