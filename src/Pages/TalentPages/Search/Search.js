import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import SearchBarJobsTalent from "../../../Components/TalentComponents/SearchBarJobsTalent/SearchBarJobsTalent";
// import ReviewProposalsCard from "../../../Components/ClientComponents/ReviewProposalsCard/ReviewProposalsCard";
import SectionCenterTalentHome from "../../../Components/TalentComponents/SectionCenterTalentHome/SectionCenterTalentHome";

export default function Search() {
    const { push } = useHistory();

    const clickHandler = () => {
        push("/job/");
    }


    return (
        <div className="container-md container-fluid-sm my-lg-4">
            <div className="row">
                <div className="col d-none d-lg-block">
                    <h5 className="mb-lg-4 display-inline-block">Filter By</h5>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-2 fw-bold">Category</h6>
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
                                Ecommerce Development
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
                                Ecommerce Development
          </a>{" "}
                        </li>
                    </ul>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-2 fw-bold">Freelancers needed</h6>
                    <div>
                        <div className="form-check py-2 my-0">
                            <input
                                className="form-check-input btn-outline-success"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                All
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
                                Single freelancer
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
                                Multiple freelancers
                </label>
                        </div>
                    </div>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">Experience level</h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Entry Level
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
                            Intermediate
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
                            Expert
                </label>
                    </div>
                    <hr />

                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">Job Type</h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Hourly
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
                            Fixed-price
                </label>
                    </div>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">Number of Proposals</h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Less than 5
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
                            5 to 10
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
                            10 to 15
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
                            15 to 20
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
                            20 to 50
                </label>
                    </div>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">Client Info</h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            My Previous Clients
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
                            Payment Verified
                </label>
                    </div>
                    <hr />

                    <h6 className="mb-lg-2 display-inline-block mt-lg-2 fw-bold">Client Location</h6>
                    <div className="input-group rounded-3">
                        <select
                            className="form-select border border-secondary text-dark  btn-outline-light "
                            id="inputGroupSelect01"
                        >
                            <option selected>Select Client Location</option>
                            <option value={1}> Egypt</option>
                            <option value={2}> USA</option>
                        </select>
                    </div>
                
                <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">Project Length</h6>
                <div className="form-check py-2 my-0">
                    <input
                        className="form-check-input btn-outline-success"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Less than 1 month
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
                        1 to 3 months
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
                        3 to 6 months
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
                        More than 6 months
                </label>
                </div>
                <hr />
                <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">Hours Per Week</h6>
                <div className="form-check py-2 my-0">
                    <input
                        className="form-check-input btn-outline-success"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Less than 30 hrs/week
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
                        More than 30 hrs/week
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
                                    <a
                                        href="#"
                                        className=" list-group-item-action saved-homebage-ul-li-aa active activesidesaved bg-white"
                                        aria-current="true"
                                    >
                                        SEARCH
              </a>
                                </li>
                                <li
                                    className="list-group-item sidebar-homebage-ul-li bg-white boder border-0"
                                    aria-current="true"
                                >
                                    <a
                                        href="#"
                                        className=" list-group-item-action saved-homebage-ul-li-aa bg-white"
                                        aria-current="true"
                                    >
                                        SAVED JOBS(2)
              </a>
                                </li>
                            </ul>

                        </div>
                        <div className="list-group-item py-lg-4">
                            <SearchBarJobsTalent />
                        </div>
                    </div>
                    <div className="row">
                        <div onClick={clickHandler}>
                            <div className="list-group-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-9 pt-lg-3">
                                        <a
                                            href="#"
                                            id="job-title-home-page"
                                            className="link-dark job-title-hover"
                                        >
                                            <p className="fw-bold ">Figma Prototype</p>
                                        </a>
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
                                                    className="far fa-heart"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                        <div className="btn-group float-sm-end  px-lg-1">
                                            <button
                                                type="button"
                                                className="btn btn-light dropdown-toggle border border-1 rounded-circle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="far fa-thumbs-down" />
                                            </button>
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
                                        <span className="fw-bold " id="contract-type">
                                            Fixed Price
              </span>
                                        <span>-</span>
                                        <span id="experience-level">Expert</span>
                                        <span>-</span>
                                        <span>Est. Budget:</span>
                                        <span id="client-budget">$200</span>- posted
              <span id="posting-time"> 4 Hours ago</span>
                                    </span>
                                </p>
                                <p id="job-description">
                                    Hi there - I'm looking to get help with my webinar presentation
                                    design. It's about 97 slides in total. I have examples of how I'd
                                    like certain slides to look, whereas others I'll leave it up to you.
                                    The demographic is adults
            <span id="dots">...</span>
                                    <span id="more">
                                        who want more out of life ages 25-35. Objective: Take the content
                                        on my presentation and design it so it gives viewers trust and
                                        appeal. Guidelines: 1. I'd like the colors to be dark, not light.
                                        2. I'd also like it to look young, fresh and hip and easily
                                        legible. 3. I have specific slides I'd like to look a certain way
                                        - I'll attach them for the chosen partner. 4. I am expecting
                                        revisions; I'll pay you hourly for revisions, and I'll pay you a
                                        flat rate for the entire project to start. Resources: 1. I'll
                                        provide you all the graphics/assets and any explanations you need
                                        2. I'll provide you with a sample webinar presentation that you
                                        can base your design ideas off of Accountabilities: 1. I'll likely
                                        have a few revisions as this is a somewhat complex presentation
                                        that I'll be doing live. Just want to set that expectation
                                        upfront. 2. Ask me when you aren't sure of the answer 3. I'd like
                                        it back within 5 days Consequences: I have another presentation to
                                        be designed and if this one goes well with you, I'll hire you for
                                        the other one too.
            </span>
                                    <span>
                                        <button
                                            id="seemorebutton"
                                            className="advanced-search-link "
                                        >
                                            more
              </button>
                                    </span>
                                </p>
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-sm rounded-pill skills"
                                >
                                    Training
          </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-sm rounded-pill skills"
                                >
                                    Education presentation
          </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-sm rounded-pill skills"
                                >
                                    Marketing
          </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-sm rounded-pill skills"
                                >
                                    Microsof PowerPoint
          </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-sm rounded-pill skills"
                                >
                                    Html
          </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-sm rounded-pill skills"
                                >
                                    Css
          </button>
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
                                    <span className="fw-bold " style={{ color: "#14bff4" }}>
                                        <i className="fas fa-check-circle primary" />
                                        {" "} Payment verified {" "}
                                    </span>
                                    <span className="text-muted">
                                        <span>
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            {" "}
                                        </span>
                                        <span className="fw-bold "> $0 {" "}</span>
                                        <span> spent {" "}</span>
                                        <span className="fw-bold ">
                                            <i className="fas fa-map-marker-alt" /> United States
              </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}