import React from "react";
import LoginHeader from "../../components/unAuth/LoginHeader";
import { SignupForm } from '../../components/unAuth/SignupForm';
import { Footer } from '../../components/shared/footer/Footer';
import SignUpSecondTemp from '../../components/unAuth/SignUp Second Temp/SignUpSecondTemp';

export const SignUp = () => {
    return (
        <>
            <LoginHeader />
            <SignupForm />
            <SignUpSecondTemp />
            <Footer />
        </>
    );
}
