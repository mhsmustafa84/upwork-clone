import React from "react";
export default function AddandeditExperience() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    @import url(//db.onlinewebfonts.com/c/3def92f7b2ad644bd382798ecc8ca4c7?family=Canela);\n     {\n        .container {\n             ;\n        }\n    }\n\n    * {\n        margin: 0;\n        padding: 0;\n        \n\n    }\n    body{\n        ;\n\n    }\n",
        }}
      />
      <div className="container card ">
        <div className="row mt-2">
          <div className="col-md-8">
            <h2 className="mb-3">Other Experiences</h2>
          </div>
          <div className="col-md-4 d-flex justify-content-end ">
            <button
              type="button"
              className="btn btn-default me-4  d-flex justify-content-center border rounded-circle"
              style={{
                width: 30,
                height: 30,
                textAlign: "center",
                paddingTop: 3,
                paddingBottom: 3,
              }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <div>
                <i className="fas fa-plus" />
              </div>
            </button>
          </div>
          <hr />
          <div className="row">
            {/* soft skills */}
            <div className="col-md-6">
              <h5>Softskills</h5>
              <p style={{ fontFamily: "Gotham SSm" }} className="mb-0">
                Trainee at Marketing with Amir (MWA) course (2019)
              </p>
              <p style={{ fontFamily: "Gotham SSm" }} className="mb-0">
                Trainee at Presentation skills CDC_SUV (2018)
              </p>
              <p style={{ fontFamily: "Gotham SSm" }} className="mb-0">
                Trainee at Completed TIEC Capacity Building program for
                universities at InnovEgypt
              </p>
              <button
                className="btn btn-link border rounded-border mb-3"
                style={{ textDecoration: "none", color: "#008329" }}
              >
                more
              </button>
            </div>
            {/* icons */}
            <div className="col-md-6 d-flex justify-content-end  ">
              <button
                type="button"
                className="btn btn-default me-2 d-flex justify-content-center border rounded-circle"
                style={{
                  width: 30,
                  height: 30,
                  textAlign: "center",
                  paddingTop: 3,
                  paddingBottom: 3,
                }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                <div>
                  <i className="fas fa-pen" />
                </div>
              </button>
              <button
                type="button"
                className="btn btn-default d-flex  justify-content-center border rounded-circle"
                style={{
                  width: 30,
                  height: 30,
                  textAlign: "center",
                  paddingTop: 3,
                  paddingBottom: 3,
                }}
              >
                <div>
                  <i className="far fa-trash-alt" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* add experiences */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add other experiences
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={5}
                    defaultValue={""}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-link "
                data-bs-dismiss="modal"
                style={{
                  color: "#008329",
                  backgroundColor: "white",
                  textDecoration: "none",
                }}
              >
                Cancel
              </button>
              <button type="button" className="btn btn-default border rounded">
                Save{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* edit experience */}
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit other experiences
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={5}
                    defaultValue={""}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-link "
                data-bs-dismiss="modal"
                style={{
                  color: "#008329",
                  backgroundColor: "white",
                  textDecoration: "none",
                }}
              >
                Cancel
              </button>
              <button type="button" className="btn btn-default border rounded">
                Save{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
