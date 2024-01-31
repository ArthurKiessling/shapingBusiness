import "./Background.css";
import React from 'react';

import background from "../images/Quer_turkis.jpg";
import { ReactComponent as Logo } from '../images/image2vector.svg'
import { useTheme } from './ThemeContext.js'; 
const Background = () => {
  const { themeColor, setThemeColor } = useTheme();
  return (
  <article className="article">
      <img className="image" src={background} alt="background" />
      <h1 className="header">Connecting People - Shaping Business.</h1>
      <Logo style={{ fill: themeColor }} className="logoSvg"></Logo>
      
    </article>
  );
};

export default Background;