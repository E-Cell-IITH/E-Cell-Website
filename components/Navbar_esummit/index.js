const Navbar_esummit = () => {
  return (
    <nav
      className="flex items-center px-8 py-4 text-white font-sans"
      style={{
        backgroundColor: "transparent",
      }}
    >
      {/* Container for the entire navbar */}
      <div className="flex items-center justify-between w-full max-w-screen-xl">
        
        {/* Logo Section */}
        <div className="flex items-center justify-start flex-shrink-0">
          <img
            src="/2025_esummit/ecell logo.png"
            alt="E-Cell Logo"
            className="h-10"
          />
        </div>

        {/* Navbar Links */}
        <div className="flex items-center justify-center flex-grow">
          <ul className="flex space-x-8 text-sm font-medium">
            {['Home', 'Event', 'Accommodation', 'Sponsor', 'Speakers', 'Agenda', 'Contact us', 'Register'].map((item) => (
              <li
                key={item}
                className="hover:text-gray-300 transition duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar_esummit;
