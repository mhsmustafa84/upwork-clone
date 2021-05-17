import React from "react";
import "../../../assets/Style/style.css";
import LoginHeader from "../../../Components/BeforeLoginComponents/LoginHeader/LoginHeader";
import LoginTemp from "../../../Components/BeforeLoginComponents/LoginTemp/LoginTemp";
import SignupFooter from "../../../Components/BeforeLoginComponents/SignupFooter/SignupFooter";
import { auth } from "../../../firebase";

export default function Login() {
  console.log("is ", auth.currentUser);
  return (
    <>
      <LoginHeader />
      <LoginTemp />
      <SignupFooter />
    </>
  );
}
