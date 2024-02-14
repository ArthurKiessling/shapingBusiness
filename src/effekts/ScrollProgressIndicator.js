// ScrollProgressIndicator.js
import React, { useEffect, useState } from 'react';
import './ScrollProgressIndicator.css';

const ScrollProgressIndicator = ({ startElementId, endElementId, pointElementIds }) => {
    const [barPosition, setBarPosition] = useState({ top: 0, bottom: 0 });
    const [pointPositions, setPointPositions] = useState([]);
  
    useEffect(() => {
      const calculatePositions = () => {
        const startElement = document.getElementById(startElementId);
        const endElement = document.getElementById(endElementId);
        const points = pointElementIds.map(id => document.getElementById(id));
  
        if (startElement && endElement) {
          const startRect = startElement.getBoundingClientRect();
          const endRect = endElement.getBoundingClientRect();
  
          setBarPosition({
            top: startRect.bottom + window.scrollY,
            bottom: endRect.top + window.scrollY
          });
        }
  
        const newPointPositions = points.map(point => {
          if (point) {
            const rect = point.getBoundingClientRect();
            return { id: point.id, top: rect.top + window.scrollY };
          }
          return null;
        }).filter(pos => pos !== null);
  
        setPointPositions(newPointPositions);
        console.log(pointPositions);
      };
  
      window.addEventListener('scroll', calculatePositions);
      window.addEventListener('resize', calculatePositions);
      calculatePositions();
  
      return () => {
        window.removeEventListener('scroll', calculatePositions);
        window.removeEventListener('resize', calculatePositions);
      };
    }, [startElementId, endElementId, pointElementIds]);
  
    return (
      <div>
        <div className="highlight-bar" style={{ top: `${barPosition.top}px`, height: `${barPosition.bottom - barPosition.top}px` }}></div>
        {pointPositions.map(point => (
          <div key={point.id} className="highlight-point" style={{ top: `${point.top}px` }}></div>
        ))}
      </div>
    );
  };
  

export default ScrollProgressIndicator;
