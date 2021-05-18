/* eslint-disable */
import React, { useState } from "react";
import firebaseApp from "../../../firebase";
import SearchBarJobsTalent from "../SearchBarJobsTalent/SearchBarJobsTalent";


export default function FindWorkTalentHome() {
  const [verify, setverify] = useState(false);
  firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
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
        <SearchBarJobsTalent/>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
