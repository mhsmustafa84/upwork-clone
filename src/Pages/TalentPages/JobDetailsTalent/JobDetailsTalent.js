/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router";
// import ClientRecentHistory from "../../../Components/TalentComponents/ClientRecentHistory/ClientRecentHistory";
import JobDescriptionJobDetails from "../../../Components/TalentComponents/JobDescriptionJobDetails/JobDescriptionJobDetails";
import RightSidebarJobDetails from "../../../Components/TalentComponents/RightSidebarJobDetails/RightSidebarJobDetails";
// import OtherOpenJobsByThisClient from "../../../Components/TalentComponents/OtherOpenJobsByThisClient/OtherOpenJobsByThisClient";
// import SimilarJobsOnUpwork from "./../../../Components/TalentComponents/SimilarJobsOnUpwork/SimilarJobsOnUpwork";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import Loader from "../../../Components/SharedComponents/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { talentDataAction } from "../../../Store/actions/talentData";


export default function JobDetailsTalent() {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);
  const user = useSelector((state) => state.talentData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(talentDataAction());
    db.collection("job").doc(id).get().then(res => {
      setJobData(res.data())
      console.log("sasa");
    })
  }, [])

  const { t } = useTranslation();

  return (
    <>
      {jobData !== null ?
        <div className="container-md container-fluid-sm my-lg-4 my-sm-4 py-xs-5">
          <div className="d-lg-block">
            <div className="row my-lg-4 px-0 mx-0 d-lg-block d-none py-xs-5">
              {
                user.accepted === false &&
                <div class="alert alert-warning d-flex align-items-center mt-4" role="alert">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  <div>
                    Your profile is under review, so you can't submit a proposal yet.
                </div>
                </div>
              }
              <h3>{t("Job details")}</h3>
            </div>
            <div className="row ">
              <JobDescriptionJobDetails job={jobData} />
              <RightSidebarJobDetails job={jobData} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-xs-12">
              {/* <ClientRecentHistory /> */}
              {/* <OtherOpenJobsByThisClient /> */}
              {/* <SimilarJobsOnUpwork /> */}
            </div>
          </div>
        </div> : <Loader />
      }

    </>
  );
}

