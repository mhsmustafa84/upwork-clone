/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { talentDataAction } from "../../../Store/actions/talentData";
import { auth, db } from "../../../firebase";
import React, { useEffect, useState } from "react";

export default function ConnectsAndSubmit2({ connects }) {
  const { t } = useTranslation();
  const { id } = useParams();
  const { push } = useHistory();
  let [proposal, setProposal] = useState("");
  let [talent, setTalent] = useState("");
  const user = useSelector((state) => state.talentData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(talentDataAction());
  }, [proposal]);
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
    push("/proposals");
  };

  return (
    <div className="bg-white py-lg-4 px-4 border border-1 row py-sm-3">
      <div className="d-lg-grid gap-2  mx-auto d-none">
        <button
          className="btn bg-upwork"
          type="button"
          onClick={handlewithdrawProposal}
        >
          {t("Withdraw a proposal")}
        </button>
        <button className="btn btn-light border border-1 my-lg-2" type="button">
          <i className="far fa-heart" aria-hidden="true" /> {t("Save Job")}
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
    </div>
  );
}
