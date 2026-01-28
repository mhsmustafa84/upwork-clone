import React from 'react'

export default function EvaluationCard(props) {
    return (
        <div>
            <h2 className="evaluation-CN fw-bolder ms-0" id="Average-client-ID">
                {props?.headerTag} {props.header}
            </h2>
            <div className="small text-secondary">
                {props.content}
            </div>
        </div>
    )
}
