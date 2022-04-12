import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/svg/404.svg';

export const NotFound = () => {
    return (
        <section className='position-absolute top-50 start-50 translate-middle text-center'>
            <img src={img} className='w-50' alt='' />
            <h2 className='text-muted my-5'>This page doesn't exist.</h2>
            <Link className='btn upw-btn' to={process.env.PUBLIC_URL}>
                Back to home
            </Link>
        </section>
    );
};
