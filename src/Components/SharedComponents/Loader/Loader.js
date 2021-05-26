import React from 'react'
import img from "../../../assets/img/loader.gif"

export default function Loader() {
    return (
        <div className="text-center">
            <img width="350" src={img} alt="loader" />
        </div>
    )
}
