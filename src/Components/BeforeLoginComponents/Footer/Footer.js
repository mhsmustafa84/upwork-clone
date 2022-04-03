/* eslint-disable */
import React from 'react'
import './Footer.css'


export default function Footer() {

    return (
        <footer>
            <div className="container">
                <div className="row footer-menu-cn">
                    <div className="col-md-4 col-sm-12">
                        <ul className="list-unstyled">
                            <p className="text-light"><strong>COMPANY</strong></p>
                            <li><a href="#">AboutUs</a></li>
                            <li><a href="#">InvestorRelations</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">UpworkFoundation</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">TrustSafetySecurity</a></li>
                            <li><a href="#">TermsofService</a></li>
                            <li><a href="#">PrivacyPolicy</a></li>
                            <li><a href="#">Accessibility</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <ul className="list-unstyled">
                            <p className="text-light"><strong>RESOURCES</strong></p>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">CustomerSupport</a></li>
                            <li><a href="#">CustomerStories</a></li>
                            <li><a href="#">BusinessResources</a></li>
                            <li><a href="#">PayrollServices</a></li>
                            <li><a href="#">UpworkReviews</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <ul className="list-unstyled">
                            <p className="text-light"><strong>BROWSE</strong></p>
                            <li><a href="#">FreelancersbySkill</a></li>
                            <li><a href="#">FreelancersinUSA</a></li>
                            <li><a href="#">FreelancersinUK</a></li>
                            <li><a href="#">FreelancersinCanada</a></li>
                            <li><a href="#">FreelancersinAustralia</a></li>
                            <li><a href="#">JobsinUSA</a></li>
                            <li><a href="#">FindJobs</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row social-footer-cn pt-3">
                    <div className="col-md-6 col-sm-12">
                        <div className="d-flex">
                            <span className="text-light">Followus</span>
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
                            <span className="text-light">Mobileapp</span>
                            <ul className="list-unstyled d-flex ms-3">
                                <li><a href="#"><i className="fab fa-apple"></i></a></li>
                                <li><a href="#"><i className="fab fa-google-play"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p className="text-light text-center mt-4">UpworkGlobalInc</p>
                </div>
            </div>
        </footer>
    )
}
