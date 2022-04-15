import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, SignUp } from '../pages/unAuth';
import { NotFound } from '../pages/shared/NotFound';

const routes = [
    {
        path: '/',
        Component: Home,
    },
    {
        path: '/login',
        Component: Login,
    },
    {
        path: '/sign-up',
        Component: SignUp,
    },
    {
        path: '*',
        Component: NotFound,
    },
];

const baseRoute = process.env.PUBLIC_URL;

export const UnAuth = () => {
    return (
        <Routes>
            {routes.map(({ path, Component }) => (
                <Route
                    key={path}
                    path={`${baseRoute}${path}`}
                    element={<Component />}
                />
            ))}
        </Routes>
    );
};
