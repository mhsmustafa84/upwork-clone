import React from 'react';
import { useNavigate } from 'react-router';

export const NotFound = () => {
    const { goBack } = useNavigate();
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-11 col-md-offset-1 text-center'>
                    <h2 className='m-lg-top m-md-bottom text-muted'>
                        This page doesn't exist.
                    </h2>
                    <p className='text-muted m-sm-bottom'>
                        Please
                        <button className='btn upw-color p-0' onClick={goBack}>
                            return
                        </button>{' '}
                        to the previous page or visit <a href='/'>Upwork.com</a>
                    </p>
                    <small className='text-muted'>Error 404</small>
                </div>
            </div>
        </div>
    );
};
