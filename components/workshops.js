import style from '../styles/workshops.module.css'
import Grid from "@mui/material/Grid";
import Link from 'next/link'

export default function Workshops() {
  return (
    <div>
        <div className={style.heading}>WORKSHOPS</div>
        <Grid container justifyContent="center" columnGap={7} rowGap={4}>
            <Grid md={5} sm={9} xs={9} item className={style.workshop}>
                <div className={style.try}>
                <div className={style.sub3}>Art of Capital Raising </div> <br />
                <div className={style.sub}>Date</div>22 January 2023, 10 AM to 12 <br /><br />
                <div className={style.sub}>Agenda Points</div> <br />
                <div className={style.sub2}>Steps in Capital Raising :</div> <br />
                <ul style={{listStyleType:"circle",listStylePosition:"inside"}}>
                    <li>Is your Business Fundable </li>
                    <li>How investors view a startup</li>
                    <li>What should be considered during raising fund</li>
                    <li>How to set the context right and handle the expectations of investors</li>
                </ul> <br />
                <div className={style.sub}>Instructor details</div>
                Mr. Yaseen Shareef Shaik, Director @FundEnable <br /><br />
                <Link href="https://forms.gle/vznMJqiB9JDn8vip7"><a target="_blank" rel="noreferrer noopener" style={{color:"cyan"}}>
                    Registration Link
                </a></Link>
                </div>
            </Grid>
            <Grid md={5} sm={9} xs={9} item className={style.workshop}>
            <div className={style.try}>
                <div className={style.sub3}>Design Thinking: An overview </div><br />
                <div className={style.sub}>Date</div>21 January 2023, 12 pm to 2 pm <br /><br />
                <div className={style.sub}>Agenda Points</div> <br />
                The workshops offer training on a design thinking process, which prioritizes creative collaboration to find solutions in action. This is a non-linear approach that considers all sides of a problem. It seeks to understand the customer better and rethink and redefine assumptions and issues to constructively identify innovative solutions. Those solutions are then tested, and reworked if needed, to reach an optimal outcome 
                <br /><br />
                <div className={style.sub}>Instructor details</div>
                Prashant Sinha, Senior Program Manager at Amazon <br /> <br />
                <Link href="https://forms.gle/STyPWDZHSnxVcP8t8"><a target="_blank" rel="noreferrer noopener" style={{color:"cyan"}}>
                    Registration Link
                </a></Link>
                </div>  
            </Grid>
          
        </Grid>
    </div>
  )
}
