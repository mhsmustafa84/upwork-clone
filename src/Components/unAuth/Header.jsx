/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../shared/Logo';

export const Header = () => {

    return (
        <header className="fixed-top bg-white">
            <div className="container border-bottom py-3">
                <div className="d-flex justify-content-between align-items-center">
                    <Logo url={process.env.PUBLIC_URL} />
                    <div>
                        <Link
                            className="btn text-main-color me-2"
                            to={`${process.env.PUBLIC_URL}/login`}
                        >
                            Log In
                        </Link>
                        <Link
                            className="btn upw-bg-color text-white rounded-pill px-5 fs-7"
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
