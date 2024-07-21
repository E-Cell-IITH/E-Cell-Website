import React from 'react';
import { Card, CardMedia, Typography, Box } from '@mui/material';

const GuideCard = ({ title, description, image, latitude, longitude, width }) => {
    const openGoogleMap = () => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
        window.open(url, '_blank');
    }

    return (
        <Card sx={{
            zIndex: 1000,
            border: '#5B5A5A solid 1px',
            display: 'flex', alignItems: 'center', height: 64, width: width ? width : 190, borderRadius: '7px', overflow: 'hidden', backgroundColor: '#3A3C43', color: '#fff'
        }}>
            <CardMedia
                component="img"
                sx={{ width: 54, height: 54, ml: "6px" }}
                image={image}
                alt="Food Court"
            />
            <Box sx={{ ml: "6px", display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Typography variant="h5" component="div" sx={{ fontFamily: 'Montserrat', fontSize: "11px", fontWeight: 'bold' }}>
                    {title}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontFamily: 'Montserrat', fontSize: "7px", fontWeight: '400' }}>
                    {description}
                </Typography>

                <button onClick={openGoogleMap} class="bg-[#45474D] text-white font-montserrat button-googleMap font-normal py-0.5 px-4 rounded outline-none focus:outline-none hover:bg-[#56585D] transition-colors">
                    Show in Google Maps
                </button>
            </Box>
        </Card>
    );
};

export default GuideCard;