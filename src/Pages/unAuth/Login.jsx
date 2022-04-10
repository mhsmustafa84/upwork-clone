import React from "react";
import LoginHeader from "../../Components/BeforeLoginComponents/LoginHeader/LoginHeader";
import { LoginForm } from "../../Components/BeforeLoginComponents/LoginForm";
import { fbAuth } from "../../firebase";
import { Footer } from '../../Components/SharedComponents/footer/Footer';

export const Login = () => {
    console.log("currentUser", fbAuth.auth.currentUser);
    return (
        <>
            <LoginHeader />
            <LoginForm />
            <Footer />
        </>
    );
}
