import React from "react";
import LoginHeader from "../../Components/BeforeLoginComponents/LoginHeader/LoginHeader";
import { LoginForm } from "../../Components/BeforeLoginComponents/LoginForm";
import { Footer } from '../../Components/SharedComponents/footer/Footer';

export const Login = () => {
    return (
        <>
            <LoginHeader />
            <LoginForm />
            <Footer />
        </>
    );
}
