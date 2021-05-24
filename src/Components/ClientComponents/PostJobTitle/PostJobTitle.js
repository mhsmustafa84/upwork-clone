import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { updateJob } from '../../../Network/Network'
import './PostJobTitle.css'

export default function PostJobTitle({ setBtns, btns }) {

    const [job, setJob] = useState({ jobTitle: "", jobCategory: "" })

    const getData = e => {
        const val = e.target.value;
        const name = e.target.name;

        switch (name) {
            case "JobCategory":
                job.jobCategory = val;
                setJob({ ...job, jobCategory: job.jobCategory });
                break;
            case "jobTitle":
                job.jobTitle = val;
                setJob({ ...job, jobTitle: job.jobTitle });
                break;
            default:
                break;
        }
    }

    const addData = () => {
        console.log(job);
        const id = localStorage.getItem("docID");
        console.log(id);
        updateJob(job, id);
        setBtns({ ...btns, description: false });
    }

    return (
        <>
            <section className=" bg-white border rounded mt-3 pt-4">
                <div className="border-bottom ps-4">
                    <h4>Title</h4>
                    <p>Step 1 of 7</p>
                </div>
                <div className="ps-4 mt-3">
                    <p className="fw-bold">Enter the name of your job post <span className="text-danger">*</span></p>
                    <input className="form-control w-75 shadow-none" name="jobTitle" onInput={getData} />
                    {
                        job.jobTitle.length < 4 && job.jobTitle !== ""
                            ? <p className="text-danger fw-bold mt-2">
                                <i className="fas fa-exclamation-circle me-2"></i>
                                Title should be more than 3 characters
                            </p>
                            : ""
                    }
                    {
                        job.jobTitle.split(" ").length < 3 && job.jobTitle !== ""
                            ? <p className="text-danger fw-bold mt-2">
                                <i className="fas fa-exclamation-circle me-2"></i>
                                Title should be more than 2 words
                            </p>
                            : ""
                    }
                    {
                        job.jobTitle === job.jobTitle.toUpperCase() && job.jobTitle !== ""
                            ? <p className="text-danger fw-bold">
                                <i className="fas fa-exclamation-circle me-2"></i>
                                Title should not be all uppercase letters
                            </p>
                            : ""
                    }
                    <p className="fw-bold mt-2">Here are some good examples:</p>
                    <ul style={{ listStyle: "disc" }}>
                        <li>Developer needed for creating a responsive WordPress Theme</li>
                        <li>CAD designer to create a 3D model of a residential building</li>
                        <li>Need a design for a new company logo</li>
                    </ul>
                </div>
            </section>

            <section className=" bg-white border rounded mt-3 pt-4">
                <div className="border-bottom ps-4">
                    <h4>Job Category</h4>
                    <p className="w-75">Let's categorize your job, which helps us personalize your job details and match your job to relevant freelancers and agencies.</p>
                    <select className="form-select form-select-lg mb-3 shadow-none w-50" aria-label=".form-select-lg example" name="JobCategory" onChange={getData}>
                        <option defaultValue value="Select a category">Select a category</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Graphic Design">Graphic Design</option>
                    </select>
                </div>
                <div className="ps-4 my-3">
                    <button className="btn">
                        <Link className="btn border text-success me-4 px-5" to="/post-job">Back</Link>
                    </button>
                    <button className={`btn ${job.jobTitle === "" || job.jobCategory === "" || job.jobCategory === "Select a category" ? "disabled" : ""}`}>
                        <Link className="btn bg-upwork px-5" to="/post-job/description" onClick={addData}>Next</Link>
                    </button>
                </div>
            </section>
        </>
    )
}
