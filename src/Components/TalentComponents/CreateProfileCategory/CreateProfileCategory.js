
import { useState } from "react";
import { Link } from "react-router-dom";
import { updateUserData } from "../../../Network/Network";

export default function CreateProfileCategory({ setBtns, btns }) {
  const [inputVal, setinputVal] = useState("");
  const [skillsList, setskillsList] = useState([]);
  let [cat, setCat] = useState("");
  const catVal = ({ target }) => {
    cat = target.value;
    setCat(cat);
  };
  const skillVal = ({ target }) => {
    setinputVal(target.value)
  }

  const addData = () => {
    updateUserData("talent", {
      jobCategory: cat,
      jobCategoryAr: cat === "Graphic Design" ? "تصميم الجرافيك" : cat === "Web Development" ? "تطوير الويب" : cat === "Front-End Development" ? "تطوير الواجهة الأمامية" : cat === "Web Design" ? "تصميم الويب" : "تطوير الهاتف",
      skills: skillsList,
      profileCompletion: 20
    });
    setBtns({ ...btns, expertiseLevel: false })
  }
  const addskills = () => {
    let arr2 = [...skillsList, inputVal];
    setskillsList(arr2);
    setinputVal("")
    console.log(skillsList);
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
          <option value="Front-End Development">Front-End Development</option>
          <option value="Web Development">Web Development</option>
          <option value="Web Design">Web Design</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Mobile Development">Mobile Development</option>
        </select>
        <>
          <p className="fw-bold mt-2">About your skills?</p>
          <div className="my-4 d-flex justify-content-between">
            <input
              className="form-control w-75 shadow-none"
              type="text"
              name="jobSkills"
              value={inputVal}
              onChange={skillVal}
            />
            <button className="btn bg-upwork px-5" onClick={addskills} disabled={!inputVal}>
              Add
            </button>
          </div>
          <div className="my-4 d-flex justify-content-start flex-wrap">
            {skillsList.map((item) =>
              <div className="chip mb-3 ms">
                <span>{item}</span>
              </div>
            )}
          </div>
        </>
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
