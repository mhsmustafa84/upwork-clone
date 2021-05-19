import React, { useState } from "react";
import { Link } from "react-router-dom";
import { updateUserData } from "../../../Network/Network";

export default function CreateProfileEducationAndEmployment() {
  const [user, setuser] = useState({
    school: "",
    company: { companyName: "", jobTitile: "", stillWork: false }
  });
  const getUserData = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    switch (name) {
      case "school":
        setuser({ ...user, school: val });
        break;
      case "company":
        setuser({ ...user, company: { ...user.company, companyName: val } });
        break;
      case "title":
        setuser({ ...user, company: { ...user.company, jobTitile: val } });
        break;
      case "stillwork":
        setuser({ ...user, company: { ...user.company, stillWork: e.target.checked } });
        break;
      default:
        break;
    }
  };
  const updateUser = () => {
    console.log(user);

    updateUserData("talent", user);
  };
  return (
    <section className="bg-white border rounded mt-3 pt-4">
      <div className="border-bottom ps-4 pb-3">
        <h4>Education & Employment</h4>
      </div>
      <div className="px-4 my-4">
        <div>
          <p className="fw-bold">Add School</p>
          <label className="w-100">
            School
            <input
              className="form-control shadow-none"
              name="school"
              placeholder="Ex: Northwestern University"
              onInput={getUserData}
            />
          </label>
        </div>
        <div className="my-4"></div>
        <div>
          <p className="fw-bold">Add your past work experience</p>
          <label className="w-100">
            Company
            <input
              className="form-control shadow-none"
              name="company"
              onInput={getUserData}
            />
          </label>
          <label className="w-100 mt-3">
            Title
            <input
              className="form-control shadow-none"
              name="title"
              onInput={getUserData}
            />
          </label>
          <label className="mt-3">
            I currently work here?
            <input
              type="checkbox"
              name="stillwork"
              className="form-check shadow-none"
              onChange={getUserData}
            />
          </label>
        </div>
      </div>
      <div className="px-4 my-3 pt-4 border-top d-flex justify-content-between">
        <Link className="btn border text-success me-4 px-5 fw-bold" to="/home">
          Back
        </Link>
        <Link
          className="btn bg-upwork px-5"
          to="/create-profile/language"
          onClick={updateUser}
        >
          Next
        </Link>
      </div>
    </section>
  );
}
