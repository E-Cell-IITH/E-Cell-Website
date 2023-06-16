import React from 'react';
import Card from '../components/Card';
import { Grid, Box } from '@mui/material';
import { Typography } from '@mui/material';
import Fifth from '../components/fifth';
import Navbar from '../components/Navbar';
import parallax from '../styles/team.module.css';

const operations_info = [
  {
    name: 'Yash Ramteke',
    url: 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666111320/ecell/YashRamteke_Operations_rqxjvb.jpg',
  },
  {
    name: 'Asit Desai',
    url: 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109710/ecell/Asit_Operations_fysqx4.jpg',
  },
  {
    name: 'Sneha',
    url: 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666110515/ecell/Mask_group_ujpefj.jpg',
  },
  {
    name: 'Pradeep',
    url: 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1671785531/ecell/image_2_e4bduy.png',
  },
  {
    name: 'Amulya',
    url: 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666111323/ecell/Amulya_Operations_hinoum.jpg',
  },
  {
    name: 'Subham',
    url: 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666111510/ecell/Subham_Operations__usrgr0.jpg',
  },
  {
    name: 'Yash Vardhan',
    url: 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109687/ecell/YASH_VARDHAN_SINGH_GAHLOT_emybei.jpg',
  },
  {
    name: 'Tapishi kaur',
    url: false,
  },
];
const events_competitions_info = [
  {
    name: "Dhruvin",
    url: "http://res.cloudinary.com/ds5dhpt5o/image/upload/v1686594832/E%20Cell/Dhruvin.jpg"
  },
  {
    name: "Yaswanth Balaji",
    url: "http://res.cloudinary.com/ds5dhpt5o/image/upload/v1686594839/E%20Cell/Yaswanth%20Balaji.jpg"
  },
  {
    name: "Devansh Jain",
    url: "http://res.cloudinary.com/ds5dhpt5o/image/upload/v1686594844/E%20Cell/Devansh%20Jain.jpg"
  },
  {
    name: "Pranay Jain",
    url: "http://res.cloudinary.com/ds5dhpt5o/image/upload/v1686594845/E%20Cell/Pranay%20Jain.jpg"
  },
  {
    name: "Rishi",
    url: "http://res.cloudinary.com/ds5dhpt5o/image/upload/v1686594847/E%20Cell/Rishi.jpg"
  },
  {
    name: "Divyansh Bansal",
    url: "http://res.cloudinary.com/ds5dhpt5o/image/upload/v1686594850/E%20Cell/Divyansh%20Bansal.jpg"
  },
  {
    name: "Karthik Kunchala",
    url: "http://res.cloudinary.com/ds5dhpt5o/image/upload/v1686594851/E%20Cell/Karthik%20Kunchala.jpg"
  }
]

const sponsorship_info = [
  {
    name: 'Anirudh Dash',
    url: 'https://res.cloudinary.com/dwsverefw/image/upload/v1666447571/ecell/team/managers/anirudh_e0wo7y.jpg',
  },
  {
    name: 'Gaurang',
    url: 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1671784704/ecell/WhatsApp_Image_2022-12-23_at_14.05.43_1_ruicwu.jpg',
  },
  {
    name: 'Vedant',
    url: 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109699/ecell/Vedant_Sponsorship_akpelr.jpg',
  },
  {
    name: 'Srijan',
    url: 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1671785699/ecell/Srijan_sponsorship_s9ousy_1_ebgjrd.jpg',
  },
  {
    name: 'Harini',
    url: 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109711/ecell/Harini_naik_sponsorship_z2f58v.jpg',
  },
  {
    name: 'Avishkar',
    url: 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666112009/ecell/Avishkar_Sponsorship_pxsz7k.jpg',
  },
  {
    name: 'Aishwarya',
    url: 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109706/ecell/Aishwarya_Sponsorship_xmocfh.jpg',
  },
];
const ideation_info = [
  {
    name: "P Sanjana",
    url: "http://res.cloudinary.com/ds5dhpt5o/image/upload/v1686595593/E%20Cell/P%20Sanjana.jpg"
  },
  {
    name: "Vedant",
    url: "http://res.cloudinary.com/ds5dhpt5o/image/upload/v1686595596/E%20Cell/Vedant.jpg"
  },
  {
    name: "Tanmay Vishawarao",
    url: "http://res.cloudinary.com/ds5dhpt5o/image/upload/v1686595603/E%20Cell/Tanmay%20Vishawarao.jpg"
  },
  {
    name: "Divya",
    url: "http://res.cloudinary.com/ds5dhpt5o/image/upload/v1686595605/E%20Cell/Divya.jpg"
  },
  {
    name: "Jayna",
    url: "http://res.cloudinary.com/ds5dhpt5o/image/upload/v1686595606/E%20Cell/Jayna.jpg"
  },
  {
    name: "Abhishek Raje",
    url: "http://res.cloudinary.com/ds5dhpt5o/image/upload/v1686595607/E%20Cell/Abhishek%20Raje.jpg"
  },
  {
    name: "Aditya Gupta",
    url: "http://res.cloudinary.com/ds5dhpt5o/image/upload/v1686595608/E%20Cell/Aditya%20Gupta.jpg"
  },
  {
    name: "Arsh",
    url: "http://res.cloudinary.com/ds5dhpt5o/image/upload/v1686595609/E%20Cell/Arsh.jpg"
  }
]

