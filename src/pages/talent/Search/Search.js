/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../../../Context/SearchContext";
import SearchBarJobsTalent from "../../../components/talent/SearchBarJobsTalent/SearchBarJobsTalent";
import { useDispatch, useSelector } from "react-redux";
import { talentDataAction } from "../../../Store/actions/talentData";
import { updateUserData } from "../../../Network/Network";
import { jobsDataAction } from "../../../Store/actions/jobsData";
import JobCard from "../../../components/talent/SectionCenterTalentHome/JobCard";
import StarsRating from "../../../components/shared/StarsRating/StarsRating";
import SearchIcon from "../../../components/shared/SearchIcon";


export default function Search(props) {

    const user = useSelector((state) => state.talentData);
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(jobsDataAction());
        dispatch(talentDataAction());
    }, []);
    const [searchData, setsearchData] = useState([]);
    const [filterSearch, setfilterSearch] = useState([]);
    const { searchList, itemSearchList } = useContext(SearchContext);
    const [filtered, setfiltered] = useState(false);
    const [isliked, setisliked] = useState(false);
    useEffect(() => {
        dispatch(talentDataAction());
    }, [isliked, searchList]);

    useEffect(() => {
        setsearchData([...searchList]);
        dispatch(jobsDataAction());
    }, [searchList]);

    const handleLevel = (e) => {
        let val = e.target.checked;
        let name = e.target.name;
        switch (name) {
            case "entry level":
                setfilterSearch(
                    searchData.filter(
                        (item) => item.jobExperienceLevel === name && val && item
                    )
                );
                setfiltered(val);
                break;
            case "intermediate":
                setfilterSearch(
                    searchData.filter(
                        (item) => item.jobExperienceLevel === name && val && item
                    )
                );
                setfiltered(val);
                break;
            case "expert":
                setfilterSearch(
                    searchData.filter(
                        (item) => item.jobExperienceLevel === name && val && item
                    )
                );
                setfiltered(val);
                break;
            default:
                break;
        }
    };
    const star = (clientReview, index) => {
        return <StarsRating clientReview={clientReview} index={index} />
    }
    const saveJob = (e, id) => {
        setisliked(!isliked);
        if (e.target.className === "far fa-heart") {
            updateUserData("talent", { savedJobs: [...user?.savedJobs, id] });
            e.target.className = "fas fa-heart text-upwork";
        } else {
            user?.savedJobs?.forEach((item, index) => {
                if (item === id) {
                    user?.savedJobs?.splice(index, 1);
                    updateUserData("talent", { savedJobs: [...user?.savedJobs] });
                    e.target.className = "far fa-heart";
                }
            });
        }
    };

    return (
        <div className="container-md container-fluid-sm my-lg-4">
            <div className="row">
                <div className="col">

                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">
                        "Experiencelevel"
                    </h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            name="entry level"
                            defaultValue
                            id="flexCheckDefault"
                            onChange={handleLevel}
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            "EntryLevel"
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            name="intermediate"
                            defaultValue
                            id="flexCheckDefault"
                            onChange={handleLevel}
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            "Intermediate"
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            name="expert"
                            defaultValue
                            id="flexCheckDefault"
                            onChange={handleLevel}
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            "Expert"
                        </label>
                    </div>
                    <hr />
                </div>
                <div className="col d-none">
                    <h5 className="mb-lg-4 display-inline-block">FilterBy</h5>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-2 fw-bold">
                        "Category"
                    </h6>
                    <ul
                        className="list-group sidebar-homebage-ul mb-lg-3 "
                        style={{ fontSize: "0.9em" }}
                    >
                        <li
                            className="list-group-item sidebar-homebage-ul-li"
                            aria-current="true"
                        >
                            <a
                                href="#"
                                className=" list-group-item-action advanced-search-link"
                                aria-current="true"
                            >
                                "EcommerceDevelopment"
                            </a>{" "}
                        </li>
                        <li
                            className="list-group-item sidebar-homebage-ul-li"
                            aria-current="true"
                        >
                            <a
                                href="#"
                                className=" list-group-item-action advanced-search-link"
                                aria-current="true"
                            >
                                "EcommerceDevelopment"
                            </a>{" "}
                        </li>
                    </ul>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-2 fw-bold">
                        Freelancers needed
                    </h6>
                    <div>
                        <div className="form-check py-2 my-0">
                            <input
                                className="form-check-input btn-outline-success"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                "All"
                            </label>
                        </div>
                        <div className="form-check py-2 my-0">
                            <input
                                className="form-check-input btn-outline-success"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                "Singlefreelancer"
                            </label>
                        </div>
                        <div className="form-check py-2 my-0">
                            <input
                                className="form-check-input btn-outline-success"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                "Multiplefreelancers"
                            </label>
                        </div>
                    </div>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">
                        "Experiencelevel"
                    </h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            name="entry level"
                            defaultValue
                            id="flexCheckDefault"
                            onChange={handleLevel}
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            "EntryLevel"
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            name="intermediate"
                            defaultValue
                            id="flexCheckDefault"
                            onChange={handleLevel}
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            "Intermediate"
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            name="expert"
                            defaultValue
                            id="flexCheckDefault"
                            onChange={handleLevel}
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            "Expert"
                        </label>
                    </div>
                    <hr />

                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">
                        "JobType"
                    </h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            "Hourly"
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            "Fixedprice"
                        </label>
                    </div>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">
                        "NumberofProposals"
                    </h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            "Lessthan5"
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            "5to10"
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            "10to15"
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            "15to20"
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            "20to50"
                        </label>
                    </div>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">
                        "ClientInfo"
                    </h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            "MyPreviousClients"
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            "PaymentVerified"
                        </label>
                    </div>
                    <hr />

                    <h6 className="mb-lg-2 display-inline-block mt-lg-2 fw-bold">
                        "ClientLocation"
                    </h6>
                    <div className="input-group rounded-3">
                        <select
                            className="form-select border border-secondary text-dark  btn-outline-light "
                            id="inputGroupSelect01"
                        >
                            <option selected>SelectClientLocation</option>
                            <option value={1}> "Egypt</option>
                            <option value={2}> "USA</option>
                        </select>
                    </div>

                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">
                        "ProjectLength"
                    </h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            "Lessthan1month"
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            "1to3months"
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            "3to6months"
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            "Morethan6months"
                        </label>
                    </div>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">
                        Hours Per Week
                    </h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            "Lessthan30hrsweek"
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            "Morethan30hrsweek"
                        </label>
                    </div>
                </div>
                <div className="col-lg-10 col-xs-12">
                    <div>
                        <div>
                            <ul
                                id="list-homepage"
                                className="navbar navbar-expand list-group-horizontal bg-white boder border-1 my-0"
                            >
                                <li
                                    className="list-group-item sidebar-homebage-ul-li bg-white boder border-0"
                                    aria-current="true"
                                >
                                    <Link to={`${process.env.PUBLIC_URL}/Search`}>
                                        <a
                                            href="#"
                                            className=" list-group-item-action saved-homebage-ul-li-aa active activesidesaved bg-white"
                                            aria-current="true"
                                        >
                                            "SEARCH"
                                        </a>
                                    </Link>
                                </li>
                                <li
                                    className="list-group-item sidebar-homebage-ul-li bg-white boder border-0"
                                    aria-current="true"
                                >
                                    <Link to={`${process.env.PUBLIC_URL}/saved-jobs`}>
                                        <a
                                            href="#"
                                            className=" list-group-item-action saved-homebage-ul-li-aa bg-white"
                                            aria-current="true"
                                        >
                                            "SAVEDJOBS"({user?.savedJobs?.length})
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="list-group-item py-lg-4">
                            <SearchBarJobsTalent />
                        </div>
                    </div>
                    {searchData.length === 0 && itemSearchList !== "" ? (
                        <div className="col-12 bg-white">
                            <h3
                                className="fw-bold text-center py-2 pt-5 "
                                style={{ color: "#124C82" }}
                            >
                                There are no results that match your search
                            </h3>

                            <h6 className="text-center " style={{ color: "#124C82" }}>
                                Please try adjusting your search keywords or filters
                            </h6>

                            <div className='mx-auto d-block'>
                                <SearchIcon />
                            </div>
                        </div>
                    ) : null}
                    {(filtered ? filterSearch : searchData)?.map((item) => (
                        <div>
                            {/* <div className="list-group-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-9 pt-lg-2">
                                        <Link
                                            to={{
                                                pathname: `/job/${item.jobID}`,
                                                state: `${item.jobID}`,
                                            }}
                                            className="job-title-link fw-bold"
                                        >
                                            {item?.jobTitle}
                                        </Link>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="btn-group float-sm-end px-lg-1">
                                            <button
                                                type="button"
                                                className="btn btn-light dropdown-toggle border border-1 rounded-circle collapsed"
                                                data-toggle="collapse"
                                                data-target="#collapse"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                            >
                                                <i
                                                    onClick={(e) => saveJob(e, item.jobID)}
                                                    className={`${user?.savedJobs?.includes(item.jobID)
                                                        ? "fas fa-heart text-upwork"
                                                        : "far fa-heart"
                                                        }`}
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                        <div className="btn-group float-sm-end  px-lg-1">
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        RSS
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Atom
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <p style={{ fontSize: "0.9em" }}>
                                    <span className="text-muted">
                                        <span className="fw-bold" id="contract-type">
                                            {item?.jobPaymentType}
                                        </span>
                                        <span> - </span>
                                        <span id="experience-level">
                                            {item?.jobExperienceLevel}
                                        </span>
                                        <span> - </span>
                                        <span>Est. Budget: </span>
                                        <span id="client-budget">{item?.jobBudget}</span> - posted
                                        <span id="posting-time"> 4 Hours ago</span>
                                    </span>
                                </p>
                                {item?.skills?.map((skill, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        className="btn btn-secondary btn-sm rounded-pill skills"
                                    >
                                        {skill}
                                    </button>
                                ))}

                                <p style={{ fontSize: "0.9em" }} className="my-lg-1">
                                    <span className="text-muted">
                                        <span>Proposals: </span>
                                        <span className="fw-bold ">Less than </span>
                                        <span className="fw-bold " id="proposals-numbers">
                                            5
                                        </span>
                                    </span>
                                </p>
                                <p style={{ fontSize: "0.85em" }} className="my-lg-1 mb-lg-2">
                                    <span className="fw-bold" style={{ color: "#14bff4" }}>
                                        <i className="fas fa-check-circle primary me-1" />
                                        Payment verified
                                    </span>
                                    <span className="text-muted">
                                        <span className="mx-2">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </span>
                                        <span className="fw-bold "> $0 </span>
                                        <span> spent </span>
                                        <span className="fw-bold ">
                                            <i className="fas fa-map-marker-alt ms-2" /> United States
                                        </span>
                                    </span>
                                </p>
                            </div> */}

                            <JobCard item={item} saveJob={saveJob} user={user} star={star} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
