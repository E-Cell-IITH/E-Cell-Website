
import Link from "next/link"
import Image from "next/image"
import { isMobile } from "react-device-detect"

const Navbar = () => {
  let ml = isMobile ? "0" : "8vw"
  return (
    <header>
      <div className="flex flex-wrap py-8 flex items-center justify-center" style={{marginLeft: ml}}>
        <Link href="https://ecelliith.org.in" className="flex-shrink-0">
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
              "Accommodation",
              "Sponsor",
              "Speakers",
              "Agenda",
              "Contact us",
              "Register",
            ].map((item) => (
              <li key={item}>
                <Link
                  href={`/esummit/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-white hover:text-gray-300 transition-colors text-xl"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;