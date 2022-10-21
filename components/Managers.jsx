import React from "react";
import Card from "../components/Card";
import { Grid, Box } from "@mui/material";
import { Typography } from "@mui/material";
import Fifth from "../components/fifth";
import Navbar from "../components/Navbar";
import parallax from "../styles/team.module.css";

const Managers = () => {
  const operations_info = [
    {
      name: "Yash Ramteke",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666111320/ecell/YashRamteke_Operations_rqxjvb.jpg",
    },
    {
      name: "Asit Desai",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109710/ecell/Asit_Operations_fysqx4.jpg",
    },
    {
      name: "Sneha",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666110515/ecell/Mask_group_ujpefj.jpg",
    },
    {
      name: "Pradeep",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109712/ecell/Pradeep_Operations_ze5n04.jpg",
    },
    {
      name: "Amulya",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666111323/ecell/Amulya_Operations_hinoum.jpg",
    },
    {
      name: "Subham",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666111510/ecell/Subham_Operations__usrgr0.jpg",
    },
    {
      name: "Yash Vardhan",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109687/ecell/YASH_VARDHAN_SINGH_GAHLOT_emybei.jpg",
    },
    {
      name: "Tapishi kaur",
      url: false,
    },
  ];
  const sponsorship_info = [
    {
      name: "Anirudh Dash",
      url: false,
    },
    {
      name: "Gaurang",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109715/ecell/Gaurang_Sponsorship_fifqcs.jpg",
    },
    {
      name: "Vedant",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109699/ecell/Vedant_Sponsorship_akpelr.jpg",
    },
    {
      name: "Srijan",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109698/ecell/Srijan_sponsorship_s9ousy.jpg",
    },
    {
      name: "Harini",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109711/ecell/Harini_naik_sponsorship_z2f58v.jpg",
    },
    {
      name: "Avishkar",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666112009/ecell/Avishkar_Sponsorship_pxsz7k.jpg",
    },
    {
      name: "Aishwarya",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109706/ecell/Aishwarya_Sponsorship_xmocfh.jpg",
    },
  ];
  const ideation_info = [
    {
      name: "Ananya",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109710/ecell/Ananya_Ideation_uhlpfc.jpg",
    },
    {
      name: "Owise Ahmed",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109712/ecell/Owaise_ideation_r5azmd.jpg",
    },
    {
      name: "Harshit Thakur",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109711/ecell/Harshit_Ideation_p1m5me.jpg",
    },
    {
      name: "Tanvisree",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666114309/ecell/WhatsApp_Image_2022-10-18_at_22.54.28_lwhpa1.jpg",
    },
    {
      name: "Shreyas",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109713/ecell/ShreyasWankhede_ideation_zmxijk.jpg",
    },
    {
      name: "Pavan",
      url: false,
    },
  ];

  const design_info = [
    {
      name: "Samyak",
      url: false,
    },
    {
      name: "Ishita",
      url: false,
    },
    {
      name: "Jay",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109711/ecell/Jay_Bhanushali_Design_ssdtf7.jpg",
    },
    {
      name: "Arshiya",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109710/ecell/Arshiya_M_Design_klviry.jpg",
    },
    {
      name: "Harish",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109713/ecell/Sai_Harish_Design_vixqpg.jpg",
    },
    {
      name: "Manaswee",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109712/ecell/Manaswee_Chandwaskar-_Design_vodybb.jpg",
    },
  ];
  const web_info = [
    {
      name: "Jaswanth",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109712/ecell/Jaswanth__webdev_gmsw5s.jpg",
    },
    {
      name: "Maharshi",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666335918/ecell/WhatsApp_Image_2022-10-19_at_00.48.53_f7ce81.jpg",
    },
    {
      name: "Siddarth Saha",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109714/ecell/Siddarth_WebDev_jax5sq.jpg",
    },
    {
      name: "Siddanth",
      url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666115485/ecell/WhatsApp_Image_2022-10-18_at_23.20.57_ks3mce.jpg",
    },
    {
      name: "",
      url: "",
    },
    {
      name: "",
      url: "",
    },
  ];

  const discription = [
    "The Operations domain is in charge of putting on events and competitions on campus. We makes arrangements like booking places, procuring and setting up equipment, media coverage, logistics and transportation. We also collaborate with the PR and Networking teams on the Campus Ambassador programme to expand the reach of E-Cell among other colleges. We conduct workshops and bootcamps. also introduce new event ideas to promote entrepreneurial spirit among students.",

    "The sponsorship domain is responsible for coordinating the sponsorship efforts of various companies, and for investigating other funding opportunities. Our duties involve preparing a budget, monitoring it carefully and reporting it on a regular basis. Besides, keeping a proper record of sponsor details, actively contacting/mailing to current sponsors for the upcoming season. We seek new sponsors, and thus research and compile the information needed to collaborate with several such companies after concurring upon a set of deliverables to be offered by each party. Furthermore, upon signage, we maintain a Memorandum of Understanding with each sponsor and thus ensure that sponsors get recognition. Afterall, we strive to focus on developing relationships with new sponsors, and manage existing ones. ",

    "The Ideation domain is responsible for deciding the theme of the flagship event E-Summit and the topics of its panel discussions and keynote talks. We invite great personalities to our E-Summit for a variety of insightful keynote talks and panel discussions. We are also the brain behind the social media handles of E-Cell. We create content for various social media handles on which we make our presence felt. We ideate and come up with activities and competitions that E-Cell conducts.",

    "Design domain creates design for the website , social media templates , events posters, promo videos and are also responsible for planning the overall logistics of designing the campus on the day of E summit.",

    "The Web domain is in charge of designing and managing the E-Cell website, as well as the CA-Portal and keeping information for our yearly flagship events. We are responsible for displaying the content in a very readable manner as well as handling other website-related technicalities. Apart from development, it is also responsible for maintaining the database of several startups and VC's with whom we have contact as well as  students from various universities.",
  ];
  const Domain = ({ discription, info, title }) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "column", lg: "row" },
          allignItems: "center",
          marginTop: "10rem",
        }}
      >
        {/* operations info */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { lg: "40rem" },
            justifyContent: "center",
            allignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "white",

              margin: { xs: "0 auto", lg: "0 10rem" },
              paddingBottom: "1rem",
              fontFamily: "Montserrat",
              fontSize: {
                sm: "2.5rem",
                md: "3rem",
                fontWeight: 600,
              },
            }}
          >
            {title}
          </Typography>
          <Typography
            varient="p"
            sx={{
              color: "white",
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
              width: { xs: "20rem", md: "30rem" },
              margin: { xs: "0 auto", lg: "0 10rem" },
              textAlign: { xs: "center", lg: "left" },
              ontFamily: "Montserrat",
              fontSize: {
                xs: ".9rem",
                sm: ".9rem",
                md: "1rem",
                lg: "1.2rem",
                fontWeight: 300,
              },
            }}
          >
            {discription}
          </Typography>
        </Box>
        {/* operations team */}

        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "#D3D3D3",
              fontFamily: "Montserrat",
              textAlign: "center",
              padding: "0 auto",
              marginBottom: "2rem",
              marginTop: { xs: "1rem" },
              fontSize: {
                sm: "2rem",
                md: "2.5rem",
                fontWeight: 600,
              },
            }}
          >
            Managers
          </Typography>
          <Grid
            container
            sx={{
              position: "relative",
              zIndex: 30,
              justifyContent: "left",
            }}
            spacing={1}
          >
            {info.map((el) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={el.name}>
                <Card name={el.name} imgUrl={el.url} />
                <br />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  };
  const [loading, setLoading] = React.useState(true);
  const [load_display, setload_display] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
    setTimeout(() => setload_display(1), 1000);
    window.history.scrollRestoration = "manual";
  }, []);

  const override = {
    display: "block",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderColor: "red",
  };
  return (
    <>
      <div>
        <Navbar />
        <div id={parallax.stars}></div>
        <div id={parallax.stars2}></div>

        <Domain
          discription={discription[0]}
          info={operations_info}
          title={"Operations"}
        />
      </div>
      <Domain
        discription={discription[1]}
        info={sponsorship_info}
        title={"Sponsorship"}
      />
      <Domain
        discription={discription[2]}
        info={ideation_info}
        title={"Ideation"}
      />
      <div>
        <div id={parallax.stars}></div>
        <div id={parallax.stars2}></div>
        <Domain
          discription={discription[3]}
          info={design_info}
          title={"Design"}
        />
      </div>
      <Domain discription={discription[4]} info={web_info} title={"Web"} />

      <Fifth />
    </>
  );
};

export default Managers;
