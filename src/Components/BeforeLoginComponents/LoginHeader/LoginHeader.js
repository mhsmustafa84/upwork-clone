/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../../SharedComponents/Logo/Logo';
import { useTranslation } from "react-i18next";
import { BASE_ROUTE } from './../../../constant';


export default function LoginHeader() {
    const { t } = useTranslation();

    const { pathname } = useLocation();

    return (
        <header className="py-3" style={{ backgroundColor: "#1d4354" }}>
            <div className="container d-flex justify-content-between">
                <Logo />
                <div>
                    {
                        pathname === `${BASE_ROUTE}/sign-up` &&
                        <p className="text-white">{t("Already have an account")}<Link to={`${BASE_ROUTE}/login`}>{" "}{t("Log In")}</Link></p>
                    }
                </div>
            </div>
        </header>
    );
}
