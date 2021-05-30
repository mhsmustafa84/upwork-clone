/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { talentDataAction } from "../../../Store/actions/talentData";
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import ShowMore from 'react-show-more-button/dist/module';
import { updateUserData } from "../../../Network/Network";
import { auth, db, storage } from "../../../firebase";
import img from "../../../assets/img/icon-user.svg";
import Loader from "../../SharedComponents/Loader/Loader";

export default function FirstSectionProfileTalent() {

  const { push } = useHistory();
  // const user = useSelector((state) => state.talentData);
  const [imgUrl, setimgUrl] = useState(null);
  const [progress, setprogress] = useState(0);
  const [profileTitle, setprofileTitle] = useState("");
  const [portfolioList, setportfolioList] = useState([]);
  const [profileOverview, setprofileOverview] = useState("");
  const [imgTitle, setimgTitle] = useState("");
  const [imageItself, setimageItself] = useState("");
  const dispatch = useDispatch();
  const [inputVal, setinputVal] = useState("");
  const [skillsList, setskillsList] = useState([]);
  const [EmpTitle, setEmpTitle] = useState("");
  const [EmpCompany, setEmpCompany] = useState("");
  const [EmpStillWork, setEmpStillWork] = useState(false);
  let [user, setUser] = useState(null);

  const [EmpList, setEmpList] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    // dispatch(talentDataAction());
    db.collection("talent").doc(auth.currentUser.uid).onSnapshot(doc => {
      user = doc.data();
      setUser(user)
    })
    console.log("DSD");
  }, []);

  const getData = ({ target }) => {
    if (target.files[0]) {
      const uploadStep = storage.ref(`images/${target.files[0].name}`).put(target.files[0]);
      uploadStep.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setprogress(progress);
        },
        (err) => {
          console.log(err);
        },
        () => {
          storage
            .ref("images")
            .child(target.files[0].name)
            .getDownloadURL()
            .then((URL) => {
              let imgu = URL;
              setimgUrl(imgu);
            });
        }
      );
    }
  };

  const skillVal = (e) => {
    setinputVal(e.target.value)
  }


  const addskills = () => {
    if (inputVal !== "") {
      let arr2 = [...skillsList, inputVal];
      setskillsList(arr2);
      console.log(skillsList);
      updateUserData("talent", { skills: [...user?.skills, ...arr2] })
    }
  };

  const updateProfile = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    switch (name) {
      case "title":
        setprofileTitle(val);

        break;
      case "overview":
        setprofileOverview(val);

        break;
      case "imgTitle":
        setimgTitle(val);

        break;
      case "imageItself":
        setimageItself(val);

        break;
      case "EmpTitle":
        setEmpTitle(val);
        break;
      case "EmpCompany":
        setEmpCompany(val);
        break;
      case "EmpStillWork":
        setEmpStillWork(val);
        break;
      default:
        break;
    }
  };
  const UpdateEditprofileTitleOverView = () => {
    updateUserData("talent", { title: profileTitle, overview: profileOverview });
    push('/profile')
  }
  const UpdateEditPortofolio = () => {
    if (imageItself !== "" && imgTitle !== "") {
      let arr3 = [...portfolioList, { image: imgUrl, imagetitle: imgTitle }];
      setportfolioList(arr3);
      console.log(portfolioList);
      updateUserData("talent", { portfolio: [...user?.portfolio, { image: imgUrl, imagetitle: imgTitle }] })
    }
  }
  const UpdateEditEmployment = () => {
    if (EmpTitle !== "" && EmpCompany !== "") {
      let arr4 = [...EmpList, { jobTitle: EmpTitle, companyName: EmpCompany, stillWork: EmpStillWork }];
      setEmpList(arr4);
      console.log(EmpList);
      updateUserData("talent", { company: [...user?.company, { jobTitle: EmpTitle, companyName: EmpCompany, stillWork: EmpStillWork }] })
    }
  }


  return (

    <>{
      user !== null
        ?


        <>
          <div className="container card mb-3 mt-5 ">
            <div className="row mt-3">
              <div className="col-lg-2 pt-lg-3">
                <div>
                  <img
                    alt=""
                    style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                    className="mb-3 ms-3 avatar vertical-align-middle m-0 avatar-sm avatar-responsive"
                    src={user?.profilePhoto ? user?.profilePhoto : img}
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
                    {user?.firstName + " "} {user?.lastName}.
              </h2>
                </a>
                <div className={user?.location && "fas fa-map-marker-alt"}>
                  <span>
                    {user?.location && (
                      <>
                        {" "}
                        {user?.location.city} -{" "}
                        <strong>{user?.location.country} – </strong>
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
                      <div className="fw-bold fs-5">${user?.totalEarnings}</div>
                      <div className="fs-6">{t("Earnings")}</div>
                    </div>
                    <div className="col">
                      <div className="fw-bold fs-5">{user?.totalJobs}</div>
                      <div className="fs-6">{t("Total Jobs")}</div>
                    </div>
                    <div className="col">
                      <div className="fw-bold fs-5">{user?.totalHours}</div>
                      <div className="fs-6">{t("Total Hours")}</div>
                    </div>
                  </div>
                  <hr />
                  <h5 className="fw-bold">{t("Availability")}</h5>
                  <h6 className="fw-bold">
                    {user?.Availabilty === true ? "available" : "not available"}
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
                      {user?.portfolio?.map((item) =>
                        <div className="card border border-0 mx-1">

                          <img
                            src={item.image}
                            className="card-img-top w-25"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">{item.imagetitle}</h5>
                          </div>
                        </div>
                      )}
                    </div>


                    <hr />
                    <div className="row">
                      <h3 className="col-4 mx-0">{t("skills")}</h3>

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
                        data-bs-target="#modalAddSkills"
                      >
                        <div>
                          <i className="fas fa-plus"></i>{" "}
                        </div>
                      </button>



                    </div>

                    <div className="my-4 d-flex justify-content-start">
                      {user?.skills?.map((item) =>
                        <div className="chip mb-3 ms">
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

          <div className="container card mb-3 mt-5">
            <div className="row mt-3">
              <div className="row">

                <div className="col d-flex justify-content-between ">
                  <h2 className="mb-3">{t("Employment history")}</h2>
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
                    data-bs-target="#editEmploymentHistory"
                  >
                    <div>
                      <i className="fas fa-plus" />
                    </div>
                  </button>
                </div>
              </div>
              <hr />
              <div className="row">
                {/*  employment skills */}
                {user?.company?.map((item) =>
                  <div className="container">
                    <h5>{item.jobTitle}</h5>
                    <p style={{ fontFamily: "Gotham SSm" }} className="mb-0 ">
                      {item.companyName}
                    </p>
                    <p style={{ fontFamily: "Gotham SSm" }} className="mb-2 ">
                      {item.stillWork ? "present" : ""}
                    </p>
                    <hr />
                  </div>
                )}
                {/* <button
                className="btn btn-link mb-3 border rounded-border"
                style={{ textDecoration: "none", color: "#008329" }}
              >
                {t("more")}
              </button> */}

                {/* icons */}
                <div className="col-md-6 d-flex justify-content-end">

                  {/* <button
                type="button"
                className="btn btn-default d-flex justify-content-center border rounded-circle mb-3"
                style={{
                  width: 30,
                  height: 30,
                  textAlign: "center",
                  paddingTop: 3,
                  paddingBottom: 3,
                }}
              >
                <div>
                  <i className="far fa-trash-alt" />
                </div>
              </button> */}
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="editEmploymentHistory"
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
                        onChange={updateProfile}
                        name="EmpCompany"
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
                        onChange={updateProfile}
                        name="EmpTitle"
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput2"
                      />
                    </div>
                    <div className="input-group mb-3">

                      <div className="input-group-text ">

                        <input
                          onChange={updateProfile}
                          name="EmpStillWork"
                          className="form-check-input mt-0 "

                          type="checkbox"

                          value=""

                          aria-label="Checkbox for following text input"

                        />

                      I currently worked here

                    </div>

                    </div>

                    {/* <div className="mb-3">
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
                </div> */}
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
                    onClick={UpdateEditEmployment}
                    type="button"
                    className="btn btn-default border rounded-border"
                  >
                    EditEmployment{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>



          {/* model for add employment */}

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
                        onChange={updateProfile}
                        name="title"
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
                        onChange={updateProfile}
                        name="overview"
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
                  <Link
                    to="/profile"
                    onClick={UpdateEditprofileTitleOverView}
                    type="button"
                    className="btn btn-default border rounded-border"
                  >
                    Save{" "}
                  </Link>
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
                        onChange={updateProfile}
                        name="imgTitle"
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
                        onChange={updateProfile}
                        onInput={getData}
                        name="imageItself"
                        type="file"
                        className="form-control"
                        id="exampleFormControlInput2"
                      />

                    </div>

                  </form>
                  <div className="w-50 text-center mt-5">
                    {/* <progress className="w-100" value={progress} max="100" /> */}
                    <div className="mb-3" style={{ width: progress * 2, height: "5px", backgroundColor: "#37A000" }}></div>
                    {imgUrl ? (
                      <img src={imgUrl} />
                    ) : (
                      <i
                        className="fas fa-user-circle fa-7x"
                        style={{ color: "#A0A0A0" }}
                      ></i>
                    )}
                  </div>
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
                  <Link
                    to="/profile"
                    onClick={UpdateEditPortofolio}
                    type="button"
                    className="btn btn-default border rounded-border"
                  >
                    Add{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="modalAddSkills"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Add Skills
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
                  {skillsList.map((item) =>
                    <div className="chip mb-3 ms">
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
                    Add{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
        :
        <div className="d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
          <Loader />
        </div>
    }
    </>
  );
}
