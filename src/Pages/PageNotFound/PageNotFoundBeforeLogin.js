import React from 'react'
import LoginHeader from '../../components/unAuth/LoginHeader';
import PageNotFound from './PageNotFound';

export default function PageNotFoundBeforeLogin() {
    return (
        <>
            <LoginHeader />
            <PageNotFound />
        </>
    )
}
