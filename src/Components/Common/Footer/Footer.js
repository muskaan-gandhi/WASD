import React from "react";
import "./Footer.css"
import Instagram from "./instagram.png";
import LinkedIn from "./linkedin.png";
import Reddit from "./reddit.png";
import Whatsapp from "./whatsapp.png";
import logo from "./black-WASDlogo.png"

function Footer() {
    return(
        <div className="Footer">
            <p>PREPARE FOR A QUICK RESPONSE - CONNECT<a className="link" href="http://wasd.co.in/">@WASD.CO.IN</a></p>
            <p>- ALSO FIND US ON -</p>
            <div className="social_media">
                <div><img className="media-logo" src={Instagram} alt=""></img></div>
                <div><img className="media-logo" src={LinkedIn} alt=""></img></div>
                <div><img className="media-logo" src={Reddit} alt=""></img></div>
                <div><img className="media-logo" src={Whatsapp} alt=""></img></div>
            </div>
            <img className="black-logo" src={logo} alt=""></img>
        </div>
    )
}

export default Footer;