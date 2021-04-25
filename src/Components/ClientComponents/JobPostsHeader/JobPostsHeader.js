/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function JobPostsHeader() {
  return (
    <div>
      <div className="row py-5">
        <nav aria-label="breadcrumb" className="col-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#" className="text-success">MyJobs</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Jop posting
              </li>
          </ol>
        </nav>

        <div className="col-7"></div>
        <div className="col-2">
          <button type="button" className="btn btn-success">
            Post a New Job
            </button>
        </div>
      </div>
    </div>
  )
}
