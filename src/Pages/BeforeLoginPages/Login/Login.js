import React from "react";
import '../../../assets/Style/style.css'
import LoginHeader from "../../../Components/SharedComponents/LoginHeader/LoginHeader";
import LoginTemp from "../../../Components/SharedComponents/LoginTemp/LoginTemp";
import SignupFooter from "../../../Components/SharedComponents/SignupFooter/SignupFooter";

export default function Login() {
    return (
        <>
            <LoginHeader />
            <LoginTemp />
            <SignupFooter />
        </>
    );
}
