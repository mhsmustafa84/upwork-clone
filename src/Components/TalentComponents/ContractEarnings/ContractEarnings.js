import React from 'react'
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function ContractEarnings() {
    const { t } = useTranslation();
    return (
        <div className=" pt-4 pb-5 ps-4">
            <div className="row">
                <div className="col">
                    <h6>Budget</h6>
                    <h4>$10.00</h4>
                </div>
                <div className="col">
                    <h6>Total Earnings</h6>
                    <h4>$10.00</h4>
                </div>
            </div>
            <hr />
            <div className="">
                <h5>Website design for my business</h5>
                <h6>$10.00 (Paid)</h6>
                <h6>Completed Feb 21</h6>
            </div>
        </div>

    )
}
