import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid rgb(11 12 16)`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "0.9rem", color: "rgb(69 162 158)" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgb(11 12 16)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  backgroundColor: "rgb(11 12 16)",
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const title_data = [
  "Transformation of India's Digital Payment Landscape",
  "Technological Innovations - The driving factors and Impact",
  "The Employer-Employee Paradox: Concurrency of Layoffs and Hiring",
];
const img_data = {
  "Transformation of India's Digital Payment Landscape": [],
  "Technological Innovations - The driving factors and Impact": [],
  "The Employer-Employee Paradox: Concurrency of Layoffs and Hiring": [],
};

const Panel = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <section className="text-white flex flex-col justify-center items-center px-[3rem] lg:px-0 lg:pb-[3rem] mb-[8rem]">
      <div className="text-5xl mb-20 text-blue text-center font-medium">
        PANEL DISCUSSIONS
      </div>
      <div className="mx-auto flex flex-col justify-center items-center">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "1rem", sm: "1.35rem" },
              }}
            >
              Transformation of India&apos;s Digital Payment Landscape
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div className="flex flex-col sm:flex-row  mx-auto justify-center items-center gap-5 md:gap-10 lg:gap-[3.5rem]">
                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white uppercase text-center text-[1rem]">
                    Hussaini S F
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/hussainisf.jpeg"
                  />
                </div>
                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white uppercase text-center text-[1rem]">
                    N Srinivasan
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/srinivasan.jpg"
                  />
                </div>
                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white uppercase text-center text-[1rem]">
                    Dhruv Gupta
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/dhruv_gupta.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row mx-auto justify-center items-center gap-5 md:gap-10 lg:gap-[3.5rem mt-10">
                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white uppercase text-center text-[1rem]">
                    Neeraj Bansal
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/neeraj_bansal.jpg"
                  />
                </div>
                {/* <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white uppercase text-center text-[1rem]">
                    N Srinivasan
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/srinivasan.jpg"
                  />
                </div> */}
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "1rem", sm: "1.35rem" },
              }}
            >
              Technological Innovations - The driving factors and Impact
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div className="flex flex-col sm:flex-row  mx-auto justify-center items-center gap-5 md:gap-10 lg:gap-[3.5rem]">
                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white uppercase text-center text-[1rem]">
                    Rajesh Shenoy
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/rajesh.jpg"
                  />
                </div>
                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white uppercase text-center text-[1rem]">
                    Saumy Rajan Pradhan 
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/Saumy.jpg"
                  />
                </div>
                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white uppercase text-center text-[1rem]">
                    Nakul Parameswar
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/nakul.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row mx-auto justify-center items-center gap-5 md:gap-10 lg:gap-[3.5rem mt-10">
                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white uppercase text-center text-[1rem]">
                    Raghu Mangaraju
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/raghu.jpg"
                  />
                </div>
                {/* <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white uppercase text-center text-[1rem]">
                    N Srinivasan
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/srinivasan.jpg"
                  />
                </div> */}
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "1rem", sm: "1.35rem" },
              }}
            >
              The Employer-Employee Paradox: Concurrency of Layoffs and Hiring
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div className="flex flex-col sm:flex-row  mx-auto justify-center items-center gap-5 md:gap-10 lg:gap-[3.5rem]">
                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white uppercase text-center text-[1rem]">
                    Yugandhar Penubolu
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/Yugandhar.jpg"
                  />
                </div>
                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white uppercase text-center text-[1rem]">
                    MP Ganesh
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/mp_ganesh.jpg"
                  />
                </div>
                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white uppercase text-center text-[1rem]">
                    Dr. Murali Padmanabhan
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/murali.jpg"
                  />
                </div>
              </div>
              {/* <div className="flex flex-col sm:flex-row mx-auto justify-center items-center gap-5 md:gap-10 lg:gap-[3.5rem mt-10">
                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white uppercase text-center text-[1rem]">
                    N Srinivasan
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/srinivasan.jpg"
                  />
                </div>
                <div className="flex flex-col-reverse justify-center items-center gap-3">
                  <p className="text-white uppercase text-center text-[1rem]">
                    N Srinivasan
                  </p>
                  <Image
                    height={200}
                    width={200}
                    alt="testing"
                    src="/srinivasan.jpg"
                  />
                </div>
              </div> */}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
};

export default Panel;
