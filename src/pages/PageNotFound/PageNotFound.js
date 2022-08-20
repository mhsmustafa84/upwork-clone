import React from "react";
import { useHistory } from "react-router";

export default function PageNotFound() {
  const { goBack } = useHistory();
  return (
    <>
      <div
        className="container"
        style={{ paddingTop: "7em", paddingBottom: "8em" }}
      >
        <div className="row">
          <div className="col-md-11 col-md-offset-1 text-center">
            <svg
              viewBox="0 0 145 130"
              xmlns="http://www.w3.org/2000/svg"
              width="145"
              height="130"
              className="mx-auto d-block"
            >
              <circle cx="72.4" cy="65" fill="#1d4354" r="64.2"></circle>
              <path
                d="M33.4 100.6l49.1-75.8 31.6 9.7-6.3 67.5z"
                fill="#6fda44"
              ></path>
              <ellipse
                cx="70.3"
                cy="102.2"
                fill="#34ba08"
                rx="37.5"
                ry="9.4"
              ></ellipse>
              <path
                d="M58.5 76.7l35.8-9.9 5.9 21.5c.1.5-.2 1.1-.7 1.2L65.7 99c-.5.1-1.1-.2-1.2-.7l-6-21.6z"
                fill="#fff"
              ></path>
              <path
                d="M94.9 68.8l-35.8 9.9-.8-2.9c-.1-.5.2-1.1.7-1.2l33.9-9.3c.5-.1 1.1.2 1.2.7l.8 2.8z"
                fill="#1d4354"
              ></path>
              <path
                d="M65.6 84c-.3 0-.6-.2-.7-.6s.1-.8.5-.9l26.1-7.4c.4-.1.8.1.9.5.1.4-.1.8-.5.9L65.6 84zM66.5 87.3c-.4 0-.8-.3-.8-.7 0-.4.2-.7.6-.8l19.5-5.5c.4-.1.8.1 1 .5s-.1.8-.5 1h-.1l-19.5 5.5h-.2zM67.4 90.6c-.3 0-.6-.2-.7-.6s.1-.8.5-.9l19.5-5.5c.4-.1.8.1 1 .5s-.1.8-.5 1h-.1l-19.5 5.5h-.2z"
                fill="#c4c4c4"
              ></path>
              <ellipse
                cx="100.6"
                cy="25.6"
                fill="#33637a"
                rx="11.6"
                ry="38.2"
                transform="rotate(-70.141 100.641 25.577)"
              ></ellipse>
              <path
                d="M118.5 28.3c-1.1 2.9-9.3 2.3-18.3-1.1S84.6 19 85.9 15.7c3.3-9.1 13.3-13.8 22.4-10.5s13.8 13.3 10.5 22.4c-.1.2-.2.5-.3.7"
                fill="#fff"
              ></path>
              <circle cx="102.5" cy="20.1" fill="#f3756c" r="2.6"></circle>
              <circle cx="61.8" cy="76" fill="#fff" r=".5"></circle>
              <circle cx="65" cy="75.2" fill="#fff" r=".5"></circle>
              <circle cx="68.1" cy="74.3" fill="#fff" r=".5"></circle>
            </svg>
            <h2 className="m-lg-top m-md-bottom text-muted">
              This page doesn't exist.
              </h2>
            <p className="text-muted m-sm-bottom">
              Please <button className="btn upw-c-cn p-0" onClick={goBack}>return</button> to
                the previous page or visit <a href="/">Upwork.com</a>
            </p>
            <small className="text-muted">Error 404 (OS)</small>
          </div>
        </div>
      </div>
    </>
  );
}
