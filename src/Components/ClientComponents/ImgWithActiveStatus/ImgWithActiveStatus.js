import React from 'react'
import "./ImgWithActiveStatus.css"

export default function ImgWithActiveStatus({avatar}) {
  return (
    <div className="me-1" style={{ width: "80px", height: "80px",borderRadius: "50%", overflow: "hidden" }}>
<img src={avatar} style={{ width: "80px", }}/>
    </div>
  )
}
