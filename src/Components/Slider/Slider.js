import React from "react";
import { Carousel } from "react-bootstrap";
const Slider = () => {
  return (
    <div style={{marginTop:'130px'}}>
      <Carousel className="slider">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../slides/bebe.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../slides/dent.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../slides/cheveux.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../slides/anti-age.png"
            alt="4 slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../.././slides/soins.jpg"
            alt="5 slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
