import React, { useState } from "react";
import { Link } from "react-router-dom";
import { updateJob } from "../../../Network/Network";
import "./PostJobDetails.css";

export default function PostJobDetails({ setBtns, btns }) {
    const [job, setJob] = useState({ jobType: "" });

    const getData = e => {
        setJob({ jobType: e.target.value });
    };

    const addData = () => {
        console.log(job);
        const id = localStorage.getItem("docID");
        console.log(id);
        updateJob({ jobType: job.jobType, jobTypeAr: job.jobType === "one time project" ? "مشروع مرة واحدة" : job.jobType === "ongoing project" ? "مشروع مستمر" : "مشروع معقد" }, id);
        setBtns({ ...btns, expertise: false });
    };

    return (
        <>
            <section className=" bg-white border rounded mt-3 pt-4">
                <div className="border-bottom ps-4">
                    <h4>Details</h4>
                    <p>Step 3 of 7</p>
                </div>
                <div className="px-4 mt-3">
                    <p className="fw-bold mt-2">
                        "What type of project do you have?"
                    </p>
                    <div className="my-4 d-flex justify-content-between" onInput={getData}>
                        <label className="border border-success rounded p-3 text-center">
                            <input type="radio" className="float-end" name="jobType" value="one time project" />
                            <div><i className="fas fa-briefcase"></i></div>
                            <h6 className="my-3">One-time project</h6>
                            <div>Find the right skills for a short-term need.</div>
                        </label>
                        <label className="border border-success rounded p-3 text-center mx-3">
                            <input type="radio" className="float-end" name="jobType" value="ongoing project" />
                            <div><i className="fas fa-list-alt"></i></div>
                            <h6 className="my-3">Ongoing project</h6>
                            "Find a skilled resource for an extended engagement."
                        </label>
                        <label className="border border-success rounded p-3 text-center">
                            <input type="radio" className="float-end" name="jobType" value="complex project" />
                            <div><i className="fas fa-th-large"></i></div>
                            <h6 className="my-3">Complex project</h6>
                            <div>
                                "Find specialized experts and agencies for large projects."
                            </div>
                        </label>
                    </div>
                </div>
            </section>

            <section className="bg-white border rounded mt-3">
                <div className="ps-4 my-3">
                    <button className="btn">
                        <Link className="btn border text-success me-4 px-5" to={`${process.env.REACT_APP_BASE_ROUTE}/post-job/description`}>Back</Link>
                    </button>
                    <button className={`btn ${job.jobType === "" && "disabled"}`}>
                        <Link className="btn bg-upwork px-5" to={`${process.env.REACT_APP_BASE_ROUTE}/post-job/expertise`} onClick={addData}>Next</Link>
                    </button>
                </div>
            </section>
        </>
    )
}
