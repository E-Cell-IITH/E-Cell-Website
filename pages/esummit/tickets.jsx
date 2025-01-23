// import React from "react";
import EsummitNavbar from "../../components/ESummt/navbar";
import { Josefin_Sans } from "next/font/google";
import { Tilt } from "react-next-tilt";
import Button from "@mui/material/Button";

import { useMediaQuery } from "@mui/material";

import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@mui/material";
import React, { useState, useEffect, use } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import PayDialogSlide from "../../components/ESummt/pay";
import Head from "next/head";

const josefinSans = Josefin_Sans({ subsets: ["latin"], display: "swap" });

const PASSDATA = [
  {
    title: "STANDARD",
    co1: "All Speaker Sessions",
    co2: "Startup Fair",
    co3: "Food Carnival",
    co4: "Fetching Fortune Spectator",
    co5: "Networking Dinner",
    co6: "Accommodation (2 Days 1 Night)",
    co7: "One day bootcamp with  Practo founder.",
    co8: 'Pronite - "The Night to Remember!"',
    price: " ̶1̶9̶9̶ Free",
    titlecolor: "#d3d3d3",
    cardcolor:
      "linear-gradient(90deg, rgba(153,153,153,0.100717787114846) 0%, rgba(153,153,153,0.1962359943977591) 100%)",
    cl1: "#d3d3d3",
    cl2: "#d3d3d3",
    cl3: "#d3d3d3",
    cl4: "#d3d3d3",
    cl5: "#d3d3d3",
    cl6: "#d3d3d3",
    cl7: "#d3d3d3",
    cl8: "#d3d3d3",
    td4: "line-through",
    td5: "line-through",
    td6: "line-through",
    td7: "line-through",
    td8: "line-through",
    bw: "2px",
  },
  {
    title: "VALUE FOR MONEY",
    co1: "All Speaker Sessions",
    co2: "Startup Fair",
    co3: "Food Carnival",
    co4: "Fetching Fortune Spectator",
    co5: "Networking Dinner",
    co6: "Accommodation (2 Days 1 Night)",
    co7: "One day bootcamp with  Practo founder.",
    co8: 'Pronite - "The Night to Remember!"',
    price: "399",
    titlecolor: "#d3d3d3",
    cardcolor:
      "linear-gradient(90deg, rgba(153,153,153,0.356796218487395) 0%, rgba(153,153,153,0.2911939775910365) 100%)",
    cl1: "#d3d3d3",
    cl2: "#d3d3d3",
    cl3: "#d3d3d3",
    cl4: "#d3d3d3",
    cl5: "#d3d3d3",
    cl6: "#d3d3d3",
    cl7: "#d3d3d3",
    cl8: "#d3d3d3",
    td4: "",
    td5: "line-through",
    td6: "line-through",
    td7: "line-through",
    td8: "line-through",
    bw: "6px",
  },
  {
    title: "PREMIUM",
    co1: "All Speaker Sessions",
    co2: "Startup Fair",
    co3: "Food Carnival",
    co4: "Fetching Fortune Spectator",
    co5: "Networking Dinner",
    co6: "Accommodation (2 Days 1 Night)",
    co7: "One day bootcamp with  Practo founder.",
    co8: 'Pronite - "The Night to Remember!"',
    price: "2499",
    titlecolor: "#FFD400",
    cardcolor:
      "linear-gradient(90deg, rgba(153,153,153,0.100717787114846) 0%, rgba(153,153,153,0.1962359943977591) 100%)",
    cl1: "#d3d3d3",
    cl2: "#d3d3d3",
    cl3: "#d3d3d3",
    cl4: "#d3d3d3",
    cl5: "#d3d3d3",
    cl6: "#d3d3d3",
    cl7: "#d3d3d3",
    cl8: "#d3d3d3",
    td4: "",
    td5: "",
    td6: "",
    td7: "",
    td8: "",
    bw: "2px",
  },
];

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Card = ({
  titlecolor,
  title,
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  price,
  cardcolor,
  cl1,
  cl2,
  cl3,
  cl4,
  cl5,
  cl6,
  cl7,
  cl8,
  td4,
  td5,
  td6,
  td7,
  td8,
  bw,
  handleBuyNow,
}) => {
  return (
    <Tilt
      scale={1.05}
      tiltMaxAngleX={0}
      tiltMaxAngleY={0}
      style={{ borderRadius: "12px" }}
    >
      <Box
        sx={{
          width: { md: `calc(25vw + ${bw})` },
          background: cardcolor,
          paddingTop: "3rem",
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
          paddingBottom: "1rem",
          margin: "0.2rem",
          minWidth: "20vw",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderWidth: bw,
          borderColor: "#d3d3d3",
        }}
      >
        <div>
          <div
            style={{
              color: titlecolor,
              fontSize: "1.5rem",
              marginBottom: "0.4rem",
            }}
          >
            {title}
          </div>
          <br />
          <div style={{ fontSize: "1.1rem" }}>
            <div style={{ color: cl1 }}>{c1}</div>
            <div style={{ color: cl2 }}>{c2}</div>
            <div style={{ color: cl3 }}>{c3}</div>
            <div
              style={{
                color: cl4,
                textDecoration: td4,
                fontWeight: td4 === "line-through" ? "lighter" : "normal",
              }}
            >
              {c4}
            </div>
            <div
              style={{
                color: cl5,
                textDecoration: td5,
                fontWeight: td5 === "line-through" ? "lighter" : "normal",
              }}
            >
              {c5}
            </div>
            <div
              style={{
                color: cl6,
                textDecoration: td6,
                fontWeight: td6 === "line-through" ? "lighter" : "normal",
              }}
            >
              {c6}
            </div>
            <div
              style={{
                color: cl7,
                textDecoration: td7,
                fontWeight: td7 === "line-through" ? "lighter" : "normal",
              }}
            >
              {c7}
            </div>
            {/* </div> */}
            <div
              style={{
                color: cl8,
                textDecoration: td8,
                fontWeight: td7 === "line-through" ? "lighter" : "normal",
              }}
            >
              {c8}
            </div>
          </div>
          <br />
          <div
            className="flex flex-wrap space-x-5"
            style={{
              marginTop: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontWeight: "normal" }}>
              {String.fromCharCode(0x20b9)}
              {price}
            </div>
            {Number(price) > 1 ? (
              <></>
            ) : (
            <Button
              variant="contained"
              sx={{
                borderRadius: "0",
                color: "white",
                fontFamily: "Josefin Sans",
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1.2rem" },
                fontWeight: "700",
                textTransform: "none",
                "&.MuiButton-contained": {
                  backgroundColor: "#FF5100",
                },
                "&:hover": {
                  backgroundColor: "#B73A00",
                },
              }}
              onClick={() => handleBuyNow(price, title)}
            >
              Buy Now
            </Button>
            )}
          </div>
        </div>
      </Box>
    </Tilt>
  );
};

