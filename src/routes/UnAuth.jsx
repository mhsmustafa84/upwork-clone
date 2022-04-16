import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../pages/shared/NotFound';
import { Home, Login, SignUp } from '../pages/unAuth';

const baseRoute = process.env.PUBLIC_URL;

export const unAuthRoutes = {
    home: {
        path: baseRoute,
        Component: Home,
    },
    login: {
        path: baseRoute + '/login',
        Component: Login,
    },
    signUp: {
        path: baseRoute + '/sign-up',
        Component: SignUp,
    },
    notFound: {
        path: '*',
        Component: NotFound,
    },
};

const routes = () => {
    const arr = [];
    for (const route in unAuthRoutes) {
        arr.push(unAuthRoutes[route]);
    }
    return arr;
};

export const UnAuth = () => {
    return (
        <Routes>
            {routes().map(route => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.Component />}
                />
            ))}
        </Routes>
    );
};
