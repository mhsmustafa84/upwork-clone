import React from 'react'

import { useTranslation } from "react-i18next";
export default function ContractFeedback() {
    const { t } = useTranslation();
    return (
        <div className="row pt-4 pb-5 ps-4">
            <div className="col">
                <h4>Client's Feedback to You</h4>
                <div>
                    <small>
                        <i className="fas fa-star text-bgUpwork"></i>
                        <i className="fas fa-star text-bgUpwork"></i>
                        <i className="fas fa-star text-bgUpwork"></i>
                        <i className="fas fa-star text-bgUpwork"></i>
                        <i className="fas fa-star text-bgUpwork"></i>
                    </small>
                </div>
                <p>great freelancer to work with</p>
            </div>
            <div className="col">
                <h4>Your Feedback to Client</h4>
                <div>
                    <small>
                        <i className="fas fa-star text-bgUpwork"></i>
                        <i className="fas fa-star text-bgUpwork"></i>
                        <i className="fas fa-star text-bgUpwork"></i>
                        <i className="fas fa-star text-bgUpwork"></i>
                        <i className="fas fa-star text-bgUpwork"></i>
                    </small>
                </div>
                <p>great client to work with</p>

            </div>
        </div>
    )
}
