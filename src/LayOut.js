/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { fbAuth } from "./firebase";
import { UnAuth } from "./Routes/unAuth";
import ClientRoutes from "./Routes/ClientRoutes";
import TalentRoutes from "./Routes/TalentRoutes";
import Loader from "./Components/SharedComponents/Loader/Loader";

export default function LayOut() {
    const [usr, setUsr] = useState(null);
    const [usrType, setUsrType] = useState(null);

    useEffect(() => {
        fbAuth.onAuthStateChanged(fbAuth.auth, user => {
            if (user) {
                console.log("file: LayOut.js => line 16 => useEffect => user", user);
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
        } else if (usrType !== null) {
            return <Loader />
        }
    } else {
        return <UnAuth />;
    }
}
