import React, { useState, useEffect } from 'react';

export default function ScrollToTop () {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      toggleVisibility();
    });
  }, []);

  return (
    <div id='scroll-to-top' className={`${isVisible ? 'show' : ''} init`}>
      {isVisible && (
        <div onClick={() => scrollToTop()}>
          <i className="fa-regular fa-chevron-up"></i>
          <span>BACK</span>
          <span>TO TOP</span>
        </div>
      )}
    </div>
  );
}