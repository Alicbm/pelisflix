import { Carousel } from "./carousel";
import '../styles/carouselTraditional.css'
import React from "react";

export function CarouselTraditional({ array }){
  
  return(
    <div className="carouselTraditional-container">
      <h2 className="carouselTraditional-container__title">Now Playing</h2>
      <div className="carouselTraditional-content">
        <Carousel array={array}/>
      </div>
    </div>
  )
}