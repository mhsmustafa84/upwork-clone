import React from "react";
import LoginHeader from "../../components/unAuth/LoginHeader";
import { SignupForm } from '../../components/unAuth/SignupForm';
import { Footer } from '../../components/shared/footer/Footer';

export const SignUp = () => {
    return (
        <>
            <LoginHeader />
            <SignupForm />
            <Footer />
        </>
    );
}
