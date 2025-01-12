import React from "react";
import Navbar from "../components/Navbar";
import Navbar_esummit from "../components/Navbar_esummit";

const Esummit2025 = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/2025_esummit/esummit_2025_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Navbar_esummit />
    </div>
  );
};

// Hide main navbar for this page
Esummit2025.hideNavbar = true;

export default Esummit2025;