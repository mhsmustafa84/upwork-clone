/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SearchBarJobsClient from "../../../Components/ClientComponents/SearchBarJobsClient/SearchBarJobsClient";
import TalentCardSearch from "../../../Components/ClientComponents/TalentCardSearch/TalentCardSearch";

export default function SearchClient() {
    const { t } = useTranslation();
    const { push } = useHistory();

    const clickHandler = () => {
        push("/job/");
    }


    return (
        <div className="container-md container-fluid-sm my-lg-4">
            <div className="row">
                {/* <div className="col d-none d-lg-block">
                    <h5 className="mb-lg-4 display-inline-block">{t("FilterBy")}</h5>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-2 fw-bold">{t("Category")}</h6>
                    <ul
                        className="list-group sidebar-homebage-ul mb-lg-3 "
                        style={{ fontSize: "0.9em" }}
                    >

                        <li
                            className="list-group-item sidebar-homebage-ul-li"
                            aria-current="true"
                        >
                            <a
                                href="#"
                                className=" list-group-item-action advanced-search-link"
                                aria-current="true"
                            >
                                {t("EcommerceDevelopment")}
                            </a>{" "}
                        </li>
                        <li
                            className="list-group-item sidebar-homebage-ul-li"
                            aria-current="true"
                        >
                            <a
                                href="#"
                                className=" list-group-item-action advanced-search-link"
                                aria-current="true"
                            >
                                {t("EcommerceDevelopment")}
                            </a>{" "}
                        </li>
                    </ul>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-2 fw-bold">Freelancers needed</h6>
                    <div>
                        <div className="form-check py-2 my-0">
                            <input
                                className="form-check-input btn-outline-success"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                {t("All")}
                            </label>
                        </div>
                        <div className="form-check py-2 my-0">
                            <input
                                className="form-check-input btn-outline-success"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                {t("Singlefreelancer")}
                            </label>
                        </div>
                        <div className="form-check py-2 my-0">
                            <input
                                className="form-check-input btn-outline-success"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                {t("Multiplefreelancers")}
                            </label>
                        </div>
                    </div>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">{t("Experiencelevel")}</h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("EntryLevel")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("Intermediate")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("Expert")}
                        </label>
                    </div>
                    <hr />

                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">{t("JobType")}</h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("Hourly")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("Fixedprice")}
                        </label>
                    </div>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">{t("NumberofProposals")}</h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("Lessthan5")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("5to10")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("10to15")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("15to20")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("20to50")}
                        </label>
                    </div>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">{t("ClientInfo")}</h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("MyPreviousClients")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("PaymentVerified")}
                        </label>
                    </div>
                    <hr />

                    <h6 className="mb-lg-2 display-inline-block mt-lg-2 fw-bold">{t("ClientLocation")}</h6>
                    <div className="input-group rounded-3">
                        <select
                            className="form-select border border-secondary text-dark  btn-outline-light "
                            id="inputGroupSelect01"
                        >
                            <option selected>{t("SelectClientLocation")}</option>
                            <option value={1}> {t("Egypt")}</option>
                            <option value={2}> {t("USA")}</option>
                        </select>
                    </div>

                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">{t("ProjectLength")}</h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("Lessthan1month")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("1to3months")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("3to6months")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("Morethan6months")}
                        </label>
                    </div>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">Hours Per Week</h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("Lessthan30hrsweek")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("Morethan30hrsweek")}
                        </label>
                    </div>
                </div>*/}
                {/* <div className="col-lg-10 col-xs-12">  */}
                <div className="col-xs-12"> 

                    <div>

                        <div className="list-group-item py-lg-4">
                            <SearchBarJobsClient />
                        </div>
                    </div>
                    <div >
                        <div onClick={clickHandler} className="mx-3" >
                        <TalentCardSearch/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}