/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AllContractsBottomSection() {
  const { t } = useTranslation();
  return (
    <div className="text-center">
      <svg
        className="py-4 mt-5"
        width="145px"
        role="img"
        viewBox="0 0 145 130"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="69.4" cy="65" fill="#1d4354" r="64.5"></circle>
        <path
          d="M7.6 83.4c7.9 26.6 32.6 46.1 61.8 46.1 29.2 0 53.9-19.4 61.8-46.1H7.6z"
          fill="#33637a"
        ></path>
        <path
          d="M89.4 110.8H35.2c-.5 0-1-.4-1-1V20.2c0-.5.4-1 1-1h68.4c.5 0 1 .4 1 1v89.6c0 .5-.4 1-1 1H89.4z"
          fill="#fff"
        ></path>
        <g fill="#b2b2b2">
          <path d="M91.6 37.9H47c-.6 0-1-.4-1-1s.4-1 1-1h44.7c.6 0 1 .4 1 1s-.5 1-1.1 1zM91.6 45.8H47c-.6 0-1-.4-1-1s.4-1 1-1h44.7c.6 0 1 .4 1 1s-.5 1-1.1 1zM67.3 59.4H47c-.6 0-1-.4-1-1s.4-1 1-1h20.4c.6 0 1 .4 1 1s-.5 1-1.1 1zM68.3 83.1H47c-.6 0-1-.4-1-1s.4-1 1-1h21.4c.6 0 1 .4 1 1s-.5 1-1.1 1zM67 67.3H47c-.6 0-1-.4-1-1s.4-1 1-1h20c.6 0 1 .4 1 1s-.4 1-1 1zM67 75.2H47c-.6 0-1-.4-1-1s.4-1 1-1h20c.6 0 1 .4 1 1s-.4 1-1 1z"></path>
        </g>
        <path
          d="M46.8 96.4c-.4 0-.9-.1-1.3-.3-.5-.3-.7-.9-.4-1.4.3-.5.9-.7 1.4-.4.5.3 1.3-.1 1.7-.6.5-.6.7-1.5 1-2.4l.1-.3c.3-1.2.8-2.5 1.8-3.4.7-.6 1.5-.9 2.3-.8 1.9.2 2.6 2.3 2.6 4v.3c0 .9 0 1.8.3 2.3.4-.2.8-.6 1.1-1.1l.2-.2c.5-.6 1.5-1.3 2.6-1.3.6 0 1.2.3 1.6.7.2.3.4.6.5.8 0 .1.1.1.1.2H75.3c.6 0 1 .4 1 1s-.4 1-1 1H62.6c-.3 0-.8 0-1.2-.3-.5-.3-.8-.8-.9-1.2 0-.1-.1-.3-.1-.3-.1 0-.7.2-1.1.6l-.2.2c-.7.8-1.7 2-3.2 1.8-.2 0-.3-.1-.5-.2-1.3-1-1.3-2.7-1.3-4.1v-.3c0-1-.3-2-.9-2-.2 0-.5.1-.7.3-.6.5-.9 1.3-1.2 2.4l-.3.4c-.3 1-.6 2.2-1.3 3.1-.6.8-1.7 1.5-2.9 1.5z"
          fill="#b2b2b2"
        ></path>
        <path
          d="M138.5 30.6c-2.1-2.1-5.5-2.1-7.6 0l-.6.6-40.8 42.7 5.7 5.7L138 38.9l.6-.6c2-2.2 2-5.6-.1-7.7z"
          fill="#6fda44"
        ></path>
        <path
          d="M91 84c-.7 1.2-2.8 3.3-3.2 6.8-.5-.2-7.1-.7-11.6 3.9l-.6-.6-.5-.5-.6-.6c4.6-4.6 4-11.1 3.9-11.6 3.6-.4 5.6-2.5 6.8-3.3.4-.2.8-.5 1.1-.9l2.3-2.3 5.6 5.6-2.3 2.3L91 84z"
          fill="#e0e0e0"
        ></path>
        <path
          d="M88.614 74.97l5.586 5.587-2.758 2.758-5.586-5.586z"
          fill="#e0e0e0"
        ></path>
        <ellipse
          cx="83.3"
          cy="85.8"
          fill="#c4c4c4"
          rx="1.5"
          ry="1.5"
          transform="rotate(-45.001 83.339 85.829)"
        ></ellipse>
        <path
          d="M92.5 82.8l-6.1-6.1c-.2-.2-.2-.6 0-.8l2.2-2.2c.2-.2.6-.2.8 0l6.1 6.1c.2.2.2.6 0 .8l-2.2 2.2c-.3.2-.6.2-.8 0z"
          fill="#34ba08"
        ></path>
      </svg>
      <h3>{t("You haven't started any contracts yet.")}</h3>
      <h3>
        <Link  to="/post-job" className="text-success">
          {t("Post a job")}
        </Link>
        {t("or")}
        <a href="#" className="text-success">
          {t("check out who's applied to your existing job posts.")}
        </a>
      </h3>
    </div>
  );
}
