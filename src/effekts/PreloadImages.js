import React, { useState, useEffect } from 'react';

const PreloadImages = ({ children }) => {
    const imageUrls = [
        require('../images/ganz_sitz.jpg') ,
        require('../images/hoch_ganz.jpg'),
        require('../images/beratung.jpg'),
         // weitere URLs
       ];
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      const promises = imageUrls.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
  
      Promise.all(promises)
        .then(() => setLoaded(true))
        .catch(() => setError(true));
    }, [imageUrls]);
  
    if (error) {
      return <div>Es gab einen Fehler beim Laden der Bilder.</div>;
    }
  
    if (!loaded) {
      return <div></div>;
    }
  
    return (
      <>
        {children}
      </>
    );
  };

  export default PreloadImages;
  
  