/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import Loader from "../../../Components/SharedComponents/Loader/Loader"
import { auth, db } from "../../../firebase"
import firebase from 'firebase/app';

export default function Offers() {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        getOffers();
    }, [])

    const getOffers = () => {
        db.collection("talent")
            .doc(auth.currentUser.uid)
            .collection("jobProposal")
            .where("status", "==", "offer")
            .onSnapshot(res => {
                const arr = [];
                if (res.docs.length > 0) {
                    res.docs.map(async doc => {
                        await db.collection("job")
                            .doc(doc.data().jobId)
                            .get().then(doc => {
                                if (doc.exists) {
                                    arr.push(doc.data());
                                }
                            })
                        setJobs([...arr]);
                    });
                } else {
                    setJobs([...arr]);
                }

            })
    }

    const accept = jobID => {
        console.log(jobID);
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
                        .doc(res.docs[0]?.id).update({
                            status: "contract",
                            startContractTime: firebase.firestore.Timestamp.now()
                        })
                    getOffers();
                }
            })
    }

    const decline = jobID => {
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
    }

    return (

        <div className=" bg-gray">
            <div className="container">
                <div className="row px-5">
                    <div className="col-12 mt-5">
                        <h3>Offers</h3>
                    </div>
                    <div className="col-12 bg-white mb-3 p-5 border border-gray rounded">
                        {
                            jobs.length > 0 ?
                                jobs[0]?.jobTitle ?
                                    <>
                                        {jobs.map((job, index) => {
                                            return <div className="col-11 mx-auto bg-gray border border-gray rounded p-5 mb-4 text-center" key={index}>
                                                <p><strong>Contract Title: </strong>{job.jobTitle}</p>
                                                <p><strong>Contract Budget: </strong>{job.jobBudget}</p>
                                                <p><strong>Contract Payment Type: </strong>{job.jobPaymentType}</p>
                                                <p><strong>Contract Due Date: </strong>{job.jobPaymentType}</p>
                                                <button className="btn bg-upwork me-1" onClick={() => accept(job.jobID)}>Accept</button>
                                                <button className="btn btn-danger ms-1" onClick={() => decline(job.jobID)}>Decline</button>
                                            </div>
                                        })}
                                    </>
                                    : <Loader />
                                : <p className="h3 py-3">No offers yet.</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
