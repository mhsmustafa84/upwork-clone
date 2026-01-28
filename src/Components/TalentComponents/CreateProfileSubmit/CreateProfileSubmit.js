/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import img from "../../../assets/svg/createProfileSubmit.svg";
import { useEffect } from "react";
import { talentDataAction } from './../../../Store/actions/talentData';
import { useTranslation } from "react-i18next";



export default function CreateProfileSubmit() {
  const lang = useSelector(state => state.lang);
  const { t } = useTranslation();

  const user = useSelector(state => state.talentData);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(talentDataAction());
  }, [])

  return (
    <>
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
          </div>
          <div className="col-md-3 text-center">
            <img src={img} className="w-50" alt="" />
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="row">
          <div className="col-md-9">
            <div className="bg-white border rounded p-4">
              <div className="d-flex">
                <div style={{ width: "100px", height: "100px" }}>
                  <img
                    src={user.profilePhoto}
                    className="rounded-circle w-100 h-100"
                    alt=""
                  />
                </div>
                <div className="mt-3 ms-3">
                  <h4>
                    {user.firstName + " "} {user.lastName}
                  </h4>
                  <p><i className="fas fa-map-marker-alt me-3"></i>{user.location?.city + ", "} <strong>{user.location?.country}</strong></p>
                  <p>{new Date().toLocaleTimeString()}</p>
                </div>
              </div>
              <div className="mt-5">
                <h4>{user.title}</h4>
                <p>{user.overview}</p>
              </div>
            </div>
            <div className="bg-white border rounded p-4 mt-5">
              <div className="border-bottom pb-3">
                <h4 className="text-muted">Employment History</h4>
              </div>
              {user?.company?.map(e =>
                <div className="mt-4">

                  <h4>{e?.companyName}</h4>
                  <h5>{e?.jobTitle}</h5>
                  {e?.stillWork ? <p>Still Work</p> : null}
                </div>
              )}
            </div>
            <div className="bg-white border rounded p-4 mt-5">
              <div className="border-bottom pb-3">
                <h4 className="text-muted">Education</h4>
              </div>
              <div className="mt-4">
                <h4>{user?.education?.school}</h4>
                <h5>{user?.education?.areaOfStudy}</h5>
                <h6>{user?.education?.degree}</h6>
                <h6>{user?.education?.gradYear}</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="border-top" style={{ backgroundColor: "#F1F2F4" }}>
              <div className="border-bottom py-4">
                <h4 className="text-muted">Location</h4>
                <p>{user.location?.country + ", "} <strong>{user.location?.city}</strong></p>
              </div>
              <div className="mt-5">
              <h4 className="fw-bold">{t("Languages")}</h4>
                  <p>{t("English")} {" : "} {lang === "ar" ? user.englishProficiencyAr : user.englishProficiency}</p>
                  {user?.otherLanguages?.map(langItem => <p>
                    {lang === "ar" ? [langItem.languageAr, ' ', ':', ' ', langItem.langProfAr] : [langItem.language, ' ', ':', ' ', langItem.langProf]}
                  </p>)}
              </div>
              <div className="border-top pt-5">
                <h5>
                  <span className="text-muted">Hourly rate: </span>
                  {t("$")} {user?.hourlyRate} \ {t("hr")}
                </h5>
                <h5 className="my-3">
                  <span className="text-muted">Category: </span>
                  {lang === "ar"?user.jobCategoryAr : user.jobCategory}
                </h5>
                <h5 className="my-">
                  <span className="text-muted">Experience level: </span>
                  {lang === "ar"?user.expertiseLevelAr : user.expertiseLevel}
                </h5>
              </div>
            </div>
          </div>
          <div className="my-3 text-start mt-5">
            <Link className="btn bg-upwork px-5" to="/find-work">
              Submit Profile
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}