import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './animatedHeading.css';

const AnimatedHeading = ({ text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <div className="heading-wrapper">
      <h1 ref={ref} className={`animated-heading ${inView ? 'animate' : ''}`}>
        {text}
      </h1>
    </div>
  );
};

export default AnimatedHeading;