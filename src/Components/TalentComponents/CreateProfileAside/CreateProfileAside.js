import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateProfileAside({ btns }) {
    return (
        <aside>
            <ul>
                <li className="py-1 my-2">
                    <button className="btn w-100" disabled={btns.category}>
                        <Link
                            to="/create-profile/category"
                            className={`d-flex justify-content-between ${!btns.category && "border-start border-4 border-success"}`}
                        >
                            <span className="text-dark"><i className="fas fa-list-alt mx-4"></i>Category</span>
                            <i className={`fas fa-check-circle ${btns.category && "text-dark"}`}></i>
                        </Link>
                    </button>
                </li>
                <li className="py-1 my-2">
                    <button className="btn w-100" disabled={btns.expertiseLevel}>
                        <Link
                            to="/create-profile/expertise-level"
                            className={`d-flex justify-content-between ${!btns.expertiseLevel && "border-start border-4 border-success"}`}
                        >
                            <span className="text-dark"><i className="fas fa-signal mx-4"></i>Expertise Level</span>
                            <i className={`fas fa-check-circle ${btns.expertiseLevel && "text-dark"}`}></i>
                        </Link>
                    </button>
                </li>
                <li className="py-1 my-2">
                    <button className="btn w-100" disabled={btns.eduAndEmp}>
                        <Link
                            to="/create-profile/education-and-employment"
                            className={`d-flex justify-content-between ${!btns.eduAndEmp && "border-start border-4 border-success"}`}
                        >
                            <span className="text-dark"><i className="fas fa-school mx-4"></i>Edu & Emp</span>
                            <i className={`fas fa-check-circle ${btns.eduAndEmp && "text-dark"}`}></i>
                        </Link>
                    </button>
                </li>
                <li className="py-1 my-2">
                    <button className="btn w-100" disabled={btns.language}>
                        <Link
                            to="/create-profile/language"
                            className={`d-flex justify-content-between ${!btns.language && "border-start border-4 border-success"}`}
                        >
                            <span className="text-dark"><i className="fas fa-language mx-4"></i>Language</span>
                            <i className={`fas fa-check-circle ${btns.language && "text-dark"}`}></i>
                        </Link>
                    </button>
                </li>
                <li className="py-1 my-2">
                    <button className="btn w-100" disabled={btns.hourlyRate}>
                        <Link
                            to="/create-profile/hourly-rate"
                            className={`d-flex justify-content-between ${!btns.hourlyRate && "border-start border-4 border-success"}`}
                        >
                            <span className="text-dark"><i className="fas fa-search-dollar mx-4"></i>Hourly Rate</span>
                            <i className={`fas fa-check-circle ${btns.hourlyRate && "text-dark"}`}></i>
                        </Link>
                    </button>
                </li>
                <li className="py-1 my-2">
                    <button className="btn w-100" disabled={btns.titleAndOverview}>
                        <Link
                            to="/create-profile/title-and-overview"
                            className={`d-flex justify-content-between ${!btns.titleAndOverview && "border-start border-4 border-success"}`}
                        >
                            <span className="text-dark"><i className="fas fa-id-card mx-4"></i>Title & Overview</span>
                            <i className={`fas fa-check-circle ${btns.titleAndOverview && "text-dark"}`}></i>
                        </Link>
                    </button>
                </li>
                <li className="py-1 my-2">
                    <button className="btn w-100" disabled={btns.profilePhoto}>
                        <Link
                            to="/create-profile/profile-photo"
                            className={`d-flex justify-content-between ${!btns.profilePhoto && "border-start border-4 border-success"}`}
                        >
                            <span className="text-dark"><i className="fas fas fa-camera mx-4"></i>Profile Photo</span>
                            <i className={`fas fa-check-circle ${btns.profilePhoto && "text-dark"}`}></i>
                        </Link>
                    </button>
                </li>
                <li className="py-1 my-2">
                    <button className="btn w-100" disabled={btns.location}>
                        <Link
                            to="/create-profile/location"
                            className={`d-flex justify-content-between ${!btns.location && "border-start border-4 border-success"}`}
                        >
                            <span className="text-dark"><i className="fas fa-map-marker-alt mx-4"></i>Location</span>
                            <i className={`fas fa-check-circle ${btns.location && "text-dark"}`}></i>
                        </Link>
                    </button>
                </li>
                <li className="py-1 my-2">
                    <button className="btn w-100" disabled={btns.PhoneNumber}>
                        <Link
                            to="/create-profile/phone-number"
                            className={`d-flex justify-content-between ${!btns.PhoneNumber && "border-start border-4 border-success"}`}
                        >
                            <span className="text-dark"><i className="fas fa-phone-alt mx-4"></i>Phone Number</span>
                            <i className={`fas fa-check-circle ${btns.PhoneNumber && "text-dark"}`}></i>
                        </Link>
                    </button>
                </li>
            </ul>
        </aside>
    )
}
