/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { talentDataAction } from "../../../Store/actions/talentData";
import { useTranslation } from "react-i18next";

export default function AddandeditExperience() {
  const user = useSelector((state) => state.talentData);
  const [otherExperienceSubject, setotherExperienceSubject] = useState("");
  const [otherExperienceDescription, setotherExperienceDescription] = useState("");
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(talentDataAction());
  }, []);


  const updateAddandeditExperience = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    switch (name) {
      case "subject":
        setotherExperienceSubject(val);

        break;
      case "description":
        setotherExperienceDescription(val);

        break;
      default:
        break;
    }
  };

  // const UpdateEditAddandeditExperience = () => {
  //   updateUserData("talent", { otherExperience: [{ description: otherExperienceDescription, subject: otherExperienceSubject }] })
  // }


  return (
    <>
      {/* <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    @import url(//db.onlinewebfonts.com/c/3def92f7b2ad644bd382798ecc8ca4c7?family=Canela);\n     {\n        .container {\n             ;\n        }\n    }\n\n    * {\n        margin: 0;\n        padding: 0;\n        \n\n    }\n    body{\n        ;\n\n    }\n",
        }}
      /> */}
      <div className="container card my-5">
        <div className="row mt-3">
          <div className="col-md-8">
            <h2 className="mb-3">{t("Other Experiences")}</h2>
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
              <h5>{t("Softskills")}</h5>
              <div>
                {user?.otherExperience?.map((task, index) => (
                  <div className="row">
                    <div className="col-8">
                      <p
                        key={index}
                        className="mb-0"
                      >
                        {task}
                      </p>
                    </div>
                  </div>
                ))}

                <button
                  className="btn btn-link border rounded-border mb-3"
                  style={{ textDecoration: "none", color: "#008329" }}
                >
                  {t("more")}
                </button>
              </div>
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
                    onChange={updateAddandeditExperience}
                    name="subject"
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
                    onChange={updateAddandeditExperience}
                    name="description"
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
