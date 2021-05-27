/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { auth, db } from "../../../firebase"

export default function Offers() {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        db.collection("talent")
            .doc(auth.currentUser.uid)
            .collection("jobProposal")
            .where("status", "==", "pending")
            .get().then(res => {
                res.docs.map(async doc => {
                    await db.collection("job")
                        .doc(doc.data().jobId)
                        .get().then(doc => {
                            jobs.push(doc.data());
                        })
                    setJobs([...jobs]);
                });


            })
    }, [])

    const accept = jobID => {
        console.log(jobID);
    }

    return (
        <>
            <div className=" bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-5">
                            <h4>Offers</h4>
                        </div>
                        <div className="col-12 bg-white mb-3 p-5 border border-gray rounded">
                            {jobs.map((job, index) => {
                                return <div className="col-11 mx-auto bg-gray border border-gray rounded p-5 mb-4 text-center" key={index}>
                                    <p><strong>Contract Title: </strong>{job.jobTitle}</p>
                                    <p><strong>Contract Budget: </strong>{job.jobBudget}</p>
                                    <p><strong>Contract Payment Type: </strong>{job.jobPaymentType}</p>
                                    <p><strong>Contract Due Date: </strong>{job.jobPaymentType}</p>
                                    <button className="btn bg-upwork me-1" onClick={() => accept(job.jobID)}>Accept</button>
                                    <button className="btn btn-danger ms-1">Decline</button>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
