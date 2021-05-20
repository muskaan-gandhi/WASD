import React from "react"
import video from "./WASDvideo.mp4";
import NavHolder from "../Common/Header/NavHolder"
import "./HomePage.css"
import {NavLink} from "react-router-dom";

function Top(){
    return (  
        <>
          <video className="myVideo" autoplay="true" muted="true" loop="true"> 
            <source src={video} type="video/mp4"/> 
          </video> 
        
          <div>
          <NavHolder></NavHolder>
          <div className="content">
            <h1 className="header">HOMELAND TO <br/>THE NEXT GEN #GAMERS</h1>
            <h4 className="l1">India’s First Dedicated Destination <br/>For Gaming Tech</h4>
            <NavLink className="connect">CONNECT WITH US</NavLink>
        </div>
        </div>
      </>
    )
}

export default Top;