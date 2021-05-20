import React from  "react";

function Props({image,text,subtext}){
    return(
            <div className="rectangle">
                    <img className="imagesize" src={image} alt="news"/>
                    <h5 className="card-text">{text}</h5>
                    <p className="sub-card-text">{subtext}</p>
            </div>
    )
}
export default Props;