import React from "react";
import LoginHeader from "../../Components/BeforeLoginComponents/LoginHeader/LoginHeader";
import LoginTemp from "../../Components/BeforeLoginComponents/LoginTemp/LoginTemp";
import SignupFooter from "../../Components/BeforeLoginComponents/SignupFooter/SignupFooter";
import { fbAuth } from "../../firebase";

export const Login = () => {
    console.log("currentUser", fbAuth.auth.currentUser);
    return (
        <>
            <LoginHeader />
            <LoginTemp />
            <SignupFooter />
        </>
    );
}
