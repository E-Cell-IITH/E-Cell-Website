import First from '../components/esummit';
import Events from '../components/Events/Events';
import Keynote from '../components/Events/Keynote';
import KeySpeakers from '../components/Events/KeySpeakers';
import Speakers from '../components/Events/Speakers';
import Workshops from '../components/workshops';

export default function Home() {
  return (
    <div className="bg-dark">
      <First />
      {/* <Keynote /> */}

      <KeySpeakers />
      <Workshops />
      <Events />
      {/* <Speakers /> */}
    </div>
  );
}
