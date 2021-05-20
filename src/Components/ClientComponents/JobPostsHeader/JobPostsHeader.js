/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

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
          <Link  to="/post-job" className="btn bg-upwork">
            Post a New Job
            </Link>
        </div>
      </div>
    </div>
  )
}
