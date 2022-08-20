/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

export default function JobPostsHeader() {
  return (
    <div>
      <div className="row px-5 mt-5">
        <nav aria-label="breadcrumb" className="col-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <h2>My Jobs</h2>
            </li>
          </ol>
        </nav>

        <div className="col-6"></div>
        <div className="col-2">
          <Link to="/post-job" className="btn bg-upwork">
            Post a New Job
            </Link>
        </div>
      </div>
    </div>
  )
}
