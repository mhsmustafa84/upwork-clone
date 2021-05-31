import React from 'react'

export default function StarsRating({ clientReview, index }) {
    // console.log(index, clientReview);
    return (
        <i className={`${index <= clientReview ? "fas" : "far"} fa-star`}></i>
        // <i className="far fa-star"></i>
    )
}
