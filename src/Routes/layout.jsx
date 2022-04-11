/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { fbAuth } from '../firebase';
import { UnAuth, Talent, Client } from '.';
import { Loader } from '../components/shared/Loader';

let usrType = null;

export const Layout = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log('file: Layout => PUBLIC_URL', process.env.PUBLIC_URL);
        console.log('file: Layout => currentUser', fbAuth.auth.currentUser);

        fbAuth.onAuthStateChanged(fbAuth.auth, user => {
            if (user) {
                console.log(
                    'file: layout.jsx => line 15 => useEffect => user',
                    user
                );
                setUser(user);
                usrType = localStorage.getItem('userType') || null;
            }
        });
    }, []);

    if (user) {
        if (usrType === 'talent') return <Talent />;
        if (usrType === 'client') return <Client />;
        if (usrType !== null) return <Loader />;
    }
    if (!user) return <UnAuth />;
};
