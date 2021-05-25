import React, { useState } from "react";
import { Link } from "react-router-dom";
import { updateJob } from "../../../Network/Network";
import "./PostJobExpertise.css";
import { useTranslation } from "react-i18next";
export default function PostJobExpertise({ setBtns, btns }) {
  const [inputVal, setinputVal] = useState("");
  const [skillsList, setskillsList] = useState([]);
  const [job, setJob] = useState({ jobExperienceLevel: "", jobSkills: [] });
  const { t } = useTranslation();

  const getData = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    switch (name) {
      case "jobExperienceLevel":
        job.jobExperienceLevel = val;
        setJob({ ...job, jobExperienceLevel: job.jobExperienceLevel });
        break;
      case "jobSkills":
        setinputVal(val);
        break;
      default:
        break;
    }
  };

  const addskills = () => {
    let arr2=[...skillsList,inputVal];
    setskillsList(arr2);
    console.log(skillsList);
    setJob({...job,jobSkills:skillsList})
  };

  const addData = () => {
    const id = localStorage.getItem("docID");
    console.log(id);
    updateJob(job, id);
    setBtns({ ...btns, visibility: false });
  };

  return (
    <>
      <section className=" bg-white border rounded mt-3 pt-4">
        <div className="border-bottom ps-4">
          <h4>{t("Expertise")}</h4>
          <p>{t("Step 4 of 7")}</p>
        </div>
        <div className="px-4 mt-3">
          <p className="fw-bold mt-2">
            {t("What level of experience should your freelancer have?")}
          </p>
          <div
            className="my-4 d-flex justify-content-between"
            onInput={getData}
          >
            <label className="border border-success rounded p-3 text-center">
              <input
                type="radio"
                className="float-end"
                name="jobExperienceLevel"
                value="entry level"
              />
              <h6 className="my-3">{t("Entry Level")}</h6>
              <div>{t("Looking for someone relatively new to this field")}</div>
            </label>
            <label className="border border-success rounded p-3 text-center mx-3">
              <input
                type="radio"
                className="float-end"
                name="jobExperienceLevel"
                value="intermediate"
              />
              <h6 className="my-3">{t("Intermediate")}</h6>
              <div>{t("Looking for substantial experience in this field")}</div>
            </label>
            <label className="border border-success rounded p-3 text-center">
              <input
                type="radio"
                className="float-end"
                name="jobExperienceLevel"
                value="expert"
              />
              <h6 className="my-3">{t("Expert")}</h6>
              <div>
                {t(
                  "Looking for comprehensive and deep expertise in this field"
                )}
              </div>
            </label>
          </div>
          <p className="fw-bold">{t("Enter the skills of your job post?")}</p>
          <div className="my-4 d-flex justify-content-between">
            <input
              className="form-control w-75 shadow-none"
              type="text"
              name="jobSkills"
              onChange={getData}
            />
            <button className="btn bg-upwork px-5" onClick={addskills}>
              Add
            </button>
            <div className="my-4 d-flex justify-content-between"></div>
          </div>
          {skillsList.map((item)=><div  className="chip mb-3 ms">

          <span>{item}</span>
          </div>)}
            
        </div>
      </section>

      <section className="bg-white border rounded mt-3">
        <div className="ps-4 my-3">
          <Link
            className="btn border text-success me-4 px-5"
            to="/post-job/details"
          >
            {t("Back")}
          </Link>
          <Link
            className="btn bg-upwork px-5"
            to="/post-job/visibility"
            onClick={addData}
          >
            {t("Next")}
          </Link>
        </div>
      </section>
    </>
  );
}
