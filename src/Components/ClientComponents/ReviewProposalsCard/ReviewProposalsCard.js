/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { useParams } from "react-router";
import img from "../../../assets/img/icon-user.svg";
import ReviewProposalsPageHeader from "./../ReviewProposalsPageHeader/ReviewProposalsPageHeader";
import { Link } from "react-router-dom";
import Loader from './../../SharedComponents/Loader/Loader';

export default function ReviewProposalsCard() {

  const { id } = useParams();
  const [proposals, setProposals] = useState([]);
  const [talent, setTalent] = useState([]);

  useEffect(() => {
    const arr = []
    db.collection("job")
      .doc(id)
      .collection("proposals")
      .get().then(res => {
        res.docs.map(async proposal => {
          if (proposal.exists) {
            console.log(proposal.data().talentId);
            proposals.push(proposal.data());
            await db.collection("talent")
              .doc(proposal.data().talentId)
              .get()
              .then(doc => {
                if (doc.exists) {
                  arr.push(doc.data());
                  console.log(doc.data())
                  setTalent([...arr]);
                }
              });
          }
        });
        setProposals([...proposals]);
      });
  }, []);

  const sendMSG = talentDocID => {
    console.log(talentDocID);
  };

  return (
    <>
      <ReviewProposalsPageHeader proposals={proposals.length} />
      {console.log(talent[0])}
      {
        proposals.length > 0
          ?
          proposals.map((proposal, index) => {
            return (
              talent[index]
                ?
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
                    <p id="job-title-home-page" className="link-dark my-1">
                      <span className="text-muted">Title: </span>
                      <span className="fw-bold">{talent[index]?.title}</span>
                    </p>
                    <p>
                      <span className="text-muted">Country: </span>
                      <span className="fw-bold">{talent[index]?.location?.country}</span>

                    </p>
                    <div className="row py-3">
                      <div className="col">
                        <span className="text-muted">
                          Hourly Rate:
                      </span>
                        <span className="fw-bold"> {talent[index]?.hourlyRate} /hr</span>
                      </div>
                      <div className="col">
                        <span className="text-muted">earned: </span>
                        <span className="fw-bold">
                          {talent[index]?.totalEarnings}
                        </span>
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
                      to={{ pathname: "/messages", state: talent[index] }}
                      className="btn bg-white btn-outline-secondary"
                      onClick={() => sendMSG(talent[index]?.authID)}
                    >
                      <span className="text-success fw-bold">Messages</span>
                    </Link>
                  </div>
                  <div className="col py-3">
                    <Link
                      type="button"
                      className="btn bg-upwork px-5"
                      to={{
                        pathname: "/create-contract",
                        state: { talentID: talent[index]?.authID, jobID: id }
                      }}
                    >
                      Hire
                        </Link>
                  </div>
                  <div className="col-lg-1 pt-lg-3"></div>
                  <div className="col-lg-10 pt-lg-3 mx-3">
                    <p>
                      <span className="text-muted">Specialized in:</span>
                      <span className="fw-bold"> {talent[index]?.jobCategory}</span>
                    </p>
                    <p>
                      <span className="text-muted">Proposed bid:</span>
                      <span className="fw-bold"> {proposal?.budget}</span>
                    </p>
                    <p id="Cover-Letter">
                      <span className="text-muted">Cover Letter - </span>
                      <span className="fw-bold">{proposal.coverLetter}</span>
                    </p>
                  </div>
                </div>
                :
                index === 0 && <Loader />
            )
          })

          :
          <div className="row border bg-white border-1 ms-0 py-3">
            <p className="text-muted text-center h1">No proposals</p>
          </div>
      }
    </>
  );
}
