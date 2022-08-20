import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { updateJob } from '../../../Network/Network';
import './PostJobBudget.css'

export default function PostJobBudget({ setBtns, btns }) {
    const { t } = useTranslation();
    const [job, setJob] = useState({ jobPaymentType: "", jobBudget: "" });

    const getData = (e) => {
        const val = e.target.value;
        const name = e.target.name;
        switch (name) {
            case "jobPaymentType":
                job.jobPaymentType = val;
                setJob({ ...job, jobPaymentType: job.jobPaymentType });
                break;
            case "budget":
                job.jobBudget = parseInt(val);
                setJob({ ...job, jobBudget: job.jobBudget });
                break;
            default:
                break;
        }
    };

    const addData = () => {
        console.log(job);
        const id = localStorage.getItem("docID");
        console.log(id);
        updateJob({ ...job, jobPaymentTypeAr: job.jobPaymentType === "Fixed Price" ? "عمل بميزانية ثابتة" : "عمل بالساعة" }, id);

        setBtns({ ...btns, review: false });
    };

    return (
        <>
            <section className=" bg-white border rounded mt-3 pt-4">
                <div className="border-bottom ps-4">
                    <h4>{t("Budget")}</h4>
                    <p>{t("Step 6 of 7")}</p>
                </div>
                <div className="px-4 mt-3">
                    <p className="fw-bold mt-2">
                        {t("How would you like to pay your freelancer or agency?")}
                    </p>
                    <div
                        className="my-4 d-flex justify-content-between w-75"
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
                </div>
                {job.jobPaymentType === "Fixed Price" ? (
                    <div className="px-4 my-3">
                        <p className="fw-bold mt-2">
                            {t("Do you have a specific budget?")}
                        </p>
                        <div className="me-5 mt-2 position-relative jd-inp-cn w-25">
                            <div className="position-absolute">
                                <i className="fas fa-dollar-sign"></i>
                            </div>
                            <input
                                className="form-control text-end shadow-none"
                                onInput={getData}
                                name="budget"
                                type="number"
                                placeholder="00.00"
                            />
                        </div>
                    </div>
                ) : (
                    job.jobPaymentType === "Hourly" && (
                        <div className="px-4 my-3">
                            <p className="fw-bold mt-2">{t("Set your own hourly rate")}</p>
                            <div className="me-5 mt-2 position-relative jd-inp-cn w-25">
                                <div className="position-absolute">
                                    <i className="fas fa-dollar-sign"></i>
                                </div>
                                <input
                                    className="form-control text-end shadow-none"
                                    onInput={getData}
                                    name="budget"
                                    type="number"
                                    placeholder="00.00"
                                />
                                <span className="position-absolute">/hr</span>
                            </div>
                        </div>
                    )
                )}
            </section>

            <section className="bg-white border rounded mt-3">
                <div className="ps-4 my-3">
                    <button className="btn">
                        <Link className="btn border text-success me-4 px-5" to="/post-job/visibility">{t("Back")}</Link>
                    </button>
                    <button className={`btn ${job.jobPaymentType === "" || job.jobBudget === "" || job.jobBudget === "0" ? "disabled" : ""}`}>
                        <Link className="btn bg-upwork px-5" to="/post-job/review" onClick={addData}>{t("Next")}</Link>
                    </button>
                </div>
            </section>
        </>
    )
}
