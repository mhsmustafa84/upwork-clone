import React from "react";
import LoginHeader from "../../components/unAuth/LoginHeader";
import { SignupForm } from '../../components/unAuth/SignupForm';
import { Footer } from '../../components/shared/footer/Footer';
import { SignupSecondForm } from '../../components/unAuth/SignupSecondForm';

export const SignUp = () => {
    return (
        <>
            <LoginHeader />
            <SignupForm />
            <SignupSecondForm />
            <Footer />
        </>
    );
}
