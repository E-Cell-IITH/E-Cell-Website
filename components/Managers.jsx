import React from 'react';
import Card from '../components/Card';
import { Grid, Box } from '@mui/material';
import { Typography } from '@mui/material';
import Fifth from '../components/fifth';
import Navbar from '../components/Navbar';
import parallax from '../styles/team.module.css';

const operations_info = [
  {
    name: 'Harshit Daheriya',
    url: '/team24/harshit_daheriya.png',
  },
  {
    name: 'Rohin Rajagopal',
    url: '/team24/rohin_rajagopal.png',
  },
  {
    name: 'Navin Joshi',
    url: '/team24/navin.png',
  },
  {
    name: 'Abhishek Godiyal',
    url: '/team24/abhishek_godiyal.png',
  },
  {
    name: 'Solangi Mohanty',
    url: '/team24/solangi.png',
  },
  {
    name: 'Yash Chawla',
    url: '/team24/yash_chawla.png',
  },
  {
    name: 'Harsh Vardhan Singh',
    url: '/team24/harsh_vardhan.png',
  },
  {
    name: 'Shiva Sai Pagilla',
    url: '/team24/shivasai.png',
  },
];
const events_competitions_info = [
  {
    name: "Abhey garg",
    url: "/team24/abheygarg.png"
  },
  {
    name: "ShivShreeram P",
    url: "/team24/shivp.png"
  },
  {
    name: "Sunny",
    url: "/team24/sunny.png"
  },
  {
    name: "Mohammed Fawwaz Ali",
    url: "/team24/fawwaz.png"
  },
  {
    name: "Sathwik K",
    url: "/team24/sathwikk.png"
  },
  {
    name: "Sai Rishi Kasturi",
    url: "/team24/sairishi.png"
  },
  {
    name: "Kowsith G",
    url: "/team24/kowsithg.png"
  },
  {
    name: "Vedant Gupta",
    url: "/team24/vedantg.png"
  },
]

// const sponsorship_info = [
//   {
//     name: "Anirudh Dash",
//     url: "https://res.cloudinary.com/dwsverefw/image/upload/v1666447571/ecell/team/managers/anirudh_e0wo7y.jpg",
//   },
//   {
//     name: "Gaurang",
//     url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1671784704/ecell/WhatsApp_Image_2022-12-23_at_14.05.43_1_ruicwu.jpg",
//   },
//   {
//     name: "Vedant",
//     url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109699/ecell/Vedant_Sponsorship_akpelr.jpg",
//   },
//   {
//     name: "Srijan",
//     url: "https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/ECellHEAD/Srijan_sponsorship_s9ousy_1_ebgjrd.jpeg",
//   },
//   {
//     name: "Harini",
//     url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109711/ecell/Harini_naik_sponsorship_z2f58v.jpg",
//   },
//   {
//     name: "Avishkar",
//     url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666112009/ecell/Avishkar_Sponsorship_pxsz7k.jpg",
//   },
//   {
//     name: "Aishwarya",
//     url: "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109706/ecell/Aishwarya_Sponsorship_xmocfh.jpg",
//   },
// ];

const ideation_info = [
  {
    name: "Vaishnavi",
    url: "/team24/vaishnavi.png"
  },
  {
    name: "Anagha K",
    url: "/team24/anaghak.png"
  },
  {
    name: "Atharva Patil",
    url: "/team24/atharvap.png"
  },
  {
    name: "Chavan Rushikesh",
    url: "/team24/chavanr.png"
  },
  {
    name: "Amogh Bindal",
    url: "/team24/amoghb.png"
  },
  {
    name: "Ujjwal Kalra",
    url: "/team24/ujjwalk.png"
  },
  {
    name: "Roshan Y Singh",
    url: "/team24/roshany.png"
  },
  {
    name: "Deekshith Patel",
    url: "/team24/deekshithp.png"
  },
]

