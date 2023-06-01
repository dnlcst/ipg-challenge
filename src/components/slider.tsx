import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <>
        <h2>Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1 um</h3>
          </div>
          <div>
            <h3>2 dois</h3>
          </div>
          <div>
            <h3>3 tres</h3>
          </div>
          <div>
            <h3>4 quarto</h3>
          </div>
          <div>
            <h3>5 cinco</h3>
          </div>
          <div>
            <h3>6 seis</h3>
          </div>
        </Slider>
      </>
    );
  }
}