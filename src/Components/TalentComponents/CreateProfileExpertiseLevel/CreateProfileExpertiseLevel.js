import React, { useState } from "react";
import { Link } from "react-router-dom";
import { updateUserData } from "../../../Network/Network";

export default function CreateProfileExpertiseLevel({ setBtns, btns }) {

  const [state, setState] = useState({ availability: "", expertiseLevel: "" })

  const onChangeVal = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    switch (name) {
      case "expertise-level":
        setState({ ...state, expertiseLevel: val });
        break;
      case "availability":
        setState({ ...state, availability: e.target.checked });
        console.log(e.target.checked)
        break;
      default:
        break;
    }
  };

  const addData = () => {
    updateUserData("talent", {
      expertiseLevel: state.expertiseLevel,
      expertiseLevelAr: state.expertiseLevel === "Expert" ? "خبير" : state.expertiseLevel === "Intermediate" ? "متوسط" : "مبتدئ",
      availability: state.availability,
      profileCompletion: 30,
    });
    setBtns({ ...btns, eduAndEmp: false })
  }

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
      <div className="row mx-4 justify-content-start align-items-center">
        <label className="w-50 fw-bold">
          Are you available to work immediately
            </label>
        <input
          type="checkbox"
          name="availability"
          className="w-25 form-check shadow-none"
          onChange={onChangeVal}
        />

      </div>
      <div className="px-4 my-3 pt-4 border-top d-flex justify-content-between">
        <button className="btn">
          <Link
            className="btn border text-success me-4 px-5 fw-bold"
            to="/create-profile/category"
          >
            Back
        </Link>
        </button>
        <button className={`btn ${state.availability === "" || state.expertiseLevel === "" ? "disabled" : ""}`}>
          <Link
            className="btn bg-upwork px-5"
            to="/create-profile/education-and-employment"
            onClick={addData}
          >
            Next
        </Link>
        </button>
      </div>
    </section>
  );
}
