import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { createGlobalStyle } from 'styled-components';
import { useState } from "react";

const GlobalStyles = createGlobalStyle`
  .slider-for {
    width: 100%;
    height: 500px;
    max-width: 75%;
    padding-right: 35px;
    float: left;
  }
  .slider-nav {
    width: 100%;
    height: 500px;
    max-width: 25%;
    float: left;
    padding: 20px 0 0;
  }
  .slider-banner-image {
    height: 500px;
  }
  .thumbnail-image .thumbImg {
    max-width: 178px;
    height: 110px;
    margin: 0 auto;
    border: 1px solid #ebebeb;
  }
  .catalog-item-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .slick-vertical .slick-slide:active,
  .slick-vertical .slick-slide:focus,
  .slick-arrow:hover,
  .slick-arrow:focus {
      border: 0;
      outline: 0;
  }
  .slick-next {
    right: 10px;
    z-index: 99;
  }
  .slick-next:before {
      font-size: 22px;
  }
  .slick-prev {
      left: 10px;
      z-index: 99;
  }
  .slick-prev:before {
      font-size: 22px;
  }
`;

export default function SlickMultiImages({ propsData }) {
  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
  };

  const settingsNav = {
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    dots: false,
    focusOnSelect: true,
    swipeToSlide: true,
    verticalSwiping: true,
  };
  const [sliderNav, setSliderNav] = useState();
  const [sliderFor, setSliderFor] = useState();

  return (
    <>
      <GlobalStyles />
      <Slider
        className="slider-nav thumb-image"
        asNavFor={sliderNav}
        ref={(nav) => setSliderNav(nav)}
        {...settingsNav}>
        {propsData?.length > 0 && (
          propsData.map((item, index) => (
            <div className="thumbnail-image" key={index}>
              <div className="thumbImg">
                <img className="catalog-item-image" src={item} alt=""></img>
              </div>
            </div>
          ))
        )}
      </Slider>
      <Slider
        className="slider-for"
        asNavFor={sliderFor}
        ref={(nav) => setSliderFor(nav)}
        {...settingsFor}>
        {propsData?.length > 0 && (
          propsData.map((item, index) => (
            <div className="slider-banner-image" key={index}>
              <img className="catalog-item-image" src={item} alt=""></img>
            </div>
          ))
        )}
      </Slider>
    </>
  );
}
