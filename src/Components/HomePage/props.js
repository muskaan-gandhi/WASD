import React from "react";
import "./props.css";

function Image({text, image, hoverText}) {
    return(
        <div className="image-card">
            <h3 className ="text">{text}</h3>
            <img src={image} alt="" className="image"/>
            <p className="hoverText">{hoverText}</p>
        </div>
    )
}

export default Image;