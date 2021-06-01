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
  let [text, setText] = useState("");
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
    // (user?.savedJobs?.includes(id)) ? setText("Unsave Job") : setText("Save Job")
    // if (user?.savedJobs?.length > 0) {
    //   user?.savedJobs?.forEach((item) => {
    //     if (item === id) {
    //       text = "Unsave Job";
    //       setText(text);
    //     } else {
    //       text = "Saved Job";
    //       setText(text);
    //     }
    //   });
    // } else {
    //   text = "Saved Job";
    //   setText(text);
    // }
  }, []);

  useEffect(() => {
    // dispatch(jobsDataAction());
    dispatch(talentDataAction())
  }, [isliked])

  // const savedjobs = () => {
  //   if (!user?.savedJobs?.includes(id)) {
  //     updateUserData("talent", { savedJobs: [...user?.savedJobs, id] });
  //     setText("Unsave Job");
  //   } else {
  //     user?.savedJobs.forEach((item, index) => {
  //       if (item === id) {
  //         user?.savedJobs?.splice(index, 1);
  //         updateUserData("talent", { savedJobs: [...user?.savedJobs] });
  //         // console.log(user?.savedJobs);
  //         setText("Save Job");
  //       }
  //     });
  //   }
  //   setisliked(!isliked)
  //   // dispatch(talentDataAction());
  // };

  const savedjobs = () => {
    //   if (!user?.savedJobs?.includes(id)) {
    //     updateUserData("talent", { savedJobs: [...user?.savedJobs, id] });
    //     setText("Unsave Job");
    //   } else {
    //     user?.savedJobs.forEach((item, index) => {
    //       if (item === id) {
    //         user?.savedJobs?.splice(index, 1);
    //         updateUserData("talent", { savedJobs: [...user?.savedJobs] });
    //         console.log(user?.savedJobs);
    //         setText("Save Job");
    //       }
    //     });
    //   }
    //   dispatch(talentDataAction());
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
          onClick={() => savedjobs()}
        >
          <i
            className={`me-2 ${
              //  user.savedJobs.includes(id)
              text === "Unsave Job"
                ? "fas fa-heart text-upwork"
                : "far fa-heart"
              }`}
            aria-hidden="true"
          />
          {text}
        </button>

      </div>
      {/* <a href="#" className="advanced-search-link">
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
      </a> */}

      <p>
        {t("Required Connects to submit a proposal")}: 2
      </p>
      <p>
        {t("Available Connects")}: {user.connects}
      </p>
    </div>
  );
}