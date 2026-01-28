/* eslint-disable */
import React from 'react'
import Question from '../Question/Question'

export default function Questions() {
    return (
        <div>
            <div className="row mx-lg-5 mx-1 my-5 py-md-5">
                <div className="col-xl-4 col-12">
                    <div className="row mb-4" id="questions-ID">
                        <div className="col-4">
                            <hr className="w-100 mb-0 mt-3" id="questions-text-line-ID" />
                        </div>
                    </div>
                    <div className="row mb-3" id="questions-header-ID">
                        <h1 className="fw-bolder">See how clients use Upwork</h1>
                    </div>
                </div>
                <div className="col-xl-7 col-12 shadow-sm pb-5">
                    <Question />
                    <Question />
                    <Question />
                    <Question />


                </div>
                <div className="row">
                    <div className="col-xl-4">
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className="d-flex-row fs-5 mx-1 ms-4 mt-4 mb-3 ">
                            Still have questions? <pre className="d-inline"> </pre>
                            <a href="#" className="text-decoration-none">
                                Read case study <i className="fas fa-arrow-right" /></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
