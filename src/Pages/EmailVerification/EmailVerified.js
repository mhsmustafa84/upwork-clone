/* eslint-disable jsx-a11y/alt-text */

import verify from "../../assets/svg/verifyEmail.svg";
import firebaseApp from "../../firebase";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useAuthState } from 'react-firebase-hooks/auth';

export default function EmailVerified() {
  const { push } = useHistory();
  const [verified, setverify] = useState(false);
  const [user] = useAuthState(firebaseApp.auth());

  useEffect(() => {
    user && setverify(user.emailVerified);
  }, [user]);


  return (
    <div className="text-center" style={{ margin: "67px 0" }}>
      <img src={verify} style={{ width: "150px" }} />
      <h3 className="my-3">Verify your email to proceed</h3>
      <button className="btn bg-upwork" onClick={() => user.displayName === "talent" ? push("/create-profile") :push("/home")} disabled={verified}>
        {user.displayName === "talent" ? "Compelete your profile data" : "Post a job"}
        Compelete your profile data
      </button>
      <br />
    </div>
  );
}
