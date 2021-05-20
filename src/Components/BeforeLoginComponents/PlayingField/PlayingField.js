/* eslint-disable */
import React from 'react'
import './PlayingField.css'
import talentHeaderPlayingFieldDevIT from '../../../assets/img/talent-header-playing-field-Dev-IT.svg'

export default function PlayingField() {
  return (
    <div>
      <div className="row mx-md-5 mx-1 my-5 py-5 px-5 bg-light rounded" id="playing-field-section-ID">
        <div className="col-lg-6 col-12 px-5">
          <div className="mb-3" id="playing-field-header-ID">
            <h4 className="fw-bold">Want to change your playing field?</h4>
          </div>
          <div className="row mb-3 mx-1 fs-6 text-secondary" id="playing-field-paragraph-ID">
            Our Enterprise Suite empowers everyone across your organization to
            work strategically with independent talent.
    </div>
          <div className="d-flex fs-5 mx-1">
            <a href="#" className="text-decoration-none">
              Schedule a Call <i className="fas fa-arrow-right" /></a>
          </div>
        </div>
        <div className="col-md-6 position-relative">
          <img className="position-absolute w-lg-100 " id="playing-field-ID" src={talentHeaderPlayingFieldDevIT} alt='' />
        </div>
      </div>

    </div>
  )
}