const design_info = [
  {
    name: 'Samyak',
    url: 'https://res.cloudinary.com/dwsverefw/image/upload/v1666447853/ecell/team/managers/SamyakJain_Design-min-min_dpa3du.jpg',
  },
  {
    name: 'Ishita',
    url: false,
  },
  {
    name: 'Jay',
    url: 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109711/ecell/Jay_Bhanushali_Design_ssdtf7.jpg',
  },
  {
    name: 'Arshiya',
    url: 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109710/ecell/Arshiya_M_Design_klviry.jpg',
  },
  {
    name: 'Harish',
    url: 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109713/ecell/Sai_Harish_Design_vixqpg.jpg',
  },
  {
    name: 'Manaswee',
    url: 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666109712/ecell/Manaswee_Chandwaskar-_Design_vodybb.jpg',
  },
];
const web_info = [
  {
    name: 'Abhinav Yadav',
    url: 'https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/Web/AbhinavYadav/Abhinav.jpg',
  },
  {
    name: "Armaan Shaik",
    url: "https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/Web/ShaikArmaan/ShaikArmaan_webbnw.jpg"
  },
  {
    name: "Jash Jhatakia",
    url: "https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/Web/JashJ/JashJ.jpg"
  },
  {
    name: "Adhith T",
    url: "https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/Web/AdhithT/adhitht.jpg"
  }
];

const pr_info = [
  {
    name: 'Arthi G J',
    url: 'https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/PR-Networking/ArthiGJ/ArthiGJ.jpg',
  },
  {
    name: "Kannan N S",
    url: "https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/PR-Networking/KannanNS/KannanNS.jpg"
  },
  {
    name: "Omkar Nilkanth",
    url: "https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/PR-Networking/OmkarNilkanth/Omkar.jpeg"
  },
  {
    name: "Priyanshu Verma",
    url: "https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/PR-Networking/PriyanshuVerma/Priyanshu.jpg"
  },
  {
    name: "Shubham Meher",
    url: "https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/PR-Networking/ShubhamMeher/Shubham.jpg"
  },
  {
    name: "Swapnil Rawal",
    url: "https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/PR-Networking/SwapnilRawal/swapnil.jpg"
  },
  {
    name: "Tejasri Relangi",
    url: "https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/PR-Networking/TejasriRelangi/Tejasri.jpg"
  }
];

const description = [
  'The Operations domain is in charge of putting on events and competitions on campus. We makes arrangements like booking places, procuring and setting up equipment, media coverage, logistics and transportation. We also collaborate with the PR and Networking teams on the Campus Ambassador programme to expand the reach of E-Cell among other colleges. We conduct workshops and bootcamps. also introduce new event ideas to promote entrepreneurial spirit among students.',
  'The sponsorship domain is responsible for coordinating the sponsorship efforts of various companies, and for investigating other funding opportunities. Our duties involve preparing a budget, monitoring it carefully and reporting it on a regular basis. Besides, keeping a proper record of sponsor details, actively contacting/mailing to current sponsors for the upcoming season. We seek new sponsors, and thus research and compile the information needed to collaborate with several such companies after concurring upon a set of deliverables to be offered by each party. Furthermore, upon signage, we maintain a Memorandum of Understanding with each sponsor and thus ensure that sponsors get recognition. Afterall, we strive to focus on developing relationships with new sponsors, and manage existing ones. ',
  'The Ideation domain is responsible for deciding the theme of the flagship event E-Summit and the topics of its panel discussions and keynote talks. We invite great personalities to our E-Summit for a variety of insightful keynote talks and panel discussions. We are also the brain behind the social media handles of E-Cell. We create content for various social media handles on which we make our presence felt. We ideate and come up with activities and competitions that E-Cell conducts.',
  'Design domain creates design for the website , social media templates , events posters, promo videos and are also responsible for planning the overall logistics of designing the campus on the day of E summit.',
  "The Web domain is in charge of designing and managing the E-Cell website, as well as the CA-Portal and keeping information for our yearly flagship events. We are responsible for displaying the content in a very readable manner as well as handling other website-related technicalities. Apart from development, it is also responsible for maintaining the database of several startups and VC's with whom we have contact as well as  students from various universities.",
  "The Public Relations and Networking domain deals with building a network and increasing the reach of the E-Cell of IIT Hyderabad. We strive to connect the 'Entrepreneurship community. For this, we have taken the initiative of ENetworking. We work closely with the Operations domain for the Campus Ambassador program hosted approximately two months before the E-Summit We sign media collaboration deals and maintain a healthy relationship with media companies. We manage the social media accounts for our E-Cell and keep the engagement healthy by offering quality content to our viewers.",
  "The Events and Competitions domain is responsible for planning, organizing, and managing events and competitions on and off campus. This includes brainstorming new ideas for events, coming up with creative ways to engage students, and working with other departments to ensure that events are successful. The Events and Competitions domain also plays a critical role in developing a strong entrepreneurial drive in the student community by providing opportunities for students to network with entrepreneurs, learn new skills, and compete for prizes."
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
              textAlign: 'center',
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
            spacing={1}
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
      <Domain
        discription={description[1]}
        info={sponsorship_info}
        title={'Sponsorship'}
      />
      <Domain
        discription={description[2]}
        info={ideation_info}
        title={'Ideation'}
      />
      <Domain
        discription={description[3]}
        info={design_info}
        title={'Design'}
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
        discription={description[5]}
        info={pr_info}
        title={'PR & Networking'}
        sx={{ marginBottom: '5rem' }}
      />
    </>
  );
};

export default Managers;
