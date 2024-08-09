import { useState, useEffect } from "react";
import styles from "./products.module.css";
import DeliveryMessage from "../../components/deliveryMessage/DeliveryMessage";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";

function Products() {
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
      <Footer />
    </div>
  );
}


export default Products;
