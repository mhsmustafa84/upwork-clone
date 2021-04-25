/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ImgWithActiveStatus from "./../../../Components/ClientComponents/ImgWithActiveStatus/ImgWithActiveStatus";


export default function ReviewProposalsCard() {
  return (
    <div>
      <div className="row border border-1">
        <div className="col-lg-1 pt-lg-3">
          <ImgWithActiveStatus />
        </div>
        <div className="col-lg-6 pt-lg-3 mx-3">
          <a
            href
            id="job-title-home-page "
            className="link-dark job-title-hover "
          >
            <p className="fw-bold text-success">Anva D.</p>
          </a>
          <a href id="job-title-home-page " className="link-dark">
            <p className="fw-bold ">Youtube Thumbnail designer</p>
          </a>
          <span className="text-muted">Poland</span>
          <div className="row py-3">
            <div className="col">
              <span className="fw-bold">$30.00</span>
              <span className="text-muted"> /hr</span>
            </div>
            <div className="col">
              <span className="fw-bold">$30</span> +{" "}
              <span className="text-muted"> earned</span>
            </div>
          </div>
        </div>
        <div className="col-lg-2 py-3">
          <div className="btn-group float-sm-end px-lg-1">
            <button
              type="button"
              className="btn btn-light dropdown-toggle border border-1 rounded-circle collapsed"
              data-toggle="collapse"
              data-target="#collapse"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <i
                className="far fa-thumbs-up"
                aria-hidden="true"
                onclick="this.classList.toggle('fas')"
              />
            </button>
          </div>
          <div className="btn-group dropstart float-sm-end  px-lg-1">
            <button
              type="button"
              className="btn btn-light dropdown-toggle border border-1 rounded-circle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="far fa-thumbs-down" />
            </button>
            <ul className="dropdown-menu ">
              <li>
                <a className="dropdown-item" href="#">
                  Candidate will not be notified
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1 py-3">
          <button type="button" className="btn bg-white btn-outline-secondary">
            <span className="text-success fw-bold">Messages</span>
          </button>
        </div>
        <div className="col-1 py-3">
          <button type="button" className="btn btn-success px-5">
            Hire
          </button>
        </div>

        <div className="col-lg-1 pt-lg-3"></div>
        <div className="col-lg-10 pt-lg-3 mx-3">
          <p className="text-muted">
            <span>
              <i className="fas fa-star" /> Specialized in
            </span>
            <span> Graphic Design</span>
          </p>
          <p id="Cover-Letter">
            <span className="fw-bold">Cover Letter - </span>
            Hi, I like how you described what you're looking for - it seems to
            be an exciting project! What's your main goal? Do you have any extra
            wishes? Best wishes, Anna Dembov P.S. https://behance.net/annadembov
            https://www.linkedin.com/in<span id="dots">...</span>
            <span id="more">
              /anna-dembov-91a32b1b3
            </span>
          </p>
        </div>
      </div>

    </div>
  )
}
