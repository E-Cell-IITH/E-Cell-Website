// import React, { useRef, useEffect, useState } from "react";
// import Head from "next/head";
// import { gsap } from "gsap";
// import Navbar from "../../components/first";
// import style from "../../styles/first.module.css";
// import { Box, CircularProgress } from "@mui/material";
// import { useRouter } from "next/router";

// const PreOrientation = () => {
//     const preDescr = useRef();
//     const [imageSrc, setImageSrc] = useState("/guide/phone.svg");
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [isLoaded2, setIsLoaded2] = useState(false);
//     const router = useRouter();
//     const [isLarger, setIsLarger] = useState(false);
//     useEffect(() => {
//         setIsLoaded2(false)
//         const handleResize = () => {
//             const newSrc = window.innerWidth >= 600 ? "/guide/pc.svg" : "/guide/phone.svg";
//             setIsLarger(window.innerWidth >= 600);
//             if (newSrc !== imageSrc) {
//                 setImageSrc(newSrc);
//             }
//         };

//         handleResize();
//         window.addEventListener("resize", handleResize);

//         setIsLoaded2(true)
//         const timer = setTimeout(() => {
//             setIsLoaded(true);
//         }, 2000);

//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     const openDocs = () => {
//         const url = 'https://docs.google.com/document/d/16w7BxE18MUYPX69yHRuytwvvO2--7qELMC5B4W2hJEw/edit';
//         window.open(url, '_blank')
//     }

//     return (
//         <>
//             <Head>
//                 <title>Freshers Guide | Entrepreneurship Cell IIT Hyderabad</title>
//                 <meta name="google-site-verification" content="agHaKoDcApHadKU7BhRCOJK0w5SRZtQCG9YxNKZBGvc" />
//             </Head>

//             <Navbar
//                 subheading="Campus Guide"
//                 heading="PRE-ORIENTATION 2024"
//                 preOrientation={true}
//                 desc={false}
//             />

//             <Box
//                 sx={
//                     {
//                         ml: { xs: 0, md: "180px" },
//                         mr: { xs: 0, md: '180px' },
//                         display: "flex",
//                         justifyContent: { xs: 'center', md: 'start' },
//                         alignItems: 'start',
//                         flexDirection: 'column'
//                     }
//                 }
//                 className={style.preRed}

//             >

//                 <div className={style.preDescr} ref={preDescr}>
//                     {"Hi guys, Welcome to IITH Family! To help you settle we've prepared a comprehensive guide with all the essential information you'll need!"} <br />
//                 </div>

//                 <Box
//                     className={style.preRed}
//                     sx={{
//                         width: { xs: '100%', md: '840px' },
//                         mt: {xs: '40px', md:'72px'},
//                         textAlign: 'start',
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             width: '100%',
//                             mt: '12px',
//                             textAlign: 'start',
//                             display: 'flex',
//                             flexDirection: "row",
//                             justifyContent: 'start',
//                             alignItems: 'center',
//                             mx: 'auto'
//                         }}

//                     >
//                         {isLarger && <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <circle cx="9" cy="9.26099" r="9" fill="#D9D9D9" />
//                         </svg>}

//                         <div style={{ marginLeft: isLarger ? "8px" : "30px" }}>
//                             Checkout Campus Map for Important locations -
//                         </div>

//                     </Box>

//                     <button style={{ marginLeft: '28px' }} onClick={() => window.location.href = '/freshers/map'} className={style.campusMap}>
//                         Campus Map
//                     </button>
//                 </Box>

//                 <Box
//                     className={style.preRed}
//                     sx={{
//                         width: { xs: '100%', md: '840px' },
//                         mt: '12px',
//                         textAlign: 'start',
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             width: '100%',
//                             mt: '12px',
//                             textAlign: 'start',
//                             display: 'flex',
//                             flexDirection: "row",
//                             justifyContent: 'start',
//                             alignItems: 'center',
//                             mx: 'auto'
//                         }}

//                     >
//                         {isLarger && <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <circle cx="9" cy="9.26099" r="9" fill="#D9D9D9" />
//                         </svg>}

//                         <div style={{ marginLeft: isLarger ? "8px" : "30px" }}>
//                             Download/View the campus guide-
//                         </div>

//                     </Box>
//                     <button style={{ marginLeft: '28px' }} onClick={openDocs} className={style.campusMap}>
//                         Campus Guide Doc
//                     </button>
//                 </Box>
//             </Box>


//             {!isLoaded && <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
//                 <CircularProgress color="secondary" />
//             </Box>}


//             {isLoaded2 && <Box mt={{ xs: '45px', md: '40px' }}>
//                 <div className='min-h-screen flex flex-col items-center'>
//                     <img style={{pointerEvents:"none"}} draggable="false" src={imageSrc} className='full-width-svg' alt="Campus Guide" />
//                 </div>
//             </Box>}
//         </>
//     );
// }

// export default PreOrientation;

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Box, CircularProgress } from "@mui/material";

const PreOrientation = () => {
    const router = useRouter();

    useEffect(() => {
        const url = 'https://docs.google.com/document/d/16w7BxE18MUYPX69yHRuytwvvO2--7qELMC5B4W2hJEw/edit';
        if (window.location.href !== url) {
            window.location.replace(url);
        }
    }, []);

    return (
        <Box height="100vh" sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <CircularProgress color="secondary" />
        </Box>
    );
};

export default PreOrientation;

