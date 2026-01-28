/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../../firebase'
import firebase from 'firebase/app';

export default function OfferCard({ clientID, jobID, getOffers }) {

    const [offer, setOffer] = useState()
    const [job, setJob] = useState()

    useEffect(async () => {
        await db.collection("client")
            .doc(clientID)
            .collection("contracts").where("jobID", "==", jobID)
            .get().then(res => {
                setOffer({ data: res.docs[0]?.data(), contractId: res.docs[0]?.id })
            })
        await db.collection("job")
            .doc(jobID)
            .get().then(doc => {
                setJob(doc.data())
            })
    }, [])

    const accept = (contractId) => {
        console.log(jobID);
        console.log(contractId);

        db.collection("job")
            .doc(jobID)
            .update({ status: "hired" })

        db.collection("talent")
            .doc(auth.currentUser.uid)
            .collection("jobProposal")
            .where("jobId", "==", jobID)
            .get().then(res => {
                if (res.docs[0].exists) {
                    db.collection("talent")
                        .doc(auth.currentUser.uid)
                        .collection("jobProposal")
                        .doc(res.docs[0]?.id)
                        .update({
                            status: "contract",
                            startContractTime: firebase.firestore.Timestamp.now()
                        })
                    getOffers();
                }
            })

        db.collection("client")
            .doc(clientID)
            .collection("contracts")
            .doc(contractId)
            .update({
                talentResponse: "accept",
                startContractTime: firebase.firestore.Timestamp.now()
            })
    }

    const decline = (contractId) => {
        console.log(jobID);
        console.log(contractId);

        db.collection("talent")
            .doc(auth.currentUser.uid)
            .collection("jobProposal")
            .where("jobId", "==", jobID)
            .get().then(res => {
                if (res.docs[0].exists) {
                    db.collection("talent")
                        .doc(auth.currentUser.uid)
                        .collection("jobProposal")
                        .doc(res.docs[0]?.id).update({ status: "proposal" })
                    getOffers();
                }
            })

        db.collection("client")
            .doc(clientID)
            .collection("contracts")
            .doc(contractId)
            .delete()
    }

    return (

        <div className="col-11 mx-auto bg-gray border border-gray rounded p-5 mb-4 text-center">
            {
                (offer && job) &&
                <>
                    <p><strong>Contract Title: </strong>{job?.jobTitle}</p>
                    <p><strong>Contract Budget: </strong>${offer?.data?.jobBudget}</p>
                    <p><strong>Contract Payment Type: </strong>{offer?.data?.jobPaymentType}</p>
                    <p><strong>Contract Due Date: </strong>{offer?.data?.dueDate}</p>
                    <button
                        className="btn bg-upwork me-1"
                        onClick={() => accept(offer?.contractId)}
                    >
                        Accept
                    </button>
                    <button
                        className="btn btn-danger ms-1"
                        onClick={() => decline(offer?.contractId)}
                    >
                        Decline
                    </button>
                </>
            }
        </div>
    )
}
