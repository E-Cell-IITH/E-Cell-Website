import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Image from "next/image";
import style from '../styles/card.module.css';


function Card({
  isFlip = false,
  email = "maharshikadeval@gmail.com",
  linkedIN = "",
  imgUrl = "https://res.cloudinary.com/dwsverefw/image/upload/v1665687247/samples/people/smiling-man.jpg",
  name = "Name",
  position = false,
  sx,
  bold = false,
  id,
  className,
  notCard = false,
}) {
  return (
    <Box
      id={id}
      as="div"
      className={(!notCard && "card") || ""}
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
      {isFlip && <Box
        className="image"
        sx={{
          height: 170,
          width: 126,
          borderRadius: 3,
        }}
      >
        <div className={style.container}>
          <div className={style.card}>
            <div className={style.front}>
              <Image
                src={imgUrl}
                layout="fill"
                objectFit="cover"
                alt={name}
                className="card-img"
                priority
              />
            </div>
            <div className={style.back}>
              <a href={"mailto:" + email}>
                <Image
                  src="https://res.cloudinary.com/dkqekbvpg/image/upload/v1687506112/mail_rjdpni.png"
                  height="30"
                  width="30"
                  alt={name}
                  className="card-img"
                  priority
                />
              </a>
              <a href={linkedIN}>
                <Image
                  src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696046/ecell/linkedin_yylzcz.png"
                  height="30"
                  width="30"
                  alt={name}
                  className="card-img"
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </Box>}
      {!isFlip && <Box
        className="image"
        as="div"
        sx={{
          position:"relative",
          height: 170,
          width: 126,
          pointerEvents:"none",
          borderRadius: 3,
          overflow:"hidden"
        }}
      >
        <div className={style.container}>
          <div className={style.card}>
            <div className={style.front}>
              <Image
                src={imgUrl}
                layout="fill"
                objectFit="cover"
                alt={name}
                className="card-img"
                priority
              />
            </div>
            <div className={style.back}>
              <a href={"mailto:" + email}>
                <Image
                  src="https://res.cloudinary.com/dkqekbvpg/image/upload/v1687506112/mail_rjdpni.png"
                  height="30"
                  width="30"
                  alt={name}
                  className="card-img"
                  priority
                />
              </a>
              <a href={linkedIN}>
                <Image
                  src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696046/ecell/linkedin_yylzcz.png"
                  height="30"
                  width="30"
                  alt={name}
                  className="card-img"
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </Box>}
      <Box as="div">
        <Typography
          className="name"
          variant="h5"
          component="h2"
          sx={{
            fontFamily: "Montserrat",
            mt: "1rem",
            fontSize: { xs: "1rem", md: "1.5rem", xl: "1.5rem" },
            textAlign: "center",
            fontWeight: bold ? 500 : 400,
          }}
        >
          {name}
        </Typography>
         {position && (
          <Typography
            className="position"
            variant="h6"
            component="h2"
            sx={{
              fontFamily: "Montserrat",
              fontSize: {
                sm: "1.5rem",
                md: "1.6rem",
                xl: "1.3rem",
                textAlign: "center",
                fontWeight: 600,
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
