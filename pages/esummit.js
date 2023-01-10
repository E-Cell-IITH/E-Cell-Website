import First from "../components/esummit";
import Events from "../components/Events/Events";
import Speakers from "../components/Events/Speakers";

//dark is the color for black bg
//lightBlue is the color for the Arduous Carifer
//blue is the blue for the headings
//offwhite is the color for the paragraphs
//the library is mobile first, so we have to make the site mobile me pehle  then desktop
//~sid

export default function Home() {
  return (
    <div className="bg-dark">
      <First />
      <Events />
      <Speakers />
    </div>
  );
}
