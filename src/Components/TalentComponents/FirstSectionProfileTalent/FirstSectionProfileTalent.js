/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{ useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { talentDataAction } from "../../../Store/actions/talentData";
import img from "../../../assets/img/icon-user.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ShowMore from 'react-show-more-button/dist/module';
import { updateUserData } from "../../../Network/Network";




export default function FirstSectionProfileTalent() {
  const user = useSelector((state) => state.talentData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(talentDataAction());
  }, []);
  // let data = Object.values(user.data);

  const { t } = useTranslation();
  const [inputVal, setinputVal] = useState("");
  const [skillsList, setskillsList] = useState([]);
  const skillVal=(e)=>{
    setinputVal(e.target.value)
  }
  const addskills = () => {
    if (inputVal!= "") {
      let arr2=[...skillsList,inputVal];
    setskillsList(arr2);
    console.log(skillsList);
    }
    
  };
  return (
    <>
      <div className="container card mb-3 mt-5">
        <div className="row mt-3">
          <div className="col-lg-2 pt-lg-3">
            <div>
              <img
                alt=""
                className="mb-3 ms-3 rounded avatar vertical-align-middle m-0 avatar-sm avatar-responsive"
                src={user.profilePhoto ? user.profilePhoto : img}
              />
              {/* <span className="hotspotimg">
                <span className="hotspotimg__btn"></span>
              </span> */}
            </div>
          </div>
          <div className="col-lg-4 pt-lg-3 mx-3">
            <a
              href=""
              id="job-title-home-page "
              className="link-dark job-title-hover "
            >
              <h2 className="fw-bold">
                {user.firstName + " "} {user.lastName}.
              </h2>
            </a>
            <div className={user.location && "fas fa-map-marker-alt"}>
              <span>
                {user.location && (
                  <>
                    {" "}
                    {user.location.city} -{" "}
                    <strong>{user.location.country} – </strong>
                  </>
                )}
                {new Date().toLocaleTimeString()} {t("local time")}
              </span>
            </div>
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
                <span className="text-primary"> {t("RISING TALENT")}</span>
              </div>
            </div>
          </div>
          <div className="col-2"></div>

          <div className="col py-3 mx-1 float-end ">
            <Link to="/settings">
              <button type="button" className="btn btn-success px-4  mx-3">
                {t("Profile Settings")}
              </button>
            </Link>
          </div>

          <hr />
          <div className="row my-3">
            <div className="col-4 row border-end border-2 me-1">
              <div className="row">
                <div className="col">
                  <div className="fw-bold fs-5">${user.totalEarnings}</div>
                  <div className="fs-6">{t("Earnings")}</div>
                </div>
                <div className="col">
                  <div className="fw-bold fs-5">{user.totalJobs}</div>
                  <div className="fs-6">{t("Total Jobs")}</div>
                </div>
                <div className="col">
                  <div className="fw-bold fs-5">{user.totalHours}</div>
                  <div className="fs-6">{t("Total Hours")}</div>
                </div>
              </div>
              <hr />
              <h5 className="fw-bold">{t("Availability")}</h5>
              <h6 className="fw-bold">
                {user?.Availabilty == true ? "available" : "not available"}
              </h6>
              <p>
                {user?.Availabilty
                  ? "As Needed - Open to Offers"
                  : "not available for 3 months"}
              </p>
              <h5 className="fw-bold">{t("Languages")}</h5>
              <span className="fw-bold fs-5">English:</span>
              <span>Fluent</span>

              <h5 className="fw-bold mt-3">{t("Education")}</h5>
              <h5 className="fw-bold">{user?.school}</h5>
              <p>{user?.school} 1975-1977</p>
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
                      Introduction to software testing concepts &amp; techniques
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
                    <h5 className=" fw-bold">computer science</h5>{" "}
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

            <div className="col-6">
              <h4 className="fw-bold"> {user?.title}</h4>
              
                <ShowMore style={{ fontFamily: "Gotham SSm" }} className="mb-0 mt-4" maxHeight={100} button={<button id="seemorebutton" classname="advanced-search-link " style={{ color: 'green', position: 'absolute', left: 0 }}>
                  more
      </button>}>
                  {user?.overview}
                </ShowMore>
            


              <hr />

              <div className="row">
                <h3 className="col mx-0">{t("Work History")}</h3>
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
                    <i className="fas fa-ellipsis-h"></i>{" "}
                  </div>
                </button>
              </div>
              <hr />
              <div className="bg-white py-lg-1 px-4 row py-xs-5">
                <div className="col-10 py-3">
                  <a className="advanced-search-link fw-bold">
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
                  <a className="advanced-search-link fw-bold">
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
                  <h3 className="col-4 mx-0">{t("Portfolio")}</h3>
                  
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
                    data-bs-target="#modalPortfolioWithImages"
                  >
                    <div>
                      <i className="fas fa-plus"></i>{" "}
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
                  <h3 className="col mx-0">{t("Skills")}</h3>
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
                    data-bs-target="#modalSkills"
                  >
                    <div>
                      <i className="fas fa-pen"></i>{" "}
                    </div>
                  </button>
                </div>
                
                <div className="my-4 d-flex justify-content-start">
          {skillsList.map((item)=>
          <div  className="chip mb-3 ms">
            <span>{item}</span>
          </div>
          )}
          </div> 
              </div>
            </div>

            <h5 className=" mt-4 fw-bold col"> {t("$20/hr")}</h5>
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
                data-bs-target="#modalProfileTitleAndDescription"
              >
                <div>
                  <i className="fas fa-pen" />
                </div>
              </button>
              
            
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
        id="modalProfileTitleAndDescription"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Profile
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
                    Profile title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>
               
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Overview
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
      <div
        className="modal fade"
        id="modalPortfolioWithImages"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Portofolio Item
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
                    Item Title
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
                    Add Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="exampleFormControlInput2"
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
      <div
        className="modal fade"
        id="modalSkills"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Skills
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
                    Skill name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="jobSkills"
              onChange={skillVal}
                  />
                  
                </div>
              </form>
            </div>
            <div className="my-4 d-flex justify-content-start">
          {skillsList.map((item)=>
          <div  className="chip mb-3 ms">
            <span>{item}</span>
          </div>
          )}
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
              onClick={addskills}
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
        id="modalEmploymentHistory"
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
      <div
        className="modal fade"
        id="modalOtherExperience"
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
