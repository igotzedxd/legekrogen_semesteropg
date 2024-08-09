import { useState, useEffect } from "react";
import styles from "./club.module.css";

function Club() {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Your effect logic here
  }, []);

  return <div className={styles.container}>Club</div>;
}

export default Club;
