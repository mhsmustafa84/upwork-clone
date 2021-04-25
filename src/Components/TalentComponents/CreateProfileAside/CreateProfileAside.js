import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateProfileAside() {
    return (
        <aside>
            <ul>
                <li className="border-start border-4 border-success py-1 my-3">
                    <Link to="/create-profile" className="d-flex justify-content-between">
                        <span className="text-dark"><i className="far fa-arrow-alt-circle-up mx-4"></i>Get Started</span>
                        <i className="fas fa-check-circle"></i>
                    </Link>
                </li>
                <li className="border-start border-4 border-success py-1 my-3">
                    <Link to="/create-profile/category" className="d-flex justify-content-between">
                        <span className="text-dark"><i className="fas fa-list-alt mx-4"></i>Category</span>
                        <i className="fas fa-check-circle"></i>
                    </Link>
                </li>
                <li className="border-start border-4 border-success py-1 my-3">
                    <Link to="/create-profile/expertise-level" className="d-flex justify-content-between">
                        <span className="text-dark"><i className="fas fa-signal mx-4"></i>Expertise Level</span>
                        <i className="fas fa-check-circle"></i>
                    </Link>
                </li>
                <li className="border-start border-4 border-success py-1 my-3">
                    <Link to="/create-profile/education-and-employment" className="d-flex justify-content-between">
                        <span className="text-dark"><i className="fas fa-school mx-4"></i>Edu & Emp</span>
                        <i className="fas fa-check-circle"></i>
                    </Link>
                </li>
                <li className="border-start border-4 border-success py-1 my-3">
                    <Link to="/create-profile/language" className="d-flex justify-content-between">
                        <span className="text-dark"><i className="fas fa-language mx-4"></i>Language</span>
                        <i className="fas fa-check-circle"></i>
                    </Link>
                </li>
                <li className="border-start border-4 border-success py-1 my-3">
                    <Link to="/create-profile/hourly-rate" className="d-flex justify-content-between">
                        <span className="text-dark"><i className="fas fa-search-dollar mx-4"></i>Hourly Rate</span>
                        <i className="fas fa-check-circle"></i>
                    </Link>
                </li>
                <li className="border-start border-4 border-success py-1 my-3">
                    <Link to="/create-profile/title-and-overview" className="d-flex justify-content-between">
                        <span className="text-dark"><i className="fas fa-id-card mx-4"></i>Title & Overview</span>
                        <i className="fas fa-check-circle"></i>
                    </Link>
                </li>
                <li className="border-start border-4 border-success py-1 my-3">
                    <Link to="/create-profile/profile-photo" className="d-flex justify-content-between">
                        <span className="text-dark"><i className="fas fas fa-camera mx-4"></i>Profile Photo</span>
                        <i className="fas fa-check-circle"></i>
                    </Link>
                </li>
                <li className="border-start border-4 border-success py-1 my-3">
                    <Link to="/create-profile/location" className="d-flex justify-content-between">
                        <span className="text-dark"><i className="fas fa-map-marker-alt mx-4"></i>Location</span>
                        <i className="fas fa-check-circle"></i>
                    </Link>
                </li>
                <li className="border-start border-4 border-success py-1 my-3">
                    <Link to="/create-profile/phone-number" className="d-flex justify-content-between">
                        <span className="text-dark"><i className="fas fa-phone-alt mx-4"></i>Phone Number</span>
                        <i className="fas fa-check-circle"></i>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}
