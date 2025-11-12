import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    const pathnameChanged = prevPathnameRef.current !== pathname;
    prevPathnameRef.current = pathname;

    if (hash && pathname === '/') {
      // Only smooth scroll if we're staying on the same page
      const element = document.getElementById(hash.replace('#', ''));
      if (element && !pathnameChanged) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Add highlight animation when navigating to quote form
          if (hash === '#quote-form') {
            setTimeout(() => {
              element.classList.add('highlight-quote-form');
              setTimeout(() => {
                element.classList.remove('highlight-quote-form');
              }, 2000);
            }, 300);
          }
        }, 100);
      } else if (element && pathnameChanged) {
        // Just navigate to the element without smooth scroll when coming from another page
        setTimeout(() => {
          element.scrollIntoView({ block: 'center' });
          if (hash === '#quote-form') {
            element.classList.add('highlight-quote-form');
            setTimeout(() => {
              element.classList.remove('highlight-quote-form');
            }, 2000);
          }
        }, 100);
      }
    } else if (!hash) {
      // Scroll to top when no hash
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
