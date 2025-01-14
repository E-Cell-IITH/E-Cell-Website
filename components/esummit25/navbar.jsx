import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';


const EsummitNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const router = useRouter();
  const notify = () => toast.info("Releasing soon, Stay tuned!",{
    autoClose: 2000,
  });

  const navItems = [
    { name: "Home", path: "/esummit", isComingSoon: false },
    { name: "Event", path: "/esummit/event", isComingSoon: true },
    { name: "Tickets", path: "/esummit/tickets", isComingSoon: false },
    { name: "Sponsor", path: "/esummit/sponsor", isComingSoon: true },
    { name: "Speakers", path: "/esummit/speakers", isComingSoon: true },
    { name: "Agenda", path: "/esummit/agenda", isComingSoon: true },
    { name: "Register", path: "/esummit/register", isComingSoon: true },
    { name: "Main Website", path: "/", isComingSoon: false },
  ];

  const isBiggerThan1150 = useMediaQuery("(min-width: 1150px)");
  const isBiggerThan1024 = useMediaQuery("(min-width: 1024px)");

  return (
    <header
      className="text-white"
      style={{
        marginLeft: isBiggerThan1150 ? "5rem" : "0",
        marginRight: isBiggerThan1150 ? "5rem" : "0",
      }}
    >
      <ToastContainer
      
      />
      <div className="flex items-center justify-between px-6 py-4 relative">
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

        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <nav
          style={{ backgroundColor:  isBiggerThan1024? "transparent" : "#1c1627" }}
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:justify-center absolute lg:static left-0 right-0 top-16 lg:bg-transparent lg:space-x-10 z-50`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10 py-4 lg:py-0">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    if (item.isComingSoon) {
                      notify();
                      return;
                    }
                    router.push(item.path);
                  }}
                  // href={item.path}
                  className="text-white hover:text-gray-300 transition-colors text-lg lg:text-base"
                  style={{
                    fontWeight: "400",
                    fontFamily: "Montserrat",
                  }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default EsummitNavbar;
