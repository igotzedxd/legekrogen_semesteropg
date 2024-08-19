import { useState, useEffect } from "react";
import styles from "./hero.module.css";

const pages = {
  forsiden: {
    src: "/heros/forsiden.jpg",
    heading: "At lege er at leve",
    text: "Her hos os har vi et stort udvalg af legetøj i høj kvalitet",
    page: "",
  },
  klubben: {
    src: "/heros/klub.jpg",
    heading: "Bliv medlem af vores klub",
    text: "Få adgang til eksklusive tilbud og nyheder",
    page: "klubben",
  },
  produkter: {
    src: "/heros/produkter.jpg",
    heading: "Vores produkter",
    text: "Vi har et stort udvalg af legetøj i høj kvalitet",
    page: "produkter",
  },
  FAQ: {
    src: "/heros/FAQ.jpg",
    heading: "Ofte stillede spørgsmål",
    text: "Her finder du svar på de mest almindelige spørgsmål",
    page: "FAQ",
  },
};

function Hero({ pageName, largeText }) {
  const pageData = pages[pageName];

  return (
    <>
      {pageData && (
        <div className={styles.container}>
          <img src={pageData.src} alt="hero" className={styles.hero} />
          <div
            style={
              pageData.page === "products"
                ? { height: "33%", transform: "translateY(120%)" }
                : {}
            }
            className={styles.inner}
          >
            <h2 className="cursive">{pageData.heading}</h2>
            {pageData.text && <p>{pageData.text}</p>}
            {largeText && <h3>{largeText}</h3>}
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
