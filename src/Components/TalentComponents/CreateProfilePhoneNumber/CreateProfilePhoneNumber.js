import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { updateUserData } from "./../../../Network/Network";

export default function CreateProfilePhoneNumber() {
  const [value, setValue] = useState();

  const getNumber = () => {
    console.log(value);
    updateUserData("talent", { phoneNumber: value, profileCompletion: 100 });
  };

  return (
    <section className="bg-white border rounded mt-3 pt-4">
      <div className="border-bottom ps-4 pb-3">
        <h4>Phone number</h4>
      </div>
      <div className="px-4 my-4">
        <p>
          <strong>Add your phone number.</strong>
        </p>
        <span className="d-block mb-2">
          <strong>Phone</strong>
        </span>
        <PhoneInput
          className="form-control w-50 mb-5"
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
        />
        <p>
          Your phone number will <strong>not</strong> be shared with clients.
        </p>
      </div>
      <div className="px-4 my-3 pt-4 border-top d-flex justify-content-between">
        <button className="btn">
          <Link
            className="btn border text-success me-4 px-5 fw-bold"
            to="/create-profile/location"
          >
            Back
          </Link>
        </button>
        <button className={`btn ${!value ? "disabled" : ""}`}>
          <Link
            className="btn bg-upwork px-5"
            to="/create-profile/submit"
            onClick={getNumber}
          >
            Review Profile
          </Link>
        </button>
      </div>
    </section>
  );
}
