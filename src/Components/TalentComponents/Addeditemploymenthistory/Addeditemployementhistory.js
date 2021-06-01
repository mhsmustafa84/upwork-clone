/* eslint-disable */
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { talentDataAction } from "../../../Store/actions/talentData";
import { useTranslation } from "react-i18next";

export default function AddandeditEmployementHistory() {
  const user = useSelector((state) => state.talentData);
  const [EmpTitle, setEmpTitle] = useState("");
  const [EmpCompany, setEmpCompany] = useState("");
  const [EmpStillWork, setEmpStillWork] = useState(false);
  const [EmpList, setEmpList] = useState([]);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(talentDataAction());
  }, [user]);

  const { t } = useTranslation();
  const EditEmploymentHistoryonChange = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    switch (name) {
      case "EmpTitle":
        setEmpTitle(val);
        break;
      case "EmpCompany":
        setEmpCompany(val);
        break;
      case "EmpStillWork":
        setEmpStillWork(val);
        break;
      default:
        break;
    }
  };




  const UpdateEditEmployment = () => {
    if (EmpTitle != "" && EmpCompany != "") {
      let arr4 = [...EmpList, { jobTitle: EmpTitle, companyName: EmpCompany, stillWork: EmpStillWork }];
      setEmpList(arr4);
      console.log(EmpList);
      updateUserData("talent", { company: [...arr4] })
    }
  }

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    @import url(//db.onlinewebfonts.com/c/3def92f7b2ad644bd382798ecc8ca4c7?family=Canela);\n     {\n        .container {\n             ;\n        }\n    }\n\n    * {\n        margin: 0;\n        padding: 0;\n        \n\n    }\n    body{\n        ;\n\n    }\n",
        }}
      />
      <div className="container card mb-3 mt-5">
        <div className="row mt-3">
          <div className="col">
            <h2 className="mb-3">{t("Employment history")}</h2>
          </div>
          <div className="col d-flex justify-content-end">
            {/* <button
              type="button"
              className="btn btn-default me-4 d-flex justify-content-center border rounded-circle"
              style={{
                width: 30,
                height: 30,
                textAlign: "center",
                paddingTop: 3,
                paddingBottom: 3,
              }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
            >
              <div>
                <i className="fas fa-plus" />
              </div>
            </button> */}
          </div>
          <hr />
          <div className="row">
            {/*  employment skills */}
            <div className="col-md-6">
              <h5>{user?.company?.jobTitle}</h5>
              <p className="mb-0 ">
                {user?.company?.companyName}
              </p>
              <p className="mb-2 ">
                {user?.company?.stillWork ? "present" : ""}
              </p>

              {/* <button
                className="btn btn-link mb-3 border rounded-border"
                style={{ textDecoration: "none", color: "#008329" }}
              >
                {t("more")}
              </button> */}
            </div>
            {/* icons */}
            <div className="col-md-6 d-flex justify-content-end">
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
                data-bs-target="#editEmploymentHistory"
              >
                <div>
                  <i className="fas fa-pen" />
                </div>
              </button>
              {/* <button
                type="button"
                className="btn btn-default d-flex justify-content-center border rounded-circle mb-3"
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
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="editEmploymentHistory"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Employment
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
                    className="form-label fw-bold"
                  >
                    Company
                  </label>
                  <input
                    onChange={EditEmploymentHistoryonChange}
                    name="EmpCompany"
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput2"
                    className="form-label fw-bold"
                  >
                    Title
                  </label>
                  <input
                    onChange={EditEmploymentHistoryonChange}
                    name="EmpTitle"
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput2"
                  />
                </div>
                <div className="input-group mb-3">

                  <div className="input-group-text ">

                    <input
                      onChange={EditEmploymentHistoryonChange}
                      name="EmpStillWork"
                      className="form-check-input mt-0 "

                      type="checkbox"

                      value=""

                      aria-label="Checkbox for following text input"

                    />

                      I currently worked here

                    </div>

                </div>

                {/* <div className="mb-3">
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
                </div> */}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-link border rounded-border "
                data-bs-dismiss="modal"
                style={{
                  color: "#008329",
                  backgroundColor: "white",
                  textDecoration: "none",
                }}
              >
                Cancel
              </button>
              <button
                onClick={UpdateEditEmployment}
                type="button"
                className="btn btn-default border rounded-border"
              >
                EditEmployment{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
