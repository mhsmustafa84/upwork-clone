/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import apple from "../../../assets/svg/apple.svg";

export default function LoginTemp() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-5  mx-auto">
            <div className="shadow-sm p-3 mb-5 bg-white rounded mx-auto mt-5 w-100  border ">
              <h5 data-v-904d5b16 className="text-center m-0">
                <span data-v-733406b2 data-v-44072c38>
                  Log in and get to work
                </span>
              </h5>
              <form>
                <div className="form-group col-8 mx-auto mt-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Username or Email"
                  />
                </div>
                <div className="d-grid gap-2 col-8 mx-auto mt-3 hitbtn-className loginpcolor">
                  <button className="btn bg-upwork " type="button">
                    Continue
                  </button>
                </div>
                <div className="separator mt-4 col-8 mx-auto">or</div>
                <div className="google-btn  gap-2 mx-auto mt-3 rounded hitbtn-className col-sm-12">
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
