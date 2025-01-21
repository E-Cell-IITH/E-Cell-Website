import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Box, CircularProgress } from "@mui/material";

const Hackathon = () => {
    const router = useRouter();

    useEffect(() => {
        const targetBaseUrl = "https://hackathon.ecelliith.org.in";
        const currentPath = window.location.pathname.replace(/^\/hackathon/, ""); 
        const queryString = window.location.search; 
        const redirectUrl = `${targetBaseUrl}${currentPath}${queryString}`;

        if (window.location.href !== redirectUrl) {
            window.location.replace(redirectUrl); 
        }
    }, []);

    return (
        <Box
            height="100vh"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <CircularProgress color="secondary" />
        </Box>
    );
};

export default Hackathon;
