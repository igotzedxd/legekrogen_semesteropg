import { useState, useEffect } from "react";
import styles from "./home.module.css";
import DeliveryMessage from "../../components/deliveryMessage/DeliveryMessage";
import Header from "../../components/header/Header";

function Home() {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Your effect logic here
  }, []);

  return (
    <div className={styles.container}>
      <DeliveryMessage />
      <Header/>
    </div>
  );
}

export default Home;
