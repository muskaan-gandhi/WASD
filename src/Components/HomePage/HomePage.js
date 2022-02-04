import React from "react";
import Form from "./Form";
import Top from "./Top";
import Mid from "./mid";
import "./HomePage.css";
import RandomCommon from "../Common/RandomCommon"
import Footer from "../Common/Footer/Footer"

function HomePage() {
    return(
        <>
        <Top></Top>
        <Mid></Mid>
        <RandomCommon></RandomCommon>
        <Form></Form>
        <Footer></Footer>
        </>
    )
}

export default HomePage;