/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './HomeFirstSection.css'
import img1 from '../../../assets/svg/Microsoft_logo.svg'
import img2 from '../../../assets/svg/Airbnb_Logo.svg'
import img3 from '../../../assets/svg/godaddy.d9459f1.svg'
import img4 from '../../../assets/svg/ge.svg'
import img6 from '../../../assets/Img/susan-desktop.webp'
import img7 from '../../../assets/Img/john-desktop.webp'

export default function HomeFirstSection() {

    return (
        <section className="overflow-hidden" style={{ padding: "5% 0 15%" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 mt-5 pt-5">
                        <div>
                            <p className="my-5 h1">The worlds work marketplace</p>
                            <p className="fs-3 fs-p-cn">
                                Engage the largest network
                            </p>
                            <div className="my-5">
                                <button className="btn py-3 px-4 me-4 fs-btns-cn text-decoration-none">Find Talent</button>
                                <button className={`btn py-3 px-4 border text-success`}>Find Work</button>
                            </div>
                            <ul className="d-flex justify-content-between p-0">
                                <li><img src={img1} width="70" height="26" /></li>
                                <li><img src={img2} width="70" height="26" /></li>
                                <li><img src={img3} width="70" height="26" /></li>
                                <li><img src={img4} width="70" height="26" /></li>
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