const Panel = ({ handleBuyNow }) => {
  return (
    <div
      style={{
        color: "white",
        fontSize: "24px",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingBottom: "20px",
        borderRadius: "10px",
        maxWidth: "95%",
        height: "auto",
        margin: "0 auto",
      }}
    >
      {/* <br /> */}
      <Typography
        className="flex flex-wrap justify-center"
        sx={{
          fontSize: { md: "1.7rem", sm: "1.5rem", xs: "1.2rem" },
          fontWeight: "500",
          textAlign: "center",
          marginBottom: "2rem",
          letterSpacing: { md: "0.5rem", sm: "0.4rem", xs: "0.3rem" },
        }}
      >
        BUY&nbsp;ESUMMIT&nbsp;PASS
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {PASSDATA.map((pass, index) => (
          <Card
            key={index}
            titlecolor={pass.titlecolor}
            title={pass.title}
            c1={pass.co1}
            c2={pass.co2}
            c3={pass.co3}
            c4={pass.co4}
            c5={pass.co5}
            c6={pass.co6}
            c7={pass.co7}
            c8={pass.co8}
            price={pass.price}
            cardcolor={pass.cardcolor}
            cl1={pass.cl1}
            cl2={pass.cl2}
            cl3={pass.cl3}
            cl4={pass.cl4}
            cl5={pass.cl5}
            cl6={pass.cl6}
            cl7={pass.cl7}
            cl8={pass.cl8}
            td4={pass.td4}
            td5={pass.td5}
            td6={pass.td6}
            td7={pass.td7}
            td8={pass.td8}
            bw={pass.bw}
            handleBuyNow={handleBuyNow}
          />
        ))}
        <br />
        {/* <br />
        <br />
        <br />
        <br />
        <br /> */}
      </div>
    </div>
  );
};

