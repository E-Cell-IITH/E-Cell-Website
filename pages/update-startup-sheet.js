import { Button } from "@mui/material";
import { useEffect } from "react";
import { auth, provider, signInWithPopup } from "../lib/firebase";
import { use } from "react";
import axios from "axios";

function UpdateStartupSheet() {
  const update = async () => {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const idToken = await user.getIdToken();

    if (idToken != null) {
      try {
        fetchData = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/update-startup-sheet`,
          {
            token: idToken,
          }
        );
      } catch (error) {
        console.log(error);
        alert("Error updating startup sheet"); 
      }
    }
  };

  return (
    <div>
      <Button onClick={update}>
        <h1>Update Startup Sheet</h1>
      </Button>
    </div>
  );
}

export default UpdateStartupSheet;
