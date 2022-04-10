/* eslint-disable */
import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row border-bottom border-secondary pt-3">
                    <div className="col-md-6 col-sm-12">
                        <div className="d-flex">
                            <span className="text-light">Follow us</span>
                            <ul className="list-unstyled d-flex text-white ms-3">
                                <li><i className="fab fa-facebook"></i></li>
                                <li><i className="fab fa-linkedin-in"></i></li>
                                <li><i className="fab fa-twitter"></i></li>
                                <li><i className="fab fa-youtube"></i></li>
                                <li><i className="fab fa-instagram"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="d-flex justify-content-end">
                            <span className="text-light">Mobile app</span>
                            <ul className="list-unstyled d-flex text-white ms-3">
                                <li><i className="fab fa-apple"></i></li>
                                <li><i className="fab fa-google-play ms-1"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p className="text-light text-center mt-4">© 2015 - 2022 Upwork® Global Inc.</p>
                </div>
            </div>
        </footer>
    )
}
