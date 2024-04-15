import React, { useState, useEffect } from 'react';
import './cookieBanner.css'; // Stelle sicher, dass der Pfad korrekt ist
import { NavLink } from 'react-router-dom';
window.dataLayer = window.dataLayer || [];

// Diese Funktion schiebt die übergebenen Argumente in das dataLayer für Google Tag Manager
function gtag() {
  window.dataLayer.push(arguments);
}
const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(null); // null, 'all', oder 'necessary'

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      setIsVisible(true);
      //document.body.style.overflow = 'hidden'; // Verhindert das Scrollen
    } else {
      setCookieConsent(cookieAccepted);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieAccepted', 'all');
    setIsVisible(false);
    setCookieConsent('all');
    gtag('consent', 'update', {
    'ad_storage': 'granted',
    'analytics_storage': 'granted'
  });
        var gtagScript = document.createElement('script');
        gtagScript.async = true;
        gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-91T6TVCQRG';

        var firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(gtagScript,firstScript);

    //document.body.style.overflow = 'auto'; // Erlaubt das Scrollen wieder
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieAccepted', 'necessary');
    setIsVisible(false);
    setCookieConsent('necessary');
    // eslint-disable-next-line no-undef
    gtag('consent', 'update', {
      'ad_storage': 'denied',
      'analytics_storage': 'granted'
    });
        var gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-91T6TVCQRG';

    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(gtagScript,firstScript);

   // document.body.style.overflow = 'auto'; // Erlaubt das Scrollen wieder
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      Diese Website verwendet Cookies, um die Benutzererfahrung zu verbessern. 
      <div>
        <NavLink onClick={scrollToTop} to="/Datenschutz"><strong>Mehr Informationen zum Datenschutz</strong></NavLink>
      </div>
      <br></br>
      <button onClick={handleAcceptAll} className="cookie-banner-button allow-all">
        Alle Cookies erlauben
      </button>
      <button onClick={handleAcceptNecessary} className="cookie-banner-button allow-necessary">
        Notwendige Cookies erlauben
      </button>
    </div>
  );
}

export default CookieBanner;