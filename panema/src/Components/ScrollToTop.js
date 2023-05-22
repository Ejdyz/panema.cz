import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      if ('scrollBehavior' in document.documentElement.style) {
        // Use smooth scrolling for browsers that support it
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } else {
        // For browsers that don't support smooth scrolling, scroll instantly
        window.scrollTo(0, 0);
      }
    };

    scrollToTop();
  }, [pathname]);

  return null;
};

export default ScrollToTop;
