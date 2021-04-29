/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../HomeSecondSection/HomeSecondSection.css'

export default function HomeThirdSection() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="text-center mt-4">
                        <p className="my-5 fw-bold ss-p-cn">FOR TALENT</p>
                        <h2 className="ss-h2-cn">Work your way</h2>
                        <p className="my-5 ss-p2-cn">Choose how you work, and unlock 142,039 new opportunities to earn.</p>
                    </div>
                </div>
                <div className="row justify-content-evenly">
                    <div className="col-md-4 col-sm-12">
                        <div className="shadow my-4 ss-box-cn position-relative">
                            <a className="d-inline-block p-5" href="#">
                                <h3>Find a project to work on</h3>
                                <p className="mb-5 pb-5">Talent Marketplace</p>
                                <div className="position-absolute py-3 px-4 fs-2">
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="shadow my-4 ss-box-cn position-relative">
                            <a className="d-inline-block p-5" href="#">
                                <h3>Sell a prefefined project</h3>
                                <p className="mb-5 pb-5">Project Catalog</p>
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
