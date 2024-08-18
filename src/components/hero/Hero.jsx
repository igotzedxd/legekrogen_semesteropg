import { useState, useEffect } from "react";
import styles from "./hero.module.css";

function Hero({ src, heading, text, largeText, page }) {
  return (
    <>
      {src && heading && (
        <div className={styles.container}>
          <img src={src} alt="hero" className={styles.hero} />
          <div
            style={page !== "home" ? { height: "33%", transform: "translateY(120%)" } : {}}
            className={styles.inner}
          >
            <h2 className="cursive">{heading}</h2>
            {text && <p>{text}</p>}
            {largeText && <h3>{largeText}</h3>}
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
