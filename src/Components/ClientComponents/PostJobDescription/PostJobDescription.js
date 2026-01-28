/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { storage } from "../../../firebase";
import { updateJob } from "../../../Network/Network";
import "./PostJobDescription.css";

export default function PostJobDescription({ setBtns, btns }) {
  const { t } = useTranslation();
  let [job, setJob] = useState({ jobDescription: "", jobImages: [] });
  const getData = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    const files = e.target.files;
    switch (name) {
      case "description":
        job.jobDescription = val;
        setJob({ ...job, jobDescription: job.jobDescription });
        break;
      case "images":
        if (files[0]) {
          const upload = storage
            .ref(`jobImages/${files[0].name}`)
            .put(files[0]);
          upload.on(
            "state_changed",
            (snapshot) => { },
            (err) => {
              console.log(err);
            },
            () => {
              storage
                .ref("jobImages")
                .child(files[0].name)
                .getDownloadURL()
                .then((url) => {
                  job.jobImages.push(url);
                  setJob({ ...job, jobImages: job.jobImages });
                  console.log(job);
                });
            }
          );
        }
        break;
      default:
        break;
    }
  };

  const addData = () => {
    setJob(job.jobDescription);
    console.log(job);
    const id = localStorage.getItem("docID");
    console.log(id);
    updateJob(job, id);
    setBtns({ ...btns, details: false });
  }


  return (
    <section className=" bg-white border rounded mt-3 pt-4">
      <div className="border-bottom ps-4">
        <h4>{t("Description")}</h4>
        <p>{t("Step 2 of 7")}</p>
      </div>
      <div className="ps-4 mt-3">
        <p className="fw-bold mt-2">A good description includes:</p>
        <ul style={{ listStyle: "disc" }}>
          <li>{t("What the deliverable is")}</li>
          <li>{t("Type of freelancer or agency you're looking for")}</li>
          <li>
            {t("Anything unique about the project, team, or your company")}
          </li>
        </ul>
      </div>
      <div className="ps-4 pt-2 pe-4">
        <textarea className="form-control shadow-none" name="description" rows="8" onInput={getData}></textarea>
        <span className="float-end">{t("0/5000 characters (minimum 50)")}</span>
      </div>
      <div className="mx-4 mt-5 py-2 pb-4">
        <p className="fw-bold">{t("Additional project files (optional)")}</p>
        <div className="d-flex mb-3">
          {
            job.jobImages &&
            job.jobImages.map(url => {
              return <div className="mx-2 circle" style={{ width: "50px", height: "50px" }}>
                <img className="w-100 h-100 rounded-circle" src={url} />
              </div>
            })
          }
        </div>
        <div className="attachments-cn">
          <p className="py-2 text-center mt-2">
            <label for="file" className="upw-c-cn me-1" style={{ cursor: "pointer" }}>{t("upload")}</label>
            <input id="file" type="file" name="images" className="d-none" onInput={getData} />
            {t("project images")}
          </p>
        </div>
        <p className="my-3">{t("You may attach up to 5 files under 100 MB each")}</p>
      </div>
      <div className="ps-4 my-3 pt-4 pb-3 pt-3 border-top">
        <button className="btn">
          <Link className="btn border text-success me-4 px-5" to="/post-job/title">{t("Back")}</Link>
        </button>
        <button className={`btn ${job.jobDescription === "" && "disabled"}`}>
          <Link className="btn bg-upwork px-5" to="/post-job/details" onClick={addData}>{t("Next")}</Link>
        </button>
      </div>
    </section>
  )
}
