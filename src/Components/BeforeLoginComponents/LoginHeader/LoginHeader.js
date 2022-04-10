/* eslint-disable */
import React from "react";
import { Logo } from '../../SharedComponents/logo/Logo';

export default function LoginHeader() {
    return (
        <header className="py-3 border-bottom" >
            <div className="container">
                <Logo url={process.env.PUBLIC_URL} />
            </div>
        </header>
    );
}
