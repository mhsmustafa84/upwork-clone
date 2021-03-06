/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { fbAuth } from "../../../firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { talentDataAction } from "../../../Store/actions/talentData";
import img from "../../../assets/Img/icon-user.svg";


export default function NavLargScreen() {

    const { pathname } = useLocation();

    let navigate = useNavigate();
    const user = useSelector(state => state.talentData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(talentDataAction());
    }, []);


    const logout = () => {
        fbAuth.auth.signOut()
            .then((res) => {
                console.log(res);
                navigate("/login");
                window.location.reload();
                localStorage.removeItem('userType');
            }).catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <>
            <div className="navbar-expand" id="navbarNav-id">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item hov-cn ">
                        <NavLink
                            className={
                                `nav-link
                ${pathname === "/saved-jobs" || pathname === "/proposals" ? "active" : ""}`
                            }
                            to="/find-work"
                        >
                            "FindWork"
                        </NavLink>
                        <ul className={`dropdown-menu findWork-cn`} style={{ marginTop: "-8px" }}>
                            <div className="nav-dd-cn"></div>
                            <li>
                                <Link className={`dropdown-item  `} to="/find-work">
                                    "FindWork"
                                </Link>
                            </li>
                            <li>
                                <Link className={`dropdown-item  `} to="/saved-jobs">
                                    "Saved Jobs"
                                </Link>
                            </li>
                            <li>
                                <Link className={`dropdown-item  `} to="/proposals">
                                    "Proposals"
                                </Link>
                            </li>
                            <li>
                                <Link className={`dropdown-item  `} to={`/profile/${fbAuth.auth.currentUser?.uid}`}>
                                    "Profile"
                                </Link>
                            </li>
                            {/* <li>
                <Link className="dropdown-item" to="/my-stats">
                  My Stats
                </Link>
              </li> */}
                        </ul>
                    </li>
                    <li className="nav-item hov-cn mx-3">
                        <NavLink
                            className={
                                `nav-link
                
                ${pathname === "/all-contract" || pathname === "/offers" ? "active" : ""}`
                            }
                            to="/my-jobs"
                        >
                            "My Jobs"
                        </NavLink>
                        <ul className={`dropdown-menu myJobs-cn`} style={{ marginTop: "-8px" }}>
                            <div className="nav-dd-cn"></div>
                            <li>
                                <Link className={`dropdown-item  `} to="/my-jobs">
                                    "My Jobs"
                                </Link>
                            </li>
                            <li>
                                <Link className={`dropdown-item  `} to="/all-contract">
                                    "All Contracts"
                                </Link>
                            </li>
                            <li>
                                <Link className={`dropdown-item  `} to="/offers">
                                    "Offerss"
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item hov-cn">
                        <NavLink className={`nav-link reports-cn `} to="/overview">
                            "Reports"
                        </NavLink>
                        <ul className={`dropdown-menu Reports-cn`} style={{ marginTop: "-8px" }}>
                            <div className="nav-dd-cn"></div>
                            <li>
                                <Link className={`dropdown-item  `} to="/overview">
                                    "Overview"
                                </Link>
                            </li>
                            {/* <li>
                                <Link className={`dropdown-item  `} to="/my-reports">
                                    "My Reports"
                                </Link>
                            </li> */}
                            <li>
                                <Link className={`dropdown-item  `} to="/life-time-billing">
                                    "Lifetime Billings by Client"
                                </Link>
                            </li>
                            {/* <li>
                                <Link className={`dropdown-item  `} to="/connects-history">
                                    "Connects History"
                                </Link>
                            </li> */}
                            {/* <li>
                                <Link className={`dropdown-item  `} to="/transaction-history">
                                    "Transaction History"
                                </Link>
                            </li> */}
                            {/* <li><a className="dropdown-item" href="#">Certificate of Earnings</a></li> */}
                        </ul>
                    </li>
                    {/* <li className="nav-item me-5">
                        <NavLink className={`nav-link  `} to="/messages">
                            "Messages"
                        </NavLink>
                    </li> */}
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fas fa-question fs-5"></i>
                        </a>
                    </li> */}
                    <li className="nav-item ms-5 me-3">
                        <NavLink className="nav-link" to="/messages">
                            <i
                                className="far fa-paper-plane fs-5"
                                style={{ transform: "scaleX(-1)" }}
                            ></i>
                        </NavLink>
                    </li>
                    <li className="nav-item me-2">
                        <NavLink to="/notifications" className="nav-link">
                            <i className="far fa-bell fs-5"></i>
                        </NavLink>
                    </li>
                    <li className="dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img style={{ height: "40px", width: "40px" }} className="rounded-circle bg-white" src={user.profilePhoto ? user.profilePhoto : img} alt="" />
                        </a>
                        <ul
                            id="acc-id"
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <div className="nav-dd-acc-cn"></div>
                            <li>
                                <NavLink className={`dropdown-item px-4`} to="/find-work">
                                    <div className="d-flex align-items-center">
                                        <span style={{ marginLeft: "-5px" }}>
                                            <img style={{ height: "30px", width: "30px" }} className="rounded-circle bg-white" src={user.profilePhoto ? user.profilePhoto : img} alt="" />
                                        </span>
                                        <div className="acc-cn ms-2">
                                            <p className={``} >{user?.firstName + " " + user?.lastName}</p>
                                            <p className={``} >Freelancer</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink
                                    className={`dropdown-item px-4 mb-1`}
                                    to="/home"
                                >
                                    <div className="d-flex align-items-center">
                                        <span style={{ marginLeft: "-5px" }}>
                                            <i className={`fa fa-user-circle fs-3`}></i>
                                        </span>
                                        <div className="acc-cn ms-2">
                                            <p className={``} >Name</p>
                                            <p className={``} >Client</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <Link className={`dropdown-item px-4 `} to="settings">
                                    <span>
                                        <i className={`fa fa-cog `}></i>
                                    </span>
                                    <span className="ps-2">Settings</span>
                                </Link>
                            </li> */}
                            <li>
                                <button className={`dropdown-item px-4 `} onClick={logout}>
                                    <span>
                                        <i className={`fas fa-sign-out-alt `}></i>
                                    </span>
                                    <span className="ps-2">Log Out</span>
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
}
