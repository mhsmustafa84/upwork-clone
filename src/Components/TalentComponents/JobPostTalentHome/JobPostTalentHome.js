/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useHistory } from "react-router-dom";

export default function JobPostTalentHome() {

  const { push } = useHistory();

  const clickHandler = () => {
    push("/job/");
  }

  return (
    <div className="row">
      <div onClick={clickHandler}>
        <div className="list-group-item">
          <div className="row align-items-center">
            <div className="col-lg-9 pt-lg-3">
              <a
                href="#"
                id="job-title-home-page"
                className="link-dark job-title-hover"
              >
                <p className="fw-bold ">Figma Prototype</p>
              </a>
            </div>
            <div className="col-lg-3">
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
                    className="far fa-heart"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="btn-group float-sm-end  px-lg-1">
                <button
                  type="button"
                  className="btn btn-light dropdown-toggle border border-1 rounded-circle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="far fa-thumbs-down" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      RSS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Atom
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p style={{ fontSize: "0.9em" }}>
            <span className="text-muted">
              <span className="fw-bold " id="contract-type">
                Fixed Price
              </span>
              <span>-</span>
              <span id="experience-level">Expert</span>
              <span>-</span>
              <span>Est. Budget:</span>
              <span id="client-budget">$200</span>- posted
              <span id="posting-time"> 4 Hours ago</span>
            </span>
          </p>
          <p id="job-description">
            Hi there - I'm looking to get help with my webinar presentation
            design. It's about 97 slides in total. I have examples of how I'd
            like certain slides to look, whereas others I'll leave it up to you.
            The demographic is adults
            <span id="dots">...</span>
            <span id="more">
              who want more out of life ages 25-35. Objective: Take the content
              on my presentation and design it so it gives viewers trust and
              appeal. Guidelines: 1. I'd like the colors to be dark, not light.
              2. I'd also like it to look young, fresh and hip and easily
              legible. 3. I have specific slides I'd like to look a certain way
              - I'll attach them for the chosen partner. 4. I am expecting
              revisions; I'll pay you hourly for revisions, and I'll pay you a
              flat rate for the entire project to start. Resources: 1. I'll
              provide you all the graphics/assets and any explanations you need
              2. I'll provide you with a sample webinar presentation that you
              can base your design ideas off of Accountabilities: 1. I'll likely
              have a few revisions as this is a somewhat complex presentation
              that I'll be doing live. Just want to set that expectation
              upfront. 2. Ask me when you aren't sure of the answer 3. I'd like
              it back within 5 days Consequences: I have another presentation to
              be designed and if this one goes well with you, I'll hire you for
              the other one too.
            </span>
            <span>
              <button
                id="seemorebutton"
                className="advanced-search-link "
              >
                more
              </button>
            </span>
          </p>
          <button
            type="button"
            className="btn btn-secondary btn-sm rounded-pill skills"
          >
            Training
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm rounded-pill skills"
          >
            Education presentation
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm rounded-pill skills"
          >
            Marketing
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm rounded-pill skills"
          >
            Microsof PowerPoint
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm rounded-pill skills"
          >
            Html
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm rounded-pill skills"
          >
            Css
          </button>
          <p style={{ fontSize: "0.9em" }} className="my-lg-1">
            <span className="text-muted">
              <span>Proposals: </span>
              <span className="fw-bold ">Less than </span>
              <span className="fw-bold " id="proposals-numbers">
                5
              </span>
            </span>
          </p>
          <p style={{ fontSize: "0.85em" }} className="my-lg-1 mb-lg-2">
            <span className="fw-bold " style={{ color: "#14bff4" }}>
              <i className="fas fa-check-circle primary" />
              {" "} Payment verified {" "}
            </span>
            <span className="text-muted">
              <span>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                {" "}
              </span>
              <span className="fw-bold "> $0 {" "}</span>
              <span> spent {" "}</span>
              <span className="fw-bold ">
                <i className="fas fa-map-marker-alt" /> United States
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
