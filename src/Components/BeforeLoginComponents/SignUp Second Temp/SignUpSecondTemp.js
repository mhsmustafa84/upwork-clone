/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import SignUpSecondForm from "../Signup Second Form/SignUpSecondForm";
import SignupLogos from "../Signup logos/SignupLogos";

export default function SignUpSecondTemp() {
  return (
    <>
      <div className="container-fluid bg-upwork-dark">
        <div className="row">
          <SignUpSecondForm />
        </div>
      </div>
      <SignupLogos />
    </>
  );
}
