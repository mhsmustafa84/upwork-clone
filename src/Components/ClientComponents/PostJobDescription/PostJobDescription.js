/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { storage } from '../../../firebase';
import { updateJob } from '../../../Network/Network';
import './PostJobDescription.css'
export default function PostJobDescription() {

    let [job, setJob] = useState({ jobDecription: "", jobImages: [] });

    const getData = e => {
        const val = e.target.value;
        const name = e.target.name;
        const files = e.target.files;
        switch (name) {
            case "decription":
                job.jobDecription = val;
                setJob({ ...job, jobDecription: job.jobDecription })
                break;
            case "images":
                if (files[0]) {
                    const upload = storage.ref(`jobImages/${files[0].name}`).put(files[0]);
                    upload.on(
                        "state_changed",
                        (snapshot) => { },
                        (err) => {
                            console.log(err);
                        },
                        () => {
                            storage.ref("jobImages")
                                .child(files[0].name)
                                .getDownloadURL()
                                .then(url => {
                                    job.jobImages.push(url);
                                    setJob({ ...job, jobImages: job.jobImages });
                                    console.log(job);
                                });
                        })
                }
                break;
            default:
                break;
        }
    }

    const addData = () => {
        setJob(job.jobDecription);
        console.log(job);
        const id = localStorage.getItem("docID");
        console.log(id);
        updateJob(job, id);
    }


    return (
        <section className=" bg-white border rounded mt-3 pt-4">
            <div className="border-bottom ps-4">
                <h4>Description</h4>
                <p>Step 2 of 7</p>
            </div>
            <div className="ps-4 mt-3">

                <p className="fw-bold mt-2">A good description includes:</p>
                <ul style={{ listStyle: "disc" }}>
                    <li>What the deliverable is</li>
                    <li>Type of freelancer or agency you're looking for</li>
                    <li>Anything unique about the project, team, or your company</li>
                </ul>
            </div>
            <div className="ps-4 pt-2 pe-4">
                <textarea className="form-control shadow-none" name="decription" rows="8" onInput={getData}></textarea>
                <span className="float-end">0/5000 characters (minimum 50)</span>
            </div>
            <div className="mx-4 mt-5 py-2 pb-4">
                <p className="fw-bold">Additional project files (optional)</p>
                <div className="d-flex mb-3">
                    {
                        job.jobImages &&
                        job.jobImages.map(url => {
                            return <div className="mx-2" style={{ maxWidth: "50px", maxHeight: "50px" }}>
                                <img className="w-100 h-100 rounded-circle" src={url} />
                            </div>
                        })
                    }
                </div>
                <div className="attachments-cn">
                    <p className="py-2 text-center mt-2">
                        <label for="file" className="upw-c-cn me-1" style={{ cursor: "pointer" }}>upload</label>
                        <input id="file" type="file" name="images" className="d-none" onInput={getData} />
                        project images
                    </p>
                </div>
                <p className="my-3">You may attach up to 5 files under <strong>100 MB</strong> each</p>
            </div>
            <div className="ps-4 my-3 pt-4 pb-3 pt-3 border-top">
                <Link className="btn border text-success me-4 px-5" to="/post-job/title">Back</Link>
                <Link className="btn bg-upwork px-5" to="/post-job/details" onClick={addData}>Next</Link>
            </div>
        </section>
    )
}
