import React from 'react'
import { Link } from 'react-router-dom'

export default function PostJobGetStarted() {
    return (
        <section className=" bg-white border rounded mt-3 pt-4">
            <div className="border-bottom ps-4 pb-3">
                <h4>Getting started</h4>
            </div>
            <div className="ps-4 my-3">
                <p className="fw-bold">What would you like to do?</p>
                <div>
                    <div>
                        <label>
                            <input type="radio" className="me-2" name="new-prev-job" value="new" />
                            Create a new job post
                        </label>
                        <div className=" w-75 my-4 ms-4 d-flex justify-content-between">
                            <label className="border border-success rounded p-3 text-center">
                                <input type="radio" className="float-end" name="short-long-job" value="short" />
                                <div><i className="far fa-clock"></i></div>
                                <h5 className="my-3">Short-term or part-time work</h5>
                                <div>Less than 30 hrs/week</div>
                                <div>Less than 3 months</div>
                            </label>
                            <label className="border border-success rounded p-3 text-center">
                                <input type="radio" className="float-end" name="short-long-job" value="long" />
                                <div><i className="far fa-calendar-plus"></i></div>
                                <h5 className="my-3">Designated, longer term work</h5>
                                <div>More than 30 hrs/week</div>
                                <div>3+ months</div>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label>
                            <input type="radio" className="me-2" name="new-prev-job" value="prev" />
                            Reuse a previous job post
                        </label>
                    </div>
                </div>
            </div>
            <div className="ps-4 my-3">
                <Link className="btn border text-success me-4 px-5 fw-bold" to="/home">Cancel</Link>
                <button className="btn btn-secondary px-5 disabled">Continue</button>
            </div>
        </section>
    )
}
