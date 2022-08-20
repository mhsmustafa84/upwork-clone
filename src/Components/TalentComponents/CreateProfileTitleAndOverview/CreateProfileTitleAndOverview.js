import React, { useState } from "react";
import { Link } from "react-router-dom";
import { updateUserData } from "../../../Network/Network";

export default function CreateProfileTitleAndOverview({ setBtns, btns }) {
  const [data, setData] = useState({
    title: "",
    overview: "",
    profileCompletion: 70,
  });

  const getData = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    switch (name) {
      case "title":
        setData({ ...data, title: val });
        break;
      case "overview":
        setData({ ...data, overview: val });
        break;
      default:
        break;
    }
  };

  const addData = () => {
    console.log(data);
    updateUserData("talent", data);
    setBtns({ ...btns, profilePhoto: false })
  };

  return (
    <section className="bg-white border rounded mt-3 pt-4">
      <div className="border-bottom ps-4 pb-3">
        <h4>Title & Overview</h4>
      </div>
      <div className="px-4 my-4">
        <p>
          <Link to="">Learn more</Link> about writing a great profile or{" "}
          <Link to="">browse profiles</Link> in your category.
        </p>

        <div className="my-4"></div>
        <div>
          <label className="w-100">
            <strong>Title</strong>
            <span className="text-danger"> *</span>
            <i className="fas fa-question-circle upw-c-cn ms-3 mb-3"></i>
            <input
              type="text"
              className="form-control shadow-none w-50"
              name="title"
              onInput={getData}
            />
          </label>
          <label className="w-100 mt-3">
            <strong>Professional Overview</strong>
            <span className="text-danger"> *</span>
            <i className="fas fa-question-circle upw-c-cn ms-3 mb-3"></i>
            <textarea
              name="overview"
              rows="7"
              className="form-control shadow-none"
              placeholder="Highlight your top skills, experience, and interests. This is one of the first things clients will see on your profile."
              onInput={getData}
            ></textarea>
            <p className="text-end">5000 characters left</p>
          </label>
        </div>
      </div>
      <div className="px-4 my-3 pt-4 border-top d-flex justify-content-between">
        <button className="btn">
          <Link
            className="btn border text-success me-4 px-5 fw-bold"
            to="/create-profile/hourly-rate"
          >
            Back
          </Link>
        </button>
        <button className={`btn ${data.title === "" || data.overview === "" ? "disabled" : ""}`}>
          <Link
            className="btn bg-upwork px-5"
            to="/create-profile/profile-photo"
            onClick={addData}
          >
            Next
        </Link>
        </button>
      </div>
    </section>
  );
}
