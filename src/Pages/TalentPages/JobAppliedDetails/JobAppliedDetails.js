/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router";
import JobDescriptionJobDetails2 from "../../../Components/TalentComponents/JobDescriptionJobDetails2/JobDescriptionJobDetails2";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import RightSidebarJobDetails2 from "../../../Components/TalentComponents/RightSidebarJobDetails2/RightSidebarJobDetails2";

export default function JobAppliedDetails() {
  const { id } = useParams();
  const [jobData, setJobData] = useState({});

  useEffect(() => {
    db.collection("job")
      .doc(id)
      .get()
      .then((res) => {
        setJobData(res.data());
      });
  }, []);
  const { t } = useTranslation();

  return (
    <div className="container-md container-fluid-sm my-lg-4 my-sm-4 py-xs-5">
      <div className="d-lg-block">
        <div className="row my-lg-4 px-0 mx-0 d-lg-block d-none py-xs-5">
          <h3>{t("Job details")}</h3>
        </div>
        <div className="row ">
          <JobDescriptionJobDetails2 job={jobData} />
          <RightSidebarJobDetails2 job={jobData} />
        </div>
      </div>
    </div>
  );
}
