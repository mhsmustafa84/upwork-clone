/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { unAuthRoutes } from '../../routes/UnAuth';
import { Logo } from '../shared/Logo';

export const Header = () => {
    const { home, login, signUp } = unAuthRoutes;
    return (
        <header className='fixed-top bg-white'>
            <div className='container border-bottom py-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <Logo url={home.path} />
                    <div>
                        <Link className='link me-3' to={login.path}>
                            Log In
                        </Link>
                        <Link
                            className='btn upw-btn rounded-pill px-5 fs-7'
                            to={signUp.path}
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
