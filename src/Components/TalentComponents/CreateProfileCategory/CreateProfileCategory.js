/* eslint-disable */
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase";
import { updateUserData } from "../../../Network/Network";

export default function CreateProfileCategory() {
  const [inputVal, setinputVal] = useState("");
  const [skillsList, setskillsList] = useState([]);
  let [cat, setCat] = useState();
  const catVal = (e) => {
    cat = e.target.value;
    setCat(cat);
  };
  const skillVal=(e)=>{
    setinputVal(e.target.value)
  }

  const addData = () => {
    updateUserData("talent", { jobCategory: cat,authID:auth.currentUser.uid ,skills:skillsList, profileCompletion: 20});
  }
  const addskills = () => {
    let arr2=[...skillsList,inputVal];
    setskillsList(arr2);
    console.log(skillsList);
  //  setskillsList([...skillsList,inputVal]);
  //  console.log(skillsList);
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
          <option selected>Select a category</option>
          <option value="Web Development">Web Development</option>
          <option value="Web Design">Web Design</option>
          <option value="Graphic Design">Graphic Design</option>
        </select>
        <>
          <p className="fw-bold mt-2">About your skills?</p>
          <div className="my-4 d-flex justify-content-between">
            <input
              className="form-control w-75 shadow-none"
              type="text"
              name="jobSkills"
              onChange={skillVal}
            />
            <button className="btn bg-upwork px-5" onClick={addskills}>
              Add
            </button>
          </div>
        <div className="my-4 d-flex justify-content-start">
          {skillsList.map((item)=>
          <div  className="chip mb-3 ms">
            <span>{item}</span>
          </div>
          )}
          </div>  
        </>
      </div>
      <div className="px-4 my-3 pt-4 border-top d-flex justify-content-between">
        <Link className="btn border text-success me-4 px-5 fw-bold" to="/home">
          Back
        </Link>
        <Link
          className="btn bg-upwork px-5"
          to="/create-profile/expertise-level"
          onClick={addData}
        >
          Next
        </Link>
      </div>
    </section>
  );
}
