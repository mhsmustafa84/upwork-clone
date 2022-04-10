/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../shared/Logo';

export const Header = () => {

    return (
        <header className="fixed-top bg-white">
            <div className="container border-bottom py-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex ">
                        <div className="d-flex me-5">
                            <Logo url={process.env.PUBLIC_URL} />
                        </div>
                    </div>
                    <div className="col-md-5 ps-2 d-flex j justify-content-end">
                        <Link
                            className="btn text-main-color me-2"
                            to={`${process.env.PUBLIC_URL}/login`}
                        >
                            Log In
                        </Link>
                        <Link
                            className="btn upw-bg-color text-white rounded-pill px-4 py-2 fs-6"
                            to={`${process.env.PUBLIC_URL}/sign-up`}
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
