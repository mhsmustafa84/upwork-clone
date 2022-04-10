import React from "react";
import LoginHeader from "../../Components/BeforeLoginComponents/LoginHeader/LoginHeader";
import { LoginForm } from "../../Components/BeforeLoginComponents/LoginForm";
import SignupFooter from "../../Components/BeforeLoginComponents/SignupFooter/SignupFooter";
import { fbAuth } from "../../firebase";

export const Login = () => {
    console.log("currentUser", fbAuth.auth.currentUser);
    return (
        <>
            <LoginHeader />
            <LoginForm />
            <SignupFooter />
        </>
    );
}
