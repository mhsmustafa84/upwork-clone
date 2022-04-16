import React, { useEffect, useState } from 'react';
import { fbAuth } from '../firebase';
import { UnAuth, Talent, Client } from '.';
import { Loader } from '../components/shared/Loader';

let userType = null;

export const Layout = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log('Layout => PUBLIC_URL', process.env.PUBLIC_URL);
        console.log('Layout => currentUser', fbAuth.auth.currentUser);

        fbAuth.onAuthStateChanged(fbAuth.auth, usr => {
            if (usr) {
                setUser(user);
                userType = localStorage.getItem('userType') || null;
            }
        });
    }, []);

    const LayoutComponent = () => {
        if (user) {
            if (userType === 'talent') return <Talent />;
            if (userType === 'client') return <Client />;
            if (userType !== null) return <Loader />;
        }
        if (!user) return <UnAuth />;
        return <h1>Layout is not found</h1>;
    };

    return <LayoutComponent />;
};
