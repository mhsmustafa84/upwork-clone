/* eslint-disable */
import React from 'react'

export default function Question() {
    return (
        <div>
            <div className="row">
                <div className="col-1 fw-bolder text-secondary fs-1 text-center">Q</div>
                <div className="col-11">
                    <div className="row fs-3 ms-4 my-3">What is development and IT?</div>
                    <div className="row fs-md-5 fs-6 ms-4 mb-3 text-secondary">
                        <span>Development refers to the creation and management of business
                        technology, including computer applications, financial systems,
            and </span>
                        <span className="collapse mb-4" id="answer1">logistical solutions that help an organization run its operational processes. Information technology (IT) is the use of computers and computer networks to store, retrieve, transmit, and maintain data and information.
          </span>
                    </div>
                    <a data-bs-toggle="collapse" data-bs-target="#answer1" aria-expanded="false" aria-controls="collapseExample" className="text-decoration-none fs-md-5 fs-6 ms-5">
                        Read More <i className="fas fa-chevron-down " />
                    </a>
                    <div className="row">
                        <hr className="text-secondary my-3 mx-5 w-75" id="hr-line-CN" />
                    </div>
                </div>
            </div>
        </div>
    )
}
