import React from 'react'
import { Link } from 'react-router-dom'
import './PostJobAside.css'

export default function PostJobAside() {



    return (
        <aside>
            <ul>
                <li className="border-start border-4 border-success py-1 my-3">
                    <Link to="/post-job/title" className="d-flex justify-content-between">
                        <span className="text-dark"><i className="fas fa-pencil-alt mx-4"></i>Title</span>
                        <i className="fas fa-check-circle"></i>
                    </Link>
                </li>
                <li className="border-start border-4 border-success py-1 my-3">
                    <Link to="/post-job/description" className="d-flex justify-content-between">
                        <span className="text-dark"><i className="fas fa-edit mx-4"></i>Description</span>
                        <i className="fas fa-check-circle"></i>
                    </Link>
                </li>
                <li className="border-start border-4 border-success py-1 my-3">
                    <Link to="/post-job/details" className="d-flex justify-content-between">
                        <span className="text-dark"><i className="fas fa-list-alt mx-4"></i>Details</span>
                        <i className="fas fa-check-circle"></i>
                    </Link>
                </li>
                <li className="border-start border-4 border-success py-1 my-3">
                    <Link to="/post-job/expertise" className="d-flex justify-content-between">
                        <span className="text-dark"><i className="fas fa-tools mx-4"></i>Expertise</span>
                        <i className="fas fa-check-circle"></i>
                    </Link>
                </li>
                <li className="border-start border-4 border-success py-1 my-3">
                    <Link to="/post-job/visibility" className="d-flex justify-content-between">
                        <span className="text-dark"><i className="fas fa-user-clock mx-4"></i>Visibility</span>
                        <i className="fas fa-check-circle"></i>
                    </Link>
                </li>
                <li className="border-start border-4 border-success py-1 my-3">
                    <Link to="/post-job/budget" className="d-flex justify-content-between">
                        <span className="text-dark"><i className="fas fa-search-dollar mx-4"></i>Budget</span>
                        <i className="fas fa-check-circle"></i>
                    </Link>
                </li>
                <li className="border-start border-4 border-success py-1 my-3">
                    <Link to="/post-job/review" className="d-flex justify-content-between">
                        <span className="text-dark"><i className="fas fa-check mx-4"></i>Review</span>
                        <i className="fas fa-check-circle"></i>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}
