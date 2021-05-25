import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import ProposalCard from "../../../Components/TalentComponents/ProposalCard/ProposalCard";
import ProposalCard2 from "../../../Components/TalentComponents/ProposalCard2/ProposalCard2";
import { useEffect } from "react";
import { auth, db, storage } from "../../../firebase";

export default function Proposals(props) {
  const { t } = useTranslation();
  const [jobData, setJobData] = useState({});
  const [talentData, setTalentData] = useState([]);
  const [talentDatas, setTalentDatas] = useState([]);
  useEffect(() => {
    db.collection("talent")
      .doc(auth.currentUser.uid)
      .collection("jobProposal")
      .where("status", "==", "proposal")
      .get()
      .then((res) => {
        setTalentData(res.docs);
      });
    db.collection("talent")
      .doc(auth.currentUser.uid)
      .collection("jobProposal")
      .where("status", "==", "active")
      .get()
      .then((res) => {
        setTalentDatas(res.docs);
      });
    console.log(talentDatas);
  }, []);
  return (
    <div className="row">
      <div className="col"></div>
      <div className="col-7">
        <h3 className="my-5">{t("My proposals")}</h3>

        {/* <div className="list-group-item py-lg-4">
          <h4>
            {t("Offers")} (0){" "}
            <span>
              <svg
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                aria-hidden="true"
                role="img"
              >
                <path d="M7 0a7 7 0 100 14A7 7 0 007 0zm3.017 4.981c0 1.57-1.128 2.278-2.52 2.52l-.131 1.03h-.96l-.251-2.015.059-.06c1.608-.06 2.327-.588 2.327-1.44v-.023c0-.72-.551-1.236-1.462-1.236-.804 0-1.464.36-2.064 1.008l-.9-.948c.72-.827 1.644-1.39 3-1.39 1.738 0 2.902.983 2.902 2.53v.024zm-3.958 6.284V9.598h1.606v1.667H6.059z"></path>
              </svg>
            </span>
          </h4>
        </div>
        <div className="container list-group-item py-lg-4 mb-3">
          <ProposalCard />
        </div>

        <div className="list-group-item py-lg-4 mt-3">
          <h4>
            {t("Invitations to interview")} (0){" "}
            <span>
              <svg
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                aria-hidden="true"
                role="img"
              >
                <path d="M7 0a7 7 0 100 14A7 7 0 007 0zm3.017 4.981c0 1.57-1.128 2.278-2.52 2.52l-.131 1.03h-.96l-.251-2.015.059-.06c1.608-.06 2.327-.588 2.327-1.44v-.023c0-.72-.551-1.236-1.462-1.236-.804 0-1.464.36-2.064 1.008l-.9-.948c.72-.827 1.644-1.39 3-1.39 1.738 0 2.902.983 2.902 2.53v.024zm-3.958 6.284V9.598h1.606v1.667H6.059z"></path>
              </svg>
            </span>
          </h4>
        </div>
        <div className="container list-group-item py-lg-4 mb-3">
          <ProposalCard />
        </div> */}

        <div className="list-group-item py-lg-4 mt-3">
          <h4>
            {t("Active proposals")} ({talentDatas?.length}){" "}
            <span>
              <svg
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                aria-hidden="true"
                role="img"
              >
                <path d="M7 0a7 7 0 100 14A7 7 0 007 0zm3.017 4.981c0 1.57-1.128 2.278-2.52 2.52l-.131 1.03h-.96l-.251-2.015.059-.06c1.608-.06 2.327-.588 2.327-1.44v-.023c0-.72-.551-1.236-1.462-1.236-.804 0-1.464.36-2.064 1.008l-.9-.948c.72-.827 1.644-1.39 3-1.39 1.738 0 2.902.983 2.902 2.53v.024zm-3.958 6.284V9.598h1.606v1.667H6.059z"></path>
              </svg>
            </span>
          </h4>
        </div>
        <div className="container list-group-item py-lg-4 mb-3">
          {talentDatas?.map((task, index) => (
            <ProposalCard2 job={task.data().jobId} />
          ))}
        </div>

        <div className="list-group-item py-lg-4 mt-3">
          <h4>
            {t("Submited proposals")} ({talentData?.length}){" "}
            <span>
              <svg
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                aria-hidden="true"
                role="img"
              >
                <path d="M7 0a7 7 0 100 14A7 7 0 007 0zm3.017 4.981c0 1.57-1.128 2.278-2.52 2.52l-.131 1.03h-.96l-.251-2.015.059-.06c1.608-.06 2.327-.588 2.327-1.44v-.023c0-.72-.551-1.236-1.462-1.236-.804 0-1.464.36-2.064 1.008l-.9-.948c.72-.827 1.644-1.39 3-1.39 1.738 0 2.902.983 2.902 2.53v.024zm-3.958 6.284V9.598h1.606v1.667H6.059z"></path>
              </svg>
            </span>
          </h4>
        </div>
        <div className="container list-group-item py-lg-4 mb-3">
          {talentData?.map((task, index) => (
            <ProposalCard job={task.data().jobId} />
          ))}
        </div>
      </div>
      <div className="col"></div>
    </div>
  );
}
