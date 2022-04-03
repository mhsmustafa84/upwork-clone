/* eslint-disable jsx-a11y/alt-text */
import verify from "../../assets/svg/verifyEmail.svg";
import { fbAuth } from "../../firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function EmailVerified() {
    let navigate = useNavigate();
    const userr = fbAuth.auth.currentUser;
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
                onClick={() => userr.displayName === "talent" ? navigate("/create-profile") : navigate("/post-job")} >
                {userr.displayName === "talent" ? "Compelete your profile data" : "Post a job"}
            </button>
            <br />
        </div>
    );
}
