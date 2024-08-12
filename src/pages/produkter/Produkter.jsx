import { useState, useEffect } from "react";
import styles from "./produkter.module.css";
import DeliveryMessage from "../../components/deliveryMessage/DeliveryMessage";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import Products from "../../components/products/Products";

function Produkter() {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Your effect logic here
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <DeliveryMessage />
        <Hero
          src={"/heros/produkter.jpg"}
          heading={"På udkig efter nyt"}
          largeText={"LEGETØJ?"}
          page={"produkter"}
        />
      </div>
      <div className={styles.contentDiv}>
        <div className={styles.contentHeaderDiv}>
          <h2 className={`cursive ${styles.altVores} `}>Alt vores</h2>
          <h1 className={styles.leje}>LEJETØJ</h1>
        </div>

        <Products />
      </div>
      <Footer />
    </div>
  );
}

export default Produkter;
