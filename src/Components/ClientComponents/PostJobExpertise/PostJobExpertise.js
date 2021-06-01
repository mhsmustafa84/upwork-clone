import React, { useState } from "react";
import { Link } from "react-router-dom";
import { updateJob } from "../../../Network/Network";
import "./PostJobExpertise.css";
import { useTranslation } from "react-i18next";

export default function PostJobExpertise({ setBtns, btns }) {

  const [inputVal, setInputVal] = useState("");
  const [skillsList, setSkillsList] = useState([]);
  const [job, setJob] = useState({ jobExperienceLevel: "", skills: [] });
  const { t } = useTranslation();

  const getData = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    switch (name) {
      case "jobExperienceLevel":
        setJob({ ...job, jobExperienceLevel: val });
        break;
      case "jobSkills":
        setInputVal(val);
        break;
      default:
        break;
    }
  };

  const addSkills = () => {
    skillsList.push(inputVal);
    setSkillsList([...skillsList]);
    setJob({ ...job, skills: skillsList });
    setInputVal("");
    console.log(skillsList);
  };

  const addData = () => {
    const id = localStorage.getItem("docID");
    console.log(id);
    updateJob({ skills: job.skills, jobExperienceLevel: job.jobExperienceLevel, jobExperienceLevelAr: job.jobExperienceLevel === "expert" ? "خبير" : job.jobExperienceLevel === "intermediate" ? "متوسط" : "مبتدئ" }, id);
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
            <span className="text-danger"> *</span>
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
              value={inputVal}
              onChange={getData}
            />
            <button
              className="btn bg-upwork px-5"
              disabled={!inputVal}
              onClick={addSkills}
            >
              Add
            </button>
            <div className="my-4 d-flex justify-content-between"></div>
          </div>
          {skillsList.map((item, index) => (
            <div className="chip mb-3 ms" key="index">
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border rounded mt-3">
        <div className="ps-4 my-3">
          <button className="btn">
            <Link
              className="btn border text-success me-4 px-5"
              to="/post-job/details"
            >
              {t("Back")}
            </Link>
          </button>
          <button
            className={`btn ${job.jobExperienceLevel === "" && "disabled"}`}
          >
            <Link
              className="btn bg-upwork px-5"
              to="/post-job/visibility"
              onClick={addData}
            >
              {t("Next")}
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
