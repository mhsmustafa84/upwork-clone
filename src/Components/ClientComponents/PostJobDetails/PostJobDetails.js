import React from 'react'
import './PostJobDetails.css'
export default function PostJobDetails() {
    return (
        <>
            <section className=" bg-white border rounded mt-3 pt-4">
                <div className="border-bottom ps-4">
                    <h4>Details</h4>
                    <p>Step 3 of 7</p>
                </div>
                <div className="px-4 mt-3">
                    <p className="fw-bold mt-2">What type of project do you have?</p>
                    <div className="my-4 d-flex justify-content-between">
                        <label className="border border-success rounded p-3 text-center">
                            <input type="radio" className="float-end" name="short-long-job" value="short" />
                            <div><i className="far fa-clock"></i></div>
                            <h5 className="my-3">One-time project</h5>
                            <div>Find the right skills for a short-term need.Less than 30 hrs/week</div>
                        </label>
                        <label className="border border-success rounded p-3 text-center mx-3">
                            <input type="radio" className="float-end" name="short-long-job" value="long" />
                            <div><i className="far fa-calendar-plus"></i></div>
                            <h5 className="my-3">Ongoing project</h5>
                            <div>Find a skilled resource for an extended engagement.</div>
                        </label>
                        <label className="border border-success rounded p-3 text-center">
                            <input type="radio" className="float-end" name="short-long-job" value="long" />
                            <div><i className="far fa-calendar-plus"></i></div>
                            <h5 className="my-3">Complex project</h5>
                            <div>Find specialized experts and agencies for large projects.</div>
                        </label>
                    </div>
                </div>
            </section>

            <section className="bg-white border rounded mt-3 pt-4">
                <div className="ps-4 mt-3">
                    <p className="fw-bold mt-2">Screening Questions (optional)</p>
                </div>

                <div className="ps-4 my-3 pt-4 pb-3 pt-3 border-top">
                    <button className="btn border text-success me-4 px-5">Back</button>
                    <button className="btn btn-secondary px-5 disabled">Next</button>
                </div>
            </section>
        </>
    )
}
