import React from "react";
import "./HomePage.css"
import {NavLink} from "react-router-dom";
import Image1 from "./Pictures/image1.jpg";
import Image2 from "./Pictures/image2.jpg";
import Image3 from "./Pictures/image3.jpg";
import Icon1 from "./Pictures/icon1.jpg";
import Icon2 from "./Pictures/icon2.jpg";
import Icon3 from "./Pictures/icon3.jpg";
import Frame3 from "./Pictures/Frame3.png";
import SideImage1 from "./Pictures/SideImage1.jpg"
import SideImage2 from "./Pictures/SideImage2.jpg"
import SideImage3 from "./Pictures/SIdeImage3.jpg"
import Props from "./SideImageProps";
import Image from "./props";
import "./props.css";

function Mid(){
    return(
        <div className="mid">
            <div className="flex">
                <Props className="rectangle" image={SideImage1} text="Epic Games starts questioning Apple" subtext="This component is work in progess, it's BUGGY!."></Props>                
                <Props className="rectangle" image={SideImage2} text="Epic Games starts questioning Apple" subtext="This component is work in progess, it's BUGGY!."></Props>                
                <Props className="rectangle" image={SideImage3} text="Epic Games starts questioning Apple" subtext="This component is work in progess, it's BUGGY!."></Props>
            </div>
            <h1 className="for-back">WHAT IS WASD?</h1>
            <p className="p1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            <NavLink ><p className="p2">KNOW MORE</p></NavLink>
            <div className="Images">
               <Image className="i1" text="Dedicated For Gamers" image={Image1} hoverText="Lorem Ipsum"></Image>
               <Image className="i2" text="All Brands One Stop" image={Image2} hoverText="Lorem Ipsum"></Image>
               <Image className="i3" text="Make An Excellent decision" image={Image3} hoverText="Lorem Ipsum"></Image>
            </div>
            <div className="ocean">
                <h1 className ="oceanh">THE OCEAN OF GAMING TECH</h1>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                <h2 className="oceanh">GET READY TO</h2>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
            </div>
            <div className="icons">
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
        </div>
    )
}

export default Mid;