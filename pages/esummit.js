import First from "../components/esummit";
import Events from "../components/Events/Events";
import Keynote from "../components/Events/Keynote";
import Speakers from "../components/Events/Speakers";


export default function Home() {
  return (
    <div className="bg-dark">
      <First />
      <Keynote/>
      <Events />
      <Speakers />
    </div>
  );
}
