import React from "react";
import LoginHeader from "../../components/unAuth/LoginHeader";
import { LoginForm } from "../../components/unAuth/LoginForm";
import { Footer } from '../../components/shared/footer/Footer';

export const Login = () => {
    return (
        <>
            <LoginHeader />
            <LoginForm />
            <Footer />
        </>
    );
}
