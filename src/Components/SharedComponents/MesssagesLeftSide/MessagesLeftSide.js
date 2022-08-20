/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";

export default function MessagesLeftSide({ talentID }) {
    console.log(talentID);

    const [talent, setTalent] = useState({});

    useEffect(() => {
        if (talentID) {
            db.collection("talent").doc(talentID).get().then(doc => setTalent(doc.data()));
        }
    }, []);

    return (
        <>
            <div className="card bg-white mt-2">
                {/* <div className="card-header" style={{ height: 100 }}>
                    <div className="row">
                        <div className="col-3">
                            <div className="dropdown">
                                <button
                                    className="btn mx-auto btn-md border-gray btn-circle btn-wite m-0 p-0"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-gear-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                                    </svg>
                                </button>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton1"
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                    </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                    </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                    </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6">
                            <div
                                className="btn-group border-gray rounded "
                                role="group"
                                aria-label="Basic radio toggle button group"
                            >
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="btnradio"
                                    id="btnradio1"
                                    autoComplete="off"
                                    defaultChecked
                                />
                                <label className="btn btn-outline-upwork" htmlFor="btnradio1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-chat-left-text-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                                    </svg>
                                </label>
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="btnradio"
                                    id="btnradio2"
                                    autoComplete="off"
                                />
                                <label className="btn btn-outline-upwork" htmlFor="btnradio2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-person-lines-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                                    </svg>
                                </label>
                            </div>
                        </div>
                        <div className="col-3">
                            <button
                                className="btn mx-auto btn-md border-gray btn-circle btn-wite m-0 p-0"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    fill="currentColor"
                                    className="bi bi-plus"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        stroke="black"
                                        strokeWidth=".9"
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div> */}
                <div className="card-body">
                    <div className="row">
                        <div className="input-group col-12">
                            <span className="input-group-text bg-white" id="basic-addon1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-search"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                </svg>
                            </span>
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search"
                                aria-label="Input group example"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div className="overflow-auto" style={{ maxHeight: 480 }}>
                            <div className="btn-group btn-startdate col-12 w-100">
                                <button
                                    type="button"
                                    className="btn border border-gray py-0 dropdown-toggle text-start mt-3 "
                                    data-bs-toggle="dropdown"
                                    data-bs-display="static"
                                    aria-expanded="false"
                                >
                                    Start date
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                                    <li>
                                        <button className="dropdown-item" type="button">
                                            Action
                                </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" type="button">
                                            Another action
                                </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" type="button">
                                            Something else here
                            </button>
                                    </li>
                                </ul>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="row">
                                        <div className="col-3">
                                            <div className="img_cont_msg">
                                                <img
                                                    src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                                                    className="rounded-circle user_img_msg"
                                                />
                                                <span
                                                    className="online_icon_msg offline "
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="right"
                                                    title="offline"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <span className="msg-uname">Belal Khaled, incen </span>
                                            <span className="topic">
                                                Design Blog articles in Elementor - Arabic speaker
                        <br />
                                            </span>
                                            <p className="smallmsg">You:ok sir</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="row">
                                        <div className="col-3">
                                            <div className="img_cont_msg">
                                                <img
                                                    src="https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg"
                                                    className="rounded-circle user_img_msg"
                                                />
                                                <span
                                                    className="online_icon_msg"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="right"
                                                    title="online"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <span className="msg-uname">Belal Khaled, incen </span>
                                            <span className="topic">
                                                Design Blog articles in Elementor - Arabic speaker
                        <br />
                                            </span>
                                            <p className="smallmsg">You:ok sir</p>
                                        </div>
                                    </div>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="row">
                                        <div className="col-3">
                                            <button className="btn btn-circle btn-xl mx-auto border-gray bg-gray">
                                                B
                      </button>
                                        </div>
                                        <div className="col-9">
                                            <span className="msg-uname">Belal Khaled, incen </span>
                                            <span className="topic">
                                                Design Blog articles in Elementor - Arabic speaker
                        <br />
                                            </span>
                                            <p className="font-1 pt-2">You:ok sir</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    s<span className="badge bg-upwork rounded-pill">2</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    A third list item
                  <span className="badge bg-upwork rounded-pill">1</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
