import React, { useState } from "react";
import { Link } from "react-router-dom";
import { updateUserData } from "../../../Network/Network";

export default function CreateProfileLanguage() {
  let [language, setlanguage] = useState("");

  const lang = (e) => {
    // updateUserData("talent", { englishProficiency: e.target.value });
    language = e.target.value;
    setlanguage(language);
  };
  const updateuser = () => {
    updateUserData("talent", { englishProficiency: language });
    console.log(language);
  };
  return (
    <section className=" bg-white border rounded mt-3 pt-4">
      <div className="border-bottom ps-4 pb-3">
        <h4>Languages</h4>
      </div>
      <div className="p-4 my-3">
        <p className="fw-bold">What is your English proficiency?</p>
        <select
          class="form-select form-select-lg mb-3 shadow-none w-50"
          aria-label=".form-select-lg example"
          onChange={lang}
        >
          <option selected>English proficiency</option>
          <option value="Basic">Basic</option>
          <option value="Conversational">Conversational</option>
          <option value="Fluent">Fluent</option>
          <option value="Native">Native</option>
        </select>
      </div>
      <div className="px-4 my-3 pt-4 border-top d-flex justify-content-between">
        <Link
          className="btn border text-success me-4 px-5 fw-bold"
          to="/create-profile/education-and-employment"
        >
          Back
        </Link>
        <Link
          className="btn bg-upwork px-5"
          to="/create-profile/hourly-rate"
          onClick={updateuser}
        >
          Next
        </Link>
      </div>
    </section>
  );
}
