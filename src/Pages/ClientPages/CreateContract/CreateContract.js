/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { auth, db } from '../../../firebase';
import { subCollection } from '../../../Network/Network';
import firebase from 'firebase/app';

export default function CreateContract({ location }) {
    const { jobID, talentID } = location.state;
    const { t } = useTranslation();
    const [contract, setContract] = useState({ jobPaymentType: "", jobBudget: "", dueDate: "" });
    const [job, setJob] = useState();
    const [edit, setEdit] = useState({ budget: false, paymentType: false });
    const [done, setDone] = useState(false);
    const { push } = useHistory();

    useEffect(() => {
        db.collection("job")
            .doc(jobID)
            .get().then(doc => setJob(doc.data()))
    }, [])

    const getData = ({ target }) => {
        const val = target.value;
        const name = target.name;
        switch (name) {
            case "jobPaymentType":
                setContract({ ...contract, jobPaymentType: val });
                break;
            case "budget":
                setContract({ ...contract, jobBudget: parseInt(val) });
                break;
            case "date":
                setContract({ ...contract, dueDate: val });
                break;
            default:
                break;
        }
    };

    const editBudget = () => {
        setEdit({ ...edit, budget: true })
    }

    const editPaymentType = () => {
        setEdit({ ...edit, paymentType: true })
    }

    const cancel = () => {
        setEdit({ budget: false, paymentType: false })
        setContract({ ...contract, jobBudget: "", jobPaymentType: "" })
    }

    const startContract = () => {

        setDone(true)
        db.collection("talent")
            .doc(talentID)
            .collection("jobProposal")
            .where("jobId", "==", jobID)
            .get()
            .then(res => {
                if (res.docs[0].exists) {
                    db.collection("talent")
                        .doc(talentID)
                        .collection("jobProposal")
                        .doc(res.docs[0].id)
                        .update({ status: "offer", budget: contract.jobBudget || job.jobBudget })
                }
            })

        db.collection("talent")
            .doc(talentID)
            .collection("notification")
            .add({
                time: firebase.firestore.Timestamp.now(),
                message: "New job offer, check it now.",
                type: "offer",
                clientID: auth.currentUser.uid,
                isShow: false,
                route: "/offers",
                userID: auth.currentUser.uid,
            })

        subCollection(
            "client",
            "contracts", {
            sentTime: firebase.firestore.Timestamp.now(),
            startContractTime: "",
            jobID: jobID,
            talentID: talentID,
            talentResponse: "",
            clientID: auth.currentUser.uid,
            dueDate: contract.dueDate,
            jobBudget: contract.jobBudget || job.jobBudget,
            jobPaymentType: contract.jobPaymentType || job.jobPaymentType,
            jobPaymentTypeAr: (contract.jobPaymentType === "Fixed Price" ? "عمل بميزانية ثابتة" : "عمل بالساعة") || job.jobPaymentTypeAr
        },
            auth.currentUser.uid
        )
        setContract({ jobPaymentType: "", jobBudget: "", dueDate: "" })
        setTimeout(() => {
            push("/all-job-posts");
        }, 1000);
    }

    return (
        <div className="container my-5 px-5">
            <h3>Create Contract</h3>
            <div className="bg-white py-5">
                <div className="mx-auto w-50">
                    <p>Do you want to edit budget or job payment type before you start the contract?</p>
                    <div className="text-center">
                        <button className="btn btn-outline-secondary" onClick={editBudget}>Change Job Budget</button>
                        <button className="btn btn-outline-secondary mx-3" onClick={editPaymentType}>Change Job Payment Type</button>
                        {
                            edit.budget || edit.paymentType ?
                                <button className="btn btn-danger" onClick={cancel}>Cancel</button>
                                : ""
                        }
                    </div>
                    {
                        edit.budget &&
                        <label className="text-center d-block mt-4">
                            Budget:
                        <input
                                className="form-control d-inline w-50 my-3 ms-2"
                                type="text"
                                name="budget"
                                onInput={getData}
                            />
                        </label>
                    }
                    <div>
                        {
                            edit.paymentType &&
                            <div
                                className="my-4 d-flex justify-content-between w-100"
                                onInput={getData}
                            >
                                <label className="border border-success rounded p-3 text-center w-50">
                                    <input
                                        type="radio"
                                        className="float-end"
                                        name="jobPaymentType"
                                        value="Hourly"
                                    />
                                    <div>
                                        <i className="fas fa-stopwatch mt-4"></i>
                                    </div>
                                    <h6 className="my-3">{t("Pay by the hour")}</h6>
                                    <div>{t("Pay hourly to easily scale up and down.")}</div>
                                </label>
                                <label className="border border-success rounded p-3 text-center mx-3 w-50">
                                    <input
                                        type="radio"
                                        className="float-end"
                                        name="jobPaymentType"
                                        value="Fixed Price"
                                    />
                                    <div>
                                        <i className="fas fa-file-invoice-dollar mt-4"></i>
                                    </div>
                                    <h6 className="my-3">{t("Pay a fixed price")}</h6>
                                    <div>
                                        {t(
                                            "Define payment before work begins and pay only when work is delivered."
                                        )}
                                    </div>
                                </label>
                            </div>
                        }
                    </div>
                    <label className="text-center d-block mt-4">
                        Due to:
                        <input
                            className="form-control d-inline w-50 my-3 ms-2"
                            type="date"
                            name="date"
                            value={contract.dueDate}
                            onInput={getData}
                        />
                    </label>
                    {
                        done &&
                        <div className="alert text-upwork d-flex align-items-center justify-content-center" role="alert">
                            <svg width="30" id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                            </svg>
                            <div className="ms-2">
                                The offer was sent to the freelancer
                            </div>
                        </div>
                    }
                    <button
                        className="btn bg-upwork text-white d-block mx-auto w-50 mt-4"
                        onClick={startContract}
                        disabled={!contract.dueDate}
                    >
                        Start Contract
                    </button>
                </div>
            </div>
        </div>
    )
}