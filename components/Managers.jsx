import React from 'react';
import Card from '../components/Card';
import { Grid, Box } from '@mui/material';
import { Typography } from '@mui/material';
import Fifth from '../components/fifth';
import Navbar from '../components/Navbar';
import parallax from '../styles/team.module.css';

const operations_info = [
  {
    name: 'Kanishka P',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Operations/JP%20Kanishka%20Prasad/IMG-20230601-WA0003.jpg',
  },
  {
    name: 'Shreyash B',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Operations/Shreyash%20Bhanage/IMG_20221113_190759197.jpg',
  },
  {
    name: 'Anuj A',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Operations/ANUJ%20AGARWAL(Consider%20this%20one)/photo.png',
  },
  {
    name: 'Ram Vasanth',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Operations/Dasari%20Ram%20Vasanth/Dasari%20Ram%20Vasanth.jpeg',
  },
  {
    name: 'Sameer K',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Operations/Sameer%20kendal/IMG_20221021_151045.jpg',
  },
  {
    name: 'Sharvil P',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Operations/Sharvil%20Pedamkar/20230531_203617.jpg',
  },
  {
    name: 'Shreya S',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Operations/Shreya%20Sridhar/IMG-20220905-WA0018~2.jpg',
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
    name: "Arsh Arora",
    url: "https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Ideation/Arsh/20dfbb09-1062-487b-b158-0670ed60e0d9.jpg"
  },
  {
    name: "Vedant S",
    url: "http://res.cloudinary.com/ds5dhpt5o/image/upload/v1686595596/E%20Cell/Vedant.jpg"
  },
  {
    name: "P Sanjana",
    url: "http://res.cloudinary.com/ds5dhpt5o/image/upload/v1686595593/E%20Cell/P%20Sanjana.jpg"
  },
  {
    name: "Tanmay Vishwasrao",
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
]

const design_info = [
  {
    name: 'Yasir U',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Design%20%26%20Multimedia/Yasir/Snapchat-70778184.jpg',
  },
  {
    name: 'Aditya H',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Design%20%26%20Multimedia/Aditya/Aditya%20Heshi.jpg'
  },
  {
    name: 'Parth B',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Design%20%26%20Multimedia/Parth/E-Cell.jpg',
  },
  {
    name: 'Ishita S',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Design%20%26%20Multimedia/Ishita/ishita_samant.jpg',
  },
  {
    name: 'Aryan N',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Design%20%26%20Multimedia/Aryan/IMG_1370-01.jpeg',
  },
  {
    name: 'Akshat P',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Design%20%26%20Multimedia/Akshat/IMG_20221204_210542.jpg',
  },
  {
    name: 'Vyom L',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Design%20%26%20Multimedia/Vyom%20Lathan/Vyom%20Lathan.jpeg',
  },
];
const media_pub_info = [
  {
    name: 'Monish A',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Media%20%26%20Publicity/Monish%20Asawa/IMG_20230531_213429.jpg',
  },
  {
    name: 'Ansh A',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Design%20%26%20Multimedia/Ansh/837F2FB1-E9C5-4C79-A793-0EBA1DE7A008.jpeg',
  },
  {
    name: 'Grishmasri D',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Media%20%26%20Publicity/Grishmasri/image.jpg',
  },
  {
    name: 'Shwetanshu K',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Media%20%26%20Publicity/Shwetanshu%20Kumar/IMG_7418~3.jpg',
  },
  {
    name: 'Prabhat Kumar',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Media%20%26%20Publicity/Prabhat%20Kumar/IMG_2513.jpeg',
  },
  {
    name: 'Nisha Kumari',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Media%20%26%20Publicity/Nisha%20Kumari/IMG_4365.jpeg',
  },
  {
    name: 'Lakshya Soni',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Media%20%26%20Publicity/Lakshya%20Soni/Photograph.jpg',
  },
  {
    name: 'Agrim Singh',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Media%20%26%20Publicity/Agrim%20Singh/IMG_20230311_151733.jpg',
  },
  {
    name: 'Nisarg Dodia',
    url: "https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Media%20%26%20Publicity/Nisarg%20Dodia/NIsarg%20Dodia.jpeg",
  },
  
];
const corp_mark_info = [
  {
    name: 'Vainavi G',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Corporate%20Relations%20%26%20Marketing/Vainavi%20Gawde/WhatsApp%20Image%202023-05-31%20at%2023.39.08.jpeg',
  },
  {
    name: 'Sarthak Singhal',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Corporate%20Relations%20%26%20Marketing/Sarthak%20singhal/F3E5453B-3DB4-4AF3-BEB4-B18D41F6CC41.jpeg',
  },
  {
    name: 'Rakesh V',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Corporate%20Relations%20%26%20Marketing/Rakesh%20Varshith/IMG_0582.jpeg',
  },
  {
    name: 'Pritesh Singh',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Corporate%20Relations%20%26%20Marketing/Pritesh%20Singh/IMG_20210207_200801.jpg',
  },
  {
    name: 'Aaryan Kumar',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Corporate%20Relations%20%26%20Marketing/Aaryan%20Kumar/WhatsApp%20Image%202023-05-31%20at%2023.13.39.jpeg',
  },
  {
    name: 'Laasya C',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Corporate%20Relations%20%26%20Marketing/Laasya/laasya%20.jpg',
  },
  {
    name: 'Nahoosh J',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Corporate%20Relations%20%26%20Marketing/Nahoosh%20Jilhewar/IMG_1978.jpeg',
  },
  {
    name: 'Avantika Nair',
    url: 'https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Corporate%20Relations%20%26%20Marketing/Avantika%20Nair/ecell_23.jpg',
  },
];
const web_info = [
  {
    name: "Jash Jhatakia",
    url: "https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/Web/JashJ/JashJ.jpg"
  },
  {
    name: 'Abhinav Yadav',
    url: 'https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/Web/AbhinavYadav/Abhinav.jpg',
  },
  {
    name: "Armaan",
    url: "https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Web/ShaikArmaan/ShaikArmaan.jpeg"
  },
  {
    name: "Adhith T",
    url: "https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/Web/AdhithT/adhitht.jpg"
  },
];

const pr_info = [
  {
    name: "Arthi GJ",
    url: "https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/PR-Networking/ArthiGJ/ArthiGJ.jpg",
  },
  {
    name: "Kannan NS",
    url: "https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/PR-Networking/KannanNS/KannanNS.jpg",
  },
  {
    name: "Omkar Nilkanth",
    url: "https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/PR-Networking/OmkarNilkanth/Omkar.jpeg",
  },
  {
    name: "Priyanshu Verma",
    url: "https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/PR-Networking/PriyanshuVerma/Priyanshu.jpg",
  },
  {
    name: "Shubham Meher",
    url: "https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/PR-Networking/ShubhamMeher/Shubham.jpg",
  },
  {
    name: "Swapnil Rawal",
    url: "https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/PR-Networking/SwapnilRawal/swapnil.jpg",
  },
  {
    name: "Tejasri Relangi",
    url: "https://raw.githubusercontent.com/abhinavydv/Ecell-Test/master/PR-Networking/TejasriRelangi/tejasri.jpeg",
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
        title={'Corporate Relations & Marketing'}
      />
      <Domain
        discription={description[7]}
        info={media_pub_info}
        title={'Media and Publicity'}
      />
      <Domain
        discription={description[2]}
        info={ideation_info}
        title={'Ideation'}
      />
      <Domain
        discription={description[3]}
        info={design_info}
        title={'Design and Multimedia'}
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
