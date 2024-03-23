import React, { createContext, useContext, useState } from 'react';

// Context erstellen
const ThemeContext = createContext();

// Provider-Komponente erstellen
export function ThemeProvider({ children }) {
  const [themeColor, setThemeColor] = useState('#c1b3a5'); // Standardfarbe

  // Kontextwert, der alle notwendigen Zustände und Funktionen enthält
  const value = { themeColor, setThemeColor };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// Hook für den Zugriff auf den Kontext
export function useTheme() {
  return useContext(ThemeContext);
}