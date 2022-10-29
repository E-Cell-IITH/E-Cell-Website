import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Image from "next/image";

function Card({
  imgUrl = "https://res.cloudinary.com/dwsverefw/image/upload/v1665687247/samples/people/smiling-man.jpg",
  name = "Name",
  position = false,
  sx,
  bold = false,
}) {
  return (
    <Box
      as="div"
      sx={{
        color: "white",
        fontFamily: "Montserrat",
        position: "relative",
        zIndex: "30",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ...sx,
      }}
    >
      <Box
        as="div"
        sx={{
          position: "relative",
          height: 170,
          pointerEvents: "none",
          width: 126,
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <Image
          src={imgUrl}
          layout="fill"
          objectFit="cover"
          alt={name}
          priority
        />
      </Box>
      <Box as="div">
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontFamily: "Montserrat",
            mt: "1rem",
            fontSize: { sm: "2rem", md: "2rem", xl: "1.5rem" },
            textAlign: "center",
            fontWeight: bold ? 500 : 400,
          }}
        >
          {name}
        </Typography>
        {position && (
          <Typography
            variant="h6"
            component="h2"
            sx={{
              fontFamily: "Montserrat",
              fontSize: {
                sm: "1.5rem",
                md: "1.6rem",
                xl: "1.3rem",
                textAlign: "center",
                fontWeight: 400,
              },
            }}
          >
            {position}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default Card;