const design_info = [
  {
    name: 'Pranav Kuchekar',
    url: '/team24/pranavk.png',
  },
  {
    name: 'Kamya Rajeshwar',
    url: '/team24/kamyar.png'
  },
  {
    name: 'Vinit Shimpi',
    url: '/team24/vinits.png',
  },
  {
    name: 'Arman Mahayan',
    url: '/team24/armanm.png',
  },
  {
    name: 'Smaron Boruah',
    url: '/team24/smaron.png',
  },
  {
    name: 'Shlloak Thombaray',
    url: '/team24/shlloak.png',
  },
];
const marketing_info = [
  {
    name: 'Gourav Kumar Bathwal',
    url: '/team24/gouravkb.png',
  },
  {
    name: 'Ankur Kalyan',
    url: '/team24/ankurk.png'
  },
  {
    name: 'Devisetty Ram Mayur',
    url: '/team24/devisetty.png',
  },
  {
    name: 'Dhanush Reddy Thumma',
    url: '/team24/thummad.png',
  },
  {
    name: 'Preetham Rachamalla',
    url: '/team24/preethamr.png',
  },
];
const media_pub_info = [
  {
    name: 'Girijesh Dasari',
    url: '/team24/giri.png',
  },
  {
    name: 'Chiranjeev Singh',
    url: '/team24/chiranjeev.png',
  },
  {
    name: 'Mishal Sharaf',
    url: '/team24/mishal.png',
  },
  {
    name: 'Siya Shah',
    url: '/team24/siya.png',
  }, 
];
const corp_mark_info = [
  {
    name: 'Aryan S Raj',
    url: '/team24/aryansraj.png',
  },
  {
    name: 'Chinmayee Ramidi',
    url: '/team24/ramidi.png',
  },
  {
    name: 'Om Godse',
    url: '/team24/om.png',
  },
  {
    name: 'Shikhar Kansal',
    url: '/team24/shikhark.png',
  },
  {
    name: 'Rishabh Duggal',
    url: '/team24/duggal.png',
  },
  {
    name: 'Raghav Mangal ',
    url: '/team24/raghavm.png',
  },
];
const web_info = [
  {
    name: "Indupalli Sishir Anand",
    url: "/team24/sishir.png"
  },
  {
    name: 'Sonit Patil',
    url: '/team24/sonit.png',
  },
  {
    name: "Manne Rithvik",
    url: "/team24/manne.png"
  },
  {
    name: "Aditya Srivastava",
    url: "/team24/adityas.png"
  },
];

const pr_info = [
  {
    name: "Siva Meenakshi",
    url: "/team24/sivamee.png",
  },
  {
    name: "Yashovardhan Mukerji",
    url: "/team24/yasho.png",
  },
  {
    name: "Aayush Gupta",
    url: "/team24/aayushg.png",
  },
  {
    name: "Akshay S Harits",
    url: "/team24/ash.png",
  },
  {
    name: "Nakul Patole",
    url: "/team24/nakul.png",
  },
  {
    name: "Sarvesh Goyal",
    url: "/team24/sarveshg.png",
  },
  {
    name: "Aryan Bodhe",
    url: "/team24/bodhe.png",
  },
];

