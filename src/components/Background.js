import styles from "./Background.module.css";

import background from "../images/Quer_turkis.jpg";
import logo from "../images/Logo.png";

const Background = () => {
  return (
  <article className={styles.article}>
      <img className={styles.image} src={background} alt="background" />
      <h1 className={styles.header}>Connecting People - Shaping Business.</h1>
      <img  className={styles.logo}src={logo} alt="logo" />
    </article>
  );
};

export default Background;