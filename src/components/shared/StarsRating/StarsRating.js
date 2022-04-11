import React from 'react'

export default function StarsRating({ clientReview, index }) {
    return (
        <i className={`${index <= clientReview ? "fas" : "far"} fa-star`}></i>
    )
}
