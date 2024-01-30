import Image from "next/image";
import Grid from "@mui/material/Grid";
import { style } from "@mui/system";
import styles from "../styles/sponsor.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React, { useRef, useEffect } from "react";
import Navbar from "../components/first";
import { Box, CardActionArea, Typography } from "@mui/material";
import style2 from "../styles/changesFirst.module.css";
import Managers from "../components/Managers";
import parallax from "../styles/team.module.css";
import Head from "next/head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const Sponsor = () => {
  const router = useRouter();
  const parent = useRef();
  const tl = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#head",
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          "#head > *",
          {
            y: 20,
            autoAlpha: 0.2,
            scale: 0.9,
          },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.3,
          }
        );

      const cards = gsap.utils.toArray(".card");
      cards.forEach((card) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 50%",
            },
          })
          .fromTo(
            card.children,
            {
              y: 20,
              autoAlpha: 0,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
              stagger: 0.3,
            }
          );
      });
    }, parent);

    return () => ctx.revert();
  }, []);

  const cardData = [
    { imageUrl: "https://media.licdn.com/dms/image/D560BAQHuo_U6IWofsA/company-logo_200_200/0/1666986119244?e=2147483647&v=beta&t=u6rZ3WaySVgw3Jghf7Eaz7GHodCUdf_9kVDAbi1NECA", title: "Adiabatic", link:"https://www.adiabatic.co.in/", found:"Darshan Meher, Co-founder" },

    { imageUrl: "https://s3.ap-south-1.amazonaws.com/assets.ynos.in/startup-logos/YNOS419626.jpg", title: "Badhaan", link:"https://www.badhaan.com/index.html", found:"Vishnu Vikyath Gowravajhala, Co-Founder" },

    { imageUrl: "https://naukrirecruiter.naukri.com/profilePic/getpic?pid=1634642681rp5124202_medium4", title: "Frinks AI", found:"Aditya Agrawal, Co-founder", link:"https://www.frinks.ai/" },

    { imageUrl: "https://media.licdn.com/dms/image/C560BAQGD-wGjkiRfZw/company-logo_200_200/0/1605786466945/gramheet_logo?e=2147483647&v=beta&t=-nFs1cC-xA9Om7d71EFRHg-juKO4fIP1EIGoyfvFWtg", title: "Gramheet", link:"https://www.gramheet.com/", found:"Pankaj Mahalle, Founder & CEO" },

    { imageUrl: "https://media.licdn.com/dms/image/C560BAQG9uxg_gcF2mA/company-logo_200_200/0/1630815923779?e=2147483647&v=beta&t=gMzQFfNZaBYBfqhgKg3EDm1jYF7Y6zfJkuu8ERgjNlU", title: "Green PMU Semi", link:"https://greenpmusemi.com/", found:"R. Sai Chandra Teja, Green PMU Semi" },

    { imageUrl: "https://files.startupranking.com/startup/thumb/22337_a88f2ea0c2566005922f058612fc20ec0c7ee83b_katomaran_l.png", title: "Katomaran Technologies", link:"https://www.katomaran.com/", found:"Muthu Vangaliappan, CEO, Co- Founder" },
    { imageUrl: "https://raw.githubusercontent.com/abhinavydv/E-cell-IITH-Public-Data/master/Web/Image_Editor.png", title: "Vision Nanny", link:"https://visionnanny.com/", found:"Prathyusha Potharaju, Product Head"},
    { imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEUfQP////8AM/8cPv+psP8SOf9vgv8LN//EzP8AKv/p6/8WO/8AMf8ALf+2v//W2v+grP+AkP9cbv96h//d4P9UZ/81T/+Rnv9oeP/19v/i5v/Jz/+Nm//v8f/09f++xv+cqP/P1P9sff8rSP9HX/+Wov9+jf9dcf+Hlf8AFv8AH/+ttP9PY/9tgP/a3f9BWv+wuv86Vf+Iz/xnAAAGaUlEQVR4nO2dfVe6PBiAxxYuHJKmqGCGiG+/R9P8/l/ugQoYMF4qzRvPfZ3TPwFr1xls9+4NIgRBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBECSPMKrht67gbxHbebeK+a7tivpUq2aChtBBw3sxnD+p6N6RofevV+S/3R0ZPvYUh/gEDUsRVIH+27r+DGH7s5m/UGnonehQ5wcVE/ZDv8DD8laK0SOnbic9OvSTaulDVa+8p7+rKSTUhg9o2CLQsP2gYfvRN/duyMZ2zGF3l4aEiRj6dp+GKXoHDS+KqeDKk6M/NvSsIsppxeX4U0NGVH34SDU1vBx/a8jQ8Aqg4UVBw6sAwPDY3JDp3OwZBuemYfQoF6zBNbcynAXjhCb1jCJNk5/eJu9+99VxnFd31t9txyYXddfdyvCRsoQmlwoabB9G81zzd/2Xk+DVBdzM8FuBjKCnvqu6w0P8DaNVjm0wFMbKK9H7wJnwCkf4hoyuHqv8PhzXrLQ88IY6WTt1giHusqwZoRvy1VMDv4/qE3W3CtuQ9ZYN/UKezsoyQRsy/UFhMnePx1FXccB5NhWFQDZkupWX89fTcxCEx4LxoWON8o4dRamADRnNCc42Z5PqcZwg9B6xF7lRclMsFq4ho++ZylvPZj56CQM5Mcw25LRQLlxDcyHX3LcNZVfJOB3Io4lj5xdUwRqacl7e2dDSCJtxIUc8c5JraKiGYiVF2e6q8mzG5WZ8zA39QA2ZLg30PqlZymfm22t6em4vI1BDupMERe0ckNBV2orOOXM+TEOmp4Ke3mQCyVfyfSofgWnIpYFi1axaVFoTncp3NUhDId1z2ujQLEg3+8klMznzA9LQ3GsSzlQVbhYLJ8fkkq30JEI0ZKdXLcOg1yipZicXeFIjQjSkEy3HojITk1yXNr007IM0LMwZNC+oHzHk4l/S4gEaCluRtvCbKPaSyYifng3QkBdu0ojXcX2XKp6T09M0M0DDnq8y1Jxlff2M5P4eJkMiQENTKRiyq+1SaTLjspIRBp6hWGll7GsS+ERs41OPgNtQvSXtk/eaUYON4wxVN3kQ4RlSVX4tZhRUT6TMOK5x7Lg3BWiYT7BlcO3KWprJxUn0Dc+QV69SONOqBdV0pBkCNvQrDaM5fPnDyAfxWYP4D7TQUJuUjxqpzkubDcMQrkzxXgyt0r+QDjWQ79JZjd98WP4g8pc2GFauaIfRSlUIng6mS7h9Kd1rVSzU2f0v0qj9Ge6Iz3daOd3qAZ+ReC1qfoIbtaXRcxGrJmgTh3jyPCJwDdXbbCNed2bN3IInyzkzwLMnYqhWsKNmWdVmFXtJL5UmagAalkwu1r3aTA0LkrMPyckADfU3rYi7bZAWTtOQLoGcp2FBfoOepnkN8lDhTZpcaKUuAA2lpGDMwGyQS5QmFtJNCtJQSgp+3nLnRjVjQdJFuUb6a4iGRM+Epv36XbIfSD2UlPIGaijt9epO6xJsX/C0g5rLu3JBGjKRruI/1o3yX4hzOoxOZBOQhkSXnsRJo43uzEhXD93MBBmmITGkKdTaqDz1s2TqpxcsM2UDNWRnaZG0X5vNF0RK0Fmt2G2S2W6iLVh1b8pPUgs6QSt2DOUSw49VIQ0zp3IQlN+7B9aQsaNUbWdglMwMGQ0ySYFCxwTWMHy2MntH3SlXDIzCJJPMirFVCNDhGhIxzm7JGG3Gpp6O5YwJyg/9bJRuFd/AAWxIuJ2bC3e94ZkIalIa/rDgsH7Krfhbih1ikA0JHxdfBXJn3n7RX1ier5hjGYphBbRhdpyrZacMDWAbhj3lQuWiwt2WfGsKtmE02JW9tJalNNEI3TCsoVg3aMBlaWQH3zC8U8W++uUud1PxybMWGEaOJP/qiIS/pJXT6TYYfsRmS0+RKXZGkwOrzvS3xDDa+m0G2xev68Q3rOMc3zcHSute6G6NYXS54KZBTs9vw85wao+50eBN7nYZfpUh9BDR6F38iNYZfhs0vChoeBXQ8KKg4VVAw4uChhck/Z63sbyRYU+Pabb++T2EvU8+4+3dxvC47MRMr6B4q2/Qqr+E5V7hW1+wDK/xNTM0vBZoeDnQ8Fqot47eU19KyG5Q5Cf/oaMONt4+F9iemuZ2fgFXcJV/HJJ+z1viDwQRBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBAHN/9HTb9XEPd/yAAAAAElFTkSuQmCC", title: "StoryXpress", link:"https://storyxpress.co/", found:"Ankit Mishra, CEO at StoryXpress" },

    { imageUrl: "https://images.thecompanycheck.com/companylogo/SNAZZY_CARE_PRIVATE_LIMITED_399701.webp", title: "Snazzyalign", link:"https://snazzyalign.com/", found:"Keshav Chouksey, Co-Founder" },
    { imageUrl: "data:image/png;base64,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", title: "Signalx", link:"https://signalx.ai/", found:"Piyush Arora, CTO" },
    { imageUrl: "https://i.tracxn.com/logo/company/revelec.co_Logo_60f9bfb3-4121-4c03-a1e2-edb5919fb65a.jpg?height=120&width=120", title: "Revelec", link:"https://revelec.co/", found:"Pradeep Gurrala, Co-Founder" },
    { imageUrl: "data:image/jpeg;base64,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", title: "Onito", link:"https://www.onito.io/", found:"Harsh Agarwal, Co-Founder" },
    { imageUrl: "https://lendingkatalyst.com/img/logo2.png", title: "Lendingkatalyst", link:"https://lendingkatalyst.com/", found:"Surya Prakash Koidala" },
    { imageUrl: "data:image/png;base64,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", title: "Kridazsports", link:"https://www.kridazsports.com/", found:"_" },

    // Add more data as needed
  ];
  return (
    <div ref={parent}>
      <Head>
        <title>Sponsors | Entrepreneurship Cell IIT Hyderabad</title>
        <meta
          name="google-site-verification"
          content="agHaKoDcApHadKU7BhRCOJK0w5SRZtQCG9YxNKZBGvc"
        />
      </Head>
      <Navbar heading={"IITH STARTUPS"} desc={false} sponsors={true} />
      <Grid
        container
        columnSpacing={5}
        rowSpacing={10}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
          padding: 3,
          "@media (max-width: 780px)": {
            marginBottom: 0,
            marginTop: 80,
            paddingTop: 10,
          },
          "@media (max-width: 1260px)": {
            marginBottom: 0,
            marginTop: 5,
          },
          "@media (max-width: 1060px)": {
            marginBottom: 0,
            marginTop: 10,
          },
          "@media (max-width: 960px)": {
            marginBottom: 0,
            marginTop: 15,
          },
        }}
      >
        {cardData.map((card, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minWidth: 4,
            }}
          >
            <a href={card.link}>
              <Card>
                <CardMedia
                  component="img"
                  style={{
                    minWidth: "100%",
                    height: "auto",
                    minHeight: "350px",
                    borderBottom: "solid 2px black",
                    maxWidth: "350px",
                  }}
                  image={card.imageUrl}
                  alt={card.title}
                />
                <CardContent>
                  <Typography variant="h5">{card.title}</Typography>
                  <Typography variant="h10">{card.found}</Typography>
                </CardContent>
              </Card>
            </a>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Sponsor;
