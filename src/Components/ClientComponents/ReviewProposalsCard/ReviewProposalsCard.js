/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { useParams } from "react-router";
import Loader from "./../../SharedComponents/Loader/Loader";
import img from "../../../assets/img/icon-user.svg";
import ReviewProposalsPageHeader from "./../ReviewProposalsPageHeader/ReviewProposalsPageHeader";
import { Link } from "react-router-dom";
let noProposals = true;

export default function ReviewProposalsCard() {
  const { id } = useParams();

  const [proposals, setProposals] = useState([]);
  const [talent, setTalent] = useState([]);

  useEffect(async () => {
    await db
      .collection("job")
      .doc(id)
      .collection("proposals")
      .get()
      .then((res) => {
        res.docs.map(async (proposal) => {
          proposal && (noProposals = false);
          proposals.push(proposal.data());
          await db
            .collection("talent")
            .doc(proposal.data().talentId)
            .get()
            .then((doc) => {
              talent.push(doc.data());
              setTalent([...talent]);
            });
        });
        setProposals([...proposals]);
      });
  }, []);

  const sendMSG = (talentDocID) => {
    console.log(talentDocID);
  };

  const hire = () => {
    db.collection("job").doc(id).update({ status: "hired" });
  };

  return (
    <>
      <ReviewProposalsPageHeader proposals={proposals.length} />
      {proposals.length > 0 && talent.length > 0 ? (
        proposals.map((proposal, index) => {
          return (
            <div className="row border bg-white border-1 ms-0 pt-2" key={index}>
              <div className="col-1 pt-lg-3">
                <img
                  className="circle"
                  src={
                    talent[index]?.profilePhoto
                      ? talent[index]?.profilePhoto
                      : img
                  }
                  style={{ width: "70px", height: "70px" }}
                />
              </div>
              <div className="col-lg-6 pt-lg-3 ">
                <Link
                  to={`/talent-profile/${talent[index]?.authID}`}
                  id="job-title-home-page "
                  className="link-dark job-title-hover fw-bold text-success"
                >
                  {talent[index]?.firstName +
                    " " +
                    talent[index]?.lastName[0].toUpperCase() +
                    "."}
                </Link>
                <p id="job-title-home-page" className="fw-bold link-dark my-1">
                  {talent[index]?.title}
                </p>
                <span className="text-muted">
                  {talent[index]?.location?.country}
                </span>
                <div className="row py-3">
                  <div className="col">
                    <span className="fw-bold">
                      Hourly Rate: {talent[index]?.hourlyRate}
                    </span>
                    <span className="text-muted"> /hr</span>
                  </div>
                  <div className="col">
                    <span className="fw-bold">
                      {talent[index]?.totalEarnings}
                    </span>
                    <span className="text-muted"> earned</span>
                  </div>
                </div>
              </div>
              <div className="col py-3">
                <div className="btn-group float-end "></div>
                <div className="btn-group float-start">
                  <ul className="dropdown-menu ">
                    <li>
                      <a className="dropdown-item" href="#">
                        Candidate will not be notified
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col py-3">
                <Link
                  to={{ pathname: "/messages", state: talent[index]?.authID }}
                  className="btn bg-white btn-outline-secondary"
                  onClick={() => sendMSG(talent[index]?.authID)}
                >
                  <span className="text-success fw-bold">Messages</span>
                </Link>
              </div>
              <div className="col py-3">
                <button
                  type="button"
                  className="btn bg-upwork px-5"
                  onClick={hire}
                >
                  Hire
                </button>
              </div>

              <div className="col-lg-1 pt-lg-3"></div>
              <div className="col-lg-10 pt-lg-3 mx-3">
                <p className="text-muted">
                  <strong>Specialized in:</strong>
                  <span> {talent[index]?.jobCategory}</span>
                </p>
                <p id="Cover-Letter">
                  <span className="fw-bold">Cover Letter - </span>
                  {proposal.coverLetter}
                </p>
              </div>
            </div>
          );
        })
      ) : noProposals ? (
        <div className="row border bg-white border-1 ms-0 py-3">
          <p className="text-muted text-center h1">No proposals</p>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
