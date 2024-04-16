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

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }
  useEffect(() => {
    const cookieAccepted = getCookie('cookieAccepted');
    if (!cookieAccepted) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden'; // Prevents scrolling
    } else {
      setCookieConsent(cookieAccepted);
    }
  }, []);

  const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }
  const handleAcceptAll = () => {
    setCookie('cookieAccepted', 'all', 365); // Sets a cookie for 1 year
    setIsVisible(false);
    setCookieConsent('all');

    localStorage.setItem("consentGranted", "true");

    gtag('consent', 'update', {
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      ad_storage: 'granted',
      analytics_storage: 'granted'
    });

    gtag('event', 'page_view');
    var gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-91T6TVCQRG';
  
    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(gtagScript,firstScript);
  
    //document.body.style.overflow = 'auto'; // Erlaubt das Scrollen wieder
  };

  const handleAcceptNecessary = () => {
    setCookie('cookieAccepted', 'necessary');
    setIsVisible(false);
    setCookieConsent('necessary');
    
    gtag('consent', 'update', {
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      ad_storage: 'denied',
      analytics_storage: 'denied'
    });
    gtag('event', 'page_view');
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