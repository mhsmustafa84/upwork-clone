import React from 'react'
import img from "../../../assets/Img/loader.gif"

export default function Loader() {
    return (
        <div className="text-center">
            <img src={img} alt="loader" />
        </div>
    )
}
