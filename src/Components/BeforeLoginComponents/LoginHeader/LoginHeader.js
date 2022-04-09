/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from '../../SharedComponents/logo/Logo';

export default function LoginHeader() {

    const { pathname } = useLocation();

    return (
        <header className="py-3" style={{ backgroundColor: "#1d4354" }}>
            <div className="container">
                <Logo />
            </div>
        </header>
    );
}
