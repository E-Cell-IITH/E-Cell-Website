import "../styles/globals.css";
import LoadingScreen from "../components/LoadingScreen";
import React from "react";
import { BounceLoader } from "react-spinners";
import Navbar from "../components/Navbar";
import Fifth from "../components/fifth";

function MyApp({ Component, pageProps }) {
  // const [loading, setLoading] = React.useState(true);
  // React.useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000);
  // }, []);
  // const override = {
  //   display: "block",
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   borderColor: "red",
  // };
  return (
    <>
      {/* {loading ? (
        <BounceLoader
          color={"#7a4daf"}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : ( */}
      <React.Fragment>
        <Navbar />
        <Component {...pageProps} />
        <Fifth />
      </React.Fragment>
      {/* )} */}
    </>
  );
}

export default MyApp;
