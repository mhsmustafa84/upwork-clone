/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './HomeFirstSection.css'
import img1 from '../../../assets/svg/microsoft.94fec27.svg'
import img2 from '../../../assets/svg/airbnb.0db5415.svg'
import img3 from '../../../assets/svg/godaddy.d9459f1.svg'
import img4 from '../../../assets/svg/ge.5a23edc.svg'
import img5 from '../../../assets/svg/bissell.3861a37.svg'
import img6 from '../../../assets/img/susan-desktop.webp'
import img7 from '../../../assets/img/john-desktop.webp'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";  
export default function HomeFirstSection() {
    const { t }=useTranslation();
    return (
        <section style={{ marginTop: "10%" }} className="overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div>
                            <h1 className="my-5 fs-h1-cn">{t("Theworldsworkmarketplace")}</h1>
                            <p className="fs-3 fs-p-cn">
                            {t("Engagethelargestnetwork")}
                            </p>
                            <div className="my-5">
                                <Link className="btn py-3 px-4 me-4 fs-btns-cn text-decoration-none" to="/freelance-jobs">{t("FindTalent")}</Link>
                                <button className="btn py-3 px-4 border text-success">{t("FindWork")}</button>
                            </div>
                            <ul className="d-flex justify-content-between p-0">
                                <li><img src={img1} width="70" height="26" /></li>
                                <li><img src={img2} width="70" height="26" /></li>
                                <li><img src={img3} width="70" height="26" /></li>
                                <li><img src={img4} width="70" height="26" /></li>
                                <li><img src={img5} width="70" height="26" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="mt-5 position-relative">
                            <div className="w-75">
                                <img className="w-75" src={img6} />
                            </div>
                            <div className="w-75 position-absolute fs-abs-img-cn">
                                <img className="w-75" src={img7} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
