/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import img from "../../../assets/img/icon-user.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { db } from "../../../firebase";
import { useParams } from "react-router";
import ShowMore from "react-show-more-button/dist/module";

export default function FirstSectionProfileTalent2() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    db.collection("talent")
      .doc(id)
      .get()
      .then((res) => {
        setUser(res.data());
      });
  }, [user]);

  return (
    <>
      <div className="container card mb-3 mt-5">
        <div className="row mt-3">
          <div className="col-lg-2 pt-lg-3">
            <div>
              <img
                alt=""
                className="mb-3 ms-3 rounded avatar vertical-align-middle m-0 avatar-sm avatar-responsive"
                src={user?.profilePhoto ? user.profilePhoto : img}
              />
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

              <ShowMore
                style={{ fontFamily: "Gotham SSm" }}
                className="mb-0 mt-4"
                maxHeight={100}
                button={
                  <button
                    id="seemorebutton"
                    classname="advanced-search-link "
                    style={{ color: "green", position: "absolute", left: 0 }}
                  >
                    more
                  </button>
                }
              >
                {user?.overview}
              </ShowMore>

              <hr />

              <div className="row">
                <h3 className="col mx-0">{t("Work History")}</h3>
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
                </div>
                <div className="card-group">
                  {user?.portfolio?.map((item) => (
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
                  ))}
                </div>

                <hr />
                <div className="row">
                  <h3 className="col-4 mx-0">{t("skills")}</h3>
                </div>

                <div className="my-4 d-flex justify-content-start">
                  {user?.skills?.map((item) => (
                    <div className="chip mb-3 ms">
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h5 className=" mt-4 fw-bold col"> {t("$20/hr")}</h5>
            {/* icons */}

            <div className="col d-flex justify-content-end"></div>
          </div>
        </div>
      </div>

      <div className="container card mb-3 mt-5">
        <div className="row mt-3">
          <div className="row">
            <div className="col d-flex justify-content-between ">
              <h2 className="mb-3">{t("Employment history")}</h2>
            </div>
          </div>
          <hr />
          <div className="row">
            {/*  employment skills */}
            {user?.company?.map((item) => (
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
            ))}

            <div className="col-md-6 d-flex justify-content-end"></div>
          </div>
        </div>
      </div>

      {/* model for add employment */}
    </>
  );
}
