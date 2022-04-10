import React from "react";
import LoginHeader from "../../components/unAuth/LoginHeader";
import SignUpSecondTemp from "../../components/unAuth/SignUp Second Temp/SignUpSecondTemp";
import { Footer } from '../../components/shared/footer/Footer';

export const SignupDetails = () => {
    return (
        <>
            <LoginHeader />
            <SignUpSecondTemp />
            <Footer />
        </>
    );
}
