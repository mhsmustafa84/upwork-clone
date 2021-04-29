/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import firebaseApp, { googleProvider } from "../../../firebase";
import apple from "../../../assets/svg/apple.svg";
import { useState } from "react";

export default function LoginTemp() {
  const [user, setUser] = useState({ email: "", password: "" });

  const getUserData = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    switch (name) {
      case "email":
        setUser({
          ...user,
          email: val,
        });
        break;
      case "password":
        setUser({
          ...user,
          password: val,
        });
        break;
      default:
        break;
    }
  };

  const login = () => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error.code);
      });
  };

  const googleLogin = () => {
    firebaseApp
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        /** @type {firebaseApp.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        // push("/find-work");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-5  mx-auto">
            <div className="shadow-sm p-5 mb-5 bg-white rounded mx-auto mt-5 w-100  border ">
              <h5 data-v-904d5b16 className="text-center m-0">
                <span data-v-733406b2 data-v-44072c38>
                  Log in and get to work
                </span>
              </h5>
              <form>
                <div className="form-group col-8 mx-auto mt-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control shadow-none"
                    aria-describedby="emailHelp"
                    placeholder="Username or Email"
                    onInput={getUserData}
                  />
                </div>
                <div className="form-group col-8 mx-auto mt-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control shadow-none"
                    aria-describedby="emailHelp"
                    placeholder="Password"
                    onInput={getUserData}
                  />
                </div>
                <div className="form-group col-8 mx-auto mt-3 d-flex justify-content-between">
                  <label>
                    <input type="checkbox" className="me-2" />
                    Keep me logged in
                  </label>
                  <Link to="">Forgot password?</Link>
                </div>
                <div className="d-grid gap-2 col-8 mx-auto mt-3 hitbtn-className loginpcolor">
                  <Link
                    className="btn bg-upwork "
                    to="/find-work"
                    onClick={login}
                  >
                    Login
                  </Link>
                </div>
                <div className="d-grid gap-2 col-8 mx-auto mt-3">
                  <Link to="" className="text-center">
                    Not you?
                  </Link>
                </div>
                <div className="separator mt-4 col-8 mx-auto">or</div>
                <div
                  className="google-btn  gap-2 mx-auto mt-3 rounded hitbtn-className col-sm-12"
                  onClick={googleLogin}
                >
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    />
                  </div>
                  <div className="text-justify ">
                    <p
                      className="text-center text-white"
                      style={{ paddingTop: ".3em" }}
                    >
                      Sign in with google
                    </p>
                  </div>
                </div>
                <div className="mb-5 d-grid gap-2 col-8 mx-auto mt-3 border border-dark rounded">
                  <button className="btn bg-light " type="button">
                    {" "}
                    <img src={apple} className="apple-icon" />
                    sign in with apple
                  </button>
                </div>
                <hr />
                <div>
                  <div className="separator mt-4 col-8 mx-auto">
                    New to Upwork?
                  </div>
                  <div className="d-grid gap-2 col-md-5 col-sm-10 mx-auto mt-3   rounded mb-5">
                    <Link className="btn signup" to="/sign-up">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
