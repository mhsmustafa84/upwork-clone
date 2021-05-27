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

export default function ConnectsAndSubmit({ connects }) {
  const { t } = useTranslation();
  const { id } = useParams();
  const user = useSelector((state) => state.talentData);
  const dispatch = useDispatch();
  let [text, setText] = useState("");
  let [proposal, setProposal] = useState("");
  let [talent, setTalent] = useState("");
  const [jobProposal, setjobProposal] = useState(false);
  const { push } = useHistory()

  useEffect(() => {
    db.collection('talent').doc(auth.currentUser.uid).collection('jobProposal')
      .where('jobId', "==", id).onSnapshot((res => {
        if (res?.docs.length > 0)
          setjobProposal(true)
      }
      ))
    dispatch(talentDataAction(user));
    if (user?.savedJobs?.length > 0) {
      user?.savedJobs?.forEach((item) => {
        if (item === id) {
          text = "Unsave Job";
          setText(text);
        } else {
          text = "Saved Job";
          setText(text);
        }
      });
    } else {
      text = "Saved Job";
      setText(text);
    }
  }, [user]);

  const savedjobs = () => {
    if (text === "Saved Job") {
      updateUserData("talent", { savedJobs: [...user?.savedJobs, id] });
      text = "Unsave Job";
      setText(text);
      console.log(user?.savedJobs?.length);
    } else {
      user?.savedJobs.forEach((item, index) => {
        if (item === id) {
          user?.savedJobs?.splice(index, 1);
          updateUserData("talent", { savedJobs: [...user?.savedJobs] });
          console.log(user?.savedJobs);
          text = "Saved Job";
          setText(text);
          console.log(text);
        }
      });
    }
  };

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
    <div className="bg-white py-lg-4 px-4 border border-1 row py-sm-3">
      <div className="d-lg-grid gap-2  mx-auto d-none">
        {!jobProposal ?
          <button className="btn bg-upwork" onClick={handleRout => push(`/job/apply/${id}`)} >
            {t("Submit a proposal")}
          </button>
          :
          <button className="btn bg-upwork-dark" onClick={handlewithdrawProposal}>
            {t("Withdraw")}
          </button>
        }
        <button
          className="btn btn-light border border-1 my-lg-2"
          type="button"
          onClick={savedjobs}
        >
          <i
            className={`me-2 ${text === "Unsave Job"
              ? "fas fa-heart text-upwork"
              : "far fa-heart"
              }`}
            aria-hidden="true"
          />
          {/* {t("Save Job")} */}
          {text}
        </button>
      </div>
      <a href="#" className="advanced-search-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          aria-hidden="true"
          role="img"
          fill="green"
          width="15px"
          className="my-lg-4"
        >
          <path d="M10.559 3.97l2.31-3.757C12.94.095 12.888 0 12.753 0H4v8h8.753c.136 0 .187-.1.116-.217l-2.31-3.814zM1.999 0h1v14H1V0h1z"></path>
        </svg>{" "}
        Flag as inappropriate
      </a>

      <p>
        {t("Required Connects to submit a proposal")}: 2{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          aria-hidden="true"
          role="img"
          width="15px"
          fill="green"
        >
          <path d="M7 0a7 7 0 100 14A7 7 0 007 0zm3.017 4.981c0 1.57-1.128 2.278-2.52 2.52l-.131 1.03h-.96l-.251-2.015.059-.06c1.608-.06 2.327-.588 2.327-1.44v-.023c0-.72-.551-1.236-1.462-1.236-.804 0-1.464.36-2.064 1.008l-.9-.948c.72-.827 1.644-1.39 3-1.39 1.738 0 2.902.983 2.902 2.53v.024zm-3.958 6.284V9.598h1.606v1.667H6.059z"></path>
        </svg>
      </p>
      <p>
        {t("Available Connects")}:{user.connects}
      </p>
    </div>
  );
}