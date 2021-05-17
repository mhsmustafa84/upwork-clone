/* eslint-disable */
import React from 'react'
import './ArticleCard.css'
export default function ArticleCard(props) {
    return (
        <div>

            <div className="row d-flex justify-content-between">
                <div className="col-3 position-relative">
                    <img className="position-absolute" id="article-image-ID" src={props.image} width={198} alt='' />
                </div>
                <div className="col-8">
                    <h2 className="fw-bolder fs-4">
                        {props.header}
                    </h2>
                    <p className="fs-6">
                        {props.content}
                    </p>
                    <a href="#" className="fs-5 text-decoration-none">Learn more <i className="fas fa-arrow-down" /></a>
                </div>
            </div>
        </div>
    )
}
