/* eslint-disable react/jsx-no-target-blank */
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { auth } from "../../../firebase";
import { createDocumentWithId } from "../../../Network/Network";
import { useTranslation } from "react-i18next";
import firebase from 'firebase/app';
import CountrySelect from "react-bootstrap-country-select";
export default function SignUpSecondForm() {
  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState("");
  const [validate, setValidate] = useState({ firstName: "", lastName: "", password: "", terms: false });
  const terms = useRef(null);
  const [country, setCountry] = useState("");
  const userEmail = useSelector(state => state.signUpData.email);
  const { push } = useHistory();

  const [usr, setuser] = useState({
    authID: "",
    email: userEmail,
    firstName: "",
    lastName: "",
    password: "",
    userType: "client",
    createdAt: firebase.firestore.Timestamp.now(),
  });
  console.log(usr.userType);

  const getUserData = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    switch (name) {
      case "firstName":
        setuser({ ...usr, firstName: val });
        setValidate({
          ...validate,
          firstName:
            val === ""
              ? t("First name is required")
              : val.length < 3
                ? t("First name must be more than 2")
                : null
        });
        break;
      case "lastName":
        setuser({ ...usr, lastName: val });
        setValidate({
          ...validate,
          lastName:
            val === ""
              ? t("Last name is required")
              : val.length < 3
                ? t("Last name must be more than 2")
                : null
        });
        break;
      case "password":
        setuser({ ...usr, password: val });
        setValidate({
          ...validate,
          password:
            val === ""
              ? t("This is Required")
              : val.length < 8
                ? t("Password Should be More 8 Character")
                : null
        });
        break;
      case "userType":
        setuser({ ...usr, userType: val });
        break;
      case "terms":
        console.log(terms.current.checked);
        setValidate({
          ...validate,
          terms: terms.current.checked
        });
        break;
      default:
        break;
    }

  };

  const signUpComplete = () => {
    auth
      .createUserWithEmailAndPassword(usr.email, usr.password)
      .then(res => {
        if (res.user) {
          res.user.updateProfile({ displayName: usr.userType });
          res.user.sendEmailVerification();
          localStorage.setItem('userType', usr.userType)
          if (usr.userType === "talent") {
            createDocumentWithId(
              usr.userType,
              {
                ...usr,
                authID: auth.currentUser.uid,
                accepted: false,
                totalJobs: 0,
                totalEarnings: 0,
                totalHours: 0,
                availability: "",
                hourlyRate: 0,
                badge: {
                  none: "",
                  risingTalent: "Rising Talent",
                  risingTalentAr: "موهبة صاعدة",
                  topRated: "Top Rated",
                  topRatedAr: "تقييم عالي",
                  expert: "Expert-Vetted",
                  expertAr: "خبير"
                },
                // jobHistory: [],
                employmentHistory: [],
                education: { school: "", areaOfStudy: "", degree: "", gradYear: "" },
                portfolio: [],
                skills: [],
                // otherExperience: [],
                connects: 20,
                connectsHistory: [],
                profileCompletion: 0,
                savedJobs: []
              },
              auth.currentUser.uid
            );
          } else if (usr.userType === "client") {
            createDocumentWithId(
              usr.userType,
              {
                ...usr,
                authID: auth.currentUser.uid,
                paymentVerified: false,
                review: 0,
                spentMoney: 0,
                location: country.name,
                savedTalent: []
              },
              auth.currentUser.uid
            );
          }
          push("/sign-up/please-verify");
          sessionStorage.setItem("searchArray", [' '])
        }
      })
      .catch(err => {
        setErrorMessage(err.message);
        console.log(err.message);
      });
  };

  return (
    <div className="col-sm-12 col-md-6 mx-auto">
      <div className="shadow-sm p-3 mb-5 bg-white rounded mx-auto mt-5 w-100 border">
        <form>
          <h5 className="text-danger text-center">{errorMessage}</h5>
          <h4 className="text-center m-0">
            <span
              style={{
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "1.3em",
              }}
            >
            </span>
          </h4>
          <div className="row pt-3">
            <div className="input-group col-6 w-50">
              <div className="d-flex" style={{ alignItems: "baseline" }}>
                <span className="input-group-text bg-white d-inline" id="basic-addon1">
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
                  className="form-control  border-start-0 d-inline"
                  placeholder={t("First Name")}
                  aria-label="Input group example"
                  aria-describedby="basic-addon1"
                  onInput={getUserData}
                />
              </div>
              <p className='text-danger'>{validate.firstName}</p>
            </div>
            <div className="input-group col-6 w-50">
              <div className="d-flex" style={{ alignItems: "baseline" }}>
                <span className="input-group-text bg-white d-inline" id="basic-addon1">
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
                  className="form-control border-start-0 d-inline"
                  placeholder={t("Last Name")}
                  aria-label="Input group example"
                  aria-describedby="basic-addon1"
                  onInput={getUserData}
                />
              </div>
              <p className='text-danger'>{validate.lastName}</p>
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
              placeholder={t("Password")}
              aria-label="Input group example"
              aria-describedby="basic-addon1"
              onInput={getUserData}
            />
          </div>
          <p className='text-danger'>{validate.password}</p>
          <div>
            <h3 className="text-center mt-3">{t("i want to :")}</h3>
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
                {t("Hire for a project")}
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
                {t("Work as a freelancer")}
              </label>
            </div>
          </div>
          <div className={`my-3 text-dark ${usr.userType !== "client" && "d-none"}`}>
            <i className="fas fa-map-marker-alt border rounded" style={{ padding: "10px 15px" }}></i>
            <CountrySelect className="w-50 d-inline-block" value={country} onChange={setCountry} />
          </div>
          <div className="form-check mt-3">
            <input
              ref={terms}
              name="terms"
              className="form-check-input"
              type="checkbox"
              onChange={getUserData}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              <p className="text-dark">
                {t("Yes I understand and agree to the")}
                <a
                  className="m-1"
                  href="https://www.upwork.com/legal#terms"
                  target="_blank"
                >
                  {t("Upwork Terms of Service")}
                </a>
                {t(", including the")}
                <a
                  className="m-1"
                  href="https://www.upwork.com/legal#useragreement"
                  target="_blank"
                >
                  {t("User Agreement")}
                </a>
                {t("and")}
                <a
                  className="m-1"
                  href="https://www.upwork.com/legal#privacy"
                  target="_blank"
                >
                  {t("Privacy Policy")}
                </a>
              </p>
            </label>
          </div>

          <div className="d-grid gap-2 col-8 mx-auto mt-3 hitbtn-class loginpcolor mb-4" >
            <button
              className="btn bg-upwork"
              type="button"
              disabled={validate.password != null || validate.firstName || validate.lastName || (usr.userType === "client" && !country) || !validate.terms}
              onClick={signUpComplete}
            >
              {t("Continue with Email")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
