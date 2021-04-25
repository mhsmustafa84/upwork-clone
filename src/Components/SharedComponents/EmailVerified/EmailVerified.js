/* eslint-disable jsx-a11y/alt-text */

import verify from "../../../assets/svg/verifyEmail.svg";
import { Link } from "react-router-dom";
import firebaseApp, { db } from "../../../firebase";
import { useState } from "react";

export default function EmailVerified() {
  const [verified, setverify] = useState(false);
  firebaseApp.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user.emailVerified);
      var verf = user.emailVerified;
      setverify(verf);
    }
  });

  return (
    <div className="text-center" style={{ margin: "67px 0" }}>
      <img src={verify} style={{ width: "150px" }} />
      <h3 className="my-3">Verify your email to proceed</h3>
      <Link className="btn bg-upwork" to="/create-profile">
        Compelete your profile data
      </Link>
      <br />
    </div>
  );
}
