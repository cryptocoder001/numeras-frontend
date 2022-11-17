import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SlickImages({ propsData }) {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
  };
  return (
    <Slider {...settings}>
      {propsData.length > 0 && (
        propsData.map((item, index) => (
          <img className="catalog-item-image rounded-3" src={item} key={index} alt=""></img>
        ))
      )}
    </Slider>
  );
}
