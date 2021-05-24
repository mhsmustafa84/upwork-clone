import React from 'react'
import { useTranslation } from "react-i18next";


export default function ProposalCard() {
    const { t } = useTranslation();
    return (
        <div>
            <div className="row">
                        <div className="col">
                            <div>
                                {t("Initiated")} Apr 27, 2021

                            </div>
                            <div className="text-muted">
                                {t("a month ago")}
                            </div>
                        </div>
                        <a href="#" className="col-6 fw-bold text-success ">
                            Create 3D Mock Up File for Phone Case Packaging
                        </a>
                        <div className="col text muted">
                            {t("Graphic Design")}
                        </div>
                    </div>
                    <hr/>
        </div>
    )
}