function MainPasses() {
  const [username, setUsername] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [userid, setUserID] = useState(-1);
  const [ticketId, setTicketId] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const paymentInitiate = async (amount) => {
    console.log(amount);
    try {
      const token = localStorage.getItem("token");
      console.log("Token: ", token);

      if (!Number(amount)) {
        amount = -1;
      }

      var data = {
        amount: Number(amount),
      };
      console.log("Request Data:", data); // Ensure this is an object

      const response = await axios.post(`${BASE_URL}/paymentInitiate`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.data.message) {
        return {
          name: response.data.user.name,
          email: response.data.user.email,
          ticketId: response.data.ticketId,
          userId: response.data.user.id,
        };
      }
    } catch (error) {
      console.error("Failed to fetch user details:", error);
      return null;
    }
  };

  const handleBuyNow = async (price, title) => {
    setPrice(price);
    setTitle(title);
    const userDetails = await paymentInitiate(price);
    if (!userDetails || !userDetails.email) {
      window.location.href = "/esummit/login?redirectTo=/esummit/tickets";
      return;
    }
    // if (userDetails.ticketId != -1) {
    //   //Show you already have a ticket
    //   toast.error(
    //     "You already purchased one ticket!, Please try with different account.",
    //     {
    //       autoClose: 5000,
    //     }
    //   );
    //   return;
    // }
    setTicketId(userDetails.ticketId);
    setUserID(userDetails.userId);
    setUserEmail(userDetails.email);
    setUsername(userDetails.name);

    setModalOpen(true);
    // Proceed with the payment or other actions
  };

  const handleContinue = () => {
      if (ticketId != -1) {
      //Show you already have a ticket
      toast.error(
        "You already purchased one ticket!, Please try with different account.",
        {
          autoClose: 5000,
        }
      );
      return;
    }
    setModalOpen(false);
    if (price === 0) {
      toast.error("Something went wrong. Please try again later.", {
        autoClose: 3000,
      });
      return;
    }
    setIsDialogOpen(true);
  };

  const handleUseDifferentAccount = () => {
    setModalOpen(false);
    console.log("User chooses to log in with a different account");
    localStorage.removeItem("token");
    window.location.href = "/esummit/login?redirectTo=/esummit/tickets";
  };

  const isBiggerThan1024 = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <Head>
        <title>Buy Tickets For E-Summit 2025</title>
        <meta
          name="google-site-verification"
          content="agHaKoDcApHadKU7BhRCOJK0w5SRZtQCG9YxNKZBGvc"
        />
        <link rel="canonical" href="https://ecell.iith.ac.in/esummit/tickets" />
      </Head>
      <div
        suppressHydrationWarning
        suppressContentEditableWarning
        className={josefinSans.className}
        style={{
          position: "relative",
          backgroundImage: "url('/esummit25/bg.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // width: "100vw",
          height: "100svh",
          // overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <ToastContainer />
        <Box
          sx={{
            position: "static",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 10,
          }}
        >
          <EsummitNavbar />
        </Box>

        <Dialog
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          aria-labelledby="user-confirmation-dialog"
          aria-describedby="user-confirmation-dialog-description"
          PaperProps={{
            sx: {
              backgroundColor: "#37477d", // Set dialog background color
              color: "white", // Set text color for better contrast
              borderRadius: "12px", // Optional: Rounded corners
            },
          }}
        >
          <DialogTitle id="user-confirmation-dialog">
            Confirm Your Account
          </DialogTitle>
          <DialogContent>
            <Typography>
              You are logged in as{" "}
              <strong>{`${username}<${useremail}>`}</strong>.
            </Typography>
            <Typography>
              Do you want to continue with this account or use a different one?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleUseDifferentAccount}
              variant="outlined"
              color="inherit"
            >
              Use Different Account
            </Button>
            <Button
              onClick={handleContinue}
              variant="contained"
              // color="info"
              autoFocus
              sx={{
                borderRadius: "3px",
                color: "white",
                textTransform: "uppercase",
                "&.MuiButton-contained": {
                  backgroundColor: "#FF5100",
                },
                "&:hover": {
                  backgroundColor: "#B73A00",
                },
              }}
            >
              Continue
            </Button>
          </DialogActions>
        </Dialog>
        <div
          style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <Panel handleBuyNow={handleBuyNow} />
          <PayDialogSlide
            open={isDialogOpen}
            onClose={() => {
              setIsDialogOpen(false);
              setModalOpen(false);
            }}
            title={title}
            price={price}
            width={isBiggerThan1024 ? "40%" : "90%"}
            userID={userid}
          />
        </div>
      </div>
    </>
  );
}

export default MainPasses;
