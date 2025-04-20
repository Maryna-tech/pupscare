import React from "react";
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";

import dog1 from"../assets/dog1.jpg"
import dog2 from"../assets/dog2.jpg"
import dog3 from"../assets/dog3.jpg"
import dog4 from"../assets/dog4.jpg"
import dog5 from"../assets/dog5.jpg"
import dog6 from"../assets/dog6.jpg"
import dog7 from"../assets/dog7.jpg"
import dog8 from"../assets/dog8.jpg"

const images =[dog1, dog2, dog3, dog4, dog5, dog6, dog7, dog8]

const Carousel=()=>{
    const settings ={
        dots: false,
        infinitive: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        margin: "10px",
    }
    
    const renderImages =()=>
        images.map((image, index) =><CarouselItem key={index} image={image}/>
)

    return(
        <div className="flex items-center justify-center">
            <div className="w-full">
                <Slider {...settings}>
                    {renderImages()}
                </Slider>
            </div>
        </div>
    )
}

export default Carousel

