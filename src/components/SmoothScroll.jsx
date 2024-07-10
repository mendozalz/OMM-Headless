import { useEffect } from "react";

function SmoothScroll({ children }) {
  useEffect(() => {
    const initializeSmoothScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll({
  
        direction: 'horizontal',
        getDirection: function () {
          return "up";
        },
      });

      const currentUrl = window.location.href;
      const targetUrl = 'http://localhost:4321/libros/';

      if (currentUrl.includes(targetUrl)) {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100);
      }
    
    };

    initializeSmoothScroll();
  }, []);

  return <main root options={{ lerp: 0.1, duration: 1.5, smoothWheel: false }}>{children}</main>;
}

export default SmoothScroll;
