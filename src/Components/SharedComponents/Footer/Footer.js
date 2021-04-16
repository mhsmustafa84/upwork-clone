/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row footer-menu-cn">
                        <div className="col-md-3 col-sm-12">
                            <ul className="list-unstyled">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Feedback</a></li>
                                <li><a href="#">Community</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <ul className="list-unstyled">
                                <li><a href="#">Trust, Safety & Security</a></li>
                                <li><a href="#">Help & Support</a></li>
                                <li><a href="#">Upwork Foundation</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <ul className="list-unstyled">
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Accessibility</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <ul className="list-unstyled">
                                <li><a href="#">Desktop App</a></li>
                                <li><a href="#">Cookie Policy</a></li>
                                <li><a href="#">Enterprise Solutions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row social-footer-cn pt-3">
                        <div className="col-md-6 col-sm-12">
                            <div className="d-flex">
                                <span className="text-light">Follow us</span>
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
                                <span className="text-light">Mobile app</span>
                                <ul className="list-unstyled d-flex ms-3">
                                    <li><a href="#"><i className="fab fa-apple"></i></a></li>
                                    <li><a href="#"><i className="fab fa-google-play"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <p className="text-light text-center mt-4">© 2015 - 2021 Upwork® Global Inc.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
