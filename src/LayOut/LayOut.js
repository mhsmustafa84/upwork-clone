import React from "react";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ClientRoutes from "../Routes/ClientRoutes";
import TalentRoutes from "./../Routes/TalentRoutes";

export default function LayOut() {
  return (
    <>
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <ClientRoutes /> */}
      <TalentRoutes />
    </>
  );
}
