import styles from "./hero.module.css";
import { useLocation } from "react-router-dom";

const pages = {
  forsiden: {
    src: "/heros/forsiden.jpg",
    heading: "At lege er at leve",
    text: "Her hos os har vi et stort udvalg af legetøj i høj kvalitet",
    page: "forsiden",
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

function Hero({ largeText }) {
  // Use useLocation to get the current path
  const location = useLocation();

  // Extract the relevant part of the path to use as the slug/pageName
  const pathSegments = location.pathname.split("/").filter(Boolean); // Boolean filter removes empty strings
  const pageName = pathSegments[0] || "forsiden"; // Default to 'forsiden' if at root

  // Get the data for the corresponding page
  const pageData = pages[pageName];

  // Debugging output to check what pageData is being used
  console.log(pageData);

  return (
    <>
      {pageData && (
        <div className={styles.container}>
          <img src={pageData.src} alt="hero" className={styles.hero} />
          <div
            style={
              pageName !== "forsiden"
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
