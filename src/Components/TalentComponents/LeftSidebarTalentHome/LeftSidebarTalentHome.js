/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDataAction } from "../../../Store/actions/userData";

export default function LeftSidebarTalentHome() {
  let user = useSelector((state) => state.userData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userDataAction());
  }, []);
  return (
    <div className="col d-none d-lg-block">
      <ul id="list-homepage" className="list-group sidebar-homebage-ul mb-lg-4">
        <li
          className="list-group-item sidebar-homebage-ul-li"
          aria-current="true"
        >
          <a
            href="#"
            className=" list-group-item-action sidebar-homebage-ul-li-aa activeside"
            aria-current="true"
          >
            My Feed
          </a>
        </li>
        <li
          className="list-group-item sidebar-homebage-ul-li"
          aria-current="true"
        >
          <a
            href="#"
            className=" list-group-item-action sidebar-homebage-ul-li-aa"
            aria-current="true"
          >
            Best Matches
          </a>{" "}
          <span className="hotspot">
            <button className="hotspot__btn" />
          </span>
        </li>
        <li
          className="list-group-item sidebar-homebage-ul-li"
          aria-current="true"
        >
          <a
            href="#"
            className=" list-group-item-action sidebar-homebage-ul-li-aa"
            aria-current="true"
          >
            Recommended
          </a>
        </li>
      </ul>
      <h5 className="mb-lg-2 display-inline-block">My Categories</h5>
      <ul
        className="list-group sidebar-homebage-ul mb-lg-3 "
        style={{ fontSize: "0.9em" }}
      >
        <li
          className="list-group-item sidebar-homebage-ul-li "
          aria-current="true"
        >
          <a
            href="#"
            className=" list-group-item-action advanced-search-link"
            aria-current="true"
          >
            {user.jobCategory}
          </a>
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
      <span className="btn-group float-sm-start px-lg-1">
        <button
          type="button"
          className="btn btn-light dropdown-toggle border border-1 rounded-circle collapsed"
          data-toggle="collapse"
          data-target="#collapse"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-pen" aria-hidden="true" />
        </button>
      </span>
    </div>
  );
}
