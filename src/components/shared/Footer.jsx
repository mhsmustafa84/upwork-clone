import React from 'react';

export const Footer = () => {
    return (
        <footer className='upw-bg-dark-color py-3 text-white'>
            <div className='container'>
                <div className='row gap-md-0 gap-sm-3 border-bottom border-secondary py-3'>
                    <div className='col-md-6 col-sm-12'>
                        <div className='d-flex flex-sm-column flex-md-row'>
                            <span className='me-md-3'>Follow us:</span>
                            <ul className='list-unstyled d-flex gap-2'>
                                <li>
                                    <i className='fab fa-facebook'></i>
                                </li>
                                <li>
                                    <i className='fab fa-linkedin-in'></i>
                                </li>
                                <li>
                                    <i className='fab fa-twitter'></i>
                                </li>
                                <li>
                                    <i className='fab fa-youtube'></i>
                                </li>
                                <li>
                                    <i className='fab fa-instagram'></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <div className='d-flex flex-sm-column flex-md-row justify-content-md-end'>
                            <span className='me-md-3'>Mobile app:</span>
                            <ul className='list-unstyled d-flex gap-2 '>
                                <li>
                                    <i className='fab fa-apple'></i>
                                </li>
                                <li>
                                    <i className='fab fa-google-play ms-1'></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className='text-md-center mt-4'>
                    © 2015 - 2022 Upwork® Global Inc.
                </p>
            </div>
        </footer>
    );
};
