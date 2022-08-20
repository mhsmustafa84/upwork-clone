import React, { useState } from "react";
import { Link } from "react-router-dom";
import { updateUserData } from "../../../Network/Network";

export default function CreateProfileEducationAndEmployment({ setBtns, btns }) {

  const [user, setuser] = useState({
    education: { school: "", areaOfStudy: "", degree: "", gradYear: "" },
    company: [{ companyName: "", jobTitle: "", stillWork: false }],
    profileCompletion: 40,
  });

  const getUserData = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    switch (name) {
      case "school":
        setuser({ ...user, education: { ...user.education, school: val } });
        break;
      case "area":
        setuser({ ...user, education: { ...user.education, areaOfStudy: val } });
        break;
      case "degree":
        setuser({ ...user, education: { ...user.education, degree: val } });
        break;
      case "year":
        console.log(val);
        setuser({ ...user, education: { ...user.education, gradYear: val } });
        break;
      case "company":
        setuser({ ...user, company: [{ ...user.company[0], companyName: val }] });
        break;
      case "title":
        setuser({ ...user, company: [{ ...user.company[0], jobTitle: val }] });
        break;
      case "stillwork":
        setuser({
          ...user,
          company: [{ ...user.company[0], stillWork: e.target.checked }],
        });
        break;
      default:
        break;
    }
  };

  const updateUser = () => {
    console.log(user);
    updateUserData("talent", user);
    setBtns({ ...btns, language: false });
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
            School <span className="text-danger">*</span>
            <input
              className="form-control shadow-none"
              name="school"
              placeholder="Ex: Northwestern University"
              onInput={getUserData}
            />
          </label>
          <label className="w-100 my-2">
            Area of study
            <input
              className="form-control shadow-none"
              name="area"
              placeholder="Ex: Economy"
              onInput={getUserData}
            />
          </label>
          <label className="w-100">
            Degree
            <input
              className="form-control shadow-none"
              name="degree"
              placeholder="Ex: Bachelor of commerce"
              onInput={getUserData}
            />
          </label>
          <label className="w-100 my-2">
            Graduation year
            <input
              type="date"
              className="form-control shadow-none"
              name="year"
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
        <button className="btn">
          <Link className="btn border text-success me-4 px-5 fw-bold" to="/create-profile/expertise-level">
            Back
        </Link>
        </button>
        <button className={`btn ${user?.education?.school === "" && "disabled"}`}>
          <Link
            className="btn bg-upwork px-5"
            to="/create-profile/language"
            onClick={updateUser}
          >
            Next
        </Link>
        </button>
      </div>
    </section>
  );
}
