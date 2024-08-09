import { useState, useEffect } from "react";
import styles from "./home.module.css";

function Home() {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Your effect logic here
  }, []);

  return <div className={styles.container}>Home</div>;
}

export default Home;
