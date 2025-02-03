import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Card, CardContent, CardMedia, Typography, Box, Hidden } from "@mui/material";

const EventsCard = ({ url, title, description, redirectionUrl }) => {
  const [flipped, setFlipped] = useState(false);

  const { transform } = useSpring({
    transform: `rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 1, tension: 200, friction: 60 },
  });

  return (
    <Box
      sx={{
        perspective: "1000px",
        width: 331,
      }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <animated.div
        style={{
          transform,
          width: "100%",
          height: 250,
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front Side */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            rotateY: "180deg",
            visibility: flipped ? "hidden" : "visible",
          }}
        >
          <Card
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#181828",
              borderRadius: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(143, 135, 135, 0.10)",
              borderTop: "1.8px solid rgba(255, 255, 255, 0.79)",
              borderBottom: "1.2px solid rgb(197, 197, 197)",
              borderLeft: "1px solid rgba(255, 255, 255, 0.3)",
              borderRight: "1px solid rgba(255, 255, 255, 0.3)",
              padding: 2,
              fontFamily: "Inter",
            }}
          >
            <CardMedia
              component="img"
              height="150"
              image={url}
              alt={title}
              sx={{
                width: "90%",
                backgroundColor: "#E0E0E0",
                borderRadius: 1,
              }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" color="white">
                {title}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Back Side */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <Card
            sx={{
              // width: "100%",
              // height: "100%",
              // backgroundColor: "#222",
              // display: "flex",
              // flexDirection: "column",
              // justifyContent: "center",
              // alignItems: "center",
              // padding: 2,
              // textAlign: "center",
              // color: "white",
              // borderRadius: 0,

              width: "100%",
              height: "100%",
              backgroundColor: "#181828",
              borderRadius: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(143, 135, 135, 0.10)",
              borderTop: "1.8px solid rgba(255, 255, 255, 0.79)",
              borderBottom: "1.2px solid rgb(197, 197, 197)",
              borderLeft: "1px solid rgba(255, 255, 255, 0.3)",
              borderRight: "1px solid rgba(255, 255, 255, 0.3)",
              padding: 2,
              fontFamily: "Inter",
            }}
          >
            <Typography variant="body1">
              {description}
            </Typography>
          </Card>
        </Box>
      </animated.div>
    </Box>
  );
};

export default EventsCard;
