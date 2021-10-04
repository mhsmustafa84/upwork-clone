/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { talentDataAction } from "../../../Store/actions/talentData";
import { updateUserData } from "../../../Network/Network";
import { db, auth } from "../../../firebase";

export default function ConnectsAndSubmit() {
  const { t } = useTranslation();
  const { id } = useParams();
  const user = useSelector((state) => state.talentData);
  const dispatch = useDispatch();
  // let [text, setText] = useState("");
  let [proposal, setProposal] = useState("");
  let [talent, setTalent] = useState("");
  const [jobProposal, setjobProposal] = useState(false);
  const { push } = useHistory();
  const [isliked, setisliked] = useState(false)

  useEffect(() => {
    db.collection("talent")
      .doc(auth.currentUser.uid)
      .collection("jobProposal")
      .where("jobId", "==", id)
      .onSnapshot((res) => {
        if (res?.docs.length > 0) setjobProposal(true);
      });
  }, []);

  useEffect(() => {
    // dispatch(jobsDataAction());
    dispatch(talentDataAction())
  }, [isliked])
  const saveJob = (e) => {
    setisliked(!isliked)
        if (e.target.className === 'far fa-heart') {
            updateUserData("talent", { savedJobs: [...user?.savedJobs, id] });
            e.target.className = 'fas fa-heart text-upwork'

        }
        else {
            user?.savedJobs?.forEach((item, index) => {
                if (item === id) {
                    user?.savedJobs?.splice(index, 1);
                    updateUserData("talent", { savedJobs: [...user?.savedJobs] });
                    e.target.className = 'far fa-heart'

                }
            })
        }
    }

  

 

  const handlewithdrawProposal = async () => {
    try {
      await db
        .collection("job")
        .doc(id)
        .collection("proposals")
        .where("talentId", "==", auth.currentUser.uid)
        .get()
        .then((res) =>
          res.docs.map((e) => {
            proposal = e.id;
            setProposal(proposal);
            db.collection("job")
              .doc(id)
              .collection("proposals")
              .doc(proposal)
              .delete();
            console.log(proposal);
          })
        );
      await db
        .collection("talent")
        .doc(auth.currentUser.uid)
        .collection("jobProposal")
        .where("jobId", "==", id)
        .get()
        .then((res) =>
          res.docs.map((e) => {
            talent = e.id;
            setTalent(talent);
            db.collection("talent")
              .doc(auth.currentUser.uid)
              .collection("jobProposal")
              .doc(talent)
              .delete();
            console.log(talent);
          })
        );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white py-lg-4 px-4 border border-1 py-sm-3">
      <div className="d-lg-grid gap-2  mx-auto d-none">
        {!jobProposal ? (
          <button
            className="btn bg-upwork"
            onClick={(handleRout) => push(`/job/apply/${id}`)}
            disabled={user.accepted === false || user.connects < 2}
          >
            {t("Submit a proposal")}
          </button>
        ) : (
          <button
            className="btn bg-upwork-dark"
            onClick={handlewithdrawProposal}
          >
            {t("Withdraw")}
          </button>
        )}

        <button
          className="btn btn-light border border-1 my-lg-2"
          type="button"
          >
          <i
          onClick={(e) => saveJob(e)}
          className={`${user?.savedJobs?.includes(id) ? 'fas fa-heart text-upwork' : 'far fa-heart'}`}
            aria-hidden="true"
          />
          {/* {text} */}
        </button>

      </div>
      <p>
        {t("Required Connects to submit a proposal")}: 2
      </p>
      <p>
        {t("Available Connects")}: {user.connects}
      </p>
    </div>
  );
}