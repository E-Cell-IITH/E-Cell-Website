import Grid from "@mui/material/Grid";
import style from "../styles/second.module.css";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "gsap";

const ids = ["#vision, #partner", "#collabs", "#bond", "#media"];

export default function Second() {
  const matchesMd = useMediaQuery("(min-width:900px)");
  const parent = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (matchesMd) {
        gsap.fromTo(
          "#motto-card > div",
          { x: -20, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            stagger: 0.2,
            scrollTrigger: {
              trigger: "#motto-card",
              start: "20% 75%",
            },
          }
        );
      } else {
        const mottoCards = gsap.utils.toArray("#motto-card > div");
        mottoCards.forEach((card) => {
          gsap.fromTo(
            card,
            { y: 20, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              scrollTrigger: {
                trigger: card,
                start: "20% 75%",
              },
            }
          );
        });
      }

      console.log(gsap.utils.toArray("#vision , #partner"));

      ids.forEach((id, index) => {
        gsap.fromTo(
          id,
          { y: 20, autoAlpha: 0.1 },
          {
            y: 0,
            autoAlpha: 1,
            scrollTrigger: { trigger: id, start: "20% 75%" },
          }
        );
      });
    }, parent);

    return () => {
      ctx.revert();
    };
  });

  return (
    <div className="parent" ref={parent}>
      <div className={style.motto} id="motto">
        OUR MOTTO
      </div>{" "}
      <br />
      <br />
      <br />
      <br />
      <div className={style.cards}>
        <Grid
          container
          id="motto-card"
          justifyContent="center"
          spacing={4}
          sx={{ px: 3 }}
        >
          <Grid
            item
            sm={9}
            md={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              className={style.img}
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696043/ecell/2_nvqfjz.png"
              alt="Ecell IITH Think logo"
              priority="true"
              width="100"
              height="100"
            />
            <br />
            <br />
            <div className={style.card}>
              <div className={style.heading}>
                <h1>THINK</h1>
              </div>
              <div className={style.content}>
                Successful Entrepreneurs are the ones who are great at thinking
                out solutions. Through various hackathons and workshop events,
                we promote the culture of thinking to prepare students for
                future entrepreneurial challenges.
              </div>
            </div>
          </Grid>
          <Grid
            item
            sm={9}
            md={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Image
              className={style.img}
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696043/ecell/3_q9axei.png"
              alt="ECell Build Logo"
              priority="true"
              width="100"
              height="100"
            />
            <br />
            <br />
            <div className={style.card}>
              <div className={style.heading}>
                <h1>BUILD</h1>
              </div>
              <div className={style.content}>
                All great startups are started by people who have a knack at
                building products. E-Cell IITH organizes events like Idea
                Validation camps to help bring out the best of builders among
                aspiring entrepreneurs
              </div>
            </div>
          </Grid>
          <Grid
            item
            sm={9}
            md={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              className={style.img}
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696043/ecell/4_jmyd8p.png"
              alt="ECell IITH Inspire logo"
              priority="true"
              width="100"
              height="100"
            />
            <br />
            <br />
            <div className={style.card}>
              <div className={style.heading}>
                <h1>INSPIRE</h1>
              </div>
              <div className={style.content}>
                The key to stick through tough times and not giving up is to be
                relentlessly inspired to take on challenges. By organizing
                various talks by successful entrepreneurs, E-Cell IITH aims to
                inspire students to take the path of entrepreneurship.
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={style.container}>
        <div className={style.div2}>
          <div className={style.imgContainer}>
            <Image
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696047/ecell/R13_hupwfp.png"
              layout="fill"
              className={style.rect}
              alt="stylistic triangle"
            />
          </div>
          <div className={style.vision}>OUR VISION</div> <br />
          <Grid
            container
            spacing={2}
            justifyContent="center"
            className={style.whole}
            id="vision"
          >
            <Grid item xs={10} md={8} className={style.cont} id="#vision">
              E-Cell, IIT Hyderabad strives to foster and support
              entrepreneurship and innovation both within and outside of the
              institution. After all, grasping the significance of emerging
              business ideas today and assisting students in gaining market
              exposure and the appropriate path for their start-up is the only
              way to unleash their latent innovative potential. We create a
              forum for students and the business sector, including start-ups
              from diverse fields, to collaboration, interaction, and invention.
              It offers any kind of help for developing emerging ideas from the
              ideation stage to a finished product by experienced mentors. To
              create a platform for different student start-ups from throughout
              the country to be launched into businesses.
            </Grid>
          </Grid>
          <Grid container className={style.whole1} id="partner">
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <div className={style.partner}>WHY PARTNER WITH</div>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <div className={style.grad}>E-CELL?</div>
              <br />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={8} className={style.cont} id={`${style.parvision}`}>
              <span>
                {" "}
                E-Cell IIT Hyderabad offers an opportunity to be associated with
                a non-profit organization dedicated to promoting the spirit of
                entrepreneurship among students throughout India.
              </span>
              <br />
              <br />
              <span>
                {" "}
                E-Cell IIT Hyderabad aims to connect with individuals and
                organizations that share the goal of realizing and encouraging
                college-level students throughout the nation to start their
                enterprises through remarkable thinking and powerful ideas.
              </span>
              <br />
              <br />
              <span>
                Partnering in an event with a strong vision having such a global
                presence through our Flagship Event E-Summit, quality audience
                and given the generous media coverage garnered by E-Cell IIT
                Hyderabad, especially through the sessions conducted by our most
                awaited speakers, definitely ensures brand acknowedgement,
                visibility and a chance to engage with the community, speakers
                and potential customers
              </span>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <br />
          <br />
          <br />
        </div>

        <div className={style.div}>
          <div className={style.rect2}>
            <Image
              src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696047/ecell/R19_ie4plr.png"
              layout="fill"
              alt="stylistic triangle"
            />
          </div>
          <Grid container className={style.whole2} id="collabs">
            <Grid item xs={2}></Grid>
            <Grid item xs={8} className={style.stuff}>
              OUR COLLABORATIONS
            </Grid>
            <Grid item xs={1}></Grid>
            <br />
            <br />
            <br />
            <Grid item xs={2}></Grid>
            <Grid item xs={8} className={style.cont}>
              Investment firms and VCs to provide funding to the budding
              in-campus startups.
              <br />
              Training clubs to provide strategic mentorship to the student
              community.
              <br />
              Various companies to provide both monetary and non-monetary
              sponsorship.
              <br />• E-Cells of various colleges, and acting as a Guiding Body
              for newer E-Cells.
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <br />
          <br />

          <Grid container className={style.whole3} id="bond">
            <Grid item xs={2}></Grid>
            <Grid item xs={8} className={style.stuff1}>
              BOND BETWEEN OUR SPONSORS
            </Grid>
            <Grid item xs={2}></Grid>
            <br />
            <br />
            <Grid item xs={2}></Grid>
            <Grid item xs={8} className={style.cont}>
              <br />
              E-Cell IIT Hyderabad wants to make sponsorship more than just
              signage. We want our collaborations to be interactive and, in the
              process, provide a platform such that you can reach the target
              audience and connect with them.
              <br />
              <br />
              After all, at E-Cell IIT Hyderabad, we believe it is very
              important to promote new ventures by students, particularly when
              the local communities finds its relevance.
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </div>
        <br />
        <br />
        <Grid container className={style.whole4} id="media">
          <Grid item xs={2}></Grid>
          <Grid item xs={8} className={style.stuff1}>
            MEDIA COLLABORATIONS
          </Grid>
          <Grid item xs={2}></Grid>
          <br />
          <br />
          <br />
          <Grid item xs={2}></Grid>
          <Grid item xs={8} className={style.cont} id={style.cont}>
            <br />
            For any event to be successful, we require good outreach. As a
            result, the PR & Networking domain collaborates with media companies
            to spread a word about our events. Our collaboration also extends
            towards social media partners/influencers. The title of &#39;Media
            Partner&#39; is issued to the partner companies. The commercials/
            logo can be aired in between the e-summit talks depending on the
            needs of the company. Additionally, we upload our renowned
            entrepreneur talks on global platforms (Instagram, LinkedIn,
            Twitter, Youtube) featuring our partners as well.
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
