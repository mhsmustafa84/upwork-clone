import React from "react";
import { Link } from "react-router-dom";
import { updateUserData } from "../../../Network/Network";

export default function CreateProfileExpertiseLevel() {
  let onChangeVal = (e) => {
    console.log(e.target.value);
    updateUserData("talent", { expertiseLevel: e.target.value });
  };

  return (
    <section className=" bg-white border rounded mt-3 pt-4">
      <div className="border-bottom ps-4 pb-3">
        <h4>Expertise level</h4>
      </div>
      <div className="ps-4 my-5">
        <p className="fw-bold mt-5">
          What is your level of experience in this field?
        </p>
        <div
          className="my-4 mx-4 d-flex justify-content-between"
          onChange={onChangeVal}
        >
          <label className="border border-success rounded p-3 text-center w-25">
            <input
              type="radio"
              className="float-end"
              name="expertise-level"
              value="Entry-level"
            />
            <h5 className="my-4">Entry level</h5>
            <div>I am relatively new to this field</div>
          </label>
          <label className="border border-success rounded p-3 text-center w-25">
            <input
              type="radio"
              className="float-end"
              name="expertise-level"
              value="Intermediate"
            />
            <h5 className="my-4">Intermediate</h5>
            <div>I have substantial experience in this field</div>
          </label>
          <label className="border border-success rounded p-3 text-center w-25">
            <input
              type="radio"
              className="float-end"
              name="expertise-level"
              value="Expert"
            />
            <h5 className="my-4">Expert</h5>
            <div>I have comprehensive and deep expertise in this field</div>
          </label>
        </div>
      </div>
      <div className="px-4 my-3 pt-4 border-top d-flex justify-content-between">
        <Link className="btn border text-success me-4 px-5 fw-bold" to="/create-profile/category">
          Back
        </Link>
        <Link
          className="btn bg-upwork px-5"
          to="/create-profile/education-and-employment"
        >
          Next
        </Link>
      </div>
    </section>
  );
}
