import React from 'react'
import img from "../../../assets/img/loader.gif"

export default function Loader() {
    return (
        <div className="text-center">
            <img src={img} alt="loader" />
        </div>
    )
}
