/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './PostJobVisibility.css'
import upwork from '../../../assets/img/TLpZ1jf.png'
import { updateJob } from '../../../Network/Network';
export default function PostJobVisibility() {

    const [job, setJob] = useState({ jobVisibility: "", freelancerNeed: "" });

    const getData = e => {
        const val = e.target.value;
        const name = e.target.name;
        switch (name) {
            case "visibility":
                job.jobVisibility = val;
                setJob({ ...job, jobVisibility: job.jobVisibility });
                break;
            case "freelancerNeed":
                job.freelancerNeed = val;
                setJob({ ...job, freelancerNeed: job.freelancerNeed });
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
    }

    return (
        <>
            <section className=" bg-white border rounded mt-3 pt-4">
                <div className="border-bottom ps-4">
                    <h4>Visibility</h4>
                    <p>Step 5 of 7</p>
                </div>
                <div className="px-4 mt-3">
                    <p className="fw-bold mt-2">Who can see your job?</p>
                    <div className="my-4 d-flex justify-content-center" onInput={getData}>
                        <label className="border border-success rounded p-3 text-center w-50">
                            <input type="radio" className="float-end" name="visibility" value="anyone" />
                            <div><i className="fas fa-user mt-4"></i></div>
                            <h6 className="my-3">Anyone</h6>
                            <small className="fw-normal">Looking for someone relativelyFreelancers and agencies using Upwork and public search engines can find this job.</small>
                        </label>
                        <label className="border border-success rounded p-3 text-center w-50 mx-3">
                            <input type="radio" className="float-end" name="visibility" value="only upwork talent" />
                            <div className="w-50 mx-auto"><img className="bg-dark w-25 rounded-circle mt-4" src={upwork} /></div>
                            <h6 className="my-3">Only Upwork talent</h6>
                            <small className="fw-normal">Only Upwork users can find this job.</small>
                        </label>
                        <label className="border border-success rounded p-3 text-center w-50">
                            <input type="radio" className="float-end" name="visibility" value="invite only" />
                            <div><i className="fas fa-lock mt-4"></i></div>
                            <h6 className="my-3">Invite-only</h6>
                            <small className="fw-normal">Only freelancers and agencies you have invited can find this job.</small>
                        </label>
                    </div>
                </div>
                <div className="px-4 mt-3">
                    <p className="fw-bold mt-2">How many people do you need for this job?</p>
                    <div className="my-4 d-flex" onInput={getData}>
                        <label className="border border-success rounded p-3 text-center w-25">
                            <input type="radio" className="float-end" name="freelancerNeed" value="one freelancer" />
                            <div><i className="fas fa-user mt-4"></i></div>
                            <h6 className="my-3">One freelancer</h6>
                        </label>
                        <label className="border border-success rounded p-3 text-center ms-3 w-25">
                            <input type="radio" className="float-end" name="freelancerNeed" value="more than one freelancer" />
                            <div><i className="fas fa-user-friends mt-4"></i></div>
                            <h6 className="my-3">More than one freelancer</h6>
                        </label>
                    </div>
                </div>
            </section>

            <section className="bg-white border rounded mt-3">
                <div className="ps-4 my-3">
                    <Link className="btn border text-success me-4 px-5" to="/post-job/expertise">Back</Link>
                    <Link className="btn bg-upwork px-5" to="/post-job/budget" onClick={addData}>Next</Link>
                </div>
            </section>
        </>
    )
}
