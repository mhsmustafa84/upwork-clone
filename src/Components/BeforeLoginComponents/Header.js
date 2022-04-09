/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../SharedComponents/logo/Logo';

export const Header = () => {

    return (
        <header className="py-3 fixed-top bg-white">
            <div className="container border-bottom">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex ">
                        <div className="d-flex me-5">
                            <Logo />
                        </div>
                    </div>
                    <div className="col-md-5 ps-2 d-flex j justify-content-end">
                        <Link
                            className="btn text-main-color me-2"
                            to={`${process.env.REACT_APP_BASE_ROUTE}/login`}
                        >
                            Log In
                        </Link>
                        <Link
                            className="btn upwork-bg-color text-white rounded-pill px-4 py-2 fs-6"
                            to={`${process.env.REACT_APP_BASE_ROUTE}/sign-up`}
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
