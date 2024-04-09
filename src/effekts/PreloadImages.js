
  import React, { Suspense, useEffect } from 'react';

// Error Boundary Definition
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error("Caught an error: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Sorry, etwas ist schiefgegangen.</h1>;
    }
    return this.props.children;
  }
}

// URLs für das Preloading von Komponenten (Beispiel-URLs)
const PRELOAD_URLS =  [
  '../images/ganz_sitz.jpg' ,
  '../images/hoch_ganz.jpg',
  '../images/beratung.jpg',
   // weitere URLs
 ];

// Hauptkomponente, die das Preloading und die Fehlerbehandlung umfasst
const PreloadImages = ({ children }) => {
  useEffect(() => {
    // Preloading der Ressourcen
    PRELOAD_URLS.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'fetch'; // oder 'image', 'script' je nach Art der Ressource
      link.href = url;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Lädt...</div>}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default PreloadImages;