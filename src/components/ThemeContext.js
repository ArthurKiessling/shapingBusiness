import React, { createContext, useContext, useState } from 'react';

// Context erstellen
const ThemeContext = createContext();

// Provider-Komponente erstellen
export function ThemeProvider({ children }) {
  const [themeColor, setThemeColor] = useState('#87b1bf'); // Standardfarbe

  // Kontextwert, der alle notwendigen Zustände und Funktionen enthält
  const value = { themeColor, setThemeColor };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// Hook für den Zugriff auf den Kontext
export function useTheme() {
  return useContext(ThemeContext);
}