/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import HeaderSearchSm from "../../shared/HeaderSearchSm/HeaderSearchSm";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { fbAuth } from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import img from "../../../assets/Img/icon-user.svg";
import { talentDataAction } from "../../../Store/actions/talentData";


export default function NavSmallScreen() {

  let navigate = useNavigate();
  const user = useSelector(state => state.talentData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(talentDataAction());
  }, []);

  const logout = () => {
    fbAuth.auth.signOut().then((res) => {
      console.log(res);
      navigate("/login");
      localStorage.removeItem('userType');
      window.location.reload();
    }).catch((error) => {
      console.log(error.message);
    });
  };

  return (
    <>
      <div className="collapse d-lg-none" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="mt-3">
            <HeaderSearchSm />
          </li>
          <li className="dropdown px-3">
            <a
              className={`nav-link dropdown-toggle mt-4 pt-4 border-top-cn`}
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img style={{ height: "50px", width: "50px" }} className="circle bg-white me-2" src={user?.profilePhoto ? user?.profilePhoto : img} alt="" />
              {user?.firstName + " " + user?.lastName}
              {/* <i className="fa fa-sort-down text-white float-end"></i> */}
            </a>
            {/* <ul
              id="acc-id"
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            > */}
            {/* <li className="px-4 py-3">
                <div
                  id="acc-btns-id"
                  className="btn-group w-100"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" className="btn">
                    "Online"
                  </button>
                  <span style={{ padding: "0 1px" }}></span>
                  <button type="button" className="btn">
                    "Invisible"
                  </button>
                </div>
              </li> */}
            {/* <li>
                <Link className="dropdown-item px-4" to="/find-work">
                  <div className="d-flex align-items-center">
                    <span style={{ marginLeft: "-5px" }}>
                      <i className="fa fa-user-circle fs-3"></i>
                    </span>
                    <div className="acc-cn ms-2">
                      <p>Name</p>
                      <p>Freelancer</p>
                    </div>
                  </div>
                </Link>
              </li> */}
            {/* <li>
                <Link
                  className="dropdown-item px-4 mb-1"
                  to="/home"
                // onClick={changeLayOut}
                >
                  <div className="d-flex align-items-center">
                    <span style={{ marginLeft: "-5px" }}>
                      <i className="fa fa-user-circle fs-3"></i>
                    </span>
                    <div className="acc-cn ms-2">
                      <p>Name</p>
                      <p>Client</p>
                    </div>
                  </div>
                </Link>
              </li> */}
            {/* </ul> */}
          </li>
          <li className="dropdown px-3">
            <a
              className={`nav-link active dropdown-toggle mt-2 pt-3 border-top-cn`}
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              "FindWork"
              <i className="fa fa-sort-down text-white float-end"></i>
            </a>
            <ul
              className="dropdown-menu sub-drop-cn"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  "FindWork"
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  "Saved Jobs"
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  "Proposals"
                </a>
              </li>
              <li>
                <Link className="dropdown-item" to={`/profile/${fbAuth.auth.currentUser?.uid}`}>
                  "Profile"
                </Link>
              </li>
              {/* <li>
                <a className="dropdown-item" href="#">
                  "My Stats"
                </a>
              </li> */}
              {/* <li>
                <a className="dropdown-item" href="#">
                  "Upwork Readiness Test"
                </a>
              </li> */}
              {/* <li>
                <a className="dropdown-item" href="#">
                  "My Project Dashboard"
                </a>
              </li> */}
            </ul>
          </li>
          <li className="dropdown px-3">
            <a
              className={`nav-link dropdown-toggle mt-2 pt-3 border-top-cn`}
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              "My Jobs"
              <i className="fa fa-sort-down text-white float-end"></i>
            </a>
            <ul
              className="dropdown-menu sub-drop-cn"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  "My Jobs"
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  "All Contracts"
                </a>
              </li>
              <li>
                <Link className="dropdown-item" to="/offers">
                  "Offerss"
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown px-3">
            <a
              className={`nav-link dropdown-toggle mt-2 pt-3 border-top-cn`}
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              "Reports"
              <i className="fa fa-sort-down text-white float-end"></i>
            </a>
            <ul
              className="dropdown-menu sub-drop-cn"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  "Overview"
                </a>
              </li>
              {/* <li>
                <a className="dropdown-item" href="#">
                  "My Reports"
                </a>
              </li> */}
              <li>
                <a className="dropdown-item" href="#">
                  "Lifetime Billings by Client"
                </a>
              </li>
              {/* <li>
                <a className="dropdown-item" href="#">
                  "Connects History"
                </a>
              </li> */}
              {/* <li>
                <a className="dropdown-item" href="#">
                  "Transaction History"
                </a>
              </li> */}
              {/* <li>
                <a className="dropdown-item" href="#">
                  "Certificate of Earnings"
                </a>
              </li> */}
            </ul>
          </li>
          <li className="nav-item px-3">
            <Link className={`nav-link mt-2 pt-3 border-top-cn`} to="/messages">
              "Messages"
            </Link>
          </li>
          {/* <li className="nav-item px-3">
            <a className={`nav-link mt-2 pt-3 border-top-cn`} href="#">
              "Help"
              <i className="fas fa-question float-end"></i>
            </a>
          </li> */}
          <li className="nav-item px-3">
            <NavLink className={`nav-link mt-2 pt-3 border-top-cn`} to="/notifications">
              "Notification"
              <i className="far fa-bell float-end"></i>
            </NavLink>
          </li>
          {/* <li className="nav-item px-3">
            <a className={`nav-link mt-2 pt-3 border-top-cn`} href="#">
              "Direct Contracts"
              <i
                className="far fa-paper-plane float-end"
                style={{ transform: "scaleX(-1)" }}
              ></i>
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a className={`dropdown-item mt-2 pt-3 border-top-cn`} href="#">
              <span>
                <i className="fa fa-cog"></i>
              </span>
              <span className="ps-3">Settings</span>
            </a>
          </li> */}
          <li className="nav-item pb-2" onClick={logout}>
            <a className={`dropdown-item mt-2 pt-3 border-top-cn`} href="#">
              <span>
                <i className="fas fa-sign-out-alt"></i>
              </span>
              <span className="ps-3">Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
