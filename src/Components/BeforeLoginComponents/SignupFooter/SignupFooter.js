/* eslint-disable */
import React from "react";
import { useTranslation } from "react-i18next";  


export default function SignupFooter() {
    const { t }=useTranslation();
    return (
        <footer className="text-center">
            <ul className="list-unstyled text-white">
                <li>{t("Upwork Global Inc")}</li>
                <li>
                    <a href="#">{t("About Us")}</a>
                </li>
                <li>
                    <a href="#">{t("Feedback")}</a>
                </li>
                <li>
                    <a href="#">{t("Community")}</a>
                </li>
            </ul>
        </footer>
    );
}
