import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import { gsap } from "gsap";
import Navbar from "../../components/first";
import style from "../../styles/first.module.css";
import { Box, CircularProgress } from "@mui/material";

const PreOrientation = () => {
    const preDescr = useRef();
    const [imageSrc, setImageSrc] = useState("/guide/phone.svg");
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoaded2, setIsLoaded2] = useState(false);

    useEffect(() => {
        setIsLoaded2(false)
        const handleResize = () => {
            const newSrc = window.innerWidth >= 600 ? "/guide/pc.svg" : "/guide/phone.svg";
            if (newSrc !== imageSrc) {
                setImageSrc(newSrc);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        setIsLoaded2(true)
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 2000);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <>
            <Head>
                <title>Freshers Guide | Entrepreneurship Cell IIT Hyderabad</title>
                <meta name="google-site-verification" content="agHaKoDcApHadKU7BhRCOJK0w5SRZtQCG9YxNKZBGvc" />
            </Head>

            <Navbar
                subheading="Campus Guide"
                heading="PRE-ORIENTATION 2024"
                preOrientation={true}
                desc={false}
            />

            <div className={style.preDescr} ref={preDescr}>
                {"Hi guys, Welcome to IITH Family! To help you settle we've prepared a comprehensive guide with all the essential information you'll need!"} <br />
            </div>

            <Box
                sx={{
                    width: { xs: '80%', md: '720px' },
                    mt: '12px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    mx: 'auto'
                }}
                className={style.preRed}
            >
                <div>
                    Also checkout Campus Map for Important locations -
                </div>
                <button onClick={() => window.location.href = '/freshers/map'} className={style.campusMap}>
                    Campus Map
                </button>
            </Box>

            {!isLoaded && <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <CircularProgress color="secondary" />
            </Box>}


            {isLoaded2 && <Box mt={{ xs: '220px', md: '160px' }}>
                <div className='min-h-screen flex flex-col items-center'>
                    {/* <object type="image/svg+xml" data={imageSrc} className="full-width-svg" aria-label="Campus Guide">

                    </object> */}
                    <img draggable="false" src={imageSrc} className='full-width-svg' alt="Campus Guide" />
                </div>
            </Box>}
        </>
    );
}

export default PreOrientation;
