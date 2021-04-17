/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import BeforeLoginRoutes from "../Routes/BeforeLoginRoutes";
import ClientRoutes from "../Routes/ClientRoutes";
import TalentRoutes from "./../Routes/TalentRoutes";

export default function LayOut() {
  let layOut = useSelector((state) => state.layOut);

  return (
    <>
      {/* {layOut === "talent" ? <TalentRoutes /> : <ClientRoutes />} */}
      <BeforeLoginRoutes />
    </>
  );
}
