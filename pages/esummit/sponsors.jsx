import React from "react";
import EsummitNavbar from "../../components/ESummt/navbar";
import { Josefin_Sans } from "next/font/google";
import { Tilt } from "react-next-tilt";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const josefinSans = Josefin_Sans({ subsets: ["latin"], display: "swap" });

import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const sponsors1 = [
    { name: 'Sponsor 1', image: "/esummit25/sponsors/test.png", link: 'https://example.com/sponsor1' },
    { name: 'Sponsor 1', image: "/esummit25/sponsors/test.png", link: 'https://example.com/sponsor1' },
    { name: 'Sponsor 1', image: "/esummit25/sponsors/test.png", link: 'https://example.com/sponsor1' },
    { name: 'Sponsor 1', image: "/esummit25/sponsors/test.png", link: 'https://example.com/sponsor1' },
    { name: 'Sponsor 1', image: "/esummit25/sponsors/test.png", link: 'https://example.com/sponsor1' },
    { name: 'Sponsor 1', image: "/esummit25/sponsors/test.png", link: 'https://example.com/sponsor1' },
    { name: 'Sponsor 1', image: "/esummit25/sponsors/test.png", link: 'https://example.com/sponsor1' },
    { name: 'Sponsor 1', image: "/esummit25/sponsors/test.png", link: 'https://example.com/sponsor1' },
    { name: 'Sponsor 1', image: "/esummit25/sponsors/test.png", link: 'https://example.com/sponsor1' },
    
  ];

  const sponsors2 = [
    { name: 'Sponsor 1', image: "/esummit25/sponsors/test.png", link: 'https://example.com/sponsor1' },
    { name: 'Sponsor 1', image: "/esummit25/sponsors/test.png", link: 'https://example.com/sponsor1' },
    { name: 'Sponsor 1', image: "/esummit25/sponsors/test.png", link: 'https://example.com/sponsor1' },
    { name: 'Sponsor 1', image: "/esummit25/sponsors/test.png", link: 'https://example.com/sponsor1' },
    { name: 'Sponsor 1', image: "/esummit25/sponsors/test.png", link: 'https://example.com/sponsor1' },
    { name: 'Sponsor 1', image: "/esummit25/sponsors/test.png", link: 'https://example.com/sponsor1' },
    { name: 'Sponsor 1', image: "/esummit25/sponsors/test.png", link: 'https://example.com/sponsor1' },
    { name: 'Sponsor 1', image: "/esummit25/sponsors/test.png", link: 'https://example.com/sponsor1' },
    { name: 'Sponsor 1', image: "/esummit25/sponsors/test.png", link: 'https://example.com/sponsor1' },
    
  ];

  const SponsorCarousel = ({ sponsors }) => {
    return (
      <Carousel
        centerMode
        centerSlidePercentage={20} // Display around 20% of each slide
        showThumbs={false} // Hide thumbnails
        infiniteLoop={true} // Enable infinite looping
        autoPlay // Automatically scroll the carousel
        interval={0} // Remove delay between slides
        transitionTime={600} // Smooth transition duration (in ms)
        showStatus={false} // Hide slide status
        showArrows={true} // Hide navigation arrows
        stopOnHover={false} // Prevent pausing on hover
        swipeable={false} // Disable manual swiping for uninterrupted motion
      >
        {sponsors.map((sponsor, index) => (
          <div key={index} style={{ padding: "0 10px" }}> {/* Add space between slides */}
            <Link href={sponsor.link}>
              <img 
                src={sponsor.image} 
                alt={sponsor.name} 
                style={{ width: "100%", height: "auto", borderRadius: "10px" }} // Add styling for images
              />
            </Link>
          </div>
        ))}
      </Carousel>
    );
  };
  
  


function SponsorsMain() {
    return (
      <div
        suppressHydrationWarning
        suppressContentEditableWarning
        className={josefinSans.className}
        style={{
          position: "relative",
          backgroundImage: "url('/esummit25/bg.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // width: "100vw",
          height: "100vh",
          // overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <Box
          sx={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 10,
          }}
        >
          <EsummitNavbar />
        </Box>
  
        <div
          style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflowY: "auto", // Make content scrollable
            padding: "2rem 0",
            overflowX: "hidden",
          }}
        >
            <Typography
        className="flex flex-wrap justify-center"
        sx={{
          fontSize:{md: "1.7rem", sm: "1.5rem", xs: "1.2rem"},
          fontWeight: "500",
          textAlign: "center",
          marginBottom: "2rem",
          letterSpacing: {md: "0.5rem", sm: "0.4rem", xs: "0.3rem"},
          color:"gray"
          
        }}
      >

        PAST SPONSORS
      </Typography>
            <SponsorCarousel sponsors={sponsors1} />
            <Box style={{ textAlign: "center", marginTop: "2rem" }}>
                &nbsp;
            </Box>
            <SponsorCarousel sponsors={sponsors2} />
        </div>
      </div>
    );
  }
  
export default SponsorsMain;