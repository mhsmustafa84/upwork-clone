/* eslint-disable */
import React, { useState } from "react";
import DropDownList from "../../../../Components/TalentComponents/DropDownList Component/dropdown";
import { Link } from "react-router-dom";
export default function ConnectsHistory() {
  const [dropdown, setDropdown] = useState({
    label: "Choose The Connects Types",
    names: [
      "All connects",
      "All debits",
      "All credits",
      "New membership",
      "Applied to job",
      "Free Refunded",
      "Roll over",
      "Membership renewal",
      "membership upgrade",
      "Pormotional Expired",
      "other",
    ],
  });
  const [dropdown1, setDropdown1] = useState({
    label: "Choose The Dates",
    names: ["last 7 days", "last 30 days", "last 90 days"],
  });

  return (
    <>
      <div className="container card mt-5">
        <div className="row mb-sm-30 pt-3">
          <div className="col-sm-7 mb-3 ps-3 ">
            <h1 className="nowrap header--state-extra ">Connects History</h1>
          </div>
          <div className=" text-end col-sm-5">
            <Link
              className="btn bg-upwork"
              to="buyconnects"
              role="button"
              style={{
                backgroundColor: "#008329",
                color: "white",
                textDecoration: "none",
              }}
            >
              Buy Connects
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-5">
            <label className="mb-0 ps-5 mt-3 fw-bold">Connects Type</label>
            <div className="dropdown ms-3 mt-3"></div>
            <DropDownList dropdowndata={dropdown} />
          </div>
          <div className="col-md-6 col-sm-12 mb-5">
            <label className="mb-0 ps-5 mt-3 fw-bold">Date</label>
            <div className="dropdown ms-3 mt-3"></div>
            <DropDownList dropdowndata={dropdown1} />
          </div>
        </div>
        <>
          <div className="W-100%">
            <br />
          </div>
          <div className="row">
            <div className="connects-title mb-3 text-center text-muted">
              Available balance
            </div>
            <div className="mb-0 text-center text-primary">
              <span
                className="connects-balance--state-extra"
                style={{ color: "#37a000", fontSize: 30, fontWeight: "bold" }}
              >
                126
              </span>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="connects-title text-muted mt-3 mb-3 ">
              Tue, March 9
            </div>
            <div className="row">
              <div className="col-md-7">
                <button
                  className="btn -btn-default no-border d-flex cursor-pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <div className="up-avatar-40--size-extra ">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAYAAADj79JYAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAXKADAAQAAAABAAAAXAAAAABCwOslAAACUElEQVR4Ae3aMUoDURSF4TeDNppGI1gJNq7CwkJwBS7DyhW4Ais3ZOEqbFyAUZCYxpDIWL3BHMJM5p7hwZ/qeSXnJJ/XQcZUZ9e368TDJlDbmij6EwDcvAiAA24WMNex4YCbBcx1bDjgZgFzHRsOuFnAXMeGA24WMNex4YCbBcx1bDjgZgFzHRsOuFnAXMeGA24WMNex4YCbBcx1bDjgZgFzHRsOuFnAXMeGA24WMNex4WbwPXPfTnWXd/N0MG1/2Hcxq9LL02SnXOeTiwI/PFmlyemq5VNVZf2SlvVqW9RlfgG4+ecGOOBmAXMdGw64WcBcx4YDbhYw17HhgJsFzHVsuBl8tHspV/fzzm/14Lh9H6UJaGZ9sp4fx7nhNRr49GLZGXzTE+r9lIbK2pQ/9IxLytCiW/IA3wI09LcBH1p0S95o1/DZa/fqo/Nlaq7Z+WP1k9LnW/esPMN5Hu2V9vkr4ebh699/fBYfdeqT5UTOu7ik5BqGM+AG5LwC8FzDcAbcgJxXAJ5rGM6AG5DzCsBzDcMZcANyXgF4rmE4A25AzisAzzUM59HupfR5b9/vdVqvq9ZTm48rl/QoCrykz4GrJeCSomSC5oAHwapYwJVM0BzwIFgVC7iSCZoDHgSrYgFXMkFzwINgVSzgSiZoDngQrIoFXMkEzQEPglWxgCuZoDngQbAqFnAlEzQHPAhWxQKuZILmgAfBqljAlUzQHPAgWBULuJIJmgMeBKtiAVcyQXPAg2BVLOBKJmgOeBCsigVcyQTNAQ+CVbGAK5mg+S9uCylxERG10QAAAABJRU5ErkJggg=="
                      alt="plus sign"
                      className="up-avatar up-avatar-40"
                      style={{ width: 30 }}
                    />
                  </div>
                  <p className="ms-2">
                    Need to make updates to a theme in thinkific
                  </p>
                </button>
              </div>
            </div>
            <div className="col-md-5" />
          </div>
          <div className="row">
            <div className="col-md-7 text-muted ">cancelled job</div>
            <div className="col-md-5 text-end" style={{ color: "#008329" }}>
              +2
            </div>
          </div>
          <div className="row">
            <div className="connects-title text-muted mt-3 mb-3 ">
              Tue, March 15
            </div>
            <div className="row">
              <div className="col-md-7">
                <button
                  className="btn -btn-default no-border d-flex cursor-pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  <div className="up-avatar-40--size-extra mr-sm-20 mr-10">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAYAAADj79JYAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAXKADAAQAAAABAAAAXAAAAABCwOslAAABiElEQVR4Ae3csU1CUQCG0ftASUyQDSjdwA1cgXWsXM8NLN1ATEw0BoMdBeU7r/luByR8vJM/t2TaPx1Oo8MEVqxU6F8gcDyEwAPHAjjXwgPHAjjXwgPHAjjXwgPHAjjXwgPHAjjXwgPHAjjXwgPHAjjXwgPHAjjXwgPHAjjXwgPHAjjXwgPHAjjXwgPHAjjXwgPHAjjXwgPHAjjXwgPHAjjXwgPHAjjXwgPHAjjXwgPHAjjXwgPHAjjXwgPHAjh3g3sXuYe72/G8v794b+4XL+/H8fb1M3fm6vcvCr5bT+Nxu7n64+b44Nxc8nSHY/3AA8cCOLfoHf7xexqvn9/0kc/NJc/UH9RY/u5w6z0CDxwL4FwLDxwL4FwLDxwL4FwLDxwL4FwLDxwL4FwLDxwL4FwLDxwL4FwLDxwL4FwLDxwL4FwLDxwL4FwLDxwL4FwLDxwL4FwLDxwL4FwLDxwL4FwLDxwL4FwLDxwL4FwLDxwL4FwLDxwL4FwLDxwL4FwLDxwL4FwLx+B/OLQTI92l+1cAAAAASUVORK5CYII="
                      alt="minus sign"
                      className="up-avatar up-avatar-40"
                      style={{ width: 30 }}
                    />
                  </div>
                  <p className="ms-3">Need small wordpress website</p>
                </button>
              </div>
            </div>
            <div className="col-md-5" />
          </div>
          <div className="row">
            <div className="col-md-7 text-muted ">Applied to job</div>
            <div className="col-md-5 text-end" style={{ color: "red" }}>
              -2
            </div>
          </div>
          <div className="row">
            <div className=" d-md-block col-md-12 text-center">
              <button
                className="btn btn-light mb-3 "
                type="button"
                style={{ width: 200, backgroundColor: "white", color: "gray" }}
              >
                show more
              </button>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {/* Modal */}
          <div
            className="modal fade "
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Details
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <h4 className="mb-2">Job Cancelled</h4>
                  <h5>Job Post Title</h5>
                  <p style={{ color: "#37a000" }}>
                    {" "}
                    need to make update to the theme{" "}
                  </p>
                  <div className="row">
                    <div className="col-4">
                      Connect amounts
                      <div
                        className="connects-balance--state-extra ms-2"
                        style={{
                          color: "#37a000",
                          fontSize: 30,
                          fontWeight: "bold",
                        }}
                      >
                        +2
                      </div>
                    </div>
                    <div className="col-8">
                      Balance after Transaction
                      <div
                        className="connects-balance--state-extra1 ms-2"
                        style={{
                          color: "black",
                          fontSize: 30,
                          fontWeight: "bold",
                        }}
                      >
                        50
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    style={{ backgroundColor: "#37a000" }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade  "
            id="exampleModal1"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModal1Label">
                    Details
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <h4 className="mb-2">Job Cancelled</h4>
                  <h5>Job Post Title</h5>
                  <p style={{ color: "#37a000" }}>
                    {" "}
                    need to make update to the theme{" "}
                  </p>
                  <div className="row">
                    <div className="col-4">
                      Connect amounts
                      <div
                        className="connects-balance--state ms-2"
                        style={{
                          color: "red",
                          fontSize: 30,
                          fontWeight: "bold",
                        }}
                      >
                        -2
                      </div>
                    </div>
                    <div className="col-8">
                      Balance after Transaction
                      <div
                        className="connects-balance2--state ms-2"
                        style={{
                          color: "black",
                          fontSize: 30,
                          fontWeight: "bold",
                        }}
                      >
                        8
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    style={{ backgroundColor: "#37a000" }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}
