import React from "react";
import LoginHeader from "../../Components/BeforeLoginComponents/LoginHeader/LoginHeader";
import { SignupForm } from '../../Components/BeforeLoginComponents/SignupForm';
import { Footer } from '../../Components/SharedComponents/footer/Footer';

export const SignUp = () => {
    return (
        <>
            <LoginHeader />
            <SignupForm />
            <Footer />
        </>
    );
}
