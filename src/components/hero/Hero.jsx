import { useState, useEffect } from "react";
import styles from "./hero.module.css";

function Hero({ src, heading, text }) {
  return (
    <>
      {src && heading && text && (
        <div className={styles.container}>
          <img src={src} alt="hero" className={styles.hero} />
          <div className={styles.inner}>
            <h2 className="cursive">{heading}</h2>
            <p>{text}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
