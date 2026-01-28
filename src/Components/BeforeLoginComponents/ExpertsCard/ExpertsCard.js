import React from 'react'
import './ExpertsCard.css'
export default function ExpertsCard(props) {
    return (
        <div>
            <h4>Java Developers</h4>
            <div className="fw-bolder ms-0 mt-5 mb-3" id>
                <i className="fas fa-star fs-5" /> 4.8/5
        <span className="small text-secondary fw-normal">average rating</span>
            </div>
            <div className="position-relative">
                <img className="experts-CN d-inline-block px-0 rounded-circle position-relative border border-2 border-white" src={props.expert1} alt="" />
                <img className="experts-CN d-inline-block px-0 rounded-circle position-relative border border-2 border-white" src={props.expert2} alt="" style={{ zIndex: 1, left: '-20px' }} />
                <img className="experts-CN d-inline-block px-0 rounded-circle position-relative border border-2 border-white" src={props.expert3} alt="" style={{ zIndex: 2, left: '-40px' }} />
            </div>
        </div>
    )
}
