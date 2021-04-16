import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from '../Pages/BeforeLoginPages/HomePage/HomePage';
import SignUp from '../Pages/BeforeLoginPages/SignUp/SignUp';
import Login from './../Pages/BeforeLoginPages/Login/Login';

export default function BeforeLoginRoutes() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/login" exact component={Login} />
                <Route path="/sign-up" exact component={SignUp} />
            </Switch>
        </>
    )
}
