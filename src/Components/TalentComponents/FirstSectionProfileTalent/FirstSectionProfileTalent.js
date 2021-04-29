/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ImgWithActiveStatus from "./../../ClientComponents/ImgWithActiveStatus/ImgWithActiveStatus";

export default function FirstSectionProfileTalent() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    @import url(//db.onlinewebfonts.com/c/3def92f7b2ad644bd382798ecc8ca4c7?family=Canela);\n     {\n        .container {\n             ;\n        }\n    }\n\n    * {\n        margin: 0;\n        padding: 0;\n        \n\n    }\n    body{\n        ;\n\n    }\n",
        }}
      />
      <div className="container card mb-3 mt-5">
        <div className="row mt-3">
          <div className="col-lg-1 pt-lg-3">
            <ImgWithActiveStatus />
          </div>
          <div className="col-lg-4 pt-lg-3 mx-3">
            <a
              href
              id="job-title-home-page "
              className="link-dark job-title-hover "
            >
              <h2 className="fw-bold">Romany M.</h2>
            </a>

            <i class="fas fa-map-marker-alt">
              <span> Sohag, Egypt – 8:41pm local time</span>
            </i>

            <div className="row py-3">
              <div className="col">
                <span>
                  {" "}
                  <svg
                    width="15px"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                    aria-hidden="true"
                    role="img"
                  >
                    <polygon
                      points="7 0 0 0 0 9.21 7 14 14 9.21 14 0 7 0"
                      fill="#1caf9d"
                    />
                  </svg>
                </span>
                <span className="text-primary"> RISING TALENT</span>
              </div>
            </div>
          </div>
          <div className="col-2"></div>

          <div className="col py-3 mx-1 float-end ">
            <button
              type="button"
              class="btn bg-white btn-outline-secondary  px-4  mx-3"
            >
              <span className="text-success fw-bold">See Public view</span>
            </button>
            <button type="button" class="btn btn-success px-4  mx-3">
              Profile Settings
            </button>
          </div>

          <hr />
          <div className="row my-3">
            {/*  employment skills */}
            <div className="col-4 row border-end border-2 me-1">
              <h3 className="col mx-0">View profile</h3>
              <button
                type="button"
                className=" col-1 btn btn-default d-flex justify-content-center border rounded-circle"
                style={{
                  width: 30,
                  height: 30,
                  textAlign: "center",
                  paddingTop: 3,
                  paddingBottom: 3,
                  marginRight: 150,
                }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal13"
              >
                <div>
                  <i className="fas fa-pen" />
                </div>
              </button>
              <div className="">
                <ul
                  id="list-homepage"
                  className="list-group sidebar-homebage-ul mb-lg-4"
                >
                  <li
                    className="list-group-item sidebar-homebage-ul-li my-2 bg-white"
                    aria-current="true"
                  >
                    <a
                      href="#"
                      className=" list-group-item-action sidebar-homebage-ul-li-aa activeside"
                      aria-current="true"
                    >
                      Fullstack web development
                    </a>
                    <i class="fas fa-chevron-right float-end"></i>
                  </li>
                  <li
                    className="list-group-item sidebar-homebage-ul-li my-2 bg-white"
                    aria-current="true"
                  >
                    <a
                      href="#"
                      className=" list-group-item-action sidebar-homebage-ul-li-aa"
                      aria-current="true"
                    >
                      All work
                    </a>{" "}
                    <i class="fas fa-chevron-right float-end "></i>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="row mb-3">
                <div className="col">
                  <div className="fw-bold fs-5">$30</div>
                  <div className="fs-6">Earnings</div>
                </div>
                <div className="col">
                  <div className="fw-bold fs-5">2</div>
                  <div className="fs-6">Total Jobs</div>
                </div>
                <div className="col">
                  <div className="fw-bold fs-5">10</div>
                  <div className="fs-6">Total Hours</div>
                </div>
              </div>
              <hr />
              <div>
                <h5 className="fw-bold">Availability</h5>
                <h6 className="fw-bold">Available</h6>
                <p>As Needed - Open to Offers</p>
                <h5 className="fw-bold">Languages</h5>
                <span className="fw-bold fs-5">English:</span>
                <span>Fluent</span>

                <h5 className="fw-bold mt-3">Education</h5>
                <h5 className="fw-bold">Army Apprentice College</h5>
                <p>Military and occupational training 1975-1977</p>
                <h5 className="fw-bold">
                  Toynbee Secondary School, Eastleigh, Hants, UK.
                </h5>
                <p>1970-1975</p>
                <ul className="list-unstyled">
                    <li className="d-flex">
                      <div>
                        <h5 className=" fw-bold">
                          Information Technology Institute (Egypt)
                        </h5>{" "}
                        <div>
                          Introduction to software testing concepts &amp;
                          techniques
                        </div>{" "}
                        <div className="text-muted">2020-2020</div>
                      </div>{" "}
                     
                    </li>
                    <li className="d-flex">
                      <div>
                        <h5 className=" fw-bold">
                          Information Technology Institute (Egypt)
                        </h5>{" "}
                        <div>Python Programming Basics</div>{" "}
                        <div className="text-muted">2020-2020</div>
                      </div>{" "}
                      
                    </li>
                    <li className="d-flex">
                      <div>
                        <h5 className=" fw-bold">
                          Information Technology Institute (Egypt)
                        </h5>{" "}
                        <div>Database fundamentals</div>{" "}
                        <div className="text-muted">2020-2020</div>
                      </div>{" "}
                      
                    </li>
                    <li className="d-flex">
                      <div>
                        <h5 className=" fw-bold">
                          computer science
                        </h5>{" "}
                        <div>
                          Bachelor of Computer Science (BCompSc), Designing and
                          developing
                        </div>{" "}
                        <div className="text-muted">2014-2018</div>
                      </div>{" "}                  
                    </li>{" "}
                    {/**/}
                  </ul>
                
                    
                  </div>
                
                </div>
             
            <div className="col-6">
              <h4 className="fw-bold">
                {" "}
                Full Stack Web Developer | Graphic Designer | Video Editor
              </h4>
              <p style={{ fontFamily: "Gotham SSm" }} className="mb-0 mt-4">
                Looking for a certified freelancer by Upwork! You came to the
                right person!! Design is a powerful tool of communication and
                influence. It helps to deliver high-quality products and
                services which leads to better user experiences and happier
                customers. I have experience for more than 7 years in different
                fields of design.
              </p>
              <p style={{ fontFamily: "Gotham SSm" }} className="mb-0">
                Lorem web designer{" "}
              </p>
              <button
                className="btn btn-link mb-3 border rounded-border"
                style={{ textDecoration: "none", color: "#008329" }}
              >
                more
              </button>
              <hr />

              <div className="row">
                <h3 className="col mx-0">Work History</h3>
                <button
                  type="button"
                  className=" col-1 btn btn-default d-flex justify-content-center border rounded-circle"
                  style={{
                    width: 30,
                    height: 30,
                    textAlign: "center",
                    paddingTop: 3,
                    paddingBottom: 3,
                    marginRight: 350,
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal13"
                >
                  <div>
                    <i class="fas fa-ellipsis-h"></i>{" "}
                  </div>
                </button>
              </div>
              <hr />
              <div className="bg-white py-lg-1 px-4 row py-xs-5">
                <div className="col-10 py-3">
                  <a href className="advanced-search-link fw-bold">
                    I'm looking for video, carousel and image advertising
                    creation with branding to make facebook ads
                  </a>
                  <p className="my-3">
                    <svg
                      id="up-rs"
                      viewBox="0 0 14 14"
                      width="15px"
                      fill="green"
                    >
                      <polygon points="7,0.5 9,4.8 13.5,5.5 10.2,8.8 11,13.5 7,11.3 3,13.5 3.8,8.8 0.5,5.5 5,4.8"></polygon>
                    </svg>
                    <svg
                      id="up-rs"
                      viewBox="0 0 14 14"
                      width="15px"
                      fill="green"
                    >
                      <polygon points="7,0.5 9,4.8 13.5,5.5 10.2,8.8 11,13.5 7,11.3 3,13.5 3.8,8.8 0.5,5.5 5,4.8"></polygon>
                    </svg>
                    <svg
                      id="up-rs"
                      viewBox="0 0 14 14"
                      width="15px"
                      fill="green"
                    >
                      <polygon points="7,0.5 9,4.8 13.5,5.5 10.2,8.8 11,13.5 7,11.3 3,13.5 3.8,8.8 0.5,5.5 5,4.8"></polygon>
                    </svg>
                    <svg
                      id="up-rs"
                      viewBox="0 0 14 14"
                      width="15px"
                      fill="green"
                    >
                      <polygon points="7,0.5 9,4.8 13.5,5.5 10.2,8.8 11,13.5 7,11.3 3,13.5 3.8,8.8 0.5,5.5 5,4.8"></polygon>
                    </svg>
                    <svg
                      id="up-rs"
                      viewBox="0 0 14 14"
                      width="15px"
                      fill="green"
                    >
                      <polygon points="7,0.5 9,4.8 13.5,5.5 10.2,8.8 11,13.5 7,11.3 3,13.5 3.8,8.8 0.5,5.5 5,4.8"></polygon>
                    </svg>{" "}
                    <span className="fw-bold"> 5.00</span>{" "}
                    <span className="text-muted">
                      Mar 22 2021 - April 21 2021
                    </span>
                  </p>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-bold">$5</div>
                    </div>
                    <div className="col">
                      <div className="fw-bold">$1/hr</div>
                    </div>
                    <div className="col">
                      <span className="fw-bold">5</span>
                      <span className="fs-6"> Hours</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="col-10 py-3">
                  <a href className="advanced-search-link fw-bold">
                    I'm looking for video, carousel and image advertising
                    creation with branding to make facebook ads
                  </a>
                  <p className="my-3">
                    <svg
                      id="up-rs"
                      viewBox="0 0 14 14"
                      width="15px"
                      fill="green"
                    >
                      <polygon points="7,0.5 9,4.8 13.5,5.5 10.2,8.8 11,13.5 7,11.3 3,13.5 3.8,8.8 0.5,5.5 5,4.8"></polygon>
                    </svg>
                    <svg
                      id="up-rs"
                      viewBox="0 0 14 14"
                      width="15px"
                      fill="green"
                    >
                      <polygon points="7,0.5 9,4.8 13.5,5.5 10.2,8.8 11,13.5 7,11.3 3,13.5 3.8,8.8 0.5,5.5 5,4.8"></polygon>
                    </svg>
                    <svg
                      id="up-rs"
                      viewBox="0 0 14 14"
                      width="15px"
                      fill="green"
                    >
                      <polygon points="7,0.5 9,4.8 13.5,5.5 10.2,8.8 11,13.5 7,11.3 3,13.5 3.8,8.8 0.5,5.5 5,4.8"></polygon>
                    </svg>
                    <svg
                      id="up-rs"
                      viewBox="0 0 14 14"
                      width="15px"
                      fill="green"
                    >
                      <polygon points="7,0.5 9,4.8 13.5,5.5 10.2,8.8 11,13.5 7,11.3 3,13.5 3.8,8.8 0.5,5.5 5,4.8"></polygon>
                    </svg>
                    <svg
                      id="up-rs"
                      viewBox="0 0 14 14"
                      width="15px"
                      fill="green"
                    >
                      <polygon points="7,0.5 9,4.8 13.5,5.5 10.2,8.8 11,13.5 7,11.3 3,13.5 3.8,8.8 0.5,5.5 5,4.8"></polygon>
                    </svg>{" "}
                    <span className="fw-bold"> 5.00</span>{" "}
                    <span className="text-muted">
                      Mar 22 2021 - April 21 2021
                    </span>
                  </p>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-bold">$25</div>
                    </div>
                    <div className="col">
                      <div className="fw-bold">$5/hr</div>
                    </div>
                    <div className="col">
                      <span className="fw-bold">5</span>
                      <span className="fs-6"> Hours</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <h3 className="col-4 mx-0">Portfolio</h3>
                  <button
                    type="button"
                    className=" col-1 btn btn-default d-flex justify-content-center border rounded-circle"
                    style={{
                      width: 30,
                      height: 30,
                      textAlign: "center",
                      paddingTop: 3,
                      paddingBottom: 3,
                      marginRight: 10,
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal13"
                  >
                    <div>
                      <i class="fas fa-ellipsis-h"></i>{" "}
                    </div>
                  </button>
                  <button
                    type="button"
                    className=" col-1 btn btn-default d-flex justify-content-center border rounded-circle"
                    style={{
                      width: 30,
                      height: 30,
                      textAlign: "center",
                      paddingTop: 3,
                      paddingBottom: 3,
                      marginRight: 10,
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal13"
                  >
                    <div>
                      <i class="fas fa-plus"></i>{" "}
                    </div>
                  </button>
                  <button
                    type="button"
                    className=" col-1 btn btn-default d-flex justify-content-center border rounded-circle"
                    style={{
                      width: 30,
                      height: 30,
                      textAlign: "center",
                      paddingTop: 3,
                      paddingBottom: 3,
                      marginRight: 200,
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal13"
                  >
                    <div>
                      <i class="fas fa-retweet"></i>{" "}
                    </div>
                  </button>
                </div>
                <div className="card-group">
                  <div className="card border border-0 mx-1">
                    <img
                      src="https://img.freepik.com/free-vector/travel-sale-flyer-template_52683-46904.jpg?size=338&ext=jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Flyer</h5>
                    </div>
                  </div>
                  <div className="card border border-0 mx-1">
                    <img
                      src="https://img.freepik.com/free-vector/travel-sale-flyer-template_52683-45633.jpg?size=338&ext=jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Poster</h5>
                    </div>
                  </div>
                  <div className="card border border-0 mx-1">
                    <img
                      src="https://img.freepik.com/free-vector/travel-sale-flyer-template_52683-46904.jpg?size=338&ext=jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">webdesign</h5>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <h3 className="col mx-0">Skills</h3>
                  <button
                    type="button"
                    className=" col-1 btn btn-default d-flex justify-content-center border rounded-circle"
                    style={{
                      width: 30,
                      height: 30,
                      textAlign: "center",
                      paddingTop: 3,
                      paddingBottom: 3,
                      marginRight: 350,
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal13"
                  >
                    <div>
                      <i class="fas fa-pen"></i>{" "}
                    </div>
                  </button>
                </div>
                <div className="row">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm rounded-pill skills col mt-2 ms-1"
                  >
                    Training
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm rounded-pill skills col mt-2 ms-1"
                  >
                    Education
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm rounded-pill skills col mt-2 ms-1"
                  >
                    Marketing
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm rounded-pill skills col mt-2 ms-1"
                  >
                    PowerPoint
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm rounded-pill skills col mt-2 ms-1"
                  >
                    Html
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm rounded-pill skills col mt-2 ms-1"
                  >
                    Css
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm rounded-pill skills col mt-2 ms-1"
                  >
                    Marketing
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm rounded-pill skills col mt-2 ms-1"
                  >
                    PowerPoint
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm rounded-pill skills col mt-2 ms-1"
                  >
                    Html
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm rounded-pill skills col mt-2 ms-1"
                  >
                    Css
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm rounded-pill skills col mt-2 ms-1"
                  >
                    Marketing
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm rounded-pill skills col mt-2 ms-1"
                  >
                    PowerPoint
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm rounded-pill skills col mt-2 ms-1"
                  >
                    Html
                  </button>
                </div>
              </div>
            </div>

            <h5 className=" mt-4 fw-bold col"> $20/hr</h5>
            {/* icons */}

            <div className="col d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-default me-2 d-flex justify-content-center border rounded-circle"
                style={{
                  width: 30,
                  height: 30,
                  textAlign: "center",
                  paddingTop: 3,
                  paddingBottom: 3,
                }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal13"
              >
                <div>
                  <i className="fas fa-pen" />
                </div>
              </button>
              <button
                type="button"
                className="btn col-1 btn-default d-flex justify-content-center border rounded-circle mb-3"
                style={{
                  width: 30,
                  height: 30,
                  textAlign: "center",
                  paddingTop: 3,
                  paddingBottom: 3,
                }}
              >
                <div>
                  <i class="fas fa-link    "></i>
                </div>
              </button>
              <hr />
            </div>
          </div>
        </div>
      </div>

      {/* model for add employment */}

      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Employment
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label fw-bold"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput2"
                    className="form-label fw-bold"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput2"
                  />
                </div>

                <div className="row">
                  <h5 className="fw-blod">Period</h5>
                  <div className="col-md-6">
                    <div className="dropdown">
                      <a
                        className="btn btn-light dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        month
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            January
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            february
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            March
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Apirl
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            May
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            June
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            July
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            August
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            October
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            November
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Decemeber
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="dropdown">
                      <a
                        className="btn btn-light dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        year
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            2021
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2020
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2019
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2018
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2017
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2016
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2015
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2014
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2013
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2012
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2011
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="row">
                    <h5 className="fw-blod">Through</h5>
                    <div className="col-md-6">
                      <div className="dropdown">
                        <a
                          className="btn btn-light dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          month
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              January
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              february
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              March
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Apirl
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              May
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              June
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              July
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              August
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              October
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              November
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Decemeber
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="dropdown">
                        <a
                          className="btn btn-light dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          year
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              2021
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2020
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2019
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2018
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2017
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2016
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2015
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2014
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2013
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2012
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2011
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-text ">
                      <input
                        className="form-check-input mt-0 "
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                      />
                      I currently worked here
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-link border rounded-border "
                data-bs-dismiss="modal"
                style={{
                  color: "#008329",
                  backgroundColor: "white",
                  textDecoration: "none",
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-default border rounded-border"
              >
                Save{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal13"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Employment
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label fw-bold"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput2"
                    className="form-label fw-bold"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput2"
                  />
                </div>

                <div className="row">
                  <h5 className="fw-blod">Period</h5>
                  <div className="col-md-6">
                    <div className="dropdown">
                      <a
                        className="btn btn-light dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        month
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            January
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            february
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            March
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Apirl
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            May
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            June
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            July
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            August
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            October
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            November
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Decemeber
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="dropdown">
                      <a
                        className="btn btn-light dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        year
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            2021
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2020
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2019
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2018
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2017
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2016
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2015
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2014
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2013
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2012
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2011
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={5}
                    defaultValue={""}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-link border rounded-border "
                data-bs-dismiss="modal"
                style={{
                  color: "#008329",
                  backgroundColor: "white",
                  textDecoration: "none",
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-default border rounded-border"
              >
                Save{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
