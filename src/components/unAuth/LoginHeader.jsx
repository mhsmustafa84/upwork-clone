import React from 'react';
import { unAuthRoutes } from '../../routes/UnAuth';
import { Logo } from '../shared/Logo';

export default function LoginHeader() {
    const { home } = unAuthRoutes;
    return (
        <header className='fixed-top bg-white border-bottom'>
            <div className='container py-3'>
                <Logo url={home.path} />
            </div>
        </header>
    );
}
