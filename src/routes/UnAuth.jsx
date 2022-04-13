import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, SignUp } from '../pages/unAuth';
import { NotFound } from '../pages/shared/NotFound';

const routes = [
    {
        path: '/',
        element: () => <Home />,
    },
    {
        path: '/login',
        element: () => <Login />,
    },
    {
        path: '/sign-up',
        element: () => <SignUp />,
    },
    {
        path: '*',
        element: () => <NotFound />,
    },
];

const baseRoute = process.env.PUBLIC_URL;

export const UnAuth = () => {
    return (
        <Routes>
            {routes.map(route => (
                <Route
                    key={route.path}
                    path={`${baseRoute}${route.path}`}
                    element={<route.element />}
                />
            ))}
        </Routes>
    );
};
