/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import firebaseApp from "../../../firebase";

export default function FindWorkTalentHome() {
  const [verify, setverify] = useState(false);
  firebaseApp.auth().onAuthStateChanged((user) => {
    if (user) {
      //console.log(user.emailVerified);
      var verf = user.emailVerified;
      setverify(verf);
    }
  });

  return (
    <div className="d-none d-lg-block">
      <div className="row my-lg-4">
        <div className="col">
          <h3>Find Work</h3>
        </div>
        <div className="col-8">
          {!verify && (
            <div
              class="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong>Email Verification</strong> Your mail is not verified
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}
          <div className="col-8 input-group form-outline has-success">
            <input
              id="input"
              type="search"
              className="form-control text-dark bg-white btn-outline-success"
              placeholder="Search For Jobs"
            />
            <button
              id="search-button"
              type="button"
              className="btn bg-upwork bg-invert"
            >
              <i className="fas fa-search" />
            </button>
          </div>
          <span>
            <a href="#" className="advanced-search-link">
              Advanced Search
            </a>
          </span>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
