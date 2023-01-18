import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid rgb(11 12 16)`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: '0.9rem', color: 'rgb(69 162 158)' }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgb(11 12 16)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  backgroundColor: 'rgb(11 12 16)',
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const title_data = [
  "Transformation of India's Digital Payment Landscape",
  'Technological Innovations - The driving factors and Impact',
  'The Employer-Employee Paradox: Concurrency of Layoffs and Hiring',
];
const img_data = {
  "Transformation of India's Digital Payment Landscape": [],
  'Technological Innovations - The driving factors and Impact': [],
  'The Employer-Employee Paradox: Concurrency of Layoffs and Hiring': [],
};

const Panel = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <section className="text-white flex flex-col justify-center items-center px-[3rem] lg:px-0 lg:pb-[3rem] mb-[8rem]">
      <div className="text-5xl mb-20 text-blue text-center font-medium">
        PANEL DISCUSSIONS
      </div>
      <div className="flex flex-col justify-center items-center">
        <Accordion
          sx={{ width: '100%' }}
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          className="justify-center"
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              sx={{
                color: 'white',
                fontSize: { xs: '1rem', sm: '1.35rem' },
                textAlign: 'center',
              }}
            >
              Transformation of India&apos;s Digital Payment Landscape
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="">
            <div>
              <div className="flex flex-col sm:flex-row mx-auto justify-center items-center gap-5 md:gap-10 lg:gap-[3.5rem mb-10">
                <div className="flex flex-col-reverse justify-center items-center gap-3 hover:scale-105 transition-all">
                  <p className="text-white text-center sm:text-sm text-[.7rem]">
                    <span className="font-bold uppercase tracking-wide">
                      Dhruv Gupta
                    </span>
                    <br></br>
                    COO - iTIC
                  </p>
                  <Image
                    height={220}
                    width={200}
                    alt="testing"
                    src="/dhruv_gupta.jpg"
                    className="hover:bg-red-400"
                  />
                  <p className="text-white font-bold uppercase p-1 border-2 rounded-md border-white">
                    Moderator
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row  mx-auto justify-center items-center gap-5 md:gap-10 lg:gap-[3.5rem]">
                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white text-center sm:text-sm text-[.7rem]">
                    <span className="font-bold uppercase tracking-wide">
                      Hussaini S F
                    </span>
                    <br></br>
                    Technology and Innovation Leader
                    <br></br>
                    Executive Director, JP Morgan & Chase
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/hussainisf.jpeg"
                  />
                  <p className="text-white font-bold uppercase p-1 border-2 rounded-md border-white">
                    Speaker
                  </p>
                </div>
                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white text-center sm:text-sm text-[.7rem]">
                    <span className="font-bold uppercase tracking-wide">
                      N Srinivasan
                    </span>
                    <br></br>
                    Sr. Executive Vice President
                    <br></br>
                    HDFC Bank
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/srinivasan.jpg"
                  />
                  <p className="text-white font-bold uppercase p-1 border-2 rounded-md border-white">
                    Speaker
                  </p>
                </div>

                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white text-center sm:text-sm text-[.7rem]">
                    <span className="font-bold uppercase tracking-wide">
                      Neeraj Bansal
                    </span>
                    <br></br>
                    Co-Founder & CEO
                    <br></br>
                    CredRight
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/neeraj_bansal.jpg"
                  />
                  <p className="text-white font-bold uppercase p-1 border-2 rounded-md border-white">
                    Speaker
                  </p>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ width: '100%' }}
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography
              sx={{
                color: 'white',
                fontSize: { xs: '1rem', sm: '1.35rem' },
              }}
            >
              Technological Innovations - The driving factors and Impact
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div className="flex flex-col sm:flex-row mx-auto justify-center items-center gap-5 md:gap-10 lg:gap-[3.5rem] mb-10">
                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white text-center text-[1rem]">
                    <span className="font-bold uppercase tracking-wide">
                      Nakul Parameswar
                    </span>
                    <br></br>
                    Assistant Professor
                    <br></br>
                    Department of Entrepreneurship
                    <br></br>
                    and Management, IIT Hyderabad
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/nakul.jpg"
                  />
                  <p className="text-white font-bold uppercase p-1 border-2 rounded-md border-white">
                    Moderator
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row  mx-auto justify-center items-center gap-5 md:gap-10 lg:gap-[3.5rem]">
                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white text-center text-[1rem]">
                    <span className="font-bold uppercase tracking-wide">
                      Rajesh Shenoy
                    </span>
                    <br></br>
                    Sr. Director, Research
                    <br></br>
                    Cetas Healthcare
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/rajesh.jpg"
                  />
                  <p className="text-white font-bold uppercase p-1 border-2 rounded-md border-white">
                    Speaker
                  </p>
                </div>

                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white text-center text-[1rem]">
                    <span className="font-bold uppercase tracking-wide">
                      Saumy Rajan Pradhan
                    </span>
                    <br></br>
                    Head of Applied Innovation Exchange
                    <br></br>
                    Capgemini
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/Saumy.jpg"
                  />
                  <p className="text-white font-bold uppercase p-1 border-2 rounded-md border-white">
                    Speaker
                  </p>
                </div>
                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white text-center text-[1rem]">
                    <span className="font-bold uppercase tracking-wide">
                      Raghu Mangaraju
                    </span>
                    <br></br>
                    Vice President
                    <br></br>
                    Blend360 India
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/raghu.jpg"
                  />
                  <p className="text-white font-bold uppercase p-1 border-2 rounded-md border-white">
                    Speaker
                  </p>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ width: '100%' }}
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography
              sx={{
                color: 'white',
                fontSize: { xs: '1rem', sm: '1.35rem' },
              }}
            >
              The Employer-Employee Paradox: Concurrency of Layoffs and Hiring
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div className="flex flex-col sm:flex-row  mx-auto justify-center items-center gap-5 md:gap-10 lg:gap-[3.5rem]">
                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white  text-center text-[1rem]">
                    <span className="font-bold uppercase tracking-wide">
                      Yugandhar Penubolu
                    </span>
                    <br></br>
                    Founder of winzard.io
                    <br></br>
                    HR Tech
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/Yugandhar.jpg"
                  />
                  <p className="text-white font-bold uppercase p-1 border-2 rounded-md border-white">
                    Speaker
                  </p>
                </div>
                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white  text-center text-[1rem]">
                    <span className="font-bold uppercase tracking-wide">
                      MP Ganesh
                    </span>
                    <br></br>
                    Head and Associate Professor
                    <br></br>
                    Department of Entrepreneurship
                    <br></br>
                    and Management, IIT Hyderabad
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/mp_ganesh.jpg"
                  />
                  <p className="text-white font-bold uppercase p-1 border-2 rounded-md border-white">
                    Moderator
                  </p>
                </div>

                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white text-center text-[1rem]">
                    <span className="font-bold uppercase tracking-wide">
                      Dr. Murali Padmanabhan
                    </span>
                    <br></br>
                    Sr. VP, Global Talent & OD
                    <br></br>
                    Virtusa
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/murali.jpg"
                  />
                  <p className="text-white font-bold uppercase p-1 border-2 rounded-md border-white">
                    Speaker
                  </p>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
};

export default Panel;
