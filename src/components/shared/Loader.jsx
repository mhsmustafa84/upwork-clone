import React from 'react'
import img from "../../assets/Img/loader.gif"

export const Loader = () => {
    return (
        <div className="text-center mt-2">
            <img width="80" src={img} alt="loader" />
        </div>
    )
}
