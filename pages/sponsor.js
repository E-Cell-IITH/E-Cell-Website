import Image from "next/image";
import Grid from "@mui/material/Grid";
import { style } from "@mui/system";
import styles from "../styles/sponsor.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";



const Sponsor = () => {
  return (
    <div>
      <div className="text-center text-white text-3xl pb-16 pt-8">Event Partner</div>
      <Grid
        container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        rowSpacing={2}
        gap={5}
      >
        <Grid
          item
          xs={7}
          sm={9}
          lg={3}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
            }}
          >
            <CardMedia
              sx={{
                width: 200,
                height: 60,
                marginTop: 12.25,
                marginLeft: 2.57,
              }}
              image="/Amazon.png"
              title="green iguana"
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={7}
          sm={9}
          lg={3}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
            }}
          >
            <CardMedia
              sx={{ width: 220, height: 60, marginTop: 12, marginLeft: 2.5 }}
              image="/groww.png"
              title="green iguana"
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={7}
          sm={9}
          lg={3}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
            }}
          >
            <CardMedia
              sx={{ height: 225, marginTop: 3.6 }}
              image="/sttock_gro.png"
              title="green iguana"
            />
          </Card>
        </Grid>
      </Grid>
      <div className="text-center text-white text-3xl pb-16 pt-10">
        Education Partner
      </div>
      <Grid
        container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        rowSpacing={2}
        gap={5}
      >
        <Grid
          item
          xs={7}
          sm={9}
          lg={3}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
            }}
          >
            <CardMedia
              sx={{ width: 210, height: 20, marginTop: 14.75, marginLeft: 2.5 }}
              image="/i_school_connect.png"
              title="green iguana"
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={7}
          sm={9}
          lg={3}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
            }}
          >
            <CardMedia
              sx={{ width: 255, height: 150, marginTop: 6.2 }}
              image="/henry_harvin.png"
              title="green iguana"
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={7}
          sm={9}
          lg={3}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
            }}
          >
            <CardMedia
              sx={{ height: 150, marginTop: 5.7, marginRight: 1.5 }}
              image="/YHills.png"
              title="green iguana"
            />
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        rowSpacing={2}
        gap={5}
      >
        <Grid
          item
          xs={7}
          sm={9}
          lg={5}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="text-center text-white text-3xl pb-16 pt-10">
            Powered By Platform Partner
          </div>
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
            }}
          >
            <CardMedia
              sx={{ width: 215, height: 85, marginTop: 9.25, marginLeft: 1.8 }}
              image="/Unstop.jpg"
              title="green iguana"
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={7}
          sm={9}
          lg={5}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="text-center text-white text-3xl pb-16 pt-10">
            OutReach Partner
          </div>
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
            }}
          >
            <CardMedia
              sx={{ width: 200, height: 65, marginTop: 11, marginLeft: 2.95 }}
              image="/talerang.jpg"
              title="green iguana"
            />
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        rowSpacing={2}
        gap={5}
      >
        <Grid
          item
          xs={7}
          sm={9}
          lg={5}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="text-center text-white text-3xl pb-16 pt-10">
            StartUp Ecosystem Partner
          </div>
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
            }}
          >
            <CardMedia
              sx={{ width: 220, height: 85, marginTop: 9.25, marginLeft: 2 }}
              image="/Ivycamplogo.png"
              title="green iguana"
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={7}
          sm={9}
          lg={5}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="text-center text-white text-3xl pb-16 pt-10">
            Travel Partner
          </div>
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
            }}
          >
            <CardMedia
              sx={{ width: 190, height: 80, marginTop: 11, marginLeft: 2.95 }}
              image="/ease_my_trip.png"
              title="green iguana"
            />
          </Card>
        </Grid>
      </Grid>
      <div className="text-center text-white text-3xl pb-16 pt-12">
        Learning Partner
      </div>
      <Grid
        container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        rowSpacing={2}
        gap={5}
      >
        <Grid
          item
          xs={7}
          sm={9}
          lg={5}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
            }}
          >
            <CardMedia
              sx={{ width: 190, height: 80, marginTop: 11, marginLeft: 3.3 }}
              image="/Techobyte.jpg"
              title="green iguana"
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={7}
          sm={9}
          lg={5}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
            }}
          >
            <CardMedia
              sx={{ width: 190, height: 130, marginTop: 8, marginLeft: 3.7 }}
              image="/edufabrica.png"
              title="green iguana"
            />
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        rowSpacing={2}
        gap={5}
      >
        <Grid
          item
          xs={7}
          sm={9}
          lg={5}
          sx={{
            spacing: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom:10
          }}
        >
          <div className="text-center text-white text-3xl pb-16 pt-10">
            Certificate Partner
          </div>
          <Card
            sx={{
              minWidth: 250,
              maxWidth: 250,
              minHeight: 250,
              maxHeight: 250,
            }}
          >
            <CardMedia
              sx={{ width: 150, height: 170, marginTop: 6.25, marginLeft: 5.75 }}
              image="/give_my_certificate.png"
              title="green iguana"
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Sponsor;
