/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { fbAuth } from "../firebase";
import { UnAuth, Talent, Client } from ".";
import Loader from "../Components/SharedComponents/Loader/Loader";

let usrType = null;

export const Layout = () => {

    const [usr, setUsr] = useState(null);

    useEffect(() => {
        fbAuth.onAuthStateChanged(fbAuth.auth, user => {
            if (user) {
                console.log('file: layout.jsx => line 15 => useEffect => user', user);
                setUsr(user);
                usrType = localStorage.getItem('userType') || null;
            }
        });
    }, []);

    if (usr) {
        if (usrType === "talent") {
            return <Talent />
        }
        if (usrType === "client") {
            return <Client />
        }
        if (usrType !== null) {
            return <Loader />
        }
    } else {
        return <UnAuth />;
    }
}
