import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import logo from "./WASDlogo.png"
import "./Nav.css";

function NavHolder() {
    const [State, setState] = useState(true);
    function toggle() {
        setState(!State);;
      }

    return(
        <>
            <NavLink exact to = '/'><img className="logo" src={logo} alt = ""/></NavLink>
            <div className="navholder" onClick={toggle}>
                {
                    State ?     
                    <div className="pointer">
                        <div className="bar1">_</div>
                        <div className="bar2">_</div>
                        <div className="bar3">_</div>
                    </div> 
                    :
                    <nav className="navbox">
                        <div className="close">+</div>
                        <ul className="menu">
                            <li><NavLink className = "Navbuttons" exact to = '/'>Home</NavLink></li> 
                            <li><NavLink className = "Navbuttons" to = '/About'>About</NavLink></li> 
                            <li><NavLink className = "Navbuttons" to = '/Blog'>Blog</NavLink></li> 
                        </ul>
                    </nav>
                }
            </div>
        </>
    )
}

export default NavHolder;