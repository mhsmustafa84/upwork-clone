/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import createDocument, { updateJob } from '../../../Network/Network';
import firebaseApp from './../../../firebase';

export default function PostJobGetStarted(props) {

    let [job, setJob] = useState({ isNewPost: true, jobDuration: "" });

    const createJob = () => {
        props.isStart();
        createDocument("job", { authID: firebaseApp.auth().currentUser.uid });
    }

    const getData = e => {
        const val = e.target.value;
        const name = e.target.name;
        switch (name) {
            case "new-prev-job":
                val === "new post" ? job.isNewPost = true : job = { isNewPost: false, jobDuration: "" }
                setJob({ ...job, isNewPost: job.isNewPost });
                break;
            case "short-long-job":
                job.jobDuration = val;
                setJob({ ...job, jobDuration: job.jobDuration });
                break;
            default:
                break;
        }
    }

    const addData = () => {
        console.log(job);
        const id = localStorage.getItem("docID");
        console.log(id);
        updateJob({ jobDuration: job.jobDuration }, id);
    }


    return (
        <section className=" bg-white border rounded mt-3 pt-4">
            <div className="border-bottom ps-4 pb-3">
                <h4>Getting started</h4>
            </div>
            {
                !props.start
                    ?
                    <div className="ps-4 my-3">
                        <button className="btn bg-upwork" onClick={createJob}>Get Start</button>
                    </div>
                    :
                    <>
                        <div className="ps-4 my-3">
                            <p className="fw-bold">What would you like to do?</p>
                            <div onInput={getData}>
                                <label>
                                    <input type="radio" className="me-2" name="new-prev-job" value="new post" />
                            Create a new job post
                    </label>
                                {
                                    job.isNewPost ?
                                        <div className=" w-75 my-4 ms-4 d-flex justify-content-between">
                                            <label className="border border-success rounded p-3 text-center">
                                                <input type="radio" className="float-end" name="short-long-job" value="short term" />
                                                <div><i className="far fa-clock"></i></div>
                                                <h5 className="my-3">Short-term or part-time work</h5>
                                                <div>Less than 30 hrs/week</div>
                                                <div>Less than 3 months</div>
                                            </label>
                                            <label className="border border-success rounded p-3 text-center">
                                                <input type="radio" className="float-end" name="short-long-job" value="long term" />
                                                <div><i className="far fa-calendar-plus"></i></div>
                                                <h5 className="my-3">Designated, longer term work</h5>
                                                <div>More than 30 hrs/week</div>
                                                <div>3+ months</div>
                                            </label>
                                        </div>
                                        : <div className="my-4"></div>
                                }
                                <label>
                                    <input type="radio" className="me-2" name="new-prev-job" value="prev post" />
                            Reuse a previous job post
                    </label>
                            </div>
                        </div>
                        <div className="ps-4 my-3">
                            <Link className="btn border text-success me-4 px-5 fw-bold" to="/home">Cancel</Link>
                            <Link className="btn bg-upwork px-5" to="/post-job/title" onClick={addData}>Continue</Link>
                        </div>
                    </>
            }



        </section>
    )
}