const description = [
  'The Operations domain is in charge of putting on events and competitions on campus. We makes arrangements like booking places, procuring and setting up equipment, media coverage, logistics and transportation. We also collaborate with the PR and Networking teams on the Campus Ambassador programme to expand the reach of E-Cell among other colleges. We conduct workshops and bootcamps. also introduce new event ideas to promote entrepreneurial spirit among students.',
  "The domain strives to develop and maintain best-fit relations with the companies, to research and create a database of information that pushes us to collaborate with them efficiently and effectively. This domain involves developing and implementing marketing strategies, pitches, sponsorship proposals, and communication plans aligning with the organization's goals and objectives.",
  'The Ideation domain is responsible for deciding the theme of the flagship event E-Summit and the topics of its panel discussions and keynote talks. We invite great personalities to our E-Summit for a variety of insightful keynote talks and panel discussions. We are also the brain behind the social media handles of E-Cell. We create content for various social media handles on which we make our presence felt. We ideate and come up with activities and competitions that E-Cell conducts.',
  'The Design and Multimedia domain encompasses creative disciplines such as graphic design, web design, motion graphics, animation, and video production. It involves visually communicating messages through various mediums, employing artistic skills and digital tools to create engaging and effective visual content. We are responsible for managing branding, design, media and infrastructure planning of all events.',
  "The Web domain is in charge of designing and managing the E-Cell website, as well as the CA-Portal and keeping information for our yearly flagship events. We are responsible for displaying the content in a very readable manner as well as handling other website-related technicalities. Apart from development, it is also responsible for maintaining the database of several startups and VC's with whom we have contact as well as  students from various universities.",
  "The Public Relations and Networking domain deals with building a network and increasing the reach of the E-Cell of IIT Hyderabad. We strive to connect the 'Entrepreneurship community. For this, we have taken the initiative of ENetworking. We work closely with the Operations domain for the Campus Ambassador program hosted approximately two months before the E-Summit We sign media collaboration deals and maintain a healthy relationship with media companies. We manage the social media accounts for our E-Cell and keep the engagement healthy by offering quality content to our viewers.",
  "The Events and Competitions domain is responsible for planning, organizing, and managing events and competitions on and off campus. This includes brainstorming new ideas for events, coming up with creative ways to engage students, and working with other departments to ensure that events are successful. The Events and Competitions domain also plays a critical role in developing a strong entrepreneurial drive in the student community by providing opportunities for students to network with entrepreneurs, learn new skills, and compete for prizes.",
  "The Media and Publicity Domain manages communication with the media and the public to build a positive image, enhance reputation, and effectively share information. It includes media engagement, press releases, events, and community outreach to ensure favourable representation and engage stakeholders."
];
const Managers = () => {
  const Domain = ({ discription, info, title, sx }) => {
    return (
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'center',
          marginTop: '10rem',
          justifyContent: 'flex-start',
          position: 'relative',
          px: { xs: 0, sm: '8rem' },

          ...sx,
        }}
      >
        {/* info */}
        <Grid
          item
          xl={6}
          lg={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { lg: '40rem' },
            justifyContent: 'center',
            allignItems: 'center',
            margin: {},
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'white',

              // margin: { xs: "0 auto", xl: "0 8rem" },
              paddingBottom: '1rem',
              fontFamily: 'Montserrat',
              textAlign: { xs: 'center', lg: 'left' },

              fontSize: {
                sm: '1.8rem',
                md: '2.5rem',
                fontWeight: 600,
              },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: 'white',
              display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' },
              width: { xs: '20rem', md: '30rem' },
              // margin: { xs: "0 auto", lg: "0 10rem" },
              textAlign: { xs: 'center', lg: 'left' },
              fontFamily: 'Montserrat',
              fontSize: {
                xs: '.9rem',
                sm: '.9rem',
                md: '1rem',
                lg: '1.2rem',
                fontWeight: 300,
              },
            }}
          >
            {discription}
          </Typography>
        </Grid>
        {/*team member images*/}

        <Grid item xl={6} lg={6}>
          <Typography
            variant="h4"
            sx={{
              color: '#D3D3D3',
              fontFamily: 'Montserrat',
              textAlign: 'center',
              marginBottom: '2rem',
              marginTop: { xs: '1rem' },
              fontSize: {
                sm: '2rem',
                md: '2.5rem',
              },
              fontWeight: 600,
            }}
          >
            Managers
          </Typography>
          <Grid
            container
            sx={{
              position: 'relative',
              zIndex: 30,
              justifyContent: 'left',
            }}
            spacing={{sm:12, md:5, xl:1}}
          >
            {info.map(({ name, url }) => (
              <Grid item xs={12} sm={6} md={4} xl={3} key={name}>
                <Card
                  name={name}
                  imgUrl={
                    url
                      ? url
                      : 'https://res.cloudinary.com/dwsverefw/image/upload/v1666444606/ecell/team/default_kgby8w.jpg'
                  }
                />
                <br />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  };
  const [loading, setLoading] = React.useState(true);
  const [load_display, setload_display] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
    setTimeout(() => setload_display(1), 1000);
    window.history.scrollRestoration = 'manual';
  }, []);

  const override = {
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderColor: 'red',
  };
  return (
    <>
      <Domain
        discription={description[0]}
        info={operations_info}
        title={'Operations'}
      />
      {/* <Domain
        discription={description[1]}
        info={sponsorship_info}
        title={'Sponsorship'}
      /> */}
      <Domain
        discription={description[1]}
        info={corp_mark_info}
        title={'Corporate Relations & Finance'}
      />
      <Domain
        discription={description[7]}
        info={media_pub_info}
        title={'Media and Outreach'}
      />
      <Domain
        discription={description[2]}
        info={ideation_info}
        title={'Ideation'}
      />
      <Domain
        discription={description[3]}
        info={design_info}
        title={'Design and Creatives'}
      />
      <Domain
        discription={description[6]}
        info={events_competitions_info}
        title={'Events & Competitions'}
      />
      <Domain
        discription={description[4]}
        info={web_info}
        title={'Web'} />
      <Domain
        discription={description[4]}
        info={marketing_info}
        title={'Marketing'} />
      <Domain
        discription={description[5]}
        info={pr_info}
        title={'PR & Networking'}
        sx={{ marginBottom: '5rem' }}
      />
    </>
  );
};

export default Managers;
