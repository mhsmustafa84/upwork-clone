import React, { useState } from "react";
import CountrySelect from "react-bootstrap-country-select";
import { Link } from "react-router-dom";
import "react-bootstrap/dist/react-bootstrap";
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";
import { updateUserData } from "./../../../Network/Network";

export default function CreateProfileLocation({ setBtns, btns }) {
  let [country, setCountry] = useState("");
  const [location, setLocation] = useState({
    country: "",
    city: "",
    street: "",
  });

  const getData = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    switch (name) {
      case "city":
        location.city = val;
        setLocation({ ...location, city: location.city });
        break;
      case "street":
        location.street = val;
        setLocation({ ...location, street: location.street });
        break;
      default:
        break;
    }
    if (country) {
      setLocation({
        ...location,
        country: country.name,
      });
    }
  };

  const addData = () => {
    updateUserData("talent", {
      location: { ...location },
      profileCompletion: 90,
    });
    console.log(location);
    setBtns({ ...btns, PhoneNumber: false })
  };
  return (
    <section className="bg-white border rounded mt-3 pt-4">
      <div className="border-bottom ps-4 pb-3">
        <h4>Location</h4>
      </div>
      <div className="px-4 my-4">
        <p>
          <strong>Where are you based?</strong>
        </p>
        <p>
          We take your privacy very seriously. Only your city and country will
          be shown to clients.
        </p>
        <p>
          <strong>Country</strong>
          <span className="text-danger"> *</span>
        </p>
        <CountrySelect className="w-50" value={country} onChange={setCountry} />
        <label className="mt-4 w-50">
          <strong className="mb-2">City</strong>
          <span className="text-danger"> *</span>
          <input
            type="text"
            className="form-control mt-2"
            name="city"
            autoComplete="disabled"
            onInput={getData}
          />
        </label>
        <label className="mt-4 w-100">
          <strong className="d-block mb-2">Street Address</strong>
          <input
            type="text"
            className="form-control"
            name="street"
            autoComplete="disabled"
            onInput={getData}
          />
        </label>
      </div>
      <div className="px-4 my-3 pt-4 border-top d-flex justify-content-between">
        <button className="btn">
          <Link
            className="btn border text-success me-4 px-5 fw-bold"
            to="/create-profile/profile-photo"
          >
            Back
          </Link>
        </button>
        <button className={`btn ${country === "" || country === null || location.city === "" ? "disabled" : ""}`}>
          <Link
            className="btn bg-upwork px-5"
            to="/create-profile/phone-number"
            onClick={addData}
          >
            Next
        </Link>
        </button>
      </div>
    </section>
  );
}
