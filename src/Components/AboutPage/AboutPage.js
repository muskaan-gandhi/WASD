import React from "react";
import PlaceHolder from "./background.jpg"
import "./About.css";
import {NavLink } from "react-router-dom"
import RandomCommon from "../Common/RandomCommon";
import Form from "../HomePage/Form";
import Footer from "../Common/Footer/Footer"

function AboutPage() {
    return(
        <div className="about">
            <img className="imageholder" src={PlaceHolder} alt ="" ></img>
            <div className="story">
                <h1 style={{fontSize:"3.5vw"}}>Our Story</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                     ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <NavLink className="connect-about" to="">CONNECT WITH US</NavLink>
            </div>
            <img className="imageholder" src={PlaceHolder} alt ="" ></img>   
                <h1>CHALLENGES WE ADDRESS</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            <div className="distorted-grid">
                <div className="grid1"> 
                    <img className="about-images"src={PlaceHolder} alt=""></img>
                    <p className="distorted-text">The customer has to compromise between cost and quality.</p>
                </div>
                <div className="grid2"> 
                    <img className="about-images"src={PlaceHolder} alt=""></img>
                    <p className="distorted-text">Absence of detailed  information about product details.</p>
                </div> 
                <div className="grid3"> 
                    <img className="about-images"src={PlaceHolder} alt=""></img>
                    <p className="distorted-text">Lack of variety of products on existing individual platforms.</p> 
                </div>
            </div>
            <h2 style={{fontSize:"200%"}}>Our Vision</h2>
            <p>To become the epicenter of gaming and esports in India.</p>
            <img src={PlaceHolder} alt=""></img>
            <RandomCommon></RandomCommon>
            <Form></Form>
            <Footer></Footer>
        </div>
    )
}

export default AboutPage;



// style={{width:"100vw"}}
// style={{position:"absolute", color:"white", top:"460px", left:"800px"}}