/* eslint-disable */
import React from 'react'
import './Footer.css'
import { useTranslation } from "react-i18next";  

export default function Footer() {
    const { t }=useTranslation();
    return (
        <footer>
            <div className="container">
                <div className="row footer-menu-cn">
                    <div className="col-md-4 col-sm-12">
                        <ul className="list-unstyled">
                            <p className="text-light"><strong>{t("COMPANY")}</strong></p>
                            <li><a href="#">{t("AboutUs")}</a></li>
                            <li><a href="#">{t("InvestorRelations")}</a></li>
                            <li><a href="#">{t("Careers")}</a></li>
                            <li><a href="#">{t("UpworkFoundation")}</a></li>
                            <li><a href="#">{t("Press")}</a></li>
                            <li><a href="#">{t("TrustSafetySecurity")}</a></li>
                            <li><a href="#">{t("TermsofService")}</a></li>
                            <li><a href="#">{t("PrivacyPolicy")}</a></li>
                            <li><a href="#">{t("Accessibility")}</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <ul className="list-unstyled">
                            <p className="text-light"><strong>{t("RESOURCES")}</strong></p>
                            <li><a href="#">{t("Resources")}</a></li>
                            <li><a href="#">{t("CustomerSupport")}</a></li>
                            <li><a href="#">{t("CustomerStories")}</a></li>
                            <li><a href="#">{t("BusinessResources")}</a></li>
                            <li><a href="#">{t("PayrollServices")}</a></li>
                            <li><a href="#">{t("UpworkReviews")}</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <ul className="list-unstyled">
                            <p className="text-light"><strong>{t("BROWSE")}</strong></p>
                            <li><a href="#">{t("FreelancersbySkill")}</a></li>
                            <li><a href="#">{t("FreelancersinUSA")}</a></li>
                            <li><a href="#">{t("FreelancersinUK")}</a></li>
                            <li><a href="#">{t("FreelancersinCanada")}</a></li>
                            <li><a href="#">{t("FreelancersinAustralia")}</a></li>
                            <li><a href="#">{t("JobsinUSA")}</a></li>
                            <li><a href="#">{t("FindJobs")}</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row social-footer-cn pt-3">
                    <div className="col-md-6 col-sm-12">
                        <div className="d-flex">
                            <span className="text-light">{t("Followus")}</span>
                            <ul className="list-unstyled d-flex ms-3">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="d-flex justify-content-end">
                            <span className="text-light">{t("Mobileapp")}</span>
                            <ul className="list-unstyled d-flex ms-3">
                                <li><a href="#"><i className="fab fa-apple"></i></a></li>
                                <li><a href="#"><i className="fab fa-google-play"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p className="text-light text-center mt-4">{t("UpworkGlobalInc")}</p>
                </div>
            </div>
        </footer>
    )
}
