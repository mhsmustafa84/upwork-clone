/* eslint-disable jsx-a11y/alt-text */
import verify from "../../assets/svg/verifyEmail.svg";
import { auth } from "../../firebase";
import { useEffect } from "react";
import { useHistory } from "react-router";

export default function EmailVerified() {
  const { push } = useHistory();
  const userr = auth.currentUser;
  userr.reload().then(() => {
    console.log({ emailVerified: userr.emailVerified })
  })

  useEffect(() => {
  }, [userr]);


  return (
    <div className="text-center" style={{ margin: "67px 0" }}>
      <img src={verify} style={{ width: "150px" }} />
      <h3 className="my-3">Email is verfied successfully</h3>
      <button className="btn bg-upwork"
        onClick={() => userr.displayName === "talent" ? push("/create-profile") : push("/post-job")} >
        {userr.displayName === "talent" ? "Compelete your profile data" : "Post a job"}
      </button>
      <br />
    </div>
  );
}
