import React from 'react'
import FindSkillsList from '../FindSkillsList/FindSkillsList'

export default function FindSkills() {
  return (
    <div>
      <div className="row mx-md-5 mx-1 my-5 py-md-5">
        <div className="row mb-4" id="find-skills-ID">
          <div className="col-md-2 col-3">
            <hr className="w-100 mb-0 mt-3" id="find-skills-text-line-ID" />
          </div>
        </div>
        <div className="row mb-3" id="find-skills-header-ID">
          <h1 className="fw-bolder">Find any skill or service to achieve your goals</h1>
        </div>
        <div className="row small">
          <div className="row my-3" id="find-skills-sub-header-ID">
            <h4 className="fw-bold">Development &amp; IT Roles</h4>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-5">
            <FindSkillsList />
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-5">
            <FindSkillsList />
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-5">
            <FindSkillsList />
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-5">
            <FindSkillsList />
          </div>
          <div className="row my-3" id="find-skills-sub-header-ID">
            <h4 className="fw-bold">Cross-functional roles</h4>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-5">
            <FindSkillsList />
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-5">
            <FindSkillsList />
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-5">
            <FindSkillsList />
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-5">
            <FindSkillsList />
          </div>
          <div className="row my-3" id="find-skills-sub-header-ID">
            <h4 className="fw-bold">Projects</h4>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-5">
            <FindSkillsList />
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-5">
            <FindSkillsList />
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-5">
            <FindSkillsList />
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-5">
            <FindSkillsList />
          </div>
        </div>
      </div>

    </div>
  )
}
