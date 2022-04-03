/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { fbAuth } from "../firebase";
import BeforeLoginRoutes from "../Routes/BeforeLoginRoutes";
import ClientRoutes from "../Routes/ClientRoutes";
import TalentRoutes from "./../Routes/TalentRoutes";
import Loader from "./../Components/SharedComponents/Loader/Loader";

export default function LayOut() {
    const [usr, setUsr] = useState(null);
    const [usrType, setUsrType] = useState(null);

    useEffect(() => {
        console.log({ fbAuth });
        fbAuth.onAuthStateChanged(fbAuth.auth, user => {
            if (user) {
                setUsr(user);
                setUsrType(localStorage.getItem('userType') || null);
            }
        });
    }, []);


    if (usr) {
        if (usrType === "talent") {
            return <TalentRoutes />
        } else if (usrType === "client") {
            return <ClientRoutes />
        } else if (usrType === null) {
            return <BeforeLoginRoutes />
        } else {
            return <Loader />
        }
    } else {
        return <BeforeLoginRoutes />;
    }
}
