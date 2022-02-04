import React from 'react'
import Icon1 from "./icon1.png";
import Icon2 from "./icon2.png";
import Icon3 from "./icon3.png";
import Frame3 from "./Frame3.png";

function RandomCommon() {
    return (
        <>
            <div className="icons" style={{paddingRight:"17vw", paddingLeft:"14vw", margin:"30px"}}>
                <div>
                    <img className="each_icon" src={Icon1} alt=""/>
                    <p className="icon_text">WASD <br/> CONNECT</p>
                </div>
                <div>
                    <img className="each_icon" src={Icon2} alt=""/>
                    <p className="icon_text">WASD <br/> STORE</p>
                </div>
                <div>
                    <img className="each_icon" src={Icon3} alt=""/>
                    <p className="icon_text">WASD <br/> CUSTOMIZED</p>
                </div>
            </div>
            <img className="Frame3" src={Frame3} alt=""></img>
            <p className='coming_soon'>COMING SOON</p>
            <div className="sign-up">
                <h2 className="sign-uph">JOIN THE LEAGUE</h2>
                <p>Sign-up to be the first to get notified.</p>
                <p><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
        </>    
    )
}

export default RandomCommon


