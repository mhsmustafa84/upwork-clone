import React from 'react'
import { db } from '../../../firebase';
import firebase from 'firebase/app';

export default function Payment({ job, talent, clientContract }) {
    console.log(clientContract);

    const pay = () => {

        db.collection("talent")
            .doc(talent.authID)
            .collection("notification").add({
                time: firebase.firestore.Timestamp.now(),
                message: `Your payment request for "${job?.jobTitle}" is approved.`,
                type: "Payment approved",
                userID: talent.authID,
                userName: talent.firstName,
                userPhoto: talent?.profilePhoto,
                isShow: false,
                route: "/all-contract",
                jobID: job?.jobID
            })

        db.collection("talent")
            .doc(talent?.authID).get().then(doc => {
                const res = doc.data()?.totalEarnings + clientContract.jobBudget;
                db.collection("talent")
                    .doc(talent?.authID)
                    .update({ totalEarnings: res })
            })

    }
    const end = () => {
        db.collection("job").doc(job?.jobID).update({ status: "closed" })

        db.collection("talent")
            .doc(talent?.authID)
            .collection("jobProposal")
            .where("jobId", "==", job?.jobID)
            .get().then(res => {
                db.collection("talent")
                    .doc(talent?.authID)
                    .collection("jobProposal")
                    .doc(res.docs[0]?.id).update({ status: "closed", endContractTime: firebase.firestore.Timestamp.now() })
            })

        db.collection("client")
            .doc(clientContract?.clientID)
            .collection("contracts")
            .where("jobID", "==", job?.jobID)
            .get().then(res => {
                db.collection("client")
                    .doc(clientContract?.clientID)
                    .collection("contracts")
                    .doc(res.docs[0].data().id).update({ endContractTime: firebase.firestore.Timestamp.now() })
            })
    }
    return (
        <div className=" pt-4 pb-5 ps-4 mt-3">
            <div className="row">
                <div className="col">
                    <h6>Budget</h6>
                    <h4>${clientContract?.jobBudget}</h4>
                </div>
                <div className="col">
                    <button className="btn bg-upwork me-2" onClick={pay}>Pay for talent</button>
                    <button className="btn btn-danger ms-2" onClick={end}>End contract</button>
                </div>
            </div>

        </div>
    )
}
