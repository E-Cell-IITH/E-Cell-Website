import Grid from "@mui/material/Grid";
import style from "../styles/second.module.css";

export default function Second() {
  return (
    <>
      <div className={style.motto} id="motto">
        OUR MOTTO
      </div>{" "}
      <br />
      <br />
      <br />
      <br />
      <div className={style.cards}>
        <Grid container justifyContent="center" spacing={4}>
          <Grid
            item
            xs={6.1}
            sm={6.5}
            md={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img className={style.img} src="/static/2.png" alt="" />
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
            xs={6.1}
            sm={6.5}
            md={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img className={style.img} src="/static/3.png" alt="" />
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
            xs={6.1}
            sm={6.5}
            md={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img className={style.img} src="/static/4.png" alt="" />
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
      <div className={style.container} id="vision">
        <div className={style.div2}>
          <div className={style.imgContainer}>
            <img src="/static/R13.png" className={style.rect} />
          </div>
          <div className={style.vision}>OUR VISION</div> <br />
          <Grid
            container
            spacing={2}
            justifyContent="center"
            className={style.whole}
          >
            <Grid item xs={10} md={8} className={style.cont}>
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
          <Grid container className={style.whole1}>
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
            <Grid item xs={8} className={style.cont} id={style.parvision}>
              E-Cell IIT Hyderabad offers an oppurtunity to be associated with a
              non-profit organization dedicated to promoting the spirit of
              entrepreneurship among students throughout India.
              <br />
              <br />
              E-Cell IIT Hyderabad aims to connect with individuals and
              organizations that share the common goal of realizing and
              encourage college-level students throughout the nation to start
              their own enterprise through remarkable thinking and powerful
              ideas. Partnering in an event with a strong vision having such a
              global presence through our Flagship Event E-Summit, quality
              audience and given the generous media coverage garnerd by E-Cell
              IIT Hyderabad especially through the sessions conducted by our
              most awaited speakers, definetely ensures brand acknowedgement,
              visibitlity and a chance to engage with the community, speakers
              and potential customers.
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <br />
          <br />
          <br />
        </div>

        <div className={style.div}>
          <div>
            <img src="/static/R19.png" className={style.rect2} />
          </div>
          <Grid container className={style.whole2}>
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
              Investment fIrms and VCs to provide funding for the startups
              budding in the campus. Clubs to provide strategic mentorship to
              the student community. Various companies to provide both monetary
              and non-monetary sponsorship. E-Cells of various colleges, and
              acting as a Guiding Body for newer E-Cells.
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <br />
          <br />

          <Grid container className={style.whole3}>
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
              E-Cell IIT Hyderabad wants to make sponsorship more than just a
              signage. We want our collaborations to be interactive and in the
              process provide a platform such that you can reach the target
              audience and connect with them.
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </div>
        <br />
        <br />
        <Grid container className={style.whole4}>
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
            PR &#38; Networking domain collaborates with media companies and
            signs deals so as to spread the word about our events. We also
            collaborate with social media partners/influencers. The deals are
            signed based on mutual agreement between both the parties. The
            collaborations happen usually around 1-2 weeks before the e-cell.
            The companies collaborating with us are introduced as our &#39;media
            partner&#39;. The companies acquire higher reach because of the high
            foot fall of the E-cell. The companies get to have their advertising
            during our flagship event. Their commercials/logos can be aired in
            between the e-summit depending on the needs of the respective
            company.
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
    </>
  );
}
