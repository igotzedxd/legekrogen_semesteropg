import { useState, useEffect } from "react";
import styles from "./home.module.css";
import DeliveryMessage from "../../components/deliveryMessage/DeliveryMessage";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";

function Home() {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Your effect logic here
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <DeliveryMessage />
        <Hero
          src={"/heros/forsiden.jpg"}
          heading={"At lege er at leve"}
          text={"Her hos os har vi et stort udvalg af legetøj i høj kvalitet"}
          page={""}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
