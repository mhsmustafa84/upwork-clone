/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import firebaseApp from "../../../firebase";
import createDocument from "../../../Network/Network";

export default function SignUpSecondForm() {
  var [errMessage, seterrMessage] = useState("");
  const userEmail = useSelector((state) => state.signUpData.email);
  const { push } = useHistory();
  const [user, setuser] = useState({
    email: userEmail,
    firstName: "",
    lastName: "",
    password: "",
    userType: "",
    authID: "",
  });

  const getUserData = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    switch (name) {
      case "firstName":
        setuser({ ...user, firstName: val });
        break;
      case "lastName":
        setuser({ ...user, lastName: val });
        break;
      case "password":
        setuser({ ...user, password: val });
        break;
      case "userType":
        setuser({ ...user, userType: val });
        break;

      default:
        break;
    }
  };

  const signUpComplete = () => {
    console.log(user);
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        let updateUser = firebaseApp.auth().currentUser;
        //debugger;
        updateUser.updateProfile({ displayName: user.userType });

        if (res.user) {
          res.user.sendEmailVerification();
        }
        user.authID = res.user.uid;
        setuser({ ...user, authID: user.authID });
        console.log(user);
        createDocument(user.userType, user);
        // push("/email-verification");
      })
      .catch(err => {
        seterrMessage(err.message);
      });
  };

  return (
    <div className="col-sm-12 col-md-6 mx-auto">
      <div className="shadow-sm p-3 mb-5 bg-white rounded mx-auto mt-5 w-100 border">
        <form>
          <h5 className="text-danger text-center">{errMessage}</h5>
          <h4 className="text-center m-0">
            <span
              style={{
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "1.3em",
              }}
            >
              Complete your free account setup
            </span>
          </h4>
          <div className="row pt-3">
            <div className="input-group col-6 w-50">
              <span className="input-group-text bg-white" id="basic-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </span>
              <input
                type="text"
                name="firstName"
                className="form-control  border-start-0"
                placeholder="First Name"
                aria-label="Input group example"
                aria-describedby="basic-addon1"
                onInput={getUserData}
              />
            </div>
            <div className="input-group col-6 w-50">
              <span className="input-group-text bg-white" id="basic-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </span>
              <input
                type="text"
                name="lastName"
                className="form-control  border-start-0"
                placeholder="Last Name"
                aria-label="Input group example"
                aria-describedby="basic-addon1"
                onInput={getUserData}
              />
            </div>
          </div>
          <div className="input-group pt-3">
            <span className="input-group-text bg-white" id="basic-addon1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-lock-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
              </svg>
            </span>
            <input
              type="password"
              name="password"
              className="form-control  border-start-0"
              placeholder="Password"
              aria-label="Input group example"
              aria-describedby="basic-addon1"
              onInput={getUserData}
            />
          </div>
          <div>
            <h3 className="text-center mt-3">i want to:</h3>
            <div
              className="btn-group d-flex  border-gray rounded"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                name="userType"
                className="btn-check"
                id="btnradio1"
                autoComplete="off"
                defaultChecked
                value="client"
                onInput={getUserData}
              />
              <label className="btn btn-outline-upwork" htmlFor="btnradio1">
                Hire for a project
              </label>
              <input
                type="radio"
                name="userType"
                className="btn-check"
                id="btnradio2"
                autoComplete="off"
                value="talent"
                onInput={getUserData}
              />
              <label className="btn btn-outline-upwork" htmlFor="btnradio2">
                Work as a freelancer
              </label>
            </div>
          </div>
          <div className="form-check mt-3">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              <p>
                Yes, I understand and agree to the
                <a
                  data-v-c17031dc=""
                  href="https://www.upwork.com/legal#terms"
                  target="_blank"
                >
                  Upwork Terms of Service
                </a>
                , including the
                <a
                  data-v-c17031dc=""
                  href="https://www.upwork.com/legal#useragreement"
                  target="_blank"
                >
                  User Agreement
                </a>
                and{" "}
                <a
                  data-v-c17031dc=""
                  href="https://www.upwork.com/legal#privacy"
                  target="_blank"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </label>
          </div>

          <div className="d-grid gap-2 col-8 mx-auto mt-3 hitbtn-class loginpcolor mb-4">
            <Link
              className="btn bg-upwork "
              type="button"
              onClick={signUpComplete}
              to="/email-verification"
            >
              Continue with Email
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
