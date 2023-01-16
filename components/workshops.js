import style from "../styles/workshops.module.css";
import Grid from "@mui/material/Grid";
import Link from "next/link";

export default function Workshops() {
  return (
    <div>
      <div className={style.heading}>WORKSHOPS</div>
      <Grid container justifyContent="center" columnGap={7} rowGap={4}>
        <Grid md={5} sm={9} xs={9} item className={style.workshop}>
          <div className={style.try}>
            <div className={style.sub3}>Art of Capital Raising </div> <br />
            <div className={style.sub}>Date</div>22 January 2023, 10 AM to 12{" "}
            <br />
            <br />
            <div className={style.sub}>Agenda Points</div> <br />
            <ul
              style={{ listStyleType: "circle", listStylePosition: "inside" }}
            >
              <li>Steps in Capital Raising </li>
              <li>Is your Business Fundable </li>
              <li>How investors view a startup</li>
              <li>What should be considered during raising fund</li>
              <li>
                How to set the context right and handle the expectations of
                investors
              </li>
            </ul>{" "}
            <br />
            <div className={style.sub}>Instructor details</div>
            Mr. Yaseen Shareef Shaik, Director @FundEnable <br />
            <div className="flex justify-center mt-10 mb-5 pb-4">
              <button
                className="text-white border-blue border-2 px-7
             py-4 relative rounded-lg leading-5"
              >
                <Link href="https://forms.gle/vznMJqiB9JDn8vip7">
                  <a className="text-2xl">Registration link</a>
                </Link>
              </button>
            </div>
          </div>
        </Grid>
        <Grid md={5} sm={9} xs={9} item className={style.workshop}>
          <div className={style.try}>
            <div className={style.sub3}>Design Thinking: An overview </div>
            <br />
            <div className={style.sub}>Date</div>21 January 2023, 12 pm to 2 pm{" "}
            <br />
            <br />
            <div className={style.sub}>Agenda Points</div> <br />
            <ul style={{ listStyleType: "circle", listStylePosition: "inside" }}>
            <li>Prioritizing creative collaboration</li>
            <li>An multi-faceted, non-linear approach</li>
            <li>It helps mould the product better by understanding the consumer&#39;s needs</li>
            <li>Continuous testing and improvisation help reach an optimal solution</li>
            </ul>
            <br />
            <div className={style.sub}>Instructor details</div>
            Prashant Sinha, Senior Program Manager at Amazon <br />
            <div className="flex justify-center mt-10 mb-5 pb-4">
              <button
                className="text-white border-blue border-2 px-7
                py-4 relative rounded-lg leading-5"
              >
                <Link href="https://forms.gle/STyPWDZHSnxVcP8t8">
                  <a className="text-2xl">Registration link</a>
                </Link>
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
