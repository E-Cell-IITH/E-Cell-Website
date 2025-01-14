import Link from "next/link";
import Image from "next/image";
import { isMobile } from "react-device-detect";

const EsummitNavbar = () => {
  let ml = isMobile ? "0" : "8vw";
  return (
    <header>
      <div
        className="flex flex-wrap py-8 flex items-center justify-center"
        style={{ marginLeft: ml }}
      >
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/esummit25/ecell_logo.png"
            alt="E-Cell IIT Hyderabad Logo"
            width={120}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        <nav className="flex-grow flex justify-center">
          <ul className="flex flex-wrap justify-center items-center gap-10">
            {[
              "Home",
              "Event",
              "Tickets",
              "Sponsor",
              "Speakers",
              "Agenda",
              // "Contact us",
              "Register",
              "Main Website",
            ].map((item) => (
              <li key={item}>
                <Link
                  href={
                    item.toLowerCase() === "home"
                      ? `/esummit` : item.toLowerCase() === "main website" ? '/' 
                      : `/esummit/${item.toLowerCase().replace(" ", "-")}`
                  }
                  className="text-white hover:text-gray-300 transition-colors text-xl"
                  style={{
                    fontSize: "1rem",
                    fontWeight: "400",
                    fontFamily: "Montserrat",
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default EsummitNavbar;
