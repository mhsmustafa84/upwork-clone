/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ProposalCard from "../../../Components/TalentComponents/ProposalCard/ProposalCard";
import { useEffect } from "react";
import { auth, db } from "../../../firebase";

export default function Proposals() {

  const { t } = useTranslation();
  const [talentData, setTalentData] = useState({ active: [], submited: [] });

  useEffect(async () => {
    await db.collection("talent")
      .doc(auth.currentUser.uid)
      .collection("jobProposal")
      .get()
      .then(res => {
        res.docs.map(proposal => {
          if (proposal.exists) {
            if (proposal.data().status === "contract") {
              talentData.active.push(proposal.data());
            } else {
              talentData.submited.push(proposal.data());
            }
          }
        });
        setTalentData({ active: [...talentData.active], submited: [...talentData.submited] });
      });
    console.log(talentData);
  }, []);

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-9">
          <h3 className="my-5">{t("My proposals")}</h3>
          <div className="list-group-item py-lg-4 mt-3">
            <h4>
              {t("Active proposals")} ({talentData?.active?.length})
              <span className="text-upwork ms-2">
                <i className="fas fa-question-circle"></i>
              </span>
            </h4>
          </div>
          <div className="container list-group-item py-lg-4 mb-3">
            {talentData?.active?.map((proposal, index) => (
              <ProposalCard jobId={proposal.jobId} proposal={proposal} key={index} ind={index} />
            ))}
          </div>
          <div className="list-group-item py-lg-4 mt-3">
            <h4>
              {t("Submited proposals")} ({talentData?.submited?.length})
              <span className="text-upwork ms-2">
                <i className="fas fa-question-circle"></i>
              </span>
            </h4>
          </div>
          <div className="container list-group-item py-lg-4 mb-3">
            {talentData?.submited?.map((proposal, index) => (
              <ProposalCard jobId={proposal.jobId} proposal={proposal} key={index} ind={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
