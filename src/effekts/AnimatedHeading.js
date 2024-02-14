import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './animatedHeading.css';

const AnimatedHeading = ({ text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    if (!inView || text.length === 0) return;

    let index = -2;
    const intervalId = setInterval(() => {
      setLetters((oldLetters) => [...oldLetters, text[index]]);
      index++;
      if (index >= text.length) {
        clearInterval(intervalId);
      }     
    }, 100);

    return () => clearInterval(intervalId);
  }, [inView, text]);

  return (
    <h1 ref={ref} className="animated-heading">
      {letters.map((letter, index) => (
        <span key={index} className="letter">
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedHeading;