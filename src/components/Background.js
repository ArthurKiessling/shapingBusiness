import styles from "./Background.module.css";

import background from "../images/Quer_turkis.jpg";

const Background = () => {
  return (
  <article className={styles.article}>
      <img className={styles.image} src={background} alt="background" />
      <h1 className={styles.header}>Connecting People - Shaping Business.</h1>
    </article>
  );
};

export default Background;