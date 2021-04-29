/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img from "../../../assets/svg/createProfileSubmit.svg";
import { userDataAction } from "./../../../Store/actions/userData";

export default function CreateProfileSubmit() {
  let user = useSelector((state) => state.userData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userDataAction());
  }, []);

  return (
    <>
      {console.log(user)}
      <section className="bg-white border rounded mt-3 pt-4">
        <div className="border-bottom ps-4 pb-3">
          <h4>Preview profile</h4>
        </div>
        <div className="px-4 my-4 row">
          <div className="col-md-9">
            <p>
              <strong>Looking good, {user.firstName}!</strong>
            </p>
            <p className="my-4">
              Make any necessary edits and then submit your profile. You can
              still edit it after you submit it.
            </p>
            <Link className="btn bg-upwork px-5" to="/find-work">
              Submit Profile
            </Link>
          </div>
          <div className="col-md-3 text-center">
            <img src={img} className="w-50" />
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="row">
          <div className="col-md-9">
            <div className="bg-white border rounded p-4">
              <div className="d-flex">
                <div style={{ maxWidth: "100px", maxHeight: "100px" }}>
                  <img
                    src={user.profilePhoto}
                    className="rounded-circle w-100"
                  />
                </div>
                <div className="mt-3 ms-3">
                  <h4>
                    {user.firstName + " "} {user.lastName}
                  </h4>
                  {/* <p><i className="fas fa-map-marker-alt me-3"></i>{user.location["city"] + ", "} <strong>{user.location["country"]}</strong></p> */}
                  <p>{new Date().toUTCString()}</p>
                </div>
              </div>
              <div className="mt-5">
                <h4>{user.title}</h4>
                <p>{user.overview}</p>
                <div>
                  <h5>{user.hourlyRate}</h5>
                  <span>Hourly Rate</span>
                </div>
              </div>
            </div>
            <div className="bg-white border rounded p-4 mt-5">
              <div className="border-bottom pb-3">
                <h4>Employment History</h4>
              </div>
              <div className="mt-4">
                {/* <h4>{user.company["companyName"]}</h4>
                <h5>{user.company["jobTitle"]}</h5> */}
              </div>
            </div>
            <div className="bg-white border rounded p-4 mt-5">
              <div className="border-bottom pb-3">
                <h4>Education</h4>
              </div>
              <div className="mt-4">
                <h4>{user.school}</h4>
              </div>
            </div>
            <div className="my-3 text-end">
              <Link className="btn bg-upwork px-5" to="/find-work">
                Submit Profile
              </Link>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="border-top" style={{ backgroundColor: "#F1F2F4" }}>
              <div className="border-bottom py-4">
                <h4>Location</h4>
                {/* <p>{user.location["city"] + ", "} <strong>{user.location["country"]}</strong></p> */}
              </div>
              <div className="mt-5">
                <h4>Language</h4>
                <p>English: {user.englishProficiency}</p>
                {/* <p>(Language): (Level)</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
