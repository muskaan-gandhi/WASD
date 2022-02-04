import React from "react";
import grid from "./grid.jpg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./grid.css"

function Grid() {
    const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return(
    <Carousel className="grid" responsive={responsive} 
    autoPlay="true" customTransition="transform 3s ease-in-out" 
    centerMode="true" arrows="false" infinite="true" 
    focusOnSelect={true}>
        <img src={grid} alt="" style={{height:"12vw"}}></img>
        <img src={grid} alt="" style={{height:"12vw"}}></img>
        <img src={grid} alt="" style={{height:"12vw"}}></img>
        <img src={grid} alt="" style={{height:"12vw"}}></img>
        <img src={grid} alt="" style={{height:"12vw"}}></img>
        <img src={grid} alt="" style={{height:"12vw"}}></img>
    </Carousel>
  )
}

export default Grid;