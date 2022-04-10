/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img1 from '../../assets/svg/Microsoft_logo.svg';
import img2 from '../../assets/svg/Airbnb_Logo.svg';
import img3 from '../../assets/svg/godaddy.d9459f1.svg';
import img4 from '../../assets/svg/ge.svg';
import img5 from '../../assets/Img/home-up.jpg';

export const HomeContent = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 col-sm-12 mt-5 pt-4">
                    <h1 className="upw-color fw-bold my-5">How work should work</h1>
                    <p className="fs-3 text-main-color pb-5">
                        Forget the old rules. You can have the best people.
                        Right now. Right here.
                    </p>
                    <ul className="d-flex justify-content-between p-0 mt-5">
                        <li>
                            <img src={img1} width="100" height="50" />
                        </li>
                        <li>
                            <img src={img2} width="100" height="50" />
                        </li>
                        <li>
                            <img src={img3} width="100" height="50" />
                        </li>
                        <li>
                            <img src={img4} width="100" height="50" />
                        </li>
                    </ul>
                </div>
                <div className="col-md-5 col-sm-12 text-md-end">
                    <img className="w-75 mt-5 pt-5" src={img5} />
                </div>
            </div>
        </div>
    );
};
