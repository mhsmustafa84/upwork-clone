import React, { useEffect, useState } from "react";
import { deletesubCollection, updateUserData } from "../../Network/Network";
import { useParams } from "react-router";
import { auth, db, storage } from "../../firebase";
import { jobDataAction } from "../../Store/actions/jobDataAction";
import { talentDataAction } from "../../Store/actions/talentData";
import { useDispatch, useSelector } from "react-redux";


export default function AfterSubmitProposal() {
  const { id } = useParams();
  const user = useSelector((state) => state.talentData);
  const dispatch = useDispatch();

  useEffect(() => {
   db.collection("job")
      .doc(id)
      .collection("proposals")
      .where("talentId", "==", auth.currentUser.uid)
      .get()
      .then((res) => res.docs.map((e) => console.log("data is", e.data())));
  }, []);
  // const docid = async () => {
  //   try {
  //     let res;
  //     await db
  //       .collection("job")
  //       .doc(id)
  //       .collection("proposals")
  //       .where("talentId", "==", auth.currentUser.uid)
  //       .get()
  //       .then((res) => res.docs.map((e) => console.log("data is", e.data())));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const handlewithdrawProposal = () => {
    db.collection("job")
      .doc(id)
      .collection("proposals")
      .where("talentId", "==", auth.currentUser.uid)
      .get()
      .then((res) => res.docs.map((e) => console.log("data is", e.data())));
    //docid();
    // deletesubCollection("job", "proposals", id, docid);
  };
  return (
    <>
      <div classNameName="modal" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Submit proposal</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Change Terms
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handlewithdrawProposal}
              >
                Withdraw proposal{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
