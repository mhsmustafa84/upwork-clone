/* eslint-disable */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'

export default function Footer() {

    return (
        <footer>
            <div className="container">
                <div className="row social-footer-cn pt-3">
                    <div className="col-md-6 col-sm-12">
                        <div className="d-flex">
                            <span className="text-light">Follow us</span>
                            <ul className="list-unstyled d-flex ms-3">
                                <li><FontAwesomeIcon icon={faAppleAlt} /></li>
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
                    <p className="text-light text-center mt-4">© 2015 - 2022 Upwork® Global Inc.</p>
                </div>
            </div>
        </footer>
    )
}
