// Berechnet die Y-Position eines Elements im Dokument
export const getElementY = (element) => {
    return window.pageYOffset + element.getBoundingClientRect().top;
  };
  
  export const smoothScrollTo = (endY, duration) => {
    const startY = window.scrollY;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    const easeInOutQuart = (time, start, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + start;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + start;
    };
  
    const scroll = () => {
      const currentTime = new Date().getTime();
      const timeElapsed = currentTime - startTime;
      const nextY = easeInOutQuart(timeElapsed, startY, distanceY, duration);
  
      window.scrollTo(0, nextY);
  
      if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
      }
    };
  
    scroll();
  };
  