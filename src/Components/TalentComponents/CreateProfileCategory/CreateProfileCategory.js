
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase";
import { updateUserData } from "../../../Network/Network";

export default function CreateProfileCategory({ setBtns, btns }) {
  let [cat, setCat] = useState("");
  const catVal = (e) => {
    cat = e.target.value;
    setCat(cat);
  };

  const addData = () => {
    updateUserData("talent", {
      jobCategory: cat,
      authID: auth.currentUser.uid,
      profileCompletion: 20,
    });
    setBtns({ ...btns, expertiseLevel: false })
  };

  return (
    <section className=" bg-white border rounded mt-3 pt-4">
      <div className="border-bottom ps-4 pb-3">
        <h4>Category</h4>
      </div>
      <div className="p-4 my-3">
        <h5 className="fw-bold mb-4">Tell us about the work you do</h5>
        <p className="fw-bold">What is the main service you offer?</p>
        <select
          className="form-select form-select-lg mb-3 shadow-none"
          aria-label=".form-select-lg example"
          onChange={catVal}
        >
          <option selected value="Select a category">Select a category</option>
          <option value="Web Development">Web Development</option>
          <option value="Web Design">Web Design</option>
          <option value="Graphic Design">Graphic Design</option>
        </select>
      </div>
      <div className="px-4 my-3 pt-4 border-top d-flex justify-content-end">
        <button className={`btn ${cat === "" || cat === "Select a category" ? "disabled" : ""}`}>
          <Link
            className="btn bg-upwork px-5"
            to="/create-profile/expertise-level"
            onClick={addData}
          >
            Next
        </Link>
        </button>
      </div>
    </section>
  );
}
