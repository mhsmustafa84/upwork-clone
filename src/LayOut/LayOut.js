/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import BeforeLoginRoutes from "../Routes/BeforeLoginRoutes";
import ClientRoutes from "../Routes/ClientRoutes";
import TalentRoutes from "./../Routes/TalentRoutes";
import Loader from "./../Components/SharedComponents/Loader/Loader";

export default function LayOut() {
  const [usr, setUsr] = useState(null);
  const [usrType, setUsrType] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUsr(user);
        setUsrType(localStorage.getItem('userType'));
      }
    });
  }, [])


  if (usr) {
    if (usrType === "talent") {
      return <TalentRoutes />
    } else if (usrType === "client") {
      return <ClientRoutes />
    } else {
      return <Loader />
    }
  } else {
    return <BeforeLoginRoutes />
  }
}