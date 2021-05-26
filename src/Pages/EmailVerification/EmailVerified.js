/* eslint-disable jsx-a11y/alt-text */

import verify from "../../assets/svg/verifyEmail.svg";
import firebaseApp, { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useAuthState } from 'react-firebase-hooks/auth';

export default function EmailVerified() {
  const { push } = useHistory();
  const userr = auth.currentUser;
userr.reload().then(() => {
 console.log({emailVerified: userr.emailVerified})
})

  useEffect(() => {
  }, [userr]);


  return (
    <div className="text-center" style={{ margin: "67px 0" }}>
      <img src={verify} style={{ width: "150px" }} />
      <h3 className="my-3">Verify your email to proceed</h3>
      <button className="btn bg-upwork"
       onClick={() => userr.displayName === "talent" ? push("/create-profile") :push("/home")} >
        {userr.displayName === "talent" ? "Compelete your profile data" : "Post a job"}
        
      </button>
      <br />
    </div>
  );
}
