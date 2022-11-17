import { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { StickyContainer, Sticky } from "react-sticky";
import { Link as ScrollLink } from "react-scroll";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import catalogs from '../../../assets/json/catalogs.json';

const GlobalStyles = createGlobalStyle`
  .slider-for {
    width: 100%;
    height: 500px;
    float: left;
  }
  .slider-nav {
    width: 100%;
    height: 500px;
    float: left;
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
`;

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

export default function CatalogDetail() {
  const history = useHistory();
  const { name, id } = useParams();
  const [item, setItem] = useState();
  const [sliderNav, setSliderNav] = useState();
  const [sliderFor, setSliderFor] = useState();

  useEffect(() => {
    const data = catalogs.filter((val) => {
      return val.name.toLowerCase() === name;
    });
    if (data.length > 0 && data[0].items.length > 0) {
      setItem(data[0].items[id])
    }
  }, [id, name]);

  return (
    <div className="container">
      <GlobalStyles />
      <div className="row mb-3">
        <div className='col-sm-12 col-md-12 mt-2'>
          <div className="font-14 justify-start gap-2">
            <Link to={`/join-syndicate`} className="no-underline site-color">Syndicate Catalog</Link>
            <span>:</span>
            <Link to={`/syndicate/${name.toLowerCase()}`} className="no-underline site-color text-capitalize">{name} Catalog</Link>
            <span>:</span>
            <span>{item?.name}</span>
          </div>
        </div>
        <div className="col-sm-12 col-md-9 mt-4">
          <div className="x-font7">{item?.name}</div>
          <div className="x-font2">
            {item?.description}
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-2 col-md-2'>
          <StickyContainer style={{ height: '100%' }}>
            <Sticky topOffset={-150}>{({ style, isSticky }) => (
              <div style={{ ...style, marginTop: isSticky ? '150px' : '0px' }}>
                <Slider
                  className="vertical-slider slider-nav"
                  asNavFor={sliderFor}
                  ref={(nav) => setSliderNav(nav)}
                  {...settingsNav}>
                  {item?.images.length > 0 && (
                    item.images.map((item, index) => (
                      <div className="thumbnail-image" key={index}>
                        <div className="thumbImg">
                          <img className="catalog-item-image" src={item} alt=""></img>
                        </div>
                      </div>
                    ))
                  )}
                </Slider>
                <div className='mx-2'>
                  <ul className='catalog-detail-scroll'>
                    <li>
                      <ScrollLink activeClass="active" className='catalog-detail-link' offset={-106} spy to="specific_details">{name} Details</ScrollLink>
                    </li>
                    <li>
                      <ScrollLink activeClass="active" className='catalog-detail-link' offset={-80} spy to="syndicate_prospectus">Syndicate Prospectus</ScrollLink>
                    </li>
                    <li>
                      <ScrollLink activeClass="active" className='catalog-detail-link' offset={-80} spy to="additional_details">Additional Details</ScrollLink>
                    </li>
                    <li>
                      <ScrollLink activeClass="active" className='catalog-detail-link' offset={-80} spy to="manager_background">Manager Background</ScrollLink>
                    </li>
                  </ul>
                </div>
              </div>
            )}</Sticky>
          </StickyContainer>
        </div>
        <div className='col-sm-10 col-md-7'>
          <div className='row'>
            <Slider
              className="vertical-slider slider-for"
              asNavFor={sliderNav}
              ref={(nav) => setSliderFor(nav)}
              {...settingsFor}>
              {item?.images.length > 0 && (
                item?.images.map((item, index) => (
                  <div className="slider-banner-image" key={index}>
                    <img className="catalog-item-image" src={item} alt=""></img>
                  </div>
                ))
              )}
            </Slider>
            <div className='mt-5' id="specific_details">
              <p className='font-22 wei-300 text-capitalize'>{name} Specific Details</p>
              <div className='font-16 mt-3' dangerouslySetInnerHTML={{ __html: item?.specific_details }}></div>
              <p className='font-14 wei-500 bule-color'>DOWNLOAD PEDIGREE DOCUMENT</p>
              <span className='font-14 wei-500 bule-color'>DOWNLOAD RACING HISTORY DOCUMENT</span>
            </div>
            <hr className='mx-2 my-4' id="syndicate_prospectus" />
            <div>
              <p className='font-22 wei-300'>Syndicate Prospectus</p>
              <div className='font-16 mt-3' dangerouslySetInnerHTML={{ __html: item?.syndicate_prospectus }}></div>
              <Link to = "/" className='font-14 wei-500 bule-color'>ASK A QUESTION</Link><br />
              <Link to = "/" className='font-14 wei-500 bule-color'>BACK TO ALL {item?.name.toUpperCase()} SYNDICATES</Link>
            </div>
            <hr className='mx-2 my-4' id="additional_details" />
            <div>
              <p className='font-22 wei-300'>Additional Details</p>
              <div className='font-16 mt-3' dangerouslySetInnerHTML={{ __html: item?.additional_details }}></div>
            </div>
            <hr className='mx-2 my-4' id="manager_background" />
            <div>
              <p className='font-22 wei-300'>Manager Background</p>
              <span className='font-14 wei-500 bule-color'>CONTACT MANAGER</span>
              <div className='font-16 mt-3' dangerouslySetInnerHTML={{ __html: item?.manager_background }}></div>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-3'>
          <StickyContainer style={{ height: '100%' }}>
            <Sticky topOffset={-150}>{({ style, isSticky }) => (
              <div className='x-cr-sy-card share-card' style={{ ...style, marginTop: isSticky ? '150px' : '0px' }}>
                <div className='x-font2 mb-2'>$X,XXXX per 10% share</div>
                <span className='font-14'>More details here. {item?.description} {item?.description}</span>
                <div className="mt-2 flex fd-c">
                  <span className='font-16 wei-500'>Select your share:</span>
                  <select className="x-input1-40 mobile-width30 select-location w100 mt-2 bg-white">
                    <option value="10">10% Share</option>
                    <option value="20">20% Share</option>
                    <option value="50">50% Share</option>
                    <option value="100">100% Share</option>
                  </select>
                  <button className="x-button6 mt-3 mb-3" onClick={() => history.push(`/syndicate/share/${name.toLowerCase()}/${id}/1`)}>BOOK SHARE(S)</button>
                </div>
                <div className='text-center'>
                  <Link to  = "/" className='font-14 wei-500 bule-color'>ASK A QUESTION</Link>
                </div>
              </div>
            )}</Sticky>
          </StickyContainer>
        </div>
      </div>
    </div>
  );
}
