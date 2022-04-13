import React from 'react';
import LoginHeader from '../../components/unAuth/LoginHeader';
import { Footer } from '../../components/shared/Footer';
import { SignupForm } from '../../components/unAuth/SignupForm';

export const SignUp = () => {
    return (
        <>
            <LoginHeader />
            <SignupForm />
            <Footer />
        </>
    );
};
