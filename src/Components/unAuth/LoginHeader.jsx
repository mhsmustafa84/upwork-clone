/* eslint-disable */
import React from "react";
import { Logo } from '../shared/Logo';

export default function LoginHeader() {
    return (
        <header className="fixed-top bg-white border-bottom" >
            <div className="container py-3">
                <Logo url={process.env.PUBLIC_URL} />
            </div>
        </header>
    );
}
