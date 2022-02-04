import React from "react";
import "./HomePage.css"
import {NavLink} from "react-router-dom";
import Image1 from "./Pictures/image1.png";
import Image2 from "./Pictures/image2.png";
import Image3 from "./Pictures/image3.png";
import SideImage1 from "./Pictures/SideImage1.jpg"
import SideImage2 from "./Pictures/SideImage2.jpg"
import SideImage3 from "./Pictures/SideImage3.jpg"
import Frame1 from "./Frame 1.png";
import Props from "./SideImageProps";
import Image from "./props";
import Grid from "./grid"
import "./props.css";

function Mid(){
    return(
        <div className="mid">
            <div className="flex">
                <Props className="rectangle" image={SideImage1} text="Epic Games starts questioning Apple" subtext="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></Props>                
                <Props className="rectangle" image={SideImage2} text="Epic Games starts questioning Apple" subtext="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></Props>                
                <Props className="rectangle" image={SideImage3} text="Epic Games starts questioning Apple" subtext="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></Props>
            </div>
            <div className="definition">
                <img className="back-ground" src={Frame1} alt=""/>
                <h1 className="for-back">WHAT IS WASD?</h1>
                <p className="p1">WASD is an antidote from being a noob ass. Having the right set of hardware improves your gaming experience by 10x and finding an apt set of gaming tech that suits your gaming style and also cares for your pockets is sometimes challenging. We believe every gamer deserves a worthy gaming setup so that, the only reason you miss a headshot should be because of your aiming skills and not the incompetence of your gaming accessories.   
                                  You deserve better, you deserve WASD.  </p>
                <NavLink to="/About"><p className="p2">KNOW MORE</p></NavLink>
            </div>
            <div className="Images">
               <Image className="i1" text="Dedicated For Gamers" image={Image1} hoverText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></Image>
               <Image className="i2" text="All Brands One Stop" image={Image2} hoverText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></Image>
               <Image className="i3" text="Make An Excellent decision" image={Image3} hoverText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></Image>
            </div>
            <div className="ocean">
                <h1 className ="oceanh">THE OCEAN OF GAMING TECH</h1>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
            </div>
            <Grid></Grid>
            <div className="ocean">
                <h2 className="oceanh">GET READY TO</h2>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
            </div>
        </div>
    )
}

export default Mid;