import React from "react";
import LoginHeader from "../../Components/BeforeLoginComponents/LoginHeader/LoginHeader";
import SignupForm from '../../Components/BeforeLoginComponents/Signup Form/SignupForm';
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
