import { useState, useEffect } from "react";
import styles from "./faq.module.css";

function FAQ() {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Your effect logic here
  }, []);

  return <div className={styles.container}>FAQ</div>;
}

export default FAQ;
