/* eslint-disable */
import React from 'react'
import '../HomeSecondSection/HomeSecondSection.css'

import { useSelector } from 'react-redux';


export default function HomeThirdSection() {
    let lang = useSelector(state => state.lang);

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="text-center mt-4">
                        <p className={`my-5 fw-bold ss-p-cn ${lang === 'ar' && "fs-5"}`}>FORTALENT</p>
                        <h2 className="ss-h2-cn">Workyourway</h2>
                        <p className={`my-5 ss-p2-cn ${lang === 'ar' && "fs-4"}`}>Choosehowyouwork</p>
                    </div>
                </div>
                <div className="row justify-content-evenly">
                    <div className="col-md-4 col-sm-12">
                        <div className="shadow my-4 ss-box-cn position-relative">
                            <a className="d-inline-block p-5" href="#">
                                <h3>Findaprojecttoworkon</h3>
                                <p className={`mb-5 pb-5 ${lang === 'ar' && "fs-4"}`}>TalentMarketplace</p>
                                <div className="position-absolute py-3 px-4 fs-2">
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="shadow my-4 ss-box-cn position-relative">
                            <a className="d-inline-block p-5" href="#">
                                <h3>Sellaprefefinedproject</h3>
                                <p className={`mb-5 pb-5 ${lang === 'ar' && "fs-4"}`}>ProjectCatalog</p>
                                <div className="position-absolute py-3 px-4 fs-2">
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
