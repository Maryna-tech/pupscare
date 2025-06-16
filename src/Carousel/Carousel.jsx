import { useState } from "react"
import Slider from "react-slick"
import CarouselItem from "./CarouselItem"
import { data } from "./data"

function Carousel() {
  const [dogImage, setDogImage] = useState(data);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="flex items-center justify-center w-full">
      <Slider {...settings}>
        {dogImage.map((item) => (
          <CarouselItem key={item.id} image={item} />
        ))}
      </Slider>
    </div>
  );
}

export default Carousel
