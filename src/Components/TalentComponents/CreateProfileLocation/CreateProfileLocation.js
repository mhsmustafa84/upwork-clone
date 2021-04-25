import React, { useState } from "react";
import CountrySelect from "react-bootstrap-country-select";
import { Link } from "react-router-dom";
import "react-bootstrap/dist/react-bootstrap";
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";
import { updateUserData } from './../../../Network/Network';

export default function CreateProfileLocation() {
  let [country, setCountry] = useState();
  const [locationData, setLocationData] = useState({ location: { country: "", city: "", street: "" } });

  const getData = e => {
    const val = e.target.value;
    const name = e.target.name;
    console.log(locationData.location.country);
    switch (name) {
      case "city":
        setLocationData({ location: { ...locationData.location, city: val } });
        break;
      case "street":
        setLocationData({ location: { ...locationData.location, street: val } });
        break;
      default:
        break;
    }
  }

  const addData = () => {
    locationData.location.country = country.name;
    setLocationData({ location: { ...locationData.location, country: locationData.location.country } });
    updateUserData("talent", locationData)
  }
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
        </p>
        <CountrySelect className="w-50" value={country} onChange={setCountry} />
        <label className="mt-4 w-50">
          <strong className="d-block mb-2">City</strong>
          <input type="text" className="form-control" name="city" onInput={getData} />
        </label>
        <label className="mt-4 w-100">
          <strong className="d-block mb-2">Street Address</strong>
          <input type="text" className="form-control" name="street" onInput={getData} />
        </label>
      </div>
      <div className="px-4 my-3 pt-4 border-top d-flex justify-content-between">
        <Link className="btn border text-success me-4 px-5 fw-bold" to="/create-profile/profile-photo">
          Back
        </Link>
        <Link className="btn bg-upwork px-5" to="/create-profile/phone-number" onClick={addData}>
          Next
        </Link>
      </div>
    </section>
  );
}
