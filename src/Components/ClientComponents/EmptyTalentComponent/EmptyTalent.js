import React from 'react'
import "./EmptyTalent.css"
import { Link } from 'react-router-dom'
import { BASE_ROUTE } from './../../../constant';

export default function EmptyTalent(props) {
    return (
        <div>
            <div className="svg mt-3">
                {props.image}
            </div>
            <div className="text-center">
                <h5 className="mt-3">{props.heading}</h5>
                <div className="fs-6 mb-4 mt-3"><Link to={`${BASE_ROUTE}${props.Link}`}>{props.linkContent}</Link>{props.content}</div>
            </div>
        </div>
    )
}
