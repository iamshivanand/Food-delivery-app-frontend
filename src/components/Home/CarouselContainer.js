import React from "react";
import "./style.css";
import { Carousel } from "react-bootstrap";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import banner4 from "../../images/banner4.jpg";
import banner5 from "../../images/banner5.jpg";
import banner6 from "../../images/banner6.jpg";

function CarouselContainer() {
  return (
    <Carousel fade={true} controls={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carouselImages"
          src={banner1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carouselImages"
          src={banner2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carouselImages"
          src={banner3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carouselImages"
          src={banner4}
          alt="fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carouselImages"
          src={banner5}
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carouselImages"
          src={banner6}
          alt="Sixth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselContainer;
