import React from "react";
import Slider from "react-slick";
import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";
import  "../../../styles/Slider.css";

const TestimonialSlider = () => {

    const settings ={
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
  return <Slider{...settings}>
    <div>
        <p className="review__text">
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, nesciunt dolores. Cumque, debitis magnam. Dolorem excepturi debitis magni corrupti. Eaque, nostrum laborum? Corrupti nihil cumque vero aspernatur minus cum quaerat?"
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
        <img src={ava01} alt="avatar" className=" rounded"/>
        <h6>Jhon Doe</h6>
        </div>
    </div>
    <div>
        <p className="review__text">
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, nesciunt dolores. Cumque, debitis magnam. Dolorem excepturi debitis magni corrupti. Eaque, nostrum laborum? Corrupti nihil cumque vero aspernatur minus cum quaerat?"
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
        <img src={ava02} alt="avatar" className=" rounded"/>
        <h6>Mitchell Marsh</h6>
        </div>
    </div>
    <div>
        <p className="review__text">
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, nesciunt dolores. Cumque, debitis magnam. Dolorem excepturi debitis magni corrupti. Eaque, nostrum laborum? Corrupti nihil cumque vero aspernatur minus cum quaerat?"
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
        <img src={ava03} alt="avatar" className=" rounded"/>
        <h6>Steven Crock</h6>
        </div> 

    </div>
  </Slider>
}

export default TestimonialSlider