/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import Loader from "../../../Components/SharedComponents/Loader/Loader"
import { auth, db } from "../../../firebase"
import OfferCard from "./OfferCard";

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
                                        {jobs.map((job, index) =>
                                            <OfferCard clientID={job.authID} jobID={job.jobID} getOffers={getOffers} key={index} />
                                        )}
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
