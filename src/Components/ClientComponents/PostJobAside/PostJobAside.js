import React from "react";
import { Link } from "react-router-dom";
import "./PostJobAside.css";
import { useTranslation } from "react-i18next";
export default function PostJobAside() {
  const { t } = useTranslation();
  return (
    <aside>
      <ul>
        <li className="border-start border-4 border-success py-1 my-3">
          <Link to="/post-job/title" className="d-flex justify-content-between">
            <span className="text-dark">
              <i className="fas fa-pencil-alt mx-4"></i>
              {t("Title")}
            </span>
            <i className="fas fa-check-circle"></i>
          </Link>
        </li>
        <li className="border-start border-4 border-success py-1 my-3">
          <Link
            to="/post-job/description"
            className="d-flex justify-content-between"
          >
            <span className="text-dark">
              <i className="fas fa-edit mx-4"></i>
              {t("Description")}
            </span>
            <i className="fas fa-check-circle"></i>
          </Link>
        </li>
        <li className="border-start border-4 border-success py-1 my-3">
          <Link
            to="/post-job/details"
            className="d-flex justify-content-between"
          >
            <span className="text-dark">
              <i className="fas fa-list-alt mx-4"></i>
              {t("Details")}
            </span>
            <i className="fas fa-check-circle"></i>
          </Link>
        </li>
        <li className="border-start border-4 border-success py-1 my-3">
          <Link
            to="/post-job/expertise"
            className="d-flex justify-content-between"
          >
            <span className="text-dark">
              <i className="fas fa-tools mx-4"></i>
              {t("Expertise")}
            </span>
            <i className="fas fa-check-circle"></i>
          </Link>
        </li>
        <li className="border-start border-4 border-success py-1 my-3">
          <Link
            to="/post-job/visibility"
            className="d-flex justify-content-between"
          >
            <span className="text-dark">
              <i className="fas fa-user-clock mx-4"></i>
              {t("Visibility")}
            </span>
            <i className="fas fa-check-circle"></i>
          </Link>
        </li>
        <li className="border-start border-4 border-success py-1 my-3">
          <Link
            to="/post-job/budget"
            className="d-flex justify-content-between"
          >
            <span className="text-dark">
              <i className="fas fa-search-dollar mx-4"></i>
              {t("Budget")}
            </span>
            <i className="fas fa-check-circle"></i>
          </Link>
        </li>
        <li className="border-start border-4 border-success py-1 my-3">
          <Link
            to="/post-job/review"
            className="d-flex justify-content-between"
          >
            <span className="text-dark">
              <i className="fas fa-check mx-4"></i>
              {t("Review")}
            </span>
            <i className="fas fa-check-circle"></i>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
